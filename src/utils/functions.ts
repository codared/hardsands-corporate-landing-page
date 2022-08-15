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
