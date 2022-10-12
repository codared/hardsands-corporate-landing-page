import { AppState } from 'redux/rootReducer'
import { CountryResponse } from '../types'

export const selectCountries = (state: AppState): CountryResponse[] => {
  return state.countries.allCountries
}

export const selectShippingCountries = (state: AppState): string[] => {
  return state.countries.shippingCountries
}
