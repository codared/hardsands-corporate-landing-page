import { AppActionTypes } from '../../../redux/context'
import { CountryState } from '../types'
import {
  COUNTRIES_RECEIVED,
  COUNTRY_AND_PROVINCES_RECEIVED,
  GET_EXCHANGE_RATES,
  SET_SHIPPING_COUNTRIES,
} from './actionTypes'

const initialState: CountryState = {
  allCountries: [],
  shippingCountries: [],
  exchangeRates: null,
}

export function countryReducer(
  state = initialState,
  action: AppActionTypes
): CountryState {
  let countries = []

  switch (action.type) {
    case COUNTRIES_RECEIVED:
      return { ...state, allCountries: action.countries }

    case COUNTRY_AND_PROVINCES_RECEIVED:
      countries = state.allCountries.map((country) => {
        if (country.id === action.country.id) {
          const updatedCountry = { ...country, ...action.country }
          updatedCountry.provincesReceived = true
          return updatedCountry
        }
        return country
      })
      return { ...state, allCountries: countries }

    case SET_SHIPPING_COUNTRIES:
      return { ...state, shippingCountries: action.countries }

    case GET_EXCHANGE_RATES:
      return { ...state, exchangeRates: action.payload.exchangeRates }

    default:
      return state
  }
}
