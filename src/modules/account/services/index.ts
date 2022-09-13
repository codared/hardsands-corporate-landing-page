import { storefrontApiJsonFetch } from "../../api";
import { BackendResponseType } from "utils/types";
import { requestAuthHeaders } from "utils/functions";

const makeTheAuthenticatedRequest = async (
  url: string,
  method: string = "GET"
) => {
  return (await storefrontApiJsonFetch(url, {
    method,
    headers: requestAuthHeaders(),
  })) as unknown as BackendResponseType;
};

export const getUserCardActions = async (cardSerial: string) => {
  const res = await makeTheAuthenticatedRequest(
    `/api/card-action/user/${cardSerial}`
  );
  return res;
};
