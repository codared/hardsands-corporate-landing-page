import { useRouter } from 'next/dist/client/router'
import { useState, useEffect } from 'react'

import { removeURLParameters } from '../../../utils/url'
import { CheckoutRedirectFlow } from '../types'

export function useCheckoutRedirectFlow() {
  const router = useRouter()
  const [
    checkoutRedirectFlow,
    setCheckoutRedirectFlow,
  ] = useState<CheckoutRedirectFlow>()

  const clearCheckoutRedirectFlow = () => setCheckoutRedirectFlow(undefined)

  useEffect(() => {
    const queryParams = router.query
    if (queryParams.flow == 'adyen-redirect' && !checkoutRedirectFlow) {
      setCheckoutRedirectFlow({
        flow: queryParams.flow,
        data: {
          MD: queryParams.MD,
          PaRes: queryParams.PaRes,
        },
      })
      window.history.replaceState(
        {},
        document.title,
        removeURLParameters(window.location.href, ['flow', 'MD', 'PaRes'])
      )
    }
  }, [])

  return [checkoutRedirectFlow, clearCheckoutRedirectFlow] as const
}
