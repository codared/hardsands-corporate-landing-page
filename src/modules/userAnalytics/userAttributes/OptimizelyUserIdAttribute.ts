import { UserAttribute } from '../userState/types'

export type OptimizelyUserIdState = {
  id: string
}

const NOT_AVAILABLE = 'not available'

const getVisitorId = () => {
  const win = window as Window & {
    optimizely?: any
  }

  if (!win?.optimizely || typeof win.optimizely.get !== 'function') {
    return NOT_AVAILABLE
  }

  try {
    return win.optimizely.get('visitor_id').randomId || NOT_AVAILABLE
  } catch (e) {
    return NOT_AVAILABLE
  }
}

export const OptimizelyUserIdAttribute: UserAttribute<OptimizelyUserIdState> = {
  key: 'optimizelyUserId',

  persistent: false,

  getTraits(state: OptimizelyUserIdState) {
    return [{ key: 'optimizely_user_id', value: state.id }]
  },

  computeOn: ['firstLoad'],

  computeFn(existing: OptimizelyUserIdState) {
    const win = window as Window & {
      optimizely?: any
    }

    if (!win?.optimizely || typeof win.optimizely.get !== 'function') {
      return { ...existing }
    }

    return { id: getVisitorId() }
  },
}
