import { captureException } from '@sentry/browser'
import { useStripe } from '@stripe/react-stripe-js'
import { useRouter } from 'next/dist/client/router'
import { useContext, useEffect, useState } from 'react'

import { CheckoutContext } from '../../..'
import config from '../../../core/config'
import { finalizeOrder } from '../actions'
import track from '../analytics'
import { Order } from '../types'

type UseAfterpayIntentProps = {
  order?: Order
  onSuccess?(): void
  onError?(messageError: string): void
}

export function useAfterpayIntent({
  order,
  onSuccess,
  onError,
}: UseAfterpayIntentProps = {}) {
  const router = useRouter()
  const stripe = useStripe()

  const { dispatch } = useContext(CheckoutContext)

  const [afterpayLoading, setAfterpayLoading] = useState(false)

  const isStripeReady = !!stripe
  const clientSecret = router.query.payment_intent_client_secret as string

  const paymentIntentError = (paymentError: string) => {
    captureException(paymentError)

    if (onError) {
      onError(
        `There was a problem completing your order with the selected payment method. Please try again using a
          different payment method or contact ${config(
            'BRAND_CONTACT_EMAIL'
          )} if the problem persists.`
      )
      track.trackPaymentError('afterpay') 
    }
  }

  const retrieveAfterpayIntent = async () => {
    if (!stripe || !clientSecret || !order?.is_draft) {
      return
    }

    setAfterpayLoading(true)
    const { error, paymentIntent } = await stripe.retrievePaymentIntent(
      clientSecret
    )

    const paymentError =
      ((error as unknown) as string) ||
      ((paymentIntent?.last_payment_error as unknown) as string)

    if (paymentError || !paymentIntent) {
      setAfterpayLoading(false)
      paymentIntentError(paymentError)
      throw paymentError
    }

    const finalOrder = await dispatch(
      finalizeOrder({
        paymentToken: paymentIntent.id,
        paymentMethod: 'stripe',
        providerMethod: 'afterpay',
      })
    )

    if (!finalOrder) {
      return
    }

    track.trackOrderPurchase(finalOrder)

    if (onSuccess) {
      return onSuccess()
    }
  }

  useEffect(() => {
    if (isStripeReady && clientSecret && order?.cart_hash) {
      retrieveAfterpayIntent()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isStripeReady, clientSecret, order?.cart_hash])

  return { retrieveAfterpayIntent, afterpayLoading, isStripeReady }
}
