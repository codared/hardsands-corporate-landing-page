import { BrandServicesAddress, Order } from 'modules/checkout/types'
import { PageView } from '../analytics/types'

export const LIFECYCLE_EVENTS = [
  'pageView',
  'firstLoad',
  'optimizelyPageActivated',
  'orderConfirmed',
  'shippingAddressUpdated',
] as const

export type LIFECYCLE_EVENT = typeof LIFECYCLE_EVENTS[number]

export type EventParameters = { [k in LIFECYCLE_EVENT]: unknown } & {
  pageView: PageView & { isFirst?: boolean },
  orderConfirmed: Order,
  shippingAddressUpdated: BrandServicesAddress,
}
