import { storefrontApiJsonFetch } from "modules/api";
import { requestAuthHeaders } from "utils/functions";
import { BackendResponseType } from "utils/types";

export const registerDevice = async (data: {
  pin: number;
  deviceId: string;
}) => {
  const res = (await storefrontApiJsonFetch(
    `/api/cards/access-corp/device-activate`,
    {
      method: "POST",
      headers: requestAuthHeaders(),
      body: JSON.stringify(data),
    }
  )) as BackendResponseType;

  return res;
};
