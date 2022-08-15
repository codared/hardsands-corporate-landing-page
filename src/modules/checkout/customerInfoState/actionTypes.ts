import { CustomerInfoFormState } from '../types'

export const CUSTOMER_INFO_FORM_UPDATED = 'CUSTOMER_INFO_FORM_UPDATED'

export interface CustomerInfoFormUpdated {
  type: typeof CUSTOMER_INFO_FORM_UPDATED
  customerInfoFormState: CustomerInfoFormState
}

export type CustomerInfoActionTypes = CustomerInfoFormUpdated
