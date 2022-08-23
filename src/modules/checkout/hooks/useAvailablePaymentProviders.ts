import { useEffect, useState } from 'react'

// import { getAvailablePaymentProviders } from '../../api'
// import { AvailablePaymentProviders } from '../../api/apiTypes'
// import { Order } from '../types'

// export function useAvailablePaymentProviders(order: Order) {
//   const [
//     availablePaymentProviders,
//     setAvailablePaymentProviders
//   ] = useState<AvailablePaymentProviders | undefined>(undefined)

//   useEffect(() => {
//       if (!order) {
//           return
//       }

//       getAvailablePaymentProviders(order).then(paymentProviders => {
//           setAvailablePaymentProviders(paymentProviders)
//       })

//   }, [order])

//   return availablePaymentProviders
// }
