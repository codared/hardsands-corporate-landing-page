import { storefrontApiJsonFetch } from '../api'
import { CountryResponse } from './types'

export async function fetchCountries(): Promise<CountryResponse[] | []> {
  const resp = await storefrontApiJsonFetch<CountryResponse[]>(`/api/countries`)

  if (resp.isError) {
    throw new Error(`Error fetching countries`)
  }

  return resp.result
}

export async function fetchCountryPlusProvinces(
  countryID: string
): Promise<CountryResponse> {
  const resp = await storefrontApiJsonFetch<CountryResponse>(
    `/api/countries/${countryID}`
  )

  if (resp.isError) {
    throw new Error(`Error fetching country`)
  }

  return resp.result
}
