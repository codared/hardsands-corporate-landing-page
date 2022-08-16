/* eslint-disable react/display-name */

import { AppState } from "../../redux/rootReducer";
import { Product } from "./types";

export const selectAllProducts = (currency: string) => (state: AppState) => {
  return state.products.all[currency] as unknown as Product[] | undefined;
};

type FindSingleArgs =
  | { id: number; currency: string }
  | { slug: string; currency: string };

/**
 * Returns:
 * null if the products are loaded but can find by slug or id
 * undefined if the products are NOT loaded for that currency
 * Product if found
 */
export const selectSingleProduct =
  (opts: FindSingleArgs) => (state: AppState) => {
    if (!state.products) {
      return undefined;
    }

    const productsArr = state.products.all[opts.currency] as unknown as
      | Product[]
      | undefined;

    if (productsArr) {
      if ("slug" in opts) {
        return productsArr.find((a) => a.slug === opts.slug) ?? null;
      }
      if ("id" in opts) {
        return productsArr.find((a) => a.id === opts.id) ?? null;
      }
    }

    const singleProd = state.products.single[opts.currency];
    if (singleProd) {
      // if ("slug" in opts) {
      //   return singleArr.find((a) => a.slug === opts.slug) ?? undefined;
      // }
      // if ("id" in opts) {
        // return singleArr.find((a) => a.id === opts.id) ?? undefined;
        return singleProd ?? undefined;
      // }
    }

    return undefined;
  };

export const selectMultipleProducts =
  (currency: string, ids: number[]) => (state: AppState) => {
    const products = ids
      .map((id) => selectSingleProduct({ currency, id })(state))
      .filter((a) => a);

    if (products.length === ids.length) {
      return products as Product[];
    }
    return undefined;
  };

export const selectAllProductsOutOfStock =
  (currency: string) => (state: AppState) => {
    return selectAllProducts(currency)(state)?.filter(
      (p) => !p.variants["Plain"].instock || !p.variants["Customized"].instock
    );
  };
