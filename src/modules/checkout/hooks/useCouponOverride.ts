import { useContext, useEffect, useState } from 'react'

import { CheckoutContext } from '../../../redux/context'
import { applyCouponToOrder } from '../actions'
import track from '../analytics'
import { PromotionSource, Order } from '../types'

export function useCouponOverride(
  order: Order | null | false,
  queryParam: string | undefined | null
) {
  const { dispatch } = useContext(CheckoutContext)
  const [applied, setApplied] = useState(false)
  const [coupon, setCoupon] = useState<null | string>(null)

  useEffect(() => {
    if (!queryParam) {
      return
    }
    if (typeof window === 'object') {
      try {
        const params = new URLSearchParams(window.location.search)
        const couponValue = params.get(queryParam)
        setCoupon(couponValue)

        // remove coupon from URL
        params.delete(queryParam)
        const paramString = params.toString()
        const newUrl = `${window.location.pathname}${
          paramString ? '?' : ''
        }${paramString}`
        window.history.replaceState({}, '', newUrl)
        track.trackPromotionApplied(PromotionSource.OVERRIDE_COUPON)
      } catch (e) {
        // swallow in case replaceState isn't present
      }
    }
  }, [queryParam])

  useEffect(() => {
    if (order && coupon && !applied) {
      console.log('auto applying override_coupon', coupon)

      setApplied(true)
      dispatch(applyCouponToOrder(coupon))
    }
  }, [order, applied, coupon])
}
