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

export type Product = {
  [key: string]: string;
};

export type AccountNavItemsType = {
  title: string;
  href: string;
  icon: IconType;
  children?: Array<AccountNavItemsType>;
};
