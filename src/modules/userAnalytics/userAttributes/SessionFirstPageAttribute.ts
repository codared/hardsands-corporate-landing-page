import { PageView } from '../lifecycle/types'
import { UserAttribute } from '../userState/types'
import {getCookie} from '../utils/cookie'
import {THESIS_PAGEVIEW_COOKIE, ThesisCookie} from './types'

interface SessionFirstPageState {
  // This is the first path the user ever landed on.
  initialPath: string | null

  // This is the first path the user landed on in the past INACTIVITY_TIME
  recentPath: string | null

  // The last time we saw this user. If it's been more than INACTIVITY_TIME,
  // the recent path will be updated.
  lastActivityTimestamp: number | null

  [k: string]: string | number | null
}

const INACTIVITY_TIME = 1000 * 60 * 60 * 24 // 24 hours

function computeOnPageview(state: SessionFirstPageState | undefined, data: PageView & { isFirst: boolean }): SessionFirstPageState {
  if (!state?.initialPath) {
    return {
      initialPath: data.path,
      recentPath: data.path,
      lastActivityTimestamp: Date.now(),
    }
  }

  const prevActivity = state.lastActivityTimestamp

  state.lastActivityTimestamp = Date.now()

  if (!data.isFirst) {
    return state
  }

  const timeDiff = state.lastActivityTimestamp - prevActivity!

  if (timeDiff > INACTIVITY_TIME) {
    state.recentPath = data.path
  }

  return state
}

function computeOnFirstLoad(state: SessionFirstPageState): SessionFirstPageState {
  const thesisCookie: ThesisCookie | null = JSON.parse(
    getCookie(THESIS_PAGEVIEW_COOKIE) || 'null'
  )

  if (!thesisCookie) {
    return state
  }

  if (!state.initialPath) {
    state.initialPath = thesisCookie.initial_path
  }

  if (
    // Last recorded activity is outside our session window
    (state.lastActivityTimestamp || 0) < Date.now() - INACTIVITY_TIME
    &&
    // And the last activity in thesis is within our session window
    thesisCookie.recent_timestamp > (Date.now() - INACTIVITY_TIME)
  ) {
    state.recentPath = thesisCookie.recent_path
    state.lastActivityTimestamp = thesisCookie.recent_timestamp
  }

  return state
}

export const SessionFirstPageAttribute: UserAttribute<SessionFirstPageState> = {
  key: 'sessionFirstPage',

  getTraits(state: SessionFirstPageState) {
    return [
      { key: 'initial_session_first_page_path', value: state.initialPath! },
      { key: 'recent_session_first_page_path', value: state.recentPath! },
    ]
  },

  computeOn: ['pageView', 'firstLoad'],

  computeFn( existing: SessionFirstPageState, data, event) {

    switch(event) {
      case 'pageView': {
        const pageViewData = data as PageView & { isFirst: boolean }
        return computeOnPageview(existing, pageViewData)
      }

      case 'firstLoad':
        return computeOnFirstLoad(existing || {})
    }
    return existing
  },
}
