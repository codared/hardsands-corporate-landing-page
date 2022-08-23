import { AppState } from "redux/rootReducer";
import { isAddress, fixIncompleteAddress } from "./functions";
import { BrandServicesAddress } from "./types";

export const selectCheckoutCurrentOrder = (state: AppState) =>
  state.checkout.currentOrder;

export const selectCheckoutShippingAddress = (
  state: AppState
): BrandServicesAddress | undefined => {
  const data = state.checkout.currentOrder?.shipping_address.data;
  if (!data) {
    return data;
  }
  if (!isAddress(data)) {
    return undefined;
  }
  return fixIncompleteAddress(data);
};

export const selectCheckoutBillingAddress = (
  state: AppState
): BrandServicesAddress | undefined => {
  const data = state.checkout.currentOrder?.billing_address.data;
  if (!data) {
    return data;
  }
  if (!isAddress(data)) {
    return undefined;
  }
  return data;
};

export const selectCheckoutUserData = (state: AppState) =>
  state.checkout.currentOrder?.user?.data;

export const selectCheckoutError = (state: AppState) => state.checkout.error;

export const selectEmailCheckoutError = (state: AppState) => {
  const path = state.checkout.error?.path;

  if (!path) {
    return false;
  }

  return path.indexOf("email") !== -1 && state.checkout.error;
};

export const selectShippingAddressCheckoutError = (state: AppState) => {
  const error = state.checkout.error;

  if (!error) {
    return false;
  }

  return error.path.indexOf("shipping-address") && state.checkout.error;
};

export const selectNonEmailOrShippingAddressCheckoutError = (
  state: AppState
) => {
  const error = state.checkout.error;

  if (!error) {
    return false;
  }

  if (
    (error.path && error.path.indexOf("email") !== -1) ||
    error.path.indexOf("shipping-address") !== -1
  ) {
    return false;
  }

  return state.checkout.error;
};

export const selectPaymentMethod = (state: AppState) =>
  state.checkout.paymentMethod;

export const selectUserState = (state: AppState) => state.checkout.userState;
