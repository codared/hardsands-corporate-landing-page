import {
  DeviceAttribute,
} from '../userAttributes'
import { CountryAttribute } from '../userAttributes/CountryAttribute'
import { LanguageAttribute } from '../userAttributes/LanguageAttribute'
import { OptimizelyUserIdAttribute } from '../userAttributes/OptimizelyUserIdAttribute'
import { OrderItemsAttribute } from '../userAttributes/OrderItemsAttribute'
import { PageTypesAttribute } from '../userAttributes/PageTypesAttribute'
import { ReferralCouponAttribute } from '../userAttributes/ReferralCouponAttribute'
import { ReferrerAttribute } from '../userAttributes/ReferrerAttribute'
import { SessionFirstPageAttribute } from '../userAttributes/SessionFirstPageAttribute'
import { UtmAttribute } from '../userAttributes/UtmAttribute'
import { BaseUserState } from './BaseUserState'
import { UserAttribute } from './types'

export class UserState extends BaseUserState {
  /**
   * This function should return an array of user attributes that will be
   * computed for the user.
   */
  getAttributes(): any[] {
    return [
      UtmAttribute,
      ReferralCouponAttribute,
      ReferrerAttribute,
      PageTypesAttribute,
      SessionFirstPageAttribute,
      LanguageAttribute,
      OrderItemsAttribute,
      DeviceAttribute,
      OptimizelyUserIdAttribute,
      // Country is async so we register the sync attributes to run first.
      CountryAttribute
    ]
  }
}
