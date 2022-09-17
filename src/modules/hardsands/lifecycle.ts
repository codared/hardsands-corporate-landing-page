import { hasCookie, deleteCookie } from '@pangaea-holdings/pangaea-checkout'

import lifecycle from '../../lifecycle/Lifecycle'
import { optimizelyPush } from '../../optimizely'
import { userState } from './userState'

/**
 * Register all application related lifecycle listeners here.
 */
lifecycle.registerListeners({
  firstLoad: () => {
    userState.handle('firstLoad', undefined)

    // Clear theese cookies if set.
    const cookiesToClean = ['segmentTraits']

    for(const cookieKey of cookiesToClean) {
      if (hasCookie(cookieKey)) {
        deleteCookie(cookieKey)
      }
    }
  },

  optimizelyPageActivated: (atts) => {
    userState.handle('optimizelyPageActivated', atts)
  },

  pageView: (atts) => {
    const { isFirst } = atts

    if (!isFirst) {
      optimizelyPush({ type: 'activate' })
    }

    userState.handle('pageView', atts)
  },

  shippingAddressUpdated: (atts) => {
    userState.handle('shippingAddressUpdated', atts)
  },

  orderConfirmed: (atts) => {
    userState.handle('orderConfirmed', atts)
  }
})

// configure
export default lifecycle
