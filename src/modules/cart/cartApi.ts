import { Order } from "modules/checkout/types";
import { requestJsonHeaders } from "utils/functions";
import { storefrontApiJsonFetch } from "../api";
import {
  CartResponse,
  AddCartItemBody,
  ApplyOfferBody,
  UpdateCartItemBody,
  UpdateCartBody,
  CreateCheckoutFromCartBody,
} from "./types";

export async function fetchCart(cartId: string): Promise<CartResponse | null> {
  const resp = await storefrontApiJsonFetch<CartResponse>(
    `/api/cart/${cartId}`
  );
  if (!resp.isError) {
    return resp.result;
  }

  return null;
}

type CreateCartRequest = {
  currency: string;
  offers?: string[];
};

export async function apiCreateCart(
  body: CreateCartRequest
): Promise<CartResponse> {
  const resp = await storefrontApiJsonFetch<CartResponse>(`/api/cart`, {
    method: "POST",
    headers: requestJsonHeaders(),
    body: JSON.stringify(body),
  });
  if (resp.isError) {
    throw new Error(`Error creating cart: ${resp.message}`);
  }
  return resp.result;
}

export async function apiAddItemToCart(
  cartId: string,
  body: AddCartItemBody
): Promise<CartResponse> {
  const resp = await storefrontApiJsonFetch<CartResponse>(
    `/api/cart/${cartId}/item`,
    {
      method: "POST",
      headers: requestJsonHeaders(),
      body: JSON.stringify(body),
    }
  );

  if (resp.isError) {
    throw new Error(`Error creating cart: ${resp.message}`);
  }

  return resp.result;
}

export async function apiRemoveCartItem(
  cartId: string,
  itemId: number
): Promise<CartResponse> {
  const resp = await storefrontApiJsonFetch<CartResponse>(
    `/api/cart/${cartId}/item/${itemId}`,
    {
      method: "DELETE",
    }
  );

  if (resp.isError) {
    throw new Error(`Error deleting cart item:`);
  }

  return resp.result;
}

export async function apiUpdateCartItem(
  cartId: string,
  itemId: number,
  body: UpdateCartItemBody
): Promise<CartResponse> {
  const resp = await storefrontApiJsonFetch<CartResponse>(
    `/api/cart/${cartId}/item/${itemId}`,
    {
      method: "PUT",
      headers: requestJsonHeaders(),
      body: JSON.stringify(body),
    }
  );

  if (resp.isError) {
    throw new Error(`Error updating cart item:`);
  }

  return resp.result;
}

export async function apiUpdateCart(
  cartId: string,
  body: UpdateCartBody
): Promise<CartResponse> {
  const resp = await storefrontApiJsonFetch<CartResponse>(
    `/api/cart/${cartId}`,
    {
      method: "PUT",
      headers: requestJsonHeaders(),
      body: JSON.stringify(body),
    }
  );

  if (resp.isError) {
    throw new Error(`Error updating cart item:`);
  }

  return resp.result;
}

export async function apiClearCart(cartId: string): Promise<CartResponse> {
  const resp = await storefrontApiJsonFetch<CartResponse>(
    `/api/cart/${cartId}/clear`,
    {
      method: "PUT",
    }
  );
  if (resp.isError) {
    throw new Error(`Error clearing cart`);
  }

  return resp.result;
}

export async function apiAttachCartOffer(
  cartId: string,
  offerSlug: string
): Promise<CartResponse> {
  const resp = await storefrontApiJsonFetch<CartResponse>(
    `/api/cart/${cartId}/attachOffer/${offerSlug}`,
    {
      method: "POST",
    }
  );

  if (resp.isError) {
    throw new Error(`Error attach offer to cart`);
  }

  return resp.result;
}

export async function apiApplyCartOffer(
  cartId: string,
  offerSlug: string,
  body?: ApplyOfferBody
): Promise<CartResponse> {
  const resp = await storefrontApiJsonFetch<CartResponse>(
    `/api/cart/${cartId}/offers/${offerSlug}/apply`,
    {
      method: "POST",
      headers: requestJsonHeaders(),
      body: JSON.stringify(body),
    }
  );

  if (resp.isError) {
    throw new Error(`Error attach offer to cart`);
  }

  return resp.result;
}

export async function apiRemoveCartOffer(
  cartId: string,
  offerSlug: string
): Promise<CartResponse> {
  const resp = await storefrontApiJsonFetch<CartResponse>(
    `/api/cart/${cartId}/offers/${offerSlug}`,
    { method: "DELETE" }
  );

  if (resp.isError) {
    throw new Error(`Error delete offer from cart`);
  }

  return resp.result;
}

export const createCartOrder = async (
  data: CreateCheckoutFromCartBody
): Promise<Order> => {
  const res = await storefrontApiJsonFetch<Order>(`/api/checkout`, {
    method: "POST",
    headers: requestJsonHeaders(),
    body: JSON.stringify(data),
  });
  if (res.isError) {
    throw new Error(res.message);
  }
  return res.result;
};
