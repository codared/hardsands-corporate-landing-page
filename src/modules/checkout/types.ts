import { CURRENCY_CODES } from "modules/products/types";
import { ReactElement } from "react";
import { ExchangeRateMap } from "utils/forex";
import { AnyDict } from "utils/types";

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

export interface TaxLine {
  amount: Amount;
  rate: number;
  title: string;
  is_vat: boolean;
}

export interface Order extends OrderTotal {
  id: number;
  applied_credit_balance: Amount;
  available_user_credit: Amount;
  cart_hash: string;
  billing_address: { data: BrandServicesAddress | EmptyArray };
  billing_same_as_shipping_address: boolean;
  checkout_token: string;
  created_at: string;
  upsell: string;
  discounts: Discount[];
  is_draft: boolean;
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
