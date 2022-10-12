import { Product } from 'modules/products/types'
import { AppActionTypes } from '../../redux/context'
import { CURRENCY_CODES } from '../../utils/currency'
import {
  CART_CUSTOMIZE_ITEM,
  CartCustomizeItem,
  CART_LOAD,
  UPDATE_SELECTED_CURRENCY,
  UPDATE_DISCOUNT,
  UPDATE_CART_CURRENCIES
} from './actionTypes'
import { CartCurrencyType, CartResponse, DiscountReducer } from './types'

export type CartReducerState = {
  customizingProduct: Product | null
  cart: CartResponse | null
  selectedCurrency: string
  giftSlug: string | null
  giftSlugLastUpdated: Date | null
  discount: DiscountReducer,
  cartCurrencies: CartCurrencyType
}

const initialState: CartReducerState = {
  customizingProduct: null,
  cart: null,
  selectedCurrency: 'USD',
  giftSlug: null,
  giftSlugLastUpdated: null,
  cartCurrencies: CURRENCY_CODES,
  discount: {
    couponName: null,
    coupon: null,
    discountApplied: false,
  }
}

export function cartReducer(
  state = initialState,
  action: AppActionTypes
): CartReducerState {
  switch (action.type) {
    case CART_CUSTOMIZE_ITEM:
      return setCustomizingItem(state, action)

    case CART_LOAD:
      return {
        ...state,
        cart: action.payload.cart,
        discount: {
          ...state.discount,
          discountApplied: action.payload.discountApplied,
        },
      }

    case UPDATE_DISCOUNT:
      return {
        ...state,
        discount: action.payload.discount,
      }

    case UPDATE_SELECTED_CURRENCY:
      return {
        ...state,
        selectedCurrency: action.payload.selectedCurrency,
      }

    case UPDATE_CART_CURRENCIES:
      return {
        ...state,
        cartCurrencies: action.payload.currencies,
      }

    // case 'SET_GIFT': {
    //   const { giftSlug, giftSlugLastUpdated } = action.payload
    //   return {
    //     ...state,
    //     giftSlug,
    //     giftSlugLastUpdated,
    //   }
    // }

    default:
      return state
  }
}

function setCustomizingItem(
  state: CartReducerState,
  action: CartCustomizeItem
): CartReducerState {
  return {
    ...state,
    customizingProduct: action.payload.product,
    selectedCurrency: state.cart?.currency
      ? state.cart.currency
      : state.selectedCurrency,
  }
}
