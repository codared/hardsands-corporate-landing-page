import jwt_decode from "jwt-decode";
import { ProductOptions } from "modules/products/types";
import { SUPPORTED_CURRENCIES } from "./supportedCurrencies";

export const calculateDiscountPercentage = (
  originalValue: number,
  newValue: number
): number => {
  return originalValue > newValue
    ? Math.floor(((originalValue - newValue) / originalValue) * 100)
    : 0;
};

export const isSupportedCurrency = (currency: string): boolean => {
  return SUPPORTED_CURRENCIES.includes(currency?.toUpperCase());
};

export const getProductOptions = (options: ProductOptions) => {
  return Object.values(options.options).map((opt) => opt.text);
};

export const isTokenExpired = (token: string) => {
  const decoded: any = jwt_decode(token);
  return decoded.exp * 1000 < new Date().getTime();
  // return decoded.exp < new Date().getDate() - decoded.iat;
};

// export function getProductVariant(
//   sizes: SizeOption[],
//   isSubscriptionOption?: boolean
// ) {
//   if (isSubscriptionOption) {
//     return sizes.find((opts) => opts.text === SUBSCRIPTION_PURCHASE_SUBFLAG)
//   } else {
//     return sizes.find((opts) => opts.text === ONE_TIME_PURCHASE_SUBFLAG)
//   }
// }
