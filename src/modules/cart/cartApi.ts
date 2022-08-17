import { storefrontApiJsonFetch } from "../api";
import {
  CartResponse,
  AddCartItemBody,
  ApplyOfferBody,
  UpdateCartItemBody,
  UpdateCartBody,
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
    headers: {
      "content-type": "application/json",
    },
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
      headers: {
        "content-type": "application/json",
      },
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
      headers: {
        "content-type": "application/json",
      },
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
  console.log("cart body", body);
  const resp = await storefrontApiJsonFetch<CartResponse>(
    `/api/cart/${cartId}`,
    {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
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
