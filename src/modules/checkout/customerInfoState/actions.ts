import { ThunkActionCreator } from 'redux/rootReducer'
import { AppActionCreator } from 'redux/store'
import { CustomerInfoFormState } from './../types'
import { CUSTOMER_INFO_FORM_UPDATED } from './actionTypes'

const customerInfoFormUpdatedAction: AppActionCreator = (
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
