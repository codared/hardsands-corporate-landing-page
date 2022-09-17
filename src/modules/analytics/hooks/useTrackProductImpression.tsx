import { useEffect } from 'react'

import { trackProductImpression } from '../functions/track'
import { EcommerceProduct, EcommerceImpressionPush } from '../types'

/**
 * Tracks the impression of a product snippet. **Do not use this to track
 * product details page.**
 *
 * @param push - The function to push an impression to the list.
 * @param trackOrphaned - Whether to track the impression if there's no push.
 */
const useTrackProductImpression = (
  product: EcommerceProduct,
  currencyCode: string,
  push?: EcommerceImpressionPush,
  trackOrphaned = true
) => {
  useEffect(() => {
    const impression = {
      id: product.id,
      name: product.name,
      price: product.price,
    }
    if (!push && !trackOrphaned) {
      return
    }

    push ? push(impression) : trackProductImpression([impression], currencyCode)
  }, [product.id])
}

export default useTrackProductImpression
