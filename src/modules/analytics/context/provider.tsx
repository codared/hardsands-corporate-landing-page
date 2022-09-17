import { createContext, ReactElement, useReducer } from 'react'

import { assertNever } from '../../../utils/types'
import { EventHandler } from '../eventHandler'
import { ANALYTICS_PAGE_TYPES, EventhandlerEvents } from '../types'

export interface AnalyticsState {
  pageType?: ANALYTICS_PAGE_TYPES
  eventHandler: EventHandler<EventhandlerEvents>
}

export interface AnalyticsSetPageTypeAction {
  type: 'ANALYTICS_SET_PAGE_TYPE'
  payload?: ANALYTICS_PAGE_TYPES
}

export type AnalyticsActions = AnalyticsSetPageTypeAction

interface AnalyticsContextValue {
  state: AnalyticsState
  dispatch: React.Dispatch<AnalyticsActions>
}

type AnalyticsProps = {
  children: ReactElement
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

function reducer(state: AnalyticsState, action: AnalyticsActions): AnalyticsState {
  switch (action.type) {
    case 'ANALYTICS_SET_PAGE_TYPE':
      return { ...state, pageType: action.payload }

    default:
      assertNever(action.type)
  }
}

const AnalyticsProvider = ({ children }: AnalyticsProps) => {
  const [state, dispatch] = useReducer(reducer, initialAnalyticsState)

  return (
    <AnalyticsContext.Provider value={{ state, dispatch }}>
      {children}
    </AnalyticsContext.Provider>
  )
}

export default AnalyticsProvider
