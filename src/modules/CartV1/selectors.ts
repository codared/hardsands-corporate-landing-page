import { Product } from "modules/products/types";
import { AppState } from "redux/rootReducer";
import { computeItemsQuantity } from "./functions";
import { CartResponse } from "./types";

export const selectCustomizingItem = (state: AppState): Product | null => {
  return state.cart.customizingProduct;
};

export const selectCartId = (state: AppState): string | undefined => {
  return state.cart.cart?.id;
};

export const selectCartTotalQuantity = (state: AppState): number => {
  if (!state.cart.cart) {
    return 0;
  }
  return computeItemsQuantity(state.cart.cart.items);
};

export const selectCart = (state: AppState): CartResponse | null => {
  return state.cart.cart;
};

export const selectCartCurrency = (state: AppState): string => {
  return state.cart.selectedCurrency;
};
