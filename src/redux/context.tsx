import config, { updateConfig } from "core/config";
import { SETTINGS } from "core/config/config";
import { CartActionTypes } from "modules/CART/actionTypes";
import { cartReducer } from "modules/CART/reducer";
import { CheckoutActionTypes } from "modules/checkout/actionTypes";
import { CountriesActionTypes } from "modules/checkout/countriesState/actionTypes";
import { countryReducer } from "modules/checkout/countriesState/reducer";
import { CustomerInfoActionTypes } from "modules/checkout/customerInfoState/actionTypes";
import { customerInfoReducer } from "modules/checkout/customerInfoState/reducer";
import { checkoutReducer } from "modules/checkout/reducer";
import { CheckoutRoutes, setCheckoutRoutes } from "modules/checkout/routes";
import { createContext, ReactElement, Reducer, useReducer } from "react";
import { CURRENCY_CODES } from "utils/currency";
import { ProductsActionTypes } from "./products/actionTypes";
import { productsInitialState, productsReducer } from "./products/reducer";
import { AppState } from "./rootReducer";

export type AppActionTypes =
  | ProductsActionTypes
  | CartActionTypes
  | CheckoutActionTypes
  | CountriesActionTypes
  | CustomerInfoActionTypes;

type InitializerArgs = {
  currency: string;
};

export interface ThunkDispatch {
  <T extends AppActionTypes>(action: T): T;
  <R>(asyncAction: ThunkAction<R>): R;
}

export type ThunkAction<R> = (
  dispatch: ThunkDispatch,
  getState: () => AppState
) => R;

const getInitialState = (args: InitializerArgs): AppState => {
  return {
    products: productsInitialState,
    cart: {
      customizingProduct: null,
      cart: null,
      selectedCurrency: args.currency,
      giftSlug: null,
      giftSlugLastUpdated: null,
      cartCurrencies: CURRENCY_CODES,
      discount: {
        couponName: null,
        coupon: null,
        discountApplied: false,
      },
    },
    checkout: {
      currentOrder: null,
    },
    countries: { allCountries: [], shippingCountries: [], exchangeRates: null },
    customerInfo: {},
  };
};

const initialState: AppState = getInitialState({ currency: "USD" });

// type ThunkDispatch = (<R>(action: ThunkAction<R>) => ) | Dispatch<AppState>

const CheckoutContext = createContext<{
  state: AppState;
  dispatch: ThunkDispatch;
}>({
  state: initialState,
  dispatch: () => {},
});

export interface CheckoutProviderProps {
  currency: string;
  settings?: SETTINGS;
  checkoutRoutes?: CheckoutRoutes;
  children?: ReactElement;
}

const mainReducer = (
  { cart, checkout, countries, customerInfo, products }: AppState,
  action: AppActionTypes
) => ({
  products: productsReducer(products, action),
  cart: cartReducer(cart, action),
  checkout: checkoutReducer(checkout, action as CheckoutActionTypes),
  countries: countryReducer(countries, action),
  customerInfo: customerInfoReducer(customerInfo, action),
});

export function useThunkReducer(
  reducerFn: Reducer<AppState, AppActionTypes>,
  initializerArg: InitializerArgs,
  initializer: (arg: InitializerArgs) => AppState
): [AppState, ThunkDispatch] {
  const [state, dispatch] = useReducer(reducerFn, initializerArg, initializer);

  const thunkDispatch: ThunkDispatch = (action: any) => {
    if (typeof action === "function") {
      return action(thunkDispatch, () => state);
    }

    return dispatch(action);
  };

  return [state, thunkDispatch];
}

const CheckoutProvider = ({
  currency,
  checkoutRoutes,
  settings,
  children,
}: CheckoutProviderProps) => {
  if (checkoutRoutes) {
    setCheckoutRoutes(checkoutRoutes);
  }

  if (settings) {
    updateConfig(settings);
  } else {
    if (config("ALLOW_PARTIAL_CONFIG")) {
      throw new Error(
        "ALLOW_PARTIAL_CONFIG is set but no settings were provided"
      );
    }
  }

  const [state, dispatch] = useThunkReducer(
    mainReducer,
    { currency },
    getInitialState
  );

  return (
    <CheckoutContext.Provider value={{ state, dispatch }}>
      {children}
    </CheckoutContext.Provider>
  );
};

export { CheckoutContext, CheckoutProvider };
