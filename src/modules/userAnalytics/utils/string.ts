export function underscorize(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z\d_()[\]]/gi, '_')
    .replace(/_+/gi, '_')
}

export function parseSearchParams(search: string): Record<string, string> {
  if (!search) {
    return {}
  }

  return search
    .replace(/^\?/, '')
    .split('&')
    .map((param) => param.split('='))
    .reduce(
      (acc, [k, v]) => ({
        ...acc,
        [decodeURIComponent(k)]: decodeURIComponent(v),
      }),
      {} as Record<string, string>
    )
}

export function stripHtmlTag(htmlString: string) {
  return htmlString.replace(/(<([^>]+)>)/gi, '')
}
