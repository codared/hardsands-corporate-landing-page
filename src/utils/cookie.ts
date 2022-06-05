import config from './../core/config'

export const COOKIE_DISCOUNT_CODE = 'discount_code'

export const setCookie = function (
  key: string,
  value = '',
  expirationDuration = 1,
  domain = config('COOKIE_DOMAIN')
) {
  const expirationDate = new Date()
  expirationDate.setTime(
    expirationDate.getTime() + expirationDuration * 24 * 60 * 60 * 1000
  )
  const expires = `expires=${expirationDate.toUTCString()}`
  window.document.cookie = `${key}=${window.encodeURIComponent(
    value
  )};${expires};path=/;domain=${domain}`
}

export const removeCookie = function (
  key: string,
  domain = config('COOKIE_DOMAIN')
) {
  const expires = `expires=${new Date('1970-01-01').toUTCString()}`
  window.document.cookie = `${key}=${window.encodeURIComponent(
    ''
  )};${expires};path=/;domain=${domain}`
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

export const getCookie = function (key: string): string {
  const result = getRawCookie(key)

  return window.decodeURIComponent(result)
}

export function hasCookie(key: string): boolean {
  return getRawCookie(key) !== ''
}

export function deleteCookie(key: string, domain = config('COOKIE_DOMAIN')) {
  return setCookie(key, '', -1, domain)
}
