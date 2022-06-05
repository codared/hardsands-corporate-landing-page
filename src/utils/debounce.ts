export function debounce<K extends any[]>(
  func: (...args: K) => void,
  wait: number,
  immediate: boolean = false
) {
  let timeout: any
  return  (...args: K): void => {
    // @ts-ignore
    const context = this;
    const later = function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}
