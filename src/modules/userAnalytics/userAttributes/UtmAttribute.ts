import { PageView } from '../lifecycle/types'
import { UserAttribute } from '../userState/types'
import { getCookie } from '../utils/cookie'
import { THESIS_PAGEVIEW_COOKIE, ThesisCookie } from './types'

function addParam(
  existing: Record<string, string>,
  key: string,
  value: string
): Record<string, string> {
  const initialKey = `initial_${key}`
  const recentKey = `recent_${key}`
  const ret = { ...existing }

  if (!ret[initialKey]) {
    ret[initialKey] = value
  }

  ret[recentKey] = value
  // backwards compatibility. Is this still needed?
  ret[key] = value

  return ret
}

function computeOnPageview(
  state: Record<string, string>,
  pageViewData: PageView
) {
  const whitelisted_identify_keys = ['segmentparamtest', 'cset', 'sconcern']
  const { utmParams = {}, queryParams = {} } = pageViewData

  let retData = state || {}

  retData = Object.entries(utmParams).reduce(
    (acc, [key, value]) => addParam(acc, key, value),
    retData
  )

  retData = Object.entries(queryParams)
    .filter(([key]) => whitelisted_identify_keys.indexOf(key) > -1)
    .reduce((acc, [key, value]) => addParam(acc, key, value), retData)

  return retData
}

function computeOnFirstLoad(state: Record<string, string>) {
  const thesisCookie: ThesisCookie | null = JSON.parse(
    getCookie(THESIS_PAGEVIEW_COOKIE) || 'null'
  )

  if (!thesisCookie) {
    return state
  }

  let ret = { ...state }

  ret = Object.entries(thesisCookie.initial_utm).reduce(
    (acc, [key, value]) => addParam(acc, key, value),
    ret
  )

  ret = Object.entries(thesisCookie.recent_utm).reduce(
    (acc, [key, value]) => addParam(acc, key, value),
    ret
  )

  return ret
}

export const UtmAttribute: UserAttribute<Record<string, string>> = {
  key: 'utmParams',

  getTraits(state: Record<string, string>) {
    return Object.entries(state).map(([key, value]) => ({ key, value }))
  },

  computeOn: ['pageView', 'firstLoad'],

  computeFn(existing: Record<string, string>, data, event) {
    const state = existing || {}

    switch (event) {
      case 'pageView':
        return computeOnPageview(state, data as PageView)

      case 'firstLoad':
        return computeOnFirstLoad(state)
    }
    return state
  },
}
