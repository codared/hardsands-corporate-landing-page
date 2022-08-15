export type CURRENCY_CODES = string;

type CurrencyPrices = {
  [s in CURRENCY_CODES]: number;
};

// export interface Product {
//   id: number;
//   slug: string;
//   title: string;
//   description?: string;
//   thumbnailUrl: string;
//   shopifyId?: string;
//   currency: CURRENCY_CODES;
//   outOfStock: boolean;
// }

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
  title: string;
  description: string;
  tags: Array<string>;
  slug: string;
  options: ProductOptions;
  variants: {
    [key: string]: ProductVariants;
  };
}
