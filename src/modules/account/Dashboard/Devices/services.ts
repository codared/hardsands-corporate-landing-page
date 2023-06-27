import { makeTheAuthenticatedRequest } from "modules/account/services";
import { storefrontApiJsonFetch } from "modules/api";
import { requestAuthHeaders } from "utils/functions";
import { BackendResponseType } from "utils/types";

export const getCards = async () => {
  const res = await makeTheAuthenticatedRequest(`/api/corporate-admin/cards`);
  return res;
};

export const resetCardService = async (serial: string) => {
  const res = (await storefrontApiJsonFetch(
    `/api/corporate-admin/cards/reset/${serial}`,
    {
      method: "POST",
      headers: requestAuthHeaders(),
    }
  )) as BackendResponseType;

  return res;
  return res;
};
