import {
  DataLayerWindow,
  PageView,
  EcommerceImpression,
  EcommerceProduct,
  EcommerceCartAction,
  EcommercePurchase,
  GenericEvent,
  GTM_EVENTS,
  VoyageSubscription,
} from '../types'
import { debugPageView, debugTrackPurchase } from './debug'

/**
 * This function should not be used directly. Prefer one of the more specific
 * functions below.
 */
export const layerPush = (data: { [k: string]: any }): Promise<void> => {
  return new Promise((resolve) => {
    const currentCallback = data.eventCallback
    const win = window as DataLayerWindow
    win.dataLayer = win.dataLayer || []

    win.dataLayer.push({
      ...data,
      eventCallback: () => {
        if (typeof currentCallback === 'function') {
          currentCallback()
        }

        resolve()
      },
    })

    console.log('Pushed', data)
  })
}

export const trackPageView = (page: PageView) => {
  try {
    debugPageView({ gtmPageData: page })
  } catch (e) {
    console.error(e)
  }
  return layerPush({ event: 'pageView', page })
}

export const trackVoyageSubscription = (subscribed: VoyageSubscription) => {
  return layerPush({
    event: 'voyageSubscribed',
    voyageSubscription: subscribed,
  })
}

export const trackProductImpression = (
  impressions: EcommerceImpression[],
  currencyCode: string
) => {
  return layerPush({
    event: GTM_EVENTS.EC_IMPRESSION,
    ecommerce: { impressions, currencyCode },
  })
}

export const trackProductClick = (product: EcommerceProduct) => {
  return layerPush({
    event: GTM_EVENTS.EC_CLICK,
    ecommerce: {
      click: { products: [product] },
    },
  })
}

export const trackProductDetail = (product: EcommerceProduct) => {
  return layerPush({
    event: GTM_EVENTS.EC_DETAIL,
    ecommerce: {
      detail: { products: [product] },
    },
  })
}

export const trackCartAdd = (product: EcommerceCartAction) => {
  return layerPush({
    event: GTM_EVENTS.EC_CART_ADD,
    ecommerce: {
      add: { products: [product] },
    },
  })
}

export const trackCartRemove = (product: EcommerceCartAction) => {
  return layerPush({
    event: GTM_EVENTS.EC_CART_REMOVE,
    ecommerce: {
      remove: { products: [product] },
    },
  })
}

/**
 * Track the first step of the checkout process.
 *
 * @param cart - The products that are being checked out. In this case, quanity
 * refers to the total.
 * @param data - optional extra information
 */
export const trackBeginCheckout = (
  cart: EcommerceCartAction[],
  data?: string
) => {
  return layerPush({
    event: GTM_EVENTS.EC_CHECKOUT_BEGIN,
    ecommerce: {
      checkout: {
        actionField: { step: 1, option: data },
        products: cart,
      },
    },
  })
}

/**
 * Track each subsequent checout steps.
 *
 * @param step number - integer > 1
 * @param data string - Any additional information about the checkout step at
 * the time it's measured.
 */
export const trackCheckoutStep = (step: number, data?: string) => {
  return layerPush({
    event: GTM_EVENTS.EC_CHECKOUT_STEP,
    ecommerce: {
      checkout: {
        actionField: { step, option: data },
      },
    },
  })
}

/**
 * Adds information for an already tracked step in the checkout process. Useful
 * for tracking options the user selected during the step.
 *
 * @param step number - integer
 * @param data string - The data to add.
 */
export const trackCheckoutData = (step: number, data: string) => {
  return layerPush({
    event: GTM_EVENTS.EC_CHECKOUT_DATA,
    ecommerce: {
      checkout_option: {
        actionField: { step, option: data },
      },
    },
  })
}

/**
 * Tracks a successful purchase.
 */
export const trackPurchase = (
  data: EcommercePurchase,
  products: EcommerceCartAction[]
) => {
  try {
    debugTrackPurchase({
      products,
    })
  } catch (e) {
    console.error(e)
  }

  return layerPush({
    event: GTM_EVENTS.EC_PURCHASE,
    ecommerce: {
      purchase: {
        actionField: { ...data },
        products,
      },
    },
  })
}

export const trackImpactConversion = (
  data: EcommercePurchase,
  products: EcommerceCartAction[]
) => {
  return layerPush({
    event: GTM_EVENTS.EC_IMPACT_CONVERSION,
    ecommerce: {
      purchase: {
        actionField: { ...data },
        products,
      },
    },
  })
}

/**
 * Tracks a generic event. Basically any user interaction that can be tracked.
 */
export const trackEvent = (event: GenericEvent) => {
  /* This deconstruction is to make sure the optional values are set to
   * undefined. If they are not present in the object, tag manager will use the
   * ones from the previous event. */
  const { category, action, label, value } = event

  return layerPush({
    event: 'eventGeneric',
    category,
    action,
    label,
    value,
  })
}
