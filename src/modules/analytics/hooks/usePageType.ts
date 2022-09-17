import { useEffect, useContext } from 'react'

import { AnalyticsContext } from '../context/provider'
import { ANALYTICS_PAGE_TYPES } from '../types'

/**
 * Sets the pageType on mount and unsets it on unmount so it's available for
 * the pageView event.
 *
 * @param pageType - If it's `null` the result will be a NOOP. This is done to
 * allow to explicitly opt-out of page categorization on `withLayout` so you
 * can categorize on a child component. This should only be used on exceptional
 * cases.
 */
function usePageType(pageType: ANALYTICS_PAGE_TYPES | null) {
  const { dispatch } = useContext(AnalyticsContext)

  useEffect(() => {
    if (pageType === null) {
      return
    }

    dispatch({ type: 'ANALYTICS_SET_PAGE_TYPE', payload: pageType })

    return () => {
      dispatch({ type: 'ANALYTICS_SET_PAGE_TYPE', payload: undefined })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export default usePageType
