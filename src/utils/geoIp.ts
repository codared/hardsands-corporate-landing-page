import { loadScript } from './loadScript'
import { SUPPORTED_CURRENCIES } from './supportedCurrencies'
import { StringDict } from './types'
import config from '../core/config'

export interface GeoIp2Country {
  geoname_id: number
  iso_code?: string
  names?: StringDict
}

interface GeoIp2Error {
  error: string
  code: string
}

interface GeoIp2 {
  country: (
    cb: (location: {
      country?: GeoIp2Country
      registered_country?: GeoIp2Country
    }) => void,
    errorCb: (e: GeoIp2Error) => void
  ) => void
}

const GEOIP_SRC = '//geoip-js.com/js/apis/geoip2/v2.1/geoip2.js'
const GEOIP_COUNTRY_OVERRIDE = 'country_preview'

async function loadGeoIp2() {
  const win = window as Window & {
    geoip2?: GeoIp2
  }

  // loadScript already takes care of only loading the same script once.
  await loadScript(GEOIP_SRC)

  if (!win.geoip2) {
    throw new Error('geoip2 not loaded')
  }

  return win.geoip2
}

/**
 * Identifies the user's country.
 *
 * The country will only be computed once. Multiple calls to this function will
 * return the same value.
 */
export const getGeoIpCountry: () => Promise<GeoIp2Country | null> = (() => {
  let countryPromise: Promise<GeoIp2Country | null>

  return function getGeoIpCountry() {
    if (countryPromise) {
      return countryPromise
    }

    return (countryPromise = loadGeoIp2().then((geoip2) => {
      return new Promise((resolve, reject) => {
        geoip2.country(
          (location) => {
            resolve(location?.country || location?.registered_country || null)
          },
          (e: GeoIp2Error) => {
            reject(e)
          }
        )
      })
    }))
  }
})()

/**
 * Identifies the user's country code using `getGeoIpCountry`.
 */
export async function getGeoIpCountryCode(): Promise<string | null> {
  if (config('ENVIRONMENT') !== 'production') {
    try {
      const params = new URLSearchParams(window.location.search)
      const countryCode = params.get(GEOIP_COUNTRY_OVERRIDE)
      if (countryCode && countryCode.trim().length === 2) {
        return countryCode.trim().toUpperCase()
      }
    } catch (e) {
      // NOOP
    }
  }

  try {
    const country = await getGeoIpCountry()
    return country?.iso_code || null
  } catch (e) {
    // Don't die if we cannot load geoip2
    return null
  }
}

export const isSupportedCurrency = (currency: string): boolean => {
  return SUPPORTED_CURRENCIES.includes(currency?.toUpperCase())
}
