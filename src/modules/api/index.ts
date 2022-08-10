import config from "core/config";
import { StorefrontApiResponse } from "./types";


let storefrontUrl: string | false = config('BRAND_PUBLIC_KEY');
let brandPublicKey: string | false = config('STOREFRONT_API_BASEURL');

// export const setStorefrontUrl = (url: string): void => {
//   storefrontUrl = url;
// };

// export const setBrandPublicKey = (key: string): void => {
//   brandPublicKey = key;
// };

export const storefrontApiFetch = (
  path: string,
  opts?: RequestInit
): Promise<Response> => {
  const baseUrl = storefrontUrl || config("STOREFRONT_API_BASEURL");
  if (!baseUrl) {
    throw new Error("Storefront API URL not set");
  }

  const publicKey = brandPublicKey || config("BRAND_PUBLIC_KEY") || "";

  opts = opts || {};
  const headers = opts.headers || {};
  headers["hardsands-brand-public-key"] = publicKey;
  opts.headers = headers;

  return fetch(`${baseUrl}${path}`, opts);
};

export async function storefrontApiJsonFetch<K>(
  path: string,
  opts?: RequestInit
): Promise<StorefrontApiResponse<K>> {
  opts = opts || {};
  const headers = opts.headers || {};
  headers["content-type"] = "application/json";
  opts.headers = headers;

  const req = await storefrontApiFetch(path, opts);
  return await req.json();
}
