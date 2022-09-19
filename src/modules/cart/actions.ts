import * as Sentry from "@sentry/browser";
import { trackCartAdd } from "modules/analytics/functions/track";
import { Product } from "modules/products/types";
import { getCookie, setCookie } from "modules/shared/cookie";
import { ThunkDispatch } from "redux/context";
import { ThunkActionCreator } from "redux/rootReducer";
import { CURRENCY_COOKIE, CART_ID_LOCAL_STORAGE_KEY } from "utils/constants";

import { CURRENCY_CODES } from "../../utils/currency";
import {
  CartCustomizeItem,
  CART_CUSTOMIZE_ITEM,
  CART_LOAD,
  UPDATE_DISCOUNT,
  UPDATE_SELECTED_CURRENCY,
  UPDATE_CART_CURRENCIES,
} from "./actionTypes";
import {
  apiCreateCart,
  apiAddItemToCart,
  apiRemoveCartItem,
  apiUpdateCartItem,
  apiUpdateCart,
} from "./cartApi";
import { getAddToCartEventData } from "./functions";
import { selectCart, selectCartCurrency, selectCartId } from "./selectors";
import {
  CartResponse,
  AddCartItemBody,
  CartResponseItem,
  UpdateCartItemBody,
  UpdateCartBody,
  DiscountReducer,
  CartCurrencyType,
} from "./types";

export const loadCart = (cart: CartResponse, discountApplied = false) => ({
  type: CART_LOAD as typeof CART_LOAD,
  payload: {
    cart,
    discountApplied,
  },
});

export const updateDiscount = (discount: DiscountReducer) => ({
  type: UPDATE_DISCOUNT as typeof UPDATE_DISCOUNT,
  payload: { discount },
});

export const updateCurrency = (selectedCurrency: string) => {
  if (!CURRENCY_CODES[selectedCurrency]) {
    selectedCurrency = "USD"; // default to USD if selectedCurrency is not supported
  }
  setCookie(CURRENCY_COOKIE, selectedCurrency, 365);
  return {
    type: UPDATE_SELECTED_CURRENCY as typeof UPDATE_SELECTED_CURRENCY,
    payload: {
      selectedCurrency,
    },
  };
};

export const updateCartCurrencies = (currencies: CartCurrencyType) => {
  return {
    type: UPDATE_CART_CURRENCIES as typeof UPDATE_CART_CURRENCIES,
    payload: {
      currencies,
    },
  };
};

const createCart = async (currency: string, dispatch: ThunkDispatch) => {
  const createdCart = await apiCreateCart({
    currency,
  });

  window.localStorage.setItem(CART_ID_LOCAL_STORAGE_KEY, createdCart.id);
  await dispatch(loadCart(createdCart));
  return createdCart;
};

export const loadOrCreateCart: ThunkActionCreator<Promise<CartResponse>> =
  (currency = "USD") =>
  async (dispatch) => {
    const cartId = window.localStorage.getItem(CART_ID_LOCAL_STORAGE_KEY);
    const cartCurrency = getCookie(CURRENCY_COOKIE);
    if (cartCurrency && CURRENCY_CODES[cartCurrency]) {
      currency = cartCurrency;
      dispatch(updateCurrency(currency));
    }

    if (cartId) {
      // fetch the cart and update it with the input currency
      try {
        const cart = await apiUpdateCart(cartId, { currency });
        await dispatch(loadCart(cart));
        return cart;
      } catch (e) {
        const createdCart = await createCart(currency, dispatch);
        return createdCart;
      }
    }
    const createdCart = await createCart(currency, dispatch);
    return createdCart;
  };

export const resetCart: ThunkActionCreator<void> =
  () => async (dispatch, getState) => {
    const cartId = window.localStorage.getItem(CART_ID_LOCAL_STORAGE_KEY);
    if (cartId) {
      window.localStorage.removeItem(CART_ID_LOCAL_STORAGE_KEY);
      // after removing the cart id, we want store to also remove the cart data
      const currency = selectCartCurrency(getState());
      const createdCart = await createCart(currency, dispatch);
      return createdCart;
    }
    return;
  };

export const customizeProduct = (
  product: Product | null
): CartCustomizeItem => {
  return {
    type: CART_CUSTOMIZE_ITEM,
    payload: {
      product,
    },
  };
};

const trackAddingItemToCart = (
  response: CartResponse,
  itemAdded: AddCartItemBody
) => {
  try {
    const { productId, productVariant } = itemAdded;
    const itemsAdded =
      response.items.filter((item) => {
        return item.product.id === productId && productVariant === item.productVariantKey;
      }) ?? [];

    const quantity = itemAdded.quantity || 1;
    if (itemsAdded.length === 1) {
      trackCartAdd(getAddToCartEventData({ ...itemsAdded[0], quantity }));
    } else if (itemsAdded.length > 1) {
      const generatedKey = `p=${productId}`;
      const addedItem = itemsAdded.find((item) => generatedKey === item.key);
      if (addedItem) {
        trackCartAdd(getAddToCartEventData({ ...addedItem, quantity }));
      }
    }
  } catch (e) {
    Sentry.captureException("Error while tracking adding an item to cart");
  }
};

export const addItemToCart: ThunkActionCreator<Promise<CartResponse>> =
  (toAdd: AddCartItemBody) => async (dispatch, getState) => {
    let cartId = selectCartId(getState());
    if (!cartId) {
      let createdCart = await dispatch(loadOrCreateCart());
      cartId = createdCart.id;
    }
    const resp = await apiAddItemToCart(cartId, toAdd);
    dispatch(loadCart(resp));
    trackAddingItemToCart(resp, toAdd);

    return resp;
  };

export const removeCartItem: ThunkActionCreator<Promise<CartResponse>> =
  (item: CartResponseItem) => async (dispatch, getState) => {
    const cart = selectCart(getState());
    const cartId = cart?.id;
    if (!cartId) {
      throw new Error("Cart ID not initialized");
    }

    // if (
    //   item.cartOfferId
    // ) {
    //   const offerSlug = getOfferSlug(item, cart?.offersApplied)

    //   if (!offerSlug) {
    //     throw new Error('Offer Slug not provided')
    //   }
    //   const resp = await apiRemoveCartOffer(cartId, offerSlug)
    //   dispatch(loadCart(resp))
    //   return resp
    // } else {
    const resp = await apiRemoveCartItem(cartId, item.id);
    dispatch(loadCart(resp));
    return resp;
    // }
  };

export const updateCartItem: ThunkActionCreator<Promise<CartResponse>> =
  (item: CartResponseItem, body: UpdateCartItemBody) =>
  async (dispatch, getState) => {
    const cartId = selectCartId(getState());
    if (!cartId) {
      throw new Error("Cart ID not initialized");
    }

    const resp = await apiUpdateCartItem(cartId, item.id, body);
    dispatch(loadCart(resp));
    return resp;
  };

export const updateCart: ThunkActionCreator<Promise<CartResponse>> =
  (body: UpdateCartBody) => async (dispatch, getState) => {
    const cartId = selectCartId(getState());
    if (!cartId) {
      throw new Error("Cart ID not initialized");
    }

    const resp = await apiUpdateCart(cartId, body);
    dispatch(loadCart(resp));
    return resp;
  };

// export const attachOfferToCart: ThunkActionCreator<Promise<CartResponse>> = (
//   offerSlug: string
// ) => async (dispatch, getState) => {
//   const cartId = selectCartId(getState())
//   if (!cartId) {
//     throw new Error('Cart ID not initialized')
//   }

//   const resp = await apiAttachCartOffer(cartId, offerSlug)
//   dispatch(loadCart(resp))
//   return resp
// }

// export const applyOfferToCart: ThunkActionCreator<Promise<CartResponse>> = (
//   offerSlug: string,
//   body?: ApplyOfferBody
// ) => async (dispatch, getState) => {
//   const cartId = selectCartId(getState())
//   if (!cartId) {
//     throw new Error('Cart ID not initialized')
//   }

//   const resp = await apiApplyCartOffer(cartId, offerSlug, body)
//   dispatch(loadCart(resp))
//   return resp
// }

// export const applyCouponToCart: ThunkActionCreator<
//   Promise<CartResponse | void>
// > = (couponName: string) => async (dispatch, getState) => {
//   const { cart: cartState } = getState()
//   const { selectedCurrency, cart, discount } = cartState
//   const { couponName: counponNameState, coupon: couponState } = discount

//   if (!cart) return

//   let coupon
//   // avoid fetching the same coupon from the API if the coupon hasn't changed
//   if (counponNameState === couponName && couponState !== null) {
//     coupon = couponState
//   }
//   // fetch new coupon info
//   else {
//     try {
//       // if coupon is valid
//       coupon = await apiFetchDiscount(couponName, selectedCurrency)
//     } catch {
//       // if coupon type is invalid
//       return
//     }
//   }

//   // apply coupon to cart
//   const { total, discountTotal } = applyDiscount(
//     cart?.subtotal,
//     coupon,
//     selectedCurrency,
//     couponName
//   )

//   // update cart with discount values
//   const cartWithDiscount = {
//     ...cart,
//     discountTotal,
//     total,
//   }

//   dispatch(
//     updateDiscount({
//       couponName,
//       coupon,
//       discountApplied: true,
//     })
//   )
//   dispatch(loadCart(cartWithDiscount, true))

//   return cartWithDiscount
// }
