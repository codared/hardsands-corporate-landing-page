type StorefrontApiSuccessResponse<K> = {
  isError: false;
  result: K;
};

type StorefrontApiErrorResponse = {
  isError: true;
  data: any;
  message: string;
  name: string;
};

export type StorefrontApiResponse<K> =
  | StorefrontApiErrorResponse
  | StorefrontApiSuccessResponse<K>;
