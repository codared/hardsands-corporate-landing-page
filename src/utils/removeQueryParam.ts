export const removeQueryParam = (queryParamName: string) => {
  if (typeof window === 'object') {
    const params = new URLSearchParams(window.location.search)

    params.delete(queryParamName)
    const paramString = params.toString()
    const newQueryString = paramString ? `?${paramString}` : ''

    const newUrl = `${window.location.pathname}${newQueryString}`
    window.history.replaceState({}, '', newUrl)
  }
}
