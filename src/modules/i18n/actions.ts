import universalLanguageDetect, {
  COOKIE_LOOKUP_KEY_LANG,
} from '@unly/universal-language-detector'
import { NextPageContext } from 'next'
import NextCookies from 'next-cookies'

import config from 'core/config'
import { SUPPORTED_LANGAUGES, FALLBACK_LANGUAGE } from './config'
import MissingTranslationReporter from './MissingTranslationReporter'

import i18n from './'
import { crowdin } from '../crowdin/components/CrowdinOta'
import { getCookie, setCookie } from 'utils/cookie'

export type LanguageResources = {
  [namespace: string]: {
    [key: string]: string
  }
}

const isLanguageSupported = (langCode: string) => {
  return SUPPORTED_LANGAUGES.includes(langCode)
}

/**
 * Sets the language globally and loads any resources for that language
 */
export function initializeLanguage(lang: string, resources: LanguageResources) {
  // set the cookie so that subsequent pages remember this choice
  // language cookie is used by lumin -shopify
  const language = lang || getCookie(COOKIE_LOOKUP_KEY_LANG) || getCookie('language')
  i18n.changeLanguage(language)

  // only add languages when resources are available or language is english (this means we'll always use our default english)
  if (Object.keys(resources).length !== 0 || lang === 'en') {
    Object.keys(resources).forEach((ns) => {
      const values = resources[ns]
      i18n.addResourceBundle(language, ns, values)
    })
  } else {
    initializeFallbackLanguage(lang)
    console.error('CDN Error, defaulting to fallback', {
      language: lang
    })
  }

  if (process.browser) {
    setCookie(COOKIE_LOOKUP_KEY_LANG, language, 365)
    setCookie('language', language, 365)
  }
}

/**
 * Sets the language globally and loads any resources from local files for that language
 */
export function initializeFallbackLanguage(lang: string) {
  const language = lang || getCookie(COOKIE_LOOKUP_KEY_LANG) || getCookie('language')

  i18n.changeLanguage(language)

  const domain = config('APP_URL')
  
  const files = (async () => (await (await (fetch(domain + '/locales/namespaces.json'))).json()))();

  files.then((file: any) => {
    file.namespaces.forEach(async (namespace: string) => {
      try {
        let resource = await (await fetch(domain + '/locales/' + language + '/' + namespace + '.json')).json()
        addResourceToBundle(resource, namespace, language)
      } catch (error) {
        console.error('invalid namespace', {
          language: lang,
          namespace
        })
      }
    })
  })

  if (process.browser) {
    setCookie(COOKIE_LOOKUP_KEY_LANG, lang, 365)
    setCookie('language', lang, 365)
  }
}

export function addResourceToBundle(resource: any, fileName: string, language: string) {
  const namespace = fileName.replace('.json', '');
  const values = JSON.parse(JSON.stringify(resource))
  i18n.addResourceBundle(language, namespace, values)
}

export function changeLanguage(lang: string) {
  // URL is not supported in op_mini all
  const params = new URL(window.location.toString()).searchParams
  params.set('lang', lang)
  window.location.assign(`${window.location.pathname}?${params.toString()}`)
}

export const onMissingKey = (() => {
  let missingKeyReporter: MissingTranslationReporter

  return async function onMissingKey(
    lang: string,
    namespace: string,
    key: string,
    defaultValue: string
  ): Promise<void> {
    if (typeof window === 'undefined') {
      // only report if on browser
      return
    }
    if (!config('REPORT_MISSING_TRANSLATIONS')) {
      return
    }
    if (!missingKeyReporter) {
      missingKeyReporter = new MissingTranslationReporter()
    }

    missingKeyReporter.report({
      lang,
      namespace,
      key,
      master: defaultValue,
      metadata: {
        location: window.location.toString(),
      },
    })
  }
})()

/**
 *
 * Detects the language based in the following order
 * 1. Query param (lang)
 * 2. Cookie (i18next)
 * 3. Browser navigator
 */
export function detectLanguage(ctx: NextPageContext): string {
  const { req } = ctx
  const cookies = NextCookies(ctx) // Parses Next.js cookies in a universal way (server + client) - It's an object

  let acceptLang
  if (req && req.headers) {
    acceptLang = req.headers['accept-language']
  }

  // give priority to language query param first
  const queryLang: string = String(ctx.query.lang).toLowerCase()
  if (queryLang && isLanguageSupported(queryLang)) {
    return queryLang
  }

  // Universally detects the user's language
  const lang = universalLanguageDetect({
    supportedLanguages: SUPPORTED_LANGAUGES, // Whitelist of supported languages, will be used to filter out languages that aren't supported
    fallbackLanguage: FALLBACK_LANGUAGE, // Fallback language in case the user's language cannot be resolved
    acceptLanguageHeader: acceptLang,
    serverCookies: cookies, // Optional - Cookie "i18next" takes precedence over navigator configuration (ex: "i18next: fr"), will only be used on the server side
    errorHandler: (error: any, level: any, origin: any, context: any) => {
      console.error('error detecting language', error)
    },
  })
  return lang
}

export async function fetchTranslations(
  lang: string
): Promise<LanguageResources> {

  const translations = await crowdin.getLanguageTranslations(lang)
  return translations.reduce((out: { [x: string]: any }, { content, file }: any) => {
    // example file name: /public/locales/%two_letters_code%/faq.json
    const ns = file.replace(/^.*[\\\/]/, '').replace('.json', '')
    out[ns] = content
    return out
  }, {} as LanguageResources)

}

export function getLanguage(): string {
  return i18n.language
}
