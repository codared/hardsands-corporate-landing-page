export type CURRENCY_CODES = string

type CurrencyPrices = {
  [s in CURRENCY_CODES]: number
}

export interface Product {
  id: number;
  slug: string;
  title: string;
  description?: string;
  thumbnailUrl: string;
  shopifyId?: string;
  currency: CURRENCY_CODES;
  outOfStock: boolean;
}
