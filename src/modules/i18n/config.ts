import config from 'core/config'
import { CROWDIN_IN_CONTEXT_LANG } from '../crowdin/constants'

export const SUPPORTED_LANGAUGES = ['ar', 'en', 'es', 'he', 'fr', 'de', 'id', 'th', 'pt' ] // Add 'zh' when we are ready for chinese

// Add the pseudo-language code for Crowdin In-Context tool
if (config('CROWDIN_IN_CONTEXT_ENABLED')) {
  SUPPORTED_LANGAUGES.push(CROWDIN_IN_CONTEXT_LANG)
}

export const FALLBACK_LANGUAGE = 'en'
export const DEFAULT_NS = 'default'
export const I18N_PROJECT = 'web'
export const I18N_BRAND = 'meridian'
