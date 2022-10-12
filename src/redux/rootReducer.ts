import { productsReducer, ProductsReducerState } from "redux/products/reducer";
import { combineReducers, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import {
  checkoutReducer,
  CheckoutReducerState,
} from "modules/checkout/reducer";
import { cartReducer, CartReducerState } from "modules/cart/reducer";
import { CountryState, CustomerInfoState } from "modules/checkout/types";
import { AppActionTypes } from "./context";
import { countryReducer } from "modules/checkout/countriesState/reducer";
import { customerInfoReducer } from "modules/checkout/customerInfoState/reducer";
import appReducer, { UserAppReducerState } from "modules/account/reducer";

export const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  checkout: checkoutReducer,
  countries: countryReducer,
  customerInfo: customerInfoReducer,
  app: appReducer,
});

export type AppState = {
  products?: ProductsReducerState;
  checkout: CheckoutReducerState;
  cart: CartReducerState;
  countries: CountryState;
  customerInfo: CustomerInfoState;
  app?: UserAppReducerState;
};

export type ThunkActionCreator<R> = ActionCreator<
  ThunkAction<R, AppState, void, AppActionTypes>
>;
