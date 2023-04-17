import { makeTheAuthenticatedRequest } from "modules/account/services";
import { storefrontApiJsonFetch } from "modules/api";
import { requestAuthHeaders } from "utils/functions";
import { BackendResponseType } from "utils/types";

export const getCards = async () => {
  const res = await makeTheAuthenticatedRequest(
    `/api/access-corporate-admin/cards`
  );
  return res;
};

export const registerDevice = async () => {
  const res = (await storefrontApiJsonFetch(
    `/api/access-corporate-admin/activate-device`,
    {
      method: "POST",
      headers: requestAuthHeaders(),
    }
  )) as BackendResponseType;

  return res;
};
