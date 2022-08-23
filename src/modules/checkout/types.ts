import {
  EcommerceCartAction,
  EcommerceProduct,
  EcommercePurchase,
} from "modules/analytics/types";
import { CURRENCY_CODES, Product } from "modules/products/types";
import { ReactElement } from "react";
import { ExchangeRateMap } from "utils/forex";
import { AnyDict, GenericEvent } from "utils/types";

type EmptyArray = [];

export interface CheckoutError {
  key: string;
  message: string;
  path: string;
}

export type WithErrors<T extends AnyDict> = T & {
  errors?: { [k in keyof T]?: CheckoutError | null };
};

export type ShippingMethodType = {
  title: string;
  subTitle: string;
  content: ReactElement;
  value: string | number;
  isChecked?: boolean;
};

export interface Amount {
  amount: number;
  amount_usd_float: number;
  amount_smallest_unit: number;
}

export interface OrderTotal {
  currency: CURRENCY_CODES;
  discount_amount: Amount;
  type: string;
  shipping_amount: Amount;
  subtotal: Amount;
  items_total: Amount;
  tax_amount: Amount;
  total: Amount;
}

export interface BrandServicesCustomerInfoSubmitRequest {
  firstName: string;
  email: string;
  lastName: string;
  address1: string;
  city: string;
  countryId: string;
  zip: string;
  provinceId: string;
  phoneCode: string;
  phone: string;
  agreedToReceiveEmail: boolean;
}
export interface BrandServicesAddress {
  first_name: string;
  last_name: string;
  street_1: string;
  street_2: string | null;
  company: string;
  city: string;
  state: string;
  phone_number: string;
  phone_country_code: string;
  zip: string | null;
  province: string | null;
  country: string;
  verified: boolean;
  federal_tax_id?: string;
}
export interface Discount {
  currency: string;
  mechanism: "offer" | "coupon";
  type: "PERCENT_OFF" | "AMOUNT_OFF";
  value: Amount;
  percent_off: number | null;
  coupon_id: number | null;
  offer_id: number | null;
  coupon_name: string | null;
  promotion_code: string | null;
}

export type PaypalPaymentMethod = {
  type: "paypal";
  email: string;
};

export type CardBrand =
  | "American Express"
  | "Visa"
  | "Discover"
  | "JCB"
  | "Diners Club"
  | "UnionPay"
  | "Mastercard";

export type CardPaymentMethod = {
  type: "card";
  brand: string;
  exp_month: number;
  exp_year: number;
  last_4: string;
  name: string;
};

type CashOnDeliveryPaymentMethod = {
  type: "cash";
};

type AmazonPayPaymentMethod = {
  type: "amazonpay";
};

type AffirmPaymentMethod = {
  type: "affirm";
};

type AfterpayPaymentMethod = {
  type: "afterpay";
};

export type OrderPaymentMethod =
  | CardPaymentMethod
  | PaypalPaymentMethod
  | CashOnDeliveryPaymentMethod
  | AmazonPayPaymentMethod
  | AffirmPaymentMethod
  | AfterpayPaymentMethod;

export interface ShippingRate {
  id: number;
  title: string;
  desc: string;
  price: Amount;
  currency: string;
  selected: boolean;
}

export interface ShippingLine {
  title: string;
  amount: Amount;
}

export interface TaxLine {
  amount: Amount;
  rate: number;
  title: string;
  is_vat: boolean;
}

export const OFFER_TYPES = {
  AMOUNT_OFF: "AMOUNT_OFF" as const,
  AMOUNT_OVERRIDE: "AMOUNT_OVERRIDE" as const,
  FREE_GIFT: "FREE_GIFT" as const,
  FREE_TRIAL: "FREE_TRIAL" as const,
  PERCENT_OFF: "PERCENT_OFF" as const,
  PERCENT_OFF_PRODUCT: "PERCENT_OFF_PRODUCT" as const,
  PRODUCT_PRICE_OVERRIDE: "PRODUCT_PRICE_OVERRIDE" as const,
};

export type OFFER_TYPES = typeof OFFER_TYPES[keyof typeof OFFER_TYPES];

export interface OrderBaseOffer {
  id: number;
  type: OFFER_TYPES;
  prevent_cancellation?: boolean;
}

export interface OrderItem {
  price: number;
  quantity: number;
  thumbnail_url: string;
  currency: string;
  title: string;
  total: number;
  productVariantKey: string;
  product_id: number;
  product_slug: string;
  shopify_id: number;
  type: string;
  retail_price: number;
  product: Product;
  option_values: {
    [key: string]: any;
  };
  offer_id?: number;
  offer: any;
  id?: number; // subscription_item_id
  sku?: string;
  discount_rule_percent?: number;
}

export interface Order extends OrderTotal {
  id: number;
  applied_credit_balance: Amount;
  available_user_credit: Amount;
  cart_hash: string;
  cartHash: string;
  checkoutToken: string;
  shippingDetails: any;
  billing_address: { data: BrandServicesAddress | EmptyArray };
  billing_same_as_shipping_address: boolean;
  checkout_token: string;
  created_at: string;
  upsell: string;
  discounts: Discount[];
  is_draft: boolean;
  items: OrderItem[];
  order_items: { data: any[] };
  payment_method: OrderPaymentMethod | null;
  shipping_address: { data: BrandServicesAddress | EmptyArray };
  shipping_lines: {
    data: any[];
  };
  shipping_rates: {
    data: ShippingRate[];
  };
  status: string;
  tax_lines: {
    data: TaxLine[];
  };
  totalDue: number;
  total_due: Amount;
  usd_revenue?: Amount;
  updated_at: string;
  user?: {
    data: WithErrors<UserData>;
  };
  tracking_code?: string;
  tracking_url?: string;
}

export interface UserData {
  email: string;
  order_count?: number;
}

export interface PaymentMethod {
  id: number | null;
  provider: "stripe" | "braintree" | "amazonpay" | "adyen" | "affirm";
  token: string | null;
}

export type Traits = Record<string, string | number | boolean | null>;

export interface UserStateMinimal {
  getFlatTraits: () => Traits;
}

export interface CountryState {
  allCountries: CountryResponse[];
  shippingCountries: string[];
  exchangeRates: ExchangeRateMap | null;
}

export interface Province {
  id: string;
  name: string;
  alternateNames: string[];
  countryId: string;
}

export interface CountryResponse {
  id: string;
  addressFormat: string;
  dialCode: string;
  flagPath: string;
  name: string;
  provinceLabel: string;
  zipLabel: string;
  zipRequired: boolean;
  provinces?: Province[];
  provincesReceived?: boolean;
}

export interface CustomerInfoFormState {
  email: string;
  firstName: string;
  lastName: string;
  company?: string;
  address1: string;
  address2?: string;
  city: string;
  country: string;
  province: string;
  zip: string;
  phoneCountryCode: string;
  phone: string;
  federalTaxId?: string;
}

export interface AddressInfo {
  firstName: string;
  lastName: string;
  company?: string;
  address1: string;
  address2?: string;
  city: string;
  country: string;
  province: string;
  zip: string;
  phoneCountryCode: string;
  phone: string;
}

export interface CardInfo {
  cardNumber: string;
  date: string;
  cvc: string;
  zip: string;
  cardHolderName: string;
}

export interface CustomerInfoState {
  customerInfoFormState?: CustomerInfoFormState;
  billingAddressSameAsShipping?: boolean;
  billingAddress?: AddressInfo;
  cardInfo?: CardInfo;
}

export type TokenizationMethod = "apple_pay" | "google_pay" | "unknown";

export interface Card3DSData {
  type: string;
  payment_provider: string;
  card_brand: string;
  country: string;
}

export enum PromotionSource {
  MANUAL_CHECKOUT = "manual_checkout",
  MANUAL_CART = "manual_cart",
  OVERRIDE_COUPON = "override_coupon",
  DISCOUNT_URL = "discount_url",
}

export interface CheckoutTrackingFunctions {
  layerPush: (data: { [k: string]: any }) => Promise<void>;
  trackProductClick: (product: EcommerceProduct) => Promise<void>;
  trackCartAdd: (product: EcommerceCartAction) => Promise<void>;
  trackProductDetail: (product: EcommerceProduct) => Promise<void>;
  trackBeginCheckout: (
    cart: EcommerceCartAction[],
    data?: string
  ) => Promise<void>;
  trackCheckoutStep: (step: number, data?: string) => Promise<void>;
  trackCheckoutData: (step: number, data: string) => Promise<void>;
  trackPurchase: (
    data: EcommercePurchase,
    products: EcommerceCartAction[]
  ) => Promise<void>;
  trackImpactConversion: (
    data: EcommercePurchase,
    products: EcommerceCartAction[]
  ) => Promise<void>;
  trackEvent: (event: GenericEvent) => Promise<void>;
  trackLifecycleShippingAddressUpdated?: (att: BrandServicesAddress) => void;
}

export type CHECKOUT_REDIRECT_FLOWS = "adyen-redirect";

export interface CheckoutRedirectFlow {
  flow: CHECKOUT_REDIRECT_FLOWS;
  data?: {
    [key: string]: any;
  };
}

export interface ShippingRatesPayload {
  shipping_rates: ShippingRate[];
  shipping_lines: ShippingLine[];
  shipping_amount: Amount;
  tax_amount: Amount;
  tax_lines: TaxLine[];
  subtotal: Amount;
  total: Amount;
}

export interface CreditInfo {
  applied_credit_balance: Amount;
  available_user_credit: Amount;
  total_due: Amount;
}

export interface CheckoutMeta {
  apply_credit?: boolean;
}
