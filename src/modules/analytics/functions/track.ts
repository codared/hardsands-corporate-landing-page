 
 
import {
  DataLayerWindow,
  EcommerceCartAction,
  EcommerceImpression,
  EcommerceProduct,
  WarrantyInfo,
  EcommercePurchase,
  GenericEvent,
  GTM_EVENTS,
  PageView, 
  VoyageSubscription,
  VideoPlaybackData, VideoPlaybackEvent, EcommerceProductWithCurrency, EcommerceCart
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

    // console.log('Pushed', data)
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

export const trackProductDetail = (product: EcommerceProductWithCurrency) => {
  return layerPush({
    event: GTM_EVENTS.EC_DETAIL,
    ecommerce: {
      detail: product,
    },
  })
}

export const trackStoreSwitcherShown = (countryCode: string) => {
  return layerPush({
    event: GTM_EVENTS.STORE_SWITCHER_SHOWN,
    storeSwitcherCountry: countryCode
  })
}

export const trackStoreSwitcherRedirected = async () => {
  return await layerPush({
    event: GTM_EVENTS.STORE_SWITCHED,
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

export const trackVideoPlayback = (eventType: VideoPlaybackEvent, data?: {[key: string]: VideoPlaybackData}) => {
  layerPush({
   event: GTM_EVENTS.VIDEO_PLAYBACK_EVENT,
   videoPlaybackData: {
     eventType,
     ...data,
   },
 })
}

export const trackWarrantyAdded = (data: WarrantyInfo) => {
  return layerPush({
    event: GTM_EVENTS.WARRANTY_ADDED,
    addedWarrantyInfo: data,
  })
}

export const trackWarrantyViewed = (data: WarrantyInfo) => {
  return layerPush({
    event: GTM_EVENTS.WARRANTY_VIEWED,
    viewedWarrantyInfo: data,
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

export const trackCartViewed = (cart: EcommerceCart) => {
  return layerPush({
    event: GTM_EVENTS.EC_CART_VIEW,
    ecommerce: {
      cart,
    },
  })
}

export const trackPostPurchaseRedeemed = async (order: any) => {
  await layerPush({
    event: GTM_EVENTS.POST_PURCHASE_REDEEMED,
    postPurchaseOrder: order,
  })

  // Clean up immediately to prevent the post-purchase order being wrongly
  // available on future checkouts under the same session.
  layerPush({ postPurchaseOrder: undefined })
}

export const trackPostPurchaseShown = async (offerType: any) => {
  await layerPush({
    event: GTM_EVENTS.POST_PURCHASE_SHOWN,
    postPurchaseOfferType: { offerType },
  })
}

export const trackPostPurchaseRejected = async (offerType: any, offerSlug?: string) => {
  await layerPush({
    event: GTM_EVENTS.POST_PURCHASE_REJECTED,
    postPurchaseRejectedData: {
      offerType,
      offerSlug ,
    },
  })
}


// Only when the customer gets to the congrats section and not post purcahse phase.
export const trackOrderConfirmationShown = () => {
  layerPush({
    event: GTM_EVENTS.ORDER_CONFIRMATION_SHOWN,
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
export const trackCheckoutStep = (step: number, data?: any) => {
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

  // console.log('track purchase')
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
