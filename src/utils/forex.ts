import { storefrontApiJsonFetch } from '../modules/api'

export type ExchangeRateMap = { [k: string]: number }

const fetchExchangeRates = async () => {
  const response = await storefrontApiJsonFetch<ExchangeRateMap>(
    '/api/exchange-rates'
  )

  if (response.isError) {
    throw new Error('Failed to fetch exchange rates')
  }

  return response.result
}

export const getExchangeRates: () => Promise<ExchangeRateMap> = (() => {
  let apiPromise: Promise<ExchangeRateMap>

  return function getExchangeRates() {
    if (apiPromise) {
      return apiPromise
    }
    return (apiPromise = fetchExchangeRates())
  }
})()
