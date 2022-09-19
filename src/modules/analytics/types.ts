export type DataLayerWindow = Window & { dataLayer?: { [k: string]: any }[] }

/**
 * A custom event.
 */
export interface GenericEvent {
  category: string
  action: string
  label?: string
  value?: number
}

export type ANALYTICS_PAGE_TYPES =
  | 'error'
  | 'checkout'
  | 'offer_page'
  | 'landing_page'
  | 'home_page'
  | 'product_page'
  | 'account_system'
  | 'order_confirmation'
  | 'cx'
  | 'all_or_multiple_products'
  | 'blogs_page'
  | 'gift_card'

export interface PageView {
  path: string
  url?: string
  title?: string
  type?: ANALYTICS_PAGE_TYPES
  utmParams?: Record<string, string>
  queryParams?: Record<string, string>
}

export interface VoyageSubscription {
  subscribed: boolean
}

export interface EcommerceProduct {
  id: string | number
  name?: string
  brand?: string
  category?: string
  variant?: string | number
  // In the client's selected currency
  price?: number
}

export interface EcommerceProductWithCurrency extends EcommerceProduct{
  currency: string
}

export interface Warranty {
  description?: string
  duration?: number
  duration_unit?: string
  id: number
  image_url?: string
  price?: number
  start_after_duration?: number
  start_after_duration_unit?: string
  title?: string
}

export type VideoPlaybackEvent = 'error' | 'playing'
export type VideoPlaybackData = number

export interface WarrantyInfo {
  productId: string | number
  warranty?: Warranty
  warranties?: Warranty[]
  addedFrom?: 'cart' | 'checkout' | 'pdp'
}

export interface EcommerceImpression extends EcommerceProduct {
  // A consistent identifier of the list where this impression occurred
  list?: string
  // The position of this product in the list
  position?: number
}

export interface EcommerceCartAction extends EcommerceProduct {
  // The number of products that were added or removed from the cart.
  // **not the total**
  quantity: number
  currency: string
  price: number
  
}

export interface EcommercePurchase {
  // The order ID.
  id: string
  // The store or affiliation from which this transaction occurred (e.g. Google
  // Store).
  affiliation?: string
  // Specifies the total revenue or grand total associated with the transaction
  // (e.g. 11.99). This value may include shipping, tax costs, or other
  // adjustments to total revenue that you want to include as part of your
  // revenue calculations.
  revenue?: number
  tax?: number
  shipping?: number
  coupon?: string
}

export enum GTM_EVENTS {
  PAGEVIEW = 'pageView',
  EVENT = 'eventGeneric',
  EC_IMPRESSION = 'ecommerceImpression',
  EC_CLICK = 'ecommerceProductClick',
  EC_DETAIL = 'ecommerceDetailPage',
  EC_CART_ADD = 'ecommerceCartAdd',
  EC_CART_REMOVE = 'ecommerceCartRemove',
  EC_CHECKOUT_BEGIN = 'ecommerceCheckoutStep1',
  EC_CHECKOUT_STEP = 'ecommerceCheckoutStep',
  EC_CHECKOUT_DATA = 'ecommerceCheckoutDataToStep',
  EC_PURCHASE = 'ecommercePurchase',
  POST_PURCHASE_REDEEMED = 'postPurchaseRedeemed',
  POST_PURCHASE_SHOWN = 'postPurchaseShown',
  POST_PURCHASE_REJECTED = 'postPurchaseRejected',
  WARRANTY_ADDED = 'warrantyAdded',
  WARRANTY_VIEWED = 'warrantyViewed',
  EC_IMPACT_CONVERSION = 'ecommerceImpactConversion',
  ORDER_CONFIRMATION_SHOWN = 'orderConfirmationShown',
  VIDEO_PLAYBACK_EVENT="videoPlaybackEvent",
  STORE_SWITCHER_SHOWN="storeSwitcherShown",
  STORE_SWITCHED="storeSwitched"
}

export type EcommerceImpressionList = EcommerceImpression[]
export type EcommerceImpressionPush = (impression: EcommerceImpression) => void

export interface EventhandlerEvents {
  pageViewProcessed: never[]
}
