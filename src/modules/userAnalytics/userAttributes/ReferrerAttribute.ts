import { UserAttribute, TraitData, JsonSerializable } from '../userState/types'

interface ReferrerData {
  domain: string | null
  url: string | null
  // This index is needed due to a bug in the type.
  [key: string]: JsonSerializable
}

type ReferrerAttributeState = {
  initial: ReferrerData | null
  recent: ReferrerData | null
}

function getDataFromUrl(url: URL): ReferrerData {
  const { href, hostname: domain } = url


  return { url: href, domain }
}

function flattenTraits(data: ReferrerData, prefix: string): TraitData[] {
  const traits: TraitData[] = []

  traits.push({ key: `${prefix}_domain`, value: data.domain })
  traits.push({ key: `${prefix}_url`, value: data.url })

  return traits
}

export const ReferrerAttribute: UserAttribute<ReferrerAttributeState> = {
  key: 'referrer',

  computeOn: ['firstLoad'],

  getTraits(state) {
    let traits: TraitData[] = []

    if (state?.initial) {
      traits = [...traits, ...flattenTraits(state.initial, 'initial_referrer')]
    }

    if (state?.recent) {
      traits = [...traits, ...flattenTraits(state.recent, 'recent_referrer')]
    }

    return traits
  },

  computeFn(existing) {
    let initial = existing?.initial || null
    let recent = existing?.recent || null
    let url: URL

    const referrer = document.referrer

    if (!referrer) {
      return { initial, recent }
    }

    try {
      // Safari < 14 throws if `base` is `undefined`
      // @see https://bugs.webkit.org/show_bug.cgi?id=216841
      // eslint-disable-next-line compat/compat
      url = new URL(referrer, document.location.origin)
    } catch (e) {
      // Couldn't parse url
      return { initial, recent }
    }

    const data = getDataFromUrl(url)

    if (!initial) {
      initial = data
    }

    recent = data

    return { initial, recent }
  },
}
