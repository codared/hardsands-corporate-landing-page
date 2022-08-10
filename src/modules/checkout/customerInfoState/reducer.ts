import { CustomerInfoState } from '../../..'
import { AppActionTypes } from '../../../redux/context'
import { CUSTOMER_INFO_FORM_UPDATED } from './actionTypes'

const initialState: CustomerInfoState = {}

export function customerInfoReducer(
  state = initialState,
  action: AppActionTypes
): CustomerInfoState {
  switch (action.type) {
    case CUSTOMER_INFO_FORM_UPDATED:
      return {
        ...state,
        customerInfoFormState: { ...action.customerInfoFormState },
      }

    default:
      return state
  }
}
