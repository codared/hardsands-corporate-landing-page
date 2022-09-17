import { UserAttribute, TraitData } from '../userState/types'
import { parseSearchParams } from '../utils/string'

type ReferralAttribute = {
  [k in 'initial' | 'recent']: string | null
}

export const ReferralCouponAttribute: UserAttribute<ReferralAttribute> = {
  key: 'referralCoupon',

  computeOn: ['pageView'],

  getTraits(state) {
    const traits: TraitData[] = []

    if(state?.initial) {
      traits.push({ key: 'initial_referral_coupon', value: state.initial })
    }

    if (state?.recent) {
      traits.push({ key: 'recent_referral_coupon', value: state.recent })
    }

    return traits
  },

  computeFn(existing) {
    let initial = existing?.initial || null
    let recent = existing?.recent || null
    const params = parseSearchParams(window.location.search)
    const coupon = params._referral_coupon

    if(coupon) {
      if (!initial) {
        initial = coupon
      }

      recent = coupon
    }

    return { initial, recent }
  },
}
