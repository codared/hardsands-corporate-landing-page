import { UserAttribute } from '../userState/types'
import { loadScript } from '../utils/loadScript'

export interface GeoIp2Country {
  geoname_id: number
  iso_code?: string
  names?: Record<string, string>
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

  if (win.geoip2) {
    return win.geoip2
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

  return () => {
    if (countryPromise) {
      return countryPromise
    }

    countryPromise = loadGeoIp2().then((geoip2) => {
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
    })

    return countryPromise
  }
})()

/**
 * Identifies the user's country code using `getGeoIpCountry`.
 */
export async function getGeoIpCountryCode(): Promise<string | null> {
  try {
    // eslint-disable-next-line compat/compat
    const params = new URLSearchParams(window.location.search)
    const countryCode = params.get(GEOIP_COUNTRY_OVERRIDE)
    if (countryCode && countryCode.trim().length === 2) {
      return countryCode.trim().toUpperCase()
    }
  } catch (e) {
    // NOOP
  }

  const NOT_AVAILABLE = 'GeoIP not available'
  try {
    const country = await getGeoIpCountry()
    return country?.iso_code || NOT_AVAILABLE
  } catch (e) {
    // Don't die if we cannot load geoip2
    return NOT_AVAILABLE
  }
}

export const CountryAttribute: UserAttribute<string | null> = {
  key: 'country',

  computeOn: ['firstLoad'],

  getTraits(value) {
    if (!value) {
      value = 'GeoIP not available'
    }
    return [{ key: 'country', value: value }]
  },

  async computeFn(existing: string | null) {
    return (await getGeoIpCountryCode()) || existing
  },
}
