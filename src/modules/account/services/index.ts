import { storefrontApiJsonFetch } from "../../api";
import { BackendResponseType } from "utils/types";
import { requestAuthHeaders } from "utils/functions";
import { CardActionUpdate } from "../types";

const makeTheAuthenticatedRequest = async (
  url: string,
  method: string = "GET"
) => {
  return (await storefrontApiJsonFetch(url, {
    method,
    headers: requestAuthHeaders(),
  })) as unknown as BackendResponseType;
};

export const getAllActions = async () => {
  const res = await makeTheAuthenticatedRequest(`/api/card-actions/all`);
  return res;
};

export const getUserCardActions = async (cardSerial: string) => {
  const res = await makeTheAuthenticatedRequest(
    `/api/card-action/user/${cardSerial}`
  );
  return res;
};

export const getUserCards = async () => {
  const res = await makeTheAuthenticatedRequest(`/api/cards/user/all`);
  return res;
};

export const setUserCardsActionDefault = async (
  cardSerial: string,
  actionId: string
) => {
  const res = (await storefrontApiJsonFetch(
    `/api/card-action/default/${cardSerial}/${actionId}`,
    {
      method: "POST",
      headers: requestAuthHeaders(),
    }
  )) as BackendResponseType;

  return res;
};

export const addUserCardAction = async (data: any) => {
  const res = (await storefrontApiJsonFetch("/api/card-action/create", {
    method: "POST",
    headers: requestAuthHeaders(),
    body: JSON.stringify(data),
  })) as BackendResponseType;

  return res;
};

export const updateUserCardAction = async (id: number, data: any) => {
  const res = (await storefrontApiJsonFetch(`/api/card-action/update/${id}`, {
    method: "POST",
    headers: requestAuthHeaders(),
    body: JSON.stringify(data),
  })) as BackendResponseType;

  return res;
};
