import { getDynamicCookieDomain } from "./functions"

export const COOKIE_LANG_KEY = 'language'

export const setCookie = function(
  key: string,
  value = '',
  expirationDurationInDays = 1, // Value of 0 will indicate to expire at end of session
) {
  window.document.cookie = getSerializedCookie(
    key,
    value,
    expirationDurationInDays,
  )
}

export const getSerializedCookie = function (
  key: string,
  value = '',
  expirationDurationInDays = 1,
) {
  const expirationDate = new Date()
  expirationDate.setTime(
    expirationDate.getTime() + expirationDurationInDays * 24 * 60 * 60 * 1000
  )
  const expires = expirationDurationInDays ? `expires=${expirationDate.toUTCString()}` : ''

  return `${key}=${encodeURIComponent(value)};${expires};path=/;domain=${getDynamicCookieDomain()}`
}

export const removeCookie = function(
  key: string,
) {
  const expires = `expires=${new Date('1970-01-01').toUTCString()}`
  window.document.cookie = `${key}=${window.encodeURIComponent(
    ''
  )};${expires};path=/;domain=${getDynamicCookieDomain()}`
}

function getRawCookie(key: string): string {
  const name = `${key}=`
  const cookies = window.document.cookie.split(';')
  const cookiesLen = cookies.length
  let result = ''

  for (let i = 0; i < cookiesLen; i += 1) {
    let cookie = cookies[i]
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1)
    }
    if (cookie.indexOf(name) === 0) {
      result = cookie.substring(name.length, cookie.length)
    }
  }

  return result
}

export const getCookie = function(key: string): string {
  const result = getRawCookie(key)

  return window.decodeURIComponent(result)
}

export function hasCookie(key: string): boolean {
  return getRawCookie(key) !== ''
}

export function deleteCookie(key: string) {
  return setCookie(key, '', -1)
}
