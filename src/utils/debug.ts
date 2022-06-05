const DEBUG_KEY = 'hardsandsDebug'

export const addDebugInfo = (key: string, value: any) => {
  if (typeof window === 'undefined') {
    return
  }

  window[DEBUG_KEY] = window[DEBUG_KEY] || {}
  window[DEBUG_KEY][key] = value
}
