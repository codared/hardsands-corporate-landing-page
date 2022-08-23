import { createContext, useReducer } from 'react'

import { assertNever } from '../../../utils/types'
import { EventHandler } from '../eventHandler'
import { ANALYTICS_PAGE_TYPES, EventhandlerEvents } from '../types'

export interface FreeTrialAttributes {
  // Comma separated list of bundles offered on the free trial page
  productList: string
  // Comma separated list of all prices offered
  freeTrialPrice: string
}

export interface AnalyticsState {
  pageType?: ANALYTICS_PAGE_TYPES
  freeTrialAttributes?: FreeTrialAttributes
  eventHandler: EventHandler<EventhandlerEvents>
}

export interface AnalyticsSetPageTypeAction {
  type: 'ANALYTICS_SET_PAGE_TYPE'
  payload?: ANALYTICS_PAGE_TYPES
}

export interface AnalyticsSetFreeTrialAttributesAction {
  type: 'ANALYTICS_SET_FREE_TRIAL_ATTRIBUTES'
  payload?: FreeTrialAttributes
}

export type AnalyticsActions =
  | AnalyticsSetPageTypeAction
  | AnalyticsSetFreeTrialAttributesAction

interface AnalyticsContextValue {
  state: AnalyticsState
  dispatch: React.Dispatch<AnalyticsActions>
}

const initialAnalyticsState: AnalyticsState = {
  eventHandler: new EventHandler(),
}

export const AnalyticsContext = createContext<AnalyticsContextValue>({
  state: initialAnalyticsState,
  dispatch: () => {
    throw new Error('dispatch not initialized')
  },
})

function reducer(
  state: AnalyticsState,
  action: AnalyticsActions
): AnalyticsState {
  switch (action.type) {
    case 'ANALYTICS_SET_PAGE_TYPE':
      return { ...state, pageType: action.payload }

    case 'ANALYTICS_SET_FREE_TRIAL_ATTRIBUTES':
      return { ...state, freeTrialAttributes: action.payload }

    default:
      throw new Error('Unsupported action type')
  }
}

const AnalyticsProvider: React.FC<{}> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialAnalyticsState)

  return (
    <AnalyticsContext.Provider value={{ state, dispatch }}>
      {children}
    </AnalyticsContext.Provider>
  )
}

export default AnalyticsProvider
