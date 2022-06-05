export const queryObjectToString = (query: { [key: string]: any }): string =>
  Object.keys(query)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
    )
    .join('&')
