import { Product } from "modules/products/types";
import { CartResponse } from "./types";

export const CART_CUSTOMIZE_ITEM = "CART_CUSTOMIZE_ITEM";
export const CART_LOAD = "CART_LOAD";
export const UPDATE_SELECTED_CURRENCY = "UPDATE_SELECTED_CURRENCY";
export const UPDATE_DISCOUNT = "UPDATE_DISCOUNT";
export const UPDATE_CART_CURRENCIES = "UPDATE_CART_CURRENCIES";

export interface CartCustomizeItem {
  type: typeof CART_CUSTOMIZE_ITEM;
  payload: {
    product: Product | null;
  };
}

export interface CartCurrencyType {
  [key: string]: string;
}

export interface CartLoad {
  type: typeof CART_LOAD;
  payload: {
    cart: CartResponse;
    discountApplied: boolean;
  };
}

export interface UpdateDiscount {
  type: typeof UPDATE_DISCOUNT;
  payload: {
    discount: any;
  };
}

export interface UpdateSelectedCurrency {
  type: typeof UPDATE_SELECTED_CURRENCY;
  payload: {
    selectedCurrency: string;
  };
}

export interface UpdateCartCurrencies {
  type: typeof UPDATE_CART_CURRENCIES;
  payload: {
    currencies: CartCurrencyType;
  };
}

export type CartActionTypes =
  | CartCustomizeItem
  | CartLoad
  | UpdateDiscount
  | UpdateSelectedCurrency
  | UpdateCartCurrencies;
