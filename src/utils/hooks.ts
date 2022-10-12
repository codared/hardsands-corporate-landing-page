import {useEffect, useRef, MutableRefObject} from 'react'

/**
 * Returns a `ref` that indicates if the component is mounted.
 *
 * When performing async operations in components, the component can be
 * unmounted before the async operation completes; trying to set component
 * state in that case will lead to errors in the console.
 * Use this hook to check if the component is still mounted before updating the
 * state. (Dispatch is safe but may lead to undesireable UI behavior)
 */
export const useIsMountedRef = (): MutableRefObject<boolean> => {
  const isMounted = useRef(false)
  useEffect(() => {
    isMounted.current = true
    return () => { isMounted.current = false }
  }, [])

  return isMounted
}
