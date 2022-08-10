import { AppState } from '../../../redux/context'
import { CustomerInfoFormState } from '../types'

export const selectCustomerInfoFormState = (
  state: AppState
): CustomerInfoFormState | undefined => {
  return state.customerInfo?.customerInfoFormState
}
