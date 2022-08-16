export type CURRENCY_CODES = string;

type CurrencyPrices = {
  [s in CURRENCY_CODES]: number;
};

export interface ProductOptions {
  title: string;
  options: {
    [key: string]: {
      id: string | number;
      text: string;
    };
  };
}

export interface ProductVariants {
  title: string;
  price: number;
  currency: CURRENCY_CODES;
  sku: string;
  compareAtPrice: number;
  instock: boolean;
}

export interface Product {
  id: string | number;
  image?: string;
  title: string;
  description: string;
  tags: Array<string>;
  slug: string;
  options: ProductOptions;
  variants: {
    [key: string]: ProductVariants;
  };
}
