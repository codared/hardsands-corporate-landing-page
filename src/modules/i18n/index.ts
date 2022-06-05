import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { SUPPORTED_LANGAUGES, DEFAULT_NS } from './config'

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  .use(initReactI18next)
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources: {},
    fallbackLng: 'en',
    defaultNS: DEFAULT_NS,
    ns: DEFAULT_NS,
    supportedLngs: SUPPORTED_LANGAUGES,
    // debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    react: {
      // dont use suspense as we will eagerly load all translations before rendering
      useSuspense: false,
    },
  })

if (process.browser) {
  window['i18n'] = i18n
}

export default i18n
