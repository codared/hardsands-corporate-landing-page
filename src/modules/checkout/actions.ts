import * as Sentry from "@sentry/browser";
import { getCookie } from "modules/shared/cookie";
import { ApiError } from "next/dist/server/api-utils";
import logger from "redux-logger";
import { ThunkAction } from "redux-thunk";
import { ThunkActionCreator } from "redux/rootReducer";
import { lifecycle } from "utils/lifecyle";
import track from "./analytics";
import {
  expressCheckout,
  getOrderFromCart,
  setOrderBillingAddress,
  setOrderCustomerdetails,
  setOrderEmail,
  setOrderShippingAddress,
  setOrderShippingMethod,
  setShippingRate,
  submitOrder,
} from "./checkoutApi";
import { selectCheckoutCurrentOrder, selectUserState } from "./selectors";
import {
  Order,
  CheckoutError,
  WithErrors,
  UserData,
  BrandServicesAddress,
  PaymentMethod,
  UserStateMinimal,
  Traits,
  ShippingRatesPayload,
  CreditInfo,
  CheckoutMeta,
  BrandServicesCustomerInfoSubmitRequest,
  ShippingDetails,
  ShippingMethods,
} from "./types";

export const ORDER_LOAD_ERROR = "order_load_error";

export const loadOrder = (payload: Order) => {
  track.setOrder(payload);

  return {
    type: "CHECKOUT_LOAD_ORDER" as const,
    payload,
  };
};

export const loadOrderError = (payload: CheckoutError) => {
  return {
    type: "CHECKOUT_LOAD_ERROR" as const,
    payload,
  };
};

export const loadUserData = (payload: WithErrors<UserData>) => {
  return {
    type: "CHECKOUT_LOAD_USER_DATA" as const,
    payload,
  };
};

export const loadShippingAddress = (
  payload: BrandServicesCustomerInfoSubmitRequest | BrandServicesAddress
) => {
  return {
    type: "CHECKOUT_LOAD_SHIPPING_ADDRESS" as const,
    payload,
  };
};

export const loadShippingDetails = (payload: ShippingDetails) => {
  return {
    type: "CHECKOUT_LOAD_SHIPPING_DETAILS" as const,
    payload,
  };
};
export const loadShippingMethods = (payload: ShippingMethods[]) => {
  return {
    type: "CHECKOUT_LOAD_SHIPPING_METHODS" as const,
    payload,
  };
};

export const loadBillingAddress = (payload: BrandServicesAddress) => {
  return {
    type: "CHECKOUT_LOAD_BILLING_ADDRESS" as const,
    payload,
  };
};

export const loadShippingRates = (payload: ShippingRatesPayload) => {
  return {
    type: "CHECKOUT_LOAD_SHIPPING_RATES" as const,
    payload,
  };
};

export const loadCreditInfo = (payload: CreditInfo) => {
  return {
    type: "CHECKOUT_LOAD_CREDIT_INFO" as const,
    payload,
  };
};

/* Should this be in the checkout module? */
export const loadError = (payload?: {
  key: string;
  message: string;
  path: string;
}) => {
  return {
    type: "CHECKOUT_LOAD_ERROR" as const,
    payload,
  };
};

export const loadPaymentMethod = (payload: PaymentMethod) => {
  return {
    type: "CHECKOUT_LOAD_PAYMENT" as const,
    payload,
  };
};

export const clearError = () => ({ type: "CHECKOUT_LOAD_ERROR" as const });

export const resetCheckoutState = () => ({ type: "CHECKOUT_RESET" as const });

export const loadUserState = (payload?: UserStateMinimal) => ({
  type: "CHECKOUT_LOAD_USER_STATE" as const,
  payload,
});

// export const loadSubscriptionInfo = (payload: SubscriptionInfo) => {
//   return {
//     type: "CHECKOUT_LOAD_SUBSCRIPTION_INFO" as const,
//     payload,
//   };
// };

/**
 * Wraps a thunk that should handle generic ApiErrors.
 */
function apiThunkWrapper<T extends ThunkAction<any, any, any, any>>(
  thunk: T
): (...args: Parameters<T>) => ReturnType<T> | Promise<void> {
  return async (...args: Parameters<T>) => {
    const [dispatch, getState] = args;

    try {
      return await thunk(dispatch, getState, {});
    } catch (e) {
      if (!(e instanceof ApiError)) {
        throw e;
      }

      // @ts-ignore
      if (e.data.refreshOrder) {
        const order = selectCheckoutCurrentOrder(getState());
        if (order) {
          await dispatch(fetchOrder(order.checkoutToken));
        }
      }

      dispatch(
        loadError({
          // @ts-ignore
          key: e.id,
          // @ts-ignore
          message: e.data?.message ? e.data?.message : e.id,
          // @ts-ignore
          path: e.apiPath,
        })
      );
    }
  };
}

export const fetchOrder: ThunkActionCreator<Promise<Order | void>> =
  (checkoutId: string) => async (dispatch) => {
    try {
      const order = await getOrderFromCart(checkoutId);

      dispatch(loadOrder(order));
      return order;
    } catch (error) {
      // @ts-ignore
      if (error.message === "NotFoundError") {
        dispatch(
          loadOrderError({
            key: ORDER_LOAD_ERROR,
            // @ts-ignore
            message: error.message,
            path: "",
          })
        );
      }
      return;
    }
  };

export const identifyUser: ThunkActionCreator<Promise<Order | void>> = (
  data: UserData
) =>
  apiThunkWrapper(async (dispatch, getState) => {
    const order = selectCheckoutCurrentOrder(getState());

    if (!order) {
      throw new Error("no order in state");
    }

    track.trackIdentifyUser(data);

    try {
      const ret = await setOrderEmail(order, data.email);
      const userData = ret.user!.data;

      track.setOrder(ret);
      dispatch(loadUserData(userData));
      return ret;
    } catch (e) {
      if (
        !(e instanceof ApiError) ||
        // @ts-ignore
        (e.id !== "invalid-email" &&
          // @ts-ignore
          !(e instanceof ApiError && e?.data?.errors?.email))
      ) {
        throw e;
      }
      dispatch(
        loadUserData({
          email: data.email,
          errors: {
            // @ts-ignore
            email: { key: e.id, message: e.data.message, path: e.data.path },
          },
        })
      );
      return;
    }
  });

export const saveCustomerInfo: ThunkActionCreator<Promise<Order | void>> = (
  address: BrandServicesCustomerInfoSubmitRequest
) =>
  apiThunkWrapper(async (dispatch, getState) => {
    const order = selectCheckoutCurrentOrder(getState());

    if (!order) {
      throw new Error("no order in state");
    }

    const res = await setOrderCustomerdetails(order, address);

    // shipping address must exist here
    dispatch(loadOrder(res));

    return res;
  });

export const saveShippingMethod: ThunkActionCreator<Promise<Order | void>> = (
  shippingMethodId: number
) =>
  apiThunkWrapper(async (dispatch, getState) => {
    const order = selectCheckoutCurrentOrder(getState());

    if (!order) {
      throw new Error("no order in state");
    }

    const res = await setOrderShippingMethod(order, shippingMethodId);

    // shipping address must exist here
    dispatch(loadOrder(res));

    return res;
  });

export const saveShippingAddress: ThunkActionCreator<Promise<Order | void>> = (
  address: BrandServicesAddress
) =>
  apiThunkWrapper(async (dispatch, getState) => {
    const order = selectCheckoutCurrentOrder(getState());

    if (!order) {
      throw new Error("no order in state");
    }

    const res = await setOrderShippingAddress(order, address);

    track.setOrder(res);
    // shipping address must exist here
    dispatch(
      loadShippingAddress(res.shipping_address.data as BrandServicesAddress)
    );
    dispatch(
      loadShippingRates({
        shipping_rates: res.shipping_rates.data,
        shipping_lines: res.shipping_lines.data,
        // Shipping affects totals and taxes
        tax_amount: res.tax_amount,
        tax_lines: res.tax_lines.data,
        shipping_amount: res.shipping_amount,
        subtotal: res.subtotal,
        total: res.total,
      })
    );
    dispatch(
      loadCreditInfo({
        applied_credit_balance: res.applied_credit_balance,
        available_user_credit: res.available_user_credit,
        total_due: res.total_due,
      })
    );

    track.trackShippingAddressUpdated(
      res.shipping_address.data as BrandServicesAddress
    );

    if (lifecycle?.handleShippingAddressUpdated) {
      lifecycle.handleShippingAddressUpdated(
        res.shipping_address.data as BrandServicesAddress
      );
    }

    return res;
  });

export const saveShippingRate: ThunkActionCreator<Promise<Order | void>> = (
  rate: number
) =>
  apiThunkWrapper(async (dispatch, getState) => {
    const order = selectCheckoutCurrentOrder(getState());

    if (!order) {
      throw new Error("no order in state");
    }

    const res = await setShippingRate(order, rate);

    track.setOrder(res);
    dispatch(
      loadShippingRates({
        shipping_rates: res.shipping_rates.data,
        shipping_lines: res.shipping_lines.data,
        // Shipping affects totals
        tax_amount: res.tax_amount,
        tax_lines: res.tax_lines.data,
        shipping_amount: res.shipping_amount,
        subtotal: res.subtotal,
        total: res.total,
      })
    );
    dispatch(
      loadCreditInfo({
        applied_credit_balance: res.applied_credit_balance,
        available_user_credit: res.available_user_credit,
        total_due: res.total_due,
      })
    );

    // Subscription Info will be updated based on the selected shipping rate
    // dispatch(loadSubscriptionInfo(res.subscription));
    return res;
  });

/**
 * Either saves the current shipping address as the billing address
 * or uses the input billingAddress parameter
 */
export const saveBillingAddress: ThunkActionCreator<
  // can return Promise<void> in the case where an error happens and the apiThunkWrapper
  // will catch it and show an error message
  Promise<Order> | Promise<void>
> = (billingAddress?: BrandServicesAddress) =>
  apiThunkWrapper(async (dispatch, getState) => {
    const order = selectCheckoutCurrentOrder(getState());

    if (!order) {
      throw new Error("no order in state");
    }

    // Use billing address if it exists else set billing address to shipping address
    const billingAddressToUse: BrandServicesAddress =
      billingAddress || (order.shipping_address.data as BrandServicesAddress);

    const res = await setOrderBillingAddress(order, billingAddressToUse);
    dispatch(loadOrder(res));
    return res;
  });

// @ts-ignore
export const saveExpressCheckout: ThunkActionCreator<
  Promise<Order | false | void>
> = ({
  token,
  provider,
}: {
  token: string;
  provider: PaymentMethod["provider"];
}) =>
  apiThunkWrapper(async (dispatch, getState) => {
    const order = selectCheckoutCurrentOrder(getState());

    if (!order) {
      throw new Error("no order in state");
    }

    const paymentMethodId = await expressCheckout(order, provider, token);

    dispatch(
      loadPaymentMethod({
        id: paymentMethodId,
        token: null,
        provider,
      })
    );

    return dispatch(fetchOrder(order.cart_hash));
  });

/**
 * Either saves the current shipping address as the billing address
 * or uses the input billingAddress parameter
 */
export const finalizeOrder: ThunkActionCreator<Promise<Order | void>> = ({
  paymentToken,
  paymentMethod,
  paymentTokenId,
  providerMethod,
  isPostPurchaseOffersEnabled = false,
  checkoutMeta,
}: {
  paymentToken: string;
  paymentMethod: "stripe" | "braintree" | "amazonpay" | "affirm";
  paymentTokenId?: string;
  isPostPurchaseOffersEnabled?: boolean;
  providerMethod?: string;
  checkoutMeta?: CheckoutMeta;
}) =>
  apiThunkWrapper(async (dispatch, getState) => {
    const order = selectCheckoutCurrentOrder(getState());
    if (!order) {
      throw new Error("no order in state");
    }

    const canCheckAvailableOffers =
      order.status === "Authorized" ? false : true;

    const shouldCheckAvailableOffers = isPostPurchaseOffersEnabled
      ? canCheckAvailableOffers
      : false;

    const meta: CheckoutMeta & {
      user_traits?: Traits;
      fbId?: string | null;
      fbc?: string | null;
    } = {
      ...checkoutMeta,
    };
    const userState = selectUserState(getState());

    try {
      meta.fbId = getCookie("_fbp") || null;
      meta.fbc = getCookie("_fbc") || null;

      // @ts-ignore
      logger?.debug("Trying to send fb data from cookie ", {
        action: "finalizeOrder",
        checkpoint: "add-fb-meta",
        rawCookie: window.document.cookie,
        meta,
        orderId: order.id,
      });
    } catch (e) {
      // Send this error both to sentry and datadog to confirm that it arrives
      // to both.
      // @ts-ignore
      logger.error("Couldn't determine fbId", { error: e });
      Sentry.captureException(e);
    }

    if (userState) {
      meta.user_traits = userState.getFlatTraits();
    }

    const res = await submitOrder(
      order,
      {
        paymentToken: paymentToken,
        paymentMethodId: paymentTokenId || null,
        paymentProviderName: paymentMethod,
        providerMethod,
        checkoutMeta: meta,
      },
      shouldCheckAvailableOffers
    );

    dispatch(loadOrder(res));
    return res;
  });

// export const applyCouponToOrder: ThunkActionCreator<Promise<Order | void>> = (
//   couponName: string
// ) =>
//   apiThunkWrapper(async (dispatch, getState) => {
//     const order = selectCheckoutCurrentOrder(getState());

//     if (!order) {
//       throw new Error("no order in state");
//     }

//     const updatedOrder = await apiApplyDiscount(order, couponName);
//     dispatch(loadOrder(updatedOrder));

//     return updatedOrder;
//   });

// export const removeCouponFromOrder: ThunkActionCreator<
//   Promise<Order | void>
// > = (couponName: string) =>
//   apiThunkWrapper(async (dispatch, getState) => {
//     const order = selectCheckoutCurrentOrder(getState());

//     if (!order) {
//       throw new Error("no order in state");
//     }

//     const updatedOrder = await apiRemoveDiscount(order, couponName);
//     dispatch(loadOrder(updatedOrder));

//     return updatedOrder;
//   });

// export const addWarrantyInCheckout: ThunkActionCreator<
//   Promise<Order | void>
// > = (warranties: WarrantyDetails[]) =>
//   apiThunkWrapper(async (dispatch, getState) => {
//     const order = selectCheckoutCurrentOrder(getState());

//     if (!order) {
//       throw new Error("no order in state");
//     }

//     const updatedOrder = await addWarrantyToCheckout(order, warranties);
//     dispatch(loadOrder(updatedOrder));

//     return updatedOrder;
//   });
