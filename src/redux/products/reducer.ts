import { Product } from 'utils/types'
import { ProductsActionTypes } from './actionTypes'

export type ProductsReducerState = {
  all: {
    [currency: string]: Product[]
  }
  single: {
    [currency: string]: Product[]
  }
}

const initialState: ProductsReducerState = {
  all: {},
  single: {},
}

export function productsReducer(
  state = initialState,
  action: ProductsActionTypes
): ProductsReducerState {
  switch (action.type) {
    case 'PRODUCTS_LOAD_ALL':
      return {
        ...state,
        all: {
          ...state.all,
          [action.payload.currency]: action.payload.products,
        },
      }
    case 'PRODUCTS_LOAD_MULTIPLE':
      return loadMultipleProducts(
        state,
        action.payload.currency,
        action.payload.products
      )

    case 'PRODUCTS_LOAD_SINGLE':
      return loadSingleProduct(
        state,
        action.payload.currency,
        action.payload.product
      )

    default:
      return state
  }
}

function loadSingleProduct(
  state: ProductsReducerState,
  currency: string,
  product: Product
): ProductsReducerState {
  const { single } = state
  single[currency] = single[currency] || []
  const ind = single[currency].findIndex((a) => a.id === product.id)
  if (ind > -1) {
    single[currency][ind] = product
  } else {
    single[currency].push(product)
  }

  return {
    ...state,
    single,
  }
}

function loadMultipleProducts(
  state: ProductsReducerState,
  currency: string,
  products: Product[]
): ProductsReducerState {
  return products.reduce<ProductsReducerState>((carry, item) => {
    return loadSingleProduct(carry, currency, item)
  }, state)
}
