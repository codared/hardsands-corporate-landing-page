import { UserAttribute, TraitData } from '../userState/types'
import { getCookie, COOKIE_LANG_KEY } from '../utils/cookie'

type LanguageAttributeState = {
  initial: string | null
  recent: string | null
}

export const LanguageAttribute: UserAttribute<LanguageAttributeState> = {
  key: 'language',

  computeOn: ['firstLoad'],

  getTraits(state) {
    const traits: TraitData[] = []

    if (state?.initial) {
      traits.push({ key: 'initial_language', value: state.initial })
    }

    if (state?.recent) {
      traits.push({ key: 'recent_language', value: state.recent })
    }

    return traits
  },

  computeFn(existing) {
    let initial = existing?.initial || null
    let recent = existing?.recent || null

    const lang = getCookie(COOKIE_LANG_KEY) || 'en'

    if (!initial) {
      initial = lang
    }

    recent = lang

    return { initial, recent }
  },
}
