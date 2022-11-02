import config from "core/config";
import { AnyDict } from "utils/types";
import { StorefrontApiResponse } from "./types";

let storefrontApiUrl: string | false = config("STOREFRONT_API_BASEURL");

export const storefrontApiFetch = (
  path: string,
  opts?: RequestInit,
  internal: boolean = true
): Promise<Response> => {
  try {
    const baseUrl = storefrontApiUrl;
    if (!baseUrl) {
      throw new Error("Storefront API URL not set");
    }

    opts = opts || {};
    const headers = opts.headers || {};
    opts.headers = headers;

    return fetch(internal ? `${baseUrl}${path}` : path, opts);
  } catch (error) {
    console.log(error);
    return error as any;
  }
};

export async function storefrontApiJsonFetch<K>(
  path: string,
  opts?: RequestInit,
  internal: boolean = true
): Promise<StorefrontApiResponse<K>> {
  const req = await storefrontApiFetch(path, opts, internal);
  return await req.json();
}

export class ApiError {
  readonly statusCode: number;
  readonly data: AnyDict;
  readonly id: string;
  readonly apiPath: string;

  constructor(
    statusCode: number,
    data: AnyDict,
    apiPath: string,
    id: string = "api-error"
  ) {
    this.statusCode = statusCode;
    this.apiPath = apiPath;
    this.data = data;
    this.id = id;
  }
}
