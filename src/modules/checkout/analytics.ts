import { ApiError } from "modules/api";
import { MultiPaymentMethod } from "./actionTypes";
import {
  CheckoutTrackingFunctions,
  UserData,
  BrandServicesAddress,
  Order,
  TokenizationMethod,
  Card3DSData,
  PromotionSource,
  OrderItem,
} from "./types";

const checkoutEvents = {
  trackIdentifyUser: (userData: UserData) => {
    if (typeof window !== "undefined") {
      // @ts-ignore
      window.hardsandsAnalyticsDebugger =
        // @ts-ignore
        window.hardsandsAnalyticsDebugger || [];
      // @ts-ignore
      window.hardsandsAnalyticsDebugger.push({
        type: "identify",
        user_id: userData.email,
      });
    }
    track.layerPush({
      event: "identifyUser",
      // For consistency with mailingListEvent
      email: userData.email,
      userData,
    });
  },

  trackShippingAddressUpdated: (shippingAddressData: BrandServicesAddress) => {
    track.layerPush({
      event: "shippingAddressUpdated",
      shippingAddressData,
    });
  },

  trackShippingIsPoBox: () => {
    track.layerPush({
      event: "shippingIsPoBox",
    });
  },

  trackExpressShippingDisabled: () => {
    track.layerPush({
      event: "expressShippingDisabled",
    });
  },

  trackPaymentAttempted: (paymentData: { method: string }) => {
    track.layerPush({
      event: "paymentAttempted",
      paymentData,
    });
  },

  trackSubscribeToMailinglist: (
    email: string,
    subscribeToMailingList: boolean
  ) => {
    track.layerPush({
      event: "subscribeToMailinglist",
      acceptsEmailMarketing: subscribeToMailingList,
      acceptsSMSMarketing: subscribeToMailingList,
      email,
    });
  },

  trackExperimentActivated: (experimentName: string) => {
    track.layerPush({
      event: "experiment_activated",
      experiment_api_name: experimentName,
    });
  },

  // Apple pay, Google Pay, Web pay etc...
  trackPaymentRequestButtonClicked: (
    tokenizationMethod: TokenizationMethod
  ) => {
    track.layerPush({
      event: "paymentRequestClicked",
      tokenization_method: tokenizationMethod,
    });
  },

  track3DSInitiated: (card3DSData: Card3DSData) => {
    track.layerPush({
      event: "3ds_initiated",
      card_3ds_data: card3DSData,
    });
  },
  trackGenericCheckoutError: (error: ApiError | Error) => {
    track.layerPush({ event: 'genericCheckoutError', errorData: error })
  },

  /**
   * Calls the e-commerce trackPurchase event with data from the order.
   *
   * Should be the **last event called in the checkout process** this will
   * clear any checkout-related data from the data layer. As a result, any
   * subsequent checkout-related event will not have the necessary data
   * available.
   */
  trackOrderPurchase: async (order: Order) => {
    // Don't clear the order until after tags have fired.
    await track.trackPurchase(
      {
        id: `${order.id}`,
        tax: 0,
        revenue: order.totalUsd,
        shipping: order.shippingSelected.priceUsd,
        cartId: order.cartId
      },
      order.items.map((item) => ({
        id: item.product.id,
        quantity: item.quantity,
        name: item.title,
        variant: item.productVariantKey,
        category: item.productVariantKey?.toLowerCase() === "plain" || item.productVariantKey?.toLowerCase() === "customized" ? "CARD" : "EPOXY",
        price: item.priceUsd,
        currency: 'USD', 
      }))
    );

    if (!order.draftOrder) {
      // the data-layer.
      track.layerPush({
        shippingAddressData: undefined,
        paymentData: undefined,
        order: undefined,
        freeTrialProduct: undefined,
        // userData is not cleared so we can track individual user's activity
        // through the site.
      });
    }
  },

  trackImpact: async (order: Order) => {
    // Don't clear the order until after tags have fired.
    await track.trackImpactConversion(
      {
        id: `${order.id}`,
        affiliation: "hardsands", // TODO (jparra 2/11/20): Make brand aware
        tax: order.tax_amount.amount_usd_float,
        revenue: order.usd_revenue?.amount_usd_float,
        shipping: order.shipping_amount.amount_usd_float,
      },
      order.order_items.data.map((item) => ({
        id: item.shopify_id,
        quantity: item.quantity,
        name: item.title,
        category: item.variant_title,
        variant: item.variant_title,
        brand: "hardsands",
        price: item.price.amount_usd_float,
        currency: 'USD',
        cartId: order.cartHash
      }))
    );

    // This is the last event of checkout. Clear any checkout related data from
    // the data-layer.
    track.layerPush({
      shippingAddressData: undefined,
      paymentData: undefined,
      order: undefined,
      freeTrialProduct: undefined,
      // userData is not cleared so we can track individual user's activity
      // through the site.
    });
  },

  // This is not an event per-se but having the order available in the
  // data-layer lets triggers use that information when responding to events.
  setOrder: (order: Order) => {
    track.layerPush({ order });
  },

  trackPromotionApplied: (promotionSource: PromotionSource) => {
    track.layerPush({
      event: "promotionApplied",
      promotion_source: promotionSource,
    });
  },

  trackGreenlitNotificationRequest: (email: string, country: string) => {
    track.layerPush({
      event: "greenlitNotificationRequest",
      greenlitNotificationRequestData: { email, country },
    });
  },

  trackPaymentMethodChange: (method: MultiPaymentMethod) => {
    track.layerPush({
      event: "paymentMethodChanged",
      payment_method_change: method,
    });
  },

  trackPaymentMethodsShown: (methods: string[]) => {
    track.layerPush({
      event: "paymentMethodsShown",
      payment_methods_shown: methods,
    });
  },

  trackPaymentError: (method: MultiPaymentMethod) => {
    track.layerPush({
      event: "paymentError",
      payment_error_source: method,
    });
  },
};

const track = {} as unknown as CheckoutTrackingFunctions &
  typeof checkoutEvents;

export function setTrackingFunctions(funcs: CheckoutTrackingFunctions) {
  if (Object.keys(track).length > 0) {
    console.warn("Checkout tracking functions already set");
    return;
  }

  [...Object.entries(funcs), ...Object.entries(checkoutEvents)].forEach(
    ([key, fn]) => {
      track[key] = fn;
    }
  );
}

export default track;
