import { useRef, useEffect } from 'react'

import { trackProductImpression } from '../functions/track'
import { EcommerceImpressionList, EcommerceImpressionPush } from '../types'

/**
 * Sets up tracking the impressions for a list of products.
 *
 * @param listIdentifier - Used to identify in which list the impressions
 * originated this identifier should not change... ever.
 * @param fire - Set to false if the list is not yet loaded. This will prevent
 * the hook from sending data to tag manager.
 *
 * @returns EcommerceImpressionPush A function to push impressions to the list.
 */
const useTrackProductList = (
  listIdentifier: string,
  currencyCode: string,
  fire = true
) => {
  const impressionsList = useRef<EcommerceImpressionList>([])
  const push: EcommerceImpressionPush = (i) => impressionsList.current.push(i)

  /*
   * This hook relies heavily on the fact that useEffect of the children fires
   * before useEffect of the parent.
   */
  useEffect(() => {
    if (!fire) {
      return
    }
    const toTrack = listIdentifier
      ? impressionsList.current.map((imp) => ({ ...imp, list: listIdentifier }))
      : [...impressionsList.current]

    trackProductImpression(toTrack, currencyCode)
    impressionsList.current = []
  }, [listIdentifier, fire])

  return push
}

export default useTrackProductList
