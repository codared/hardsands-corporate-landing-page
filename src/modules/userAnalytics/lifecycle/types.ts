export interface PageView {
  path: string
  url?: string
  title?: string
  type?: string
  utmParams?: Record<string, string>
  queryParams?: Record<string, string>
}

export const LIFECYCLE_EVENTS = [
  'pageView',
  'firstLoad',
  'optimizelyPageActivated',
  'orderConfirmed',
  'shippingAddressUpdated',
  'surveyCompleted',
] as const

export type LIFECYCLE_EVENT = typeof LIFECYCLE_EVENTS[number]

export type EventParameters = { [k in LIFECYCLE_EVENT]: unknown } & {
  pageView: PageView & { isFirst?: boolean }
  orderConfirmed: Record<string, any>
  shippingAddressUpdated: Record<string, any>
  surveyCompleted: Record<string, any>
}
