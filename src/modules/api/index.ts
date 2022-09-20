import config from "core/config";
import { AnyDict } from "utils/types";
import { StorefrontApiResponse } from "./types";

let storefrontApiUrl: string | false = config("STOREFRONT_API_BASEURL");

export const storefrontApiFetch = (
  path: string,
  opts?: RequestInit
): Promise<Response> => {
  const baseUrl = storefrontApiUrl;
  if (!baseUrl) {
    throw new Error("Storefront API URL not set");
  }

  opts = opts || {};
  const headers = opts.headers || {};
  opts.headers = headers;

  return fetch(`${baseUrl}${path}`, opts);
};

export async function storefrontApiJsonFetch<K>(
  path: string,
  opts?: RequestInit
): Promise<StorefrontApiResponse<K>> {
  const req = await storefrontApiFetch(path, opts);
  return await req.json();
}


export class ApiError {
  readonly statusCode: number
  readonly data: AnyDict
  readonly id: string
  readonly apiPath: string

  constructor(
    statusCode: number,
    data: AnyDict,
    apiPath: string,
    id: string = 'api-error'
  ) {
    this.statusCode = statusCode
    this.apiPath = apiPath
    this.data = data
    this.id = id
  }
}
