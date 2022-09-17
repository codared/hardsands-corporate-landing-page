import { requestJsonHeaders } from "utils/functions";
import { storefrontApiJsonFetch } from "../api";
import {
  BrandServicesAddress,
  BrandServicesCustomerInfoSubmitRequest,
  CheckoutMeta,
  CountryResponse,
  Order,
} from "./types";

export async function fetchCountries(): Promise<CountryResponse[] | []> {
  const resp = await storefrontApiJsonFetch<CountryResponse[]>(
    `/api/countries`
  );

  if (resp.isError) {
    throw new Error(`Error fetching countries`);
  }

  return resp.result;
}

export async function fetchCountryPlusProvinces(
  countryID: string
): Promise<CountryResponse> {
  const resp = await storefrontApiJsonFetch<CountryResponse>(
    `/api/countries/${countryID}`
  );

  if (resp.isError) {
    throw new Error(`Error fetching country`);
  }

  return resp.result;
}

export const getOrderFromCart = async (checkoutId: string): Promise<Order> => {
  const res = await storefrontApiJsonFetch<Order>(
    `/api/checkout/${checkoutId}`
  );

  if (res.isError) {
    if (res.name === "NotFoundError") {
      throw new Error(res.name);
    }
    throw new Error(res.message);
  }

  return res.result;
};

/**
 * Sets the email associated to the order.
 */
export const setOrderEmail = async (
  order: Order,
  email: string
): Promise<Order> => {
  const res = (await storefrontApiJsonFetch(
    `/api/checkout/orders/${order.id}/email?version=2`,
    {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: { "checkout-token": order.checkoutToken },
    }
  )) as unknown as { data: [Order] };

  return res.data[0];
};

/**
 * Brand services has a slightly different format for addresses in
 * request than in response. How fun!
 */
export function orderAddressToRequestAddress(address: BrandServicesAddress) {
  const {
    street_1: address1,
    street_2: address2,
    first_name,
    last_name,
    company,
    city,
    country,
    province,
    zip,
    phone_country_code,
    phone_number,
    verified,
    federal_tax_id,
  } = address;

  return {
    address1,
    address2,
    first_name,
    last_name,
    company,
    city,
    country,
    province,
    zip,
    phone_country_code,
    phone_number,
    verified,
    federal_tax_id,
  };
}

export function orderCustomerInfoToRequestAddress(
  address: BrandServicesCustomerInfoSubmitRequest
) {
  const {
    firstName,
    email,
    lastName,
    address1,
    city,
    countryId,
    zip,
    provinceId,
    phoneCode,
    phone,
    agreedToReceiveEmail,
  } = address;

  return {
    firstName,
    email,
    lastName,
    address1,
    city,
    countryId,
    zip,
    provinceId,
    phoneCode,
    phone,
    agreedToReceiveEmail,
  };
}

/**
 * Sets the shipping address for the order.
 */
export const setOrderCustomerdetails = async (
  order: Order,
  address: BrandServicesCustomerInfoSubmitRequest
): Promise<Order> => {
  const req = orderCustomerInfoToRequestAddress(address);
  const res = (await storefrontApiJsonFetch(
    `/api/checkout/customer-info/${order.checkoutToken}`,
    {
      method: "POST",
      headers: requestJsonHeaders(),
      body: JSON.stringify(req),
    }
  )) as unknown as { isError: boolean; result: Order };

  return res.result;
};

/**
 * Sets the shipping address for the order.
 */
export const setOrderShippingMethod = async (
  order: Order,
  shippingMethodId: number
): Promise<Order> => {
  const res = (await storefrontApiJsonFetch(
    `/api/checkout/shipping-details/${order.checkoutToken}`,
    {
      method: "POST",
      headers: requestJsonHeaders(),
      body: JSON.stringify({ shippingId: shippingMethodId }),
    }
  )) as unknown as { isError: boolean; result: Order };

  return res.result;
};

/**
 * Comfirm payment on Completion.
 */
export const completeOrderCheck = async (orderTokendata: {
  paymentToken: string;
  checkoutToken: string;
}) => {
  const res = (await storefrontApiJsonFetch(`/api/checkout/complete-order`, {
    method: "POST",
    body: JSON.stringify(orderTokendata),
  })) as { isError: boolean; result?: any; message?: string };

  return res;
};

/**
 * Sets the shipping address for the order.
 */
export const setOrderShippingAddress = async (
  order: Order,
  address: BrandServicesAddress
): Promise<Order> => {
  const req = orderAddressToRequestAddress(address);
  const res = (await storefrontApiJsonFetch(
    `/api/checkout/orders/${order.id}/shipping-address?version=2`,
    {
      method: "POST",
      headers: { "checkout-token": order.checkoutToken },
      body: JSON.stringify(req),
    }
  )) as unknown as { data: [Order] };

  return res.data[0];
};

/**
 * Sets the shipping method for the order.
 */
export const setShippingRate = async (order: Order, rateId: number) => {
  const res = (await storefrontApiJsonFetch(
    `/api/checkout/orders/${order.id}/shipping-rate?version=2`,
    {
      method: "POST",
      body: JSON.stringify({ shipping_zone_rate_id: rateId }),
      headers: { "checkout-token": order.checkoutToken },
    }
  )) as unknown as { data: [Order] };

  return res.data[0];
};

export const setOrderBillingAddress = async (
  order: Order,
  address: BrandServicesAddress
): Promise<Order> => {
  const req = orderAddressToRequestAddress(address);
  const res = (await storefrontApiJsonFetch(
    `/api/checkout/orders/${order.id}/billing-address?version=2`,
    {
      method: "POST",
      headers: { "checkout-token": order.checkoutToken },
      body: JSON.stringify(req),
    }
  )) as unknown as { data: [Order] };

  return res.data[0];
};

export const expressCheckout = async (
  order: Order,
  provider_name: string,
  token: string
): Promise<number> => {
  const req = {
    checkoutToken: token,
    provider_name,
  };

  const res = (await storefrontApiJsonFetch(
    `/api/checkout/orders/${order.id}/express-checkout`,
    {
      method: "POST",
      headers: { "checkout-token": order.checkoutToken },
      body: JSON.stringify(req),
    }
  )) as unknown as { paymentMethodId: number };

  return res.paymentMethodId;
};

export const submitOrder = async (
  order: Order,
  {
    paymentToken,
    paymentProviderName,
    paymentMethodId = null,
    providerMethod,
    checkoutMeta,
  }: {
    paymentToken: string;
    paymentProviderName: "stripe" | "braintree" | "amazonpay" | "affirm" | null;
    paymentMethodId: string | null;
    checkoutMeta?: CheckoutMeta;
    providerMethod?: string;
  },
  checkAvailableOffers = false
): Promise<Order> => {
  const body = {
    checkoutToken: paymentToken,
    provider_name: paymentProviderName,
    payment_method_id: paymentMethodId,
    checkout_meta: checkoutMeta,
    provider_method: providerMethod,
  };
  const method = "POST";
  const url = `/api/checkout/orders/${order.id}/submit?version=2&check_available_offers=${checkAvailableOffers}`;
  const headers = { "checkout-token": order.checkoutToken };
  const actionId = Math.random() * 10000;

  // @ts-ignore
  logger.debug("Submitting order", {
    action: "submitOrder",
    checkpoint: "before-submit",
    checkoutMeta,
    actionId,
    url,
    method,
    headers,
    body,
    orderId: order.id,
  });

  const res = (await storefrontApiJsonFetch(url, {
    method,
    headers,
    body: JSON.stringify(body),
  })) as unknown as { data: [Order] };

  // @ts-ignore
  logger.debug("Got submit order response", {
    action: "submitOrder",
    checkpoint: "response",
    actionId,
    orderId: order.id,
    response: res,
  });

  return res.data[0];
};
