import Head from 'next/head'
import Script from 'next/script'

import React, { useEffect } from 'react'

import config from '../../../core/config'
import { layerPush } from '../functions/track'
import { useDisableAnalytics } from '../hooks/useDisableAnalytics'
import useTrackLocation from '../hooks/useTrackLocation'

const AnalyticsScriptTag = () => {
  const GTM_ID = config('TAG_MANAGER_ID')
  const disableAnalytics = useDisableAnalytics()


    useEffect(() => {
      if (!GTM_ID) {
        return
      }
      layerPush({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js',
      })
    }, [GTM_ID])



  useTrackLocation()

  if (!GTM_ID || disableAnalytics) {
    return null
  }

  return (
    <>
      <Head key="analytics_tagmanager_script">
        <link
          rel="preconnect"
          href={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
        />
        <script> window.dataLayer = window.dataLayer || [] </script>
      </Head>
      <Script
        key="gtm_script"
        type="text/javascript"
        src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
        strategy="afterInteractive"
      />
    </>
  )
}

export default AnalyticsScriptTag
