import { useContext } from 'react'
import { CheckoutContext } from 'redux/context'

import { computeItemsQuantity } from './functions'

export function useCartItemCount() {
  const { state } = useContext(CheckoutContext)
  const items = state.cart.cart?.items
  if (!items) {
    return 0
  }

  return computeItemsQuantity(items)
}

export function useCurrency() {
  const { state } = useContext(CheckoutContext)
  const curr = state.cart.selectedCurrency
  if (!curr) {
    throw new Error('NO CURRENCY')
  }
  return curr
}