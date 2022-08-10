import { ThunkActionCreator, ActionCreator } from '../../../redux/context'
import { CustomerInfoFormState } from './../types'
import { CUSTOMER_INFO_FORM_UPDATED } from './actionTypes'

const customerInfoFormUpdatedAction: ActionCreator = (
  customerInfoFormState: CustomerInfoFormState
) => {
  return {
    type: CUSTOMER_INFO_FORM_UPDATED,
    customerInfoFormState,
  }
}

export const updateCustomerInfoForm: ThunkActionCreator<void> = (
  customerInfoFormState: CustomerInfoFormState
) => async (dispatch) => {
  dispatch(customerInfoFormUpdatedAction(customerInfoFormState))
}
