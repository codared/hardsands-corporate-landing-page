import { StringDict } from './types'

/**
 * Returns str with the first letter uppercased.
 */
export function ucFirst(str: string) {
  const [first, ...rest] = str.split('')

  return `${first.toUpperCase()}${rest.join('')}`
}

/**
 * Replaces non-alphanumeric characters in a string with `replacementChar`
 */
export function slugify(str: string, replacementChar = '-') {
  return str.toLowerCase().replace(/[^a-z0-9-]+/g, replacementChar)
}

export function underscorize(str: string): string {
  return str.toLowerCase().split(' ').join('_')
}

export function parseSearchParams(search: string): StringDict {
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
      {} as StringDict
    )
}

export function stripHtmlTag(htmlString:string){
  return htmlString.replace(/(<([^>]+)>)/gi, "");
}