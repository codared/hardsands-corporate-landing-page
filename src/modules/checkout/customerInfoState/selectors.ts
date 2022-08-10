import { AppState } from 'redux/rootReducer'
import { CustomerInfoFormState } from '../types'

export const selectCustomerInfoFormState = (
  state: AppState
): CustomerInfoFormState | undefined => {
  return state.customerInfo?.customerInfoFormState
}
