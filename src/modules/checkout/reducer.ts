import { softAssertNever } from "utils/types";
import { CheckoutActionTypes, CHECKOUT_LOAD_ORDER, CHECKOUT_RESET } from "./actionTypes";
import { CheckoutError, Order, PaymentMethod, UserStateMinimal } from "./types";

export type CheckoutReducerState = {
  currentOrder: Order | null;
  paymentMethod?: PaymentMethod;
  error?: CheckoutError;
  userState?: UserStateMinimal;
};

const initialState: CheckoutReducerState = {
  currentOrder: null,
};

export function checkoutReducer(
  state = initialState,
  action: CheckoutActionTypes
): CheckoutReducerState {
  switch (action.type) {
    case CHECKOUT_LOAD_ORDER:
      return {
        ...state,
        currentOrder: action.payload,
      };

    case "CHECKOUT_LOAD_USER_DATA":
      if (!state.currentOrder) {
        throw new Error("Loading user data without order");
      }

      return {
        ...state,
        currentOrder: {
          ...state.currentOrder,
          user: { data: action.payload },
        },
      };

    case "CHECKOUT_LOAD_SHIPPING_ADDRESS":
      if (!state.currentOrder) {
        throw new Error("Loading address without order");
      }

      return {
        ...state,
        currentOrder: {
          ...state.currentOrder,
          shipping_address: { data: action.payload },
        },
      };

    case "CHECKOUT_LOAD_BILLING_ADDRESS":
      if (!state.currentOrder) {
        throw new Error("Loading address without order");
      }

      return {
        ...state,
        currentOrder: {
          ...state.currentOrder,
          billing_address: { data: action.payload },
        },
      };

    case "CHECKOUT_LOAD_SHIPPING_RATES":
      if (!state.currentOrder) {
        throw new Error("Loading shipping rates without order");
      }

      return {
        ...state,
        currentOrder: {
          ...state.currentOrder,
          shipping_rates: { data: action.payload.shipping_rates },
          shipping_lines: { data: action.payload.shipping_lines },
          shipping_amount: action.payload.shipping_amount,
          tax_lines: { data: action.payload.tax_lines },
          tax_amount: action.payload.tax_amount,
          subtotal: action.payload.subtotal,
          total: action.payload.total,
        },
      };

    case "CHECKOUT_LOAD_CREDIT_INFO":
      if (!state.currentOrder) {
        throw new Error("Loading credit info without order");
      }

      return {
        ...state,
        currentOrder: {
          ...state.currentOrder,
          applied_credit_balance: action.payload.applied_credit_balance,
          available_user_credit: action.payload.available_user_credit,
          total_due: action.payload.total_due,
        },
      };

    case "CHECKOUT_LOAD_ERROR":
      return {
        ...state,
        error: action.payload,
      };

    case CHECKOUT_RESET:
      return initialState;

    case "CHECKOUT_LOAD_PAYMENT":
      return {
        ...state,
        paymentMethod: action.payload,
      };

    case "CHECKOUT_LOAD_USER_STATE":
      return {
        ...state,
        userState: action.payload,
      };

    case "CHECKOUT_LOAD_SUBSCRIPTION_INFO":
      if (!state.currentOrder) {
        throw new Error("Loading subscription info without order");
      }
      return {
        ...state,
        currentOrder: {
          ...state.currentOrder,
        },
      };

    default:
      softAssertNever(action);
      return state;
  }
}
