import {
  Order,
  UserData,
  BrandServicesAddress,
  WithErrors,
  CheckoutError,
  PaymentMethod,
  UserStateMinimal,
} from "./types";

export const CHECKOUT_LOAD_ORDER = "CHECKOUT_LOAD_ORDER";
export const CHECKOUT_RESET = "CHECKOUT_RESET";

export interface CheckoutLoadOrderAction {
  type: typeof CHECKOUT_LOAD_ORDER;
  payload: Order;
}

export interface CheckoutLoadUserDataAction {
  type: "CHECKOUT_LOAD_USER_DATA";
  payload: WithErrors<UserData>;
}

export interface CheckoutLoadShippingAddressAction {
  type: "CHECKOUT_LOAD_SHIPPING_ADDRESS";
  payload: BrandServicesAddress;
}

export interface CheckoutLoadBillingAddressAction {
  type: "CHECKOUT_LOAD_BILLING_ADDRESS";
  payload: BrandServicesAddress;
}

export interface CheckoutLoadShippingRatesAction {
  type: "CHECKOUT_LOAD_SHIPPING_RATES";
  payload: any;
}

export interface CheckoutLoadErrorAction {
  type: "CHECKOUT_LOAD_ERROR";
  payload?: CheckoutError;
}

export interface CheckoutLoadPaymentMethodAction {
  type: "CHECKOUT_LOAD_PAYMENT";
  payload: PaymentMethod;
}

export interface CheckoutReset {
  type: typeof CHECKOUT_RESET;
}

export interface CheckoutLoadCreditInfoAction {
  type: "CHECKOUT_LOAD_CREDIT_INFO";
  payload: any;
}

export interface CheckoutLoadUserState {
  type: "CHECKOUT_LOAD_USER_STATE";
  payload: UserStateMinimal | undefined;
}

export interface CheckoutLoadSubscriptionInfoAction {
  type: "CHECKOUT_LOAD_SUBSCRIPTION_INFO";
  payload: any;
}

export type CheckoutActionTypes =
  | CheckoutLoadOrderAction
  | CheckoutLoadUserDataAction
  | CheckoutLoadShippingAddressAction
  | CheckoutLoadBillingAddressAction
  | CheckoutLoadShippingRatesAction
  | CheckoutLoadPaymentMethodAction
  | CheckoutLoadErrorAction
  | CheckoutLoadCreditInfoAction
  | CheckoutReset
  | CheckoutLoadUserState
  | CheckoutLoadSubscriptionInfoAction;

export type MultiPaymentMethod =
  | "card"
  | "paypal"
  | "amazon"
  | "adyen"
  | "cash_on_delivery"
  | "affirm"
  | "afterpay";
