import { Product } from "modules/products/types";
import { AppActionTypes } from "redux/context";

export type ProductsReducerState = {
  all: {
    [currency: string]: Product[];
  };
  single: {
    [currency: string]: Product;
  };
};

export const productsInitialState: ProductsReducerState = {
  all: {},
  single: {},
};

export function productsReducer(
  state = productsInitialState,
  action: AppActionTypes
): ProductsReducerState {
  switch (action.type) {
    case "PRODUCTS_LOAD_ALL":
      return {
        ...state,
        all: {
          ...state.all,
          [action.payload.currency]: action.payload.products,
        },
      };
    case "PRODUCTS_LOAD_MULTIPLE":
      return loadMultipleProducts(
        state,
        action.payload.currency,
        action.payload.products
      );

    case "PRODUCTS_LOAD_SINGLE":
      return {
        ...state,
        single: {
          ...state.single,
          [action.payload.currency]: action.payload.product,
        },
      };

    default:
      return state;
  }
}

function loadSingleProduct(
  state: ProductsReducerState,
  currency: string,
  product: Product
): ProductsReducerState {
  const { all, single } = state;
  all[currency] = all[currency] || [];
  const ind = all[currency].findIndex((a) => a.id === product.id);
  if (ind > -1) {
    return {
      ...state,
      single: {
        [currency]: product,
      },
    };
  }

  return {
    ...state,
    single,
  };
}

function loadMultipleProducts(
  state: ProductsReducerState,
  currency: string,
  products: Product[]
): ProductsReducerState {
  return products.reduce<ProductsReducerState>((carry, item) => {
    return loadSingleProduct(carry, currency, item);
  }, state);
}
