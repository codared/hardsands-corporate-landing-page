 
import { AnyDict } from '../../utils/types'
import { layerPush } from '../analytics/functions/track'

export enum EVENTS {
  SUBSCRIBE_TO_MAILING_LIST = 'subscribeToMailinglist',
  IDENTIFIED_USER_TRAITS = 'identifiedUserTraits',
  PROMOTION_APPLIED = 'promotionApplied',
}

export const trackSubscribeToMailinglist = (email: string) => {
  layerPush({
    event: EVENTS.SUBSCRIBE_TO_MAILING_LIST,
    acceptsEmailMarketing: true,
    email,
  })
}

export const trackUserTraits = (traits: AnyDict) => {
  layerPush({
    event: EVENTS.IDENTIFIED_USER_TRAITS,
    traits,
  })
}
