import { ExchangeRateMap } from '../../../utils/forex'
import { CountryResponse } from '../types'

export const COUNTRIES_RECEIVED = 'COUNTRIES_RECEIVED'
export const COUNTRY_AND_PROVINCES_RECEIVED = 'COUNTRY_AND_PROVINCES_RECEIVED'
export const SET_SHIPPING_COUNTRIES = 'SET_SHIPPING_COUNTRIES'
export const GET_EXCHANGE_RATES = 'GET_EXCHANGE_RATES'

export interface CountriesReceivedAction {
  type: typeof COUNTRIES_RECEIVED
  countries: CountryResponse[]
}

export interface CountryAndProvincesReceivedAction {
  type: typeof COUNTRY_AND_PROVINCES_RECEIVED
  country: CountryResponse
}

export interface SetShippingCountriesAction {
  type: typeof SET_SHIPPING_COUNTRIES
  countries: string[]
}

export interface GetExchangeRates {
  type: typeof GET_EXCHANGE_RATES
  payload: {
    exchangeRates: ExchangeRateMap
  }
}

export type CountriesActionTypes =
  | CountriesReceivedAction
  | CountryAndProvincesReceivedAction
  | SetShippingCountriesAction
  | GetExchangeRates
