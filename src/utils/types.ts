import { IconType } from "react-icons";

export type AnyDict = { [k: string]: any };
export type StringDict = { [k: string]: string };

export function isPromise<T extends any>(v: any | Promise<T>): v is Promise<T> {
  return typeof (v as Promise<T>).then === "function";
}

/**
 * Useful as a default case in switch statements to ensure exhaustive
 * handling of enums.
 */
export function assertNever(x: never): never {
  throw new Error(`Unexpected value ${x}`);
}

/**
 * Like `assertNever` but it does not throw at runtime.
 *
 * Useful for reducers that should only handle a subset of possible actions but
 * that subset needs to be handled exhaustively.
 */
export function softAssertNever(_x: never): void {}

export const identityFunction = <T = undefined>(item?: T) => {
  return item;
};

export type Promotion = {
  type: string;
};

export type PromotionCache = {
  [k: string]: Promotion;
};

export interface PromotionWithExtraData extends Promotion {
  isActive?: boolean;
}

export interface ProductDetails {
  otherImageUrls: string[];
}

export type AccountNavItemsType = {
  id: number;
  title: string;
  href: string;
  icon: IconType;
  children?: Array<AccountNavItemsType>;
};

export type ActionsType = {
  id: number;
  title: string;
  icon: IconType;
  isDefault?: boolean;
  fields?: ActionsFormType[];
  requiresCountryCode?: string;
};

export type ActionsFormType = {
  [key: string]: string | number | any[];
};

export interface EcommerceProduct {
  id: string | number;
  name?: string;
  brand?: string;
  category?: string;
  variant?: string;
  // In the client's selected currency
  price?: number;
}

export interface EcommerceCartAction extends EcommerceProduct {
  // The number of products that were added or removed from the cart.
  // **not the total**
  quantity: number;
  currency?: string;
}

export interface EcommercePurchase {
  // The order ID.
  id: string;
  // The store or affiliation from which this transaction occurred (e.g. Google
  // Store).
  affiliation?: string;
  // Specifies the total revenue or grand total associated with the transaction
  // (e.g. 11.99). This value may include shipping, tax costs, or other
  // adjustments to total revenue that you want to include as part of your
  // revenue calculations.
  revenue?: number;
  tax?: number;
  shipping?: number;
  coupon?: string;
}

export interface GenericEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
}
