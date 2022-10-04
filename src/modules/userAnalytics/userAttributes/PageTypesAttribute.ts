import { PageView } from '../lifecycle/types'
import { UserAttribute } from '../userState/types'
import { getCookie } from '../utils/cookie'
import { ThesisCookie, THESIS_PAGEVIEW_COOKIE } from './types'

const populateInitialRecentByType = (
  existing: PageTypesAttributeState,
  {
    type,
    path,
    url,
  }: {
    type: string | undefined
    path: string
    url: string
  }
) => {
  const initialKey = `initial_${type}_path`
  const recentKey = `recent_${type}_path`

  if (!type) {
    return existing
  }

  if (!existing[initialKey]) {
    existing[initialKey] = path

    if (type === 'landing_page') {
      existing.initial_landing_page_url = url
    }
  }

  existing[recentKey] = path

  // We need to keep the timestamp for landing_page to compare with thesis.
  if (type === 'landing_page') {
    existing.recent_landing_page_timestamp = Date.now()
    existing.recent_landing_page_url = url
  }

  return existing
}

function computeOnPageview(
  state: PageTypesAttributeState,
  atts: PageView
): PageTypesAttributeState {
  const { type, path, url = '' } = atts

  return populateInitialRecentByType(state, { type, path, url })
}

function computeOnFirstLoad(
  state: PageTypesAttributeState
): PageTypesAttributeState {
  let thesisCookie: ThesisCookie | null = null
  try {
    thesisCookie = JSON.parse(getCookie(THESIS_PAGEVIEW_COOKIE) || 'null')
  } catch (e) {
    // console.error('error reading thesisCookie', e)
  }

  if (!thesisCookie) {
    return state
  }

  if (!state.initial_landing_page_path) {
    state.initial_landing_page_path = thesisCookie.initial_path
    state.initial_landing_page_url = thesisCookie.initial_url
  }

  // The user might have visited a lumin-next landing_page more recently.
  if ((state.recent_landing_page_timestamp || 0) < Date.now()) {
    state.recent_landing_page_path = thesisCookie.recent_path
    state.recent_landing_page_url = thesisCookie.recent_url
  }

  return state
}

export type PageTypesAttributeState = Record<string, string> & {
  recent_landing_page_timestamp?: number
}
export const PageTypesAttribute: UserAttribute<PageTypesAttributeState> = {
  key: 'initialRecentPageTypes',
  computeOn: ['pageView', 'firstLoad'],

  computeFn: (existing, atts, event) => {
    const state = existing || {}
    switch (event) {
      case 'pageView':
        return computeOnPageview(state, atts as PageView)

      case 'firstLoad':
        return computeOnFirstLoad(state)
    }

    return state
  },

  getTraits: (state) => {
    return Object.entries(state || {}).map(([key, value]) => ({ key, value }))
  },
}
