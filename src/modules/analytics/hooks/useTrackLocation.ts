import { userState } from 'modules/hardsands/userState'
import { useRouter } from 'next/dist/client/router'
import { useEffect, useRef, useContext } from 'react'

import { parseSearchParams } from '../../../utils/string'
import lifecycle from '../../lifecycle/Lifecycle'
import { AnalyticsContext } from '../context/provider'
import { trackPageView } from '../functions/track'
import { ANALYTICS_PAGE_TYPES, PageView } from '../types'

const useTrackLocation = () => {
  const router = useRouter()
  const pathWithQuery = router.asPath
  const path = pathWithQuery.split('?')[0]
  const pageTypeRef = useRef<ANALYTICS_PAGE_TYPES | undefined>()
  const { state: { pageType, eventHandler } } = useContext(AnalyticsContext)

  function handleTrackPageView(pageViewAtts: PageView) {
    const res = trackPageView(pageViewAtts)
    res.finally(() => {
      eventHandler.emit('pageViewProcessed', [])
    })
  }

  // We store the pageType in a ref so it can change without clearing the
  // timeout.
  useEffect(() => {
    pageTypeRef.current = pageType
  }, [pageType])

  useEffect(() => {
    // Give a chance for other synchronous things (e.g. useAnalyticsUserTraits)
    // to add data to the dataLayer on page mount before tracking pageView.
    window?.setTimeout(() => {
      if (!pageTypeRef.current) {
        console.error(`Tracking page without type (path="${path}")`)
      }

      const queryParams = parseSearchParams(window.location.search)

      const utmParams = Object.entries(queryParams)
        .map(([key, value]) => [key.toLowerCase(), value])
        .filter(([key]) => key.indexOf('utm_') === 0)
        .reduce(
          (acc, [key, value]): Record<string, string> => ({
            ...acc,
            [key]: value,
          }),
          {}
        )

      const pageViewAtts: PageView = {
        path,
        utmParams,
        queryParams,
        title: document?.title,
        type: pageTypeRef.current,
        url: window?.location?.href,
      }

      // Trigger the lifecycle event BEFORE sending the analytics event in
      // order to send `identify` before `pageView`.
      lifecycle.handlePageview({ ...pageViewAtts })

      userState.initialTraitsPromise.then(() => {
        // setTimeout to ensure that identify call happens before Pageview
        setTimeout(() => {
          console.log('userState - sending pageview', pageViewAtts)
          handleTrackPageView(pageViewAtts)
        }, 300)
      })
    }, 0)
  }, [path])

  useEffect(() => {
    userState.initialTraitsPromise.then(() => {
      console.log(
        'userState - pushing optimizely user traits',
        userState.getTraits()
      )
    })
  }, [])
}

export default useTrackLocation
