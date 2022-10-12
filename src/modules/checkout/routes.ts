/**
 * As `hardsands-checkout` is a package, it should not define its own routes.
 * Instead, this file defines what routes the package needs in order to
 * correctly function.
 */
type RouteParams = { [k: string]: string | number }
type RouteFunction<T extends RouteParams> = (params?: T) => string

export interface CheckoutRoutes extends Record<string, RouteFunction<never>> {
  checkout: (params?: { hash: string; coupon?: string }) => string
  checkoutConfirmation: (params?: { hash: string }) => string
  productsPage: () => string
  homePage: () => string
  pageNotFound: () => string
  privacyPolicy: () => string
  returnPolicy: () => string
  termsOfService: () => string
  subscriptions: () => string
}

let routes: CheckoutRoutes | undefined

export function setCheckoutRoutes(inRoutes: CheckoutRoutes) {
  routes = Object.freeze({ ...inRoutes })
}

export function getCheckoutRoutes(): CheckoutRoutes | undefined {
  return routes
}
