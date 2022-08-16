import { CURRENCY_CODES, Product } from "modules/products/types";

export declare const CART_ITEM_TYPE: {
  FREE_TRIAL: "FREE_TRIAL";
  GIFT: "GIFT";
  NORMAL: "NORMAL";
  WARRANTY: "WARRANTY";
  PERCENT_OFF_PRODUCT: "PERCENT_OFF_PRODUCT";
  PRODUCT_PRICE_OVERRIDE: "PRODUCT_PRICE_OVERRIDE";
};

export declare type CART_ITEM_TYPE =
  typeof CART_ITEM_TYPE[keyof typeof CART_ITEM_TYPE];

export type CartResponseSizeOption = Pick<any, "id" | "text">;

export class AddCartItemBody {
  productId: number | undefined;
  quantity?: number;
  type?: "WARRANTY" | "NORMAL";
}

export class UpdateCartItemBody {
  quantity: number | undefined;
}

export class UpdateCartBody {
  currency: string | undefined;
}

export class ApplyOfferBody {
  productCustomizationOptionIds?: number[];
}

/**
 * Enough to describe the product - title, image, description
 */
export type CartResponseItem = {
  id: number;
  key: string;
  type: CART_ITEM_TYPE;

  // product information
  product: Product;
  parent_id?: number;

  currency: string;

  // selected information
  selectedSize: CartResponseSizeOption;

  // price stuff
  retailPrice: number;
  price: number; // price customer actually pays
  quantity: number;
  total: number; // price x quantity
};

export interface CartResponse {
  id: string;
  currency: CURRENCY_CODES;
  items: CartResponseItem[];
  discountTotal: number;
  subtotal: number;
  total: number;
}

export interface CartCurrencyType {
  [key: string]: string;
}

export interface Coupon {
  amount_off: number | null;
  coupon_type: "percent_off" | "amount_off" | "amount_override";
  description: null;
  duration_in_months: null;
  formatted_override_amount: string | null;
  free_trial: boolean;
  is_active: boolean;
  max_redemptions: number | null;
  override_amount: number | null;
  percent_off: number | null;
  redeem_by_date: string | null;
}

export interface DiscountReducer {
  couponName: string | null;
  coupon: Coupon | null;
  discountApplied: boolean;
}
