import { makeTheAuthenticatedRequest } from "modules/account/services";
import { storefrontApiJsonFetch } from "modules/api";
import { fileRequestAuthHeaders, requestAuthHeaders } from "utils/functions";
import { BackendResponseType } from "utils/types";

export const getMembers = async () => {
  const res = await makeTheAuthenticatedRequest(
    `/api/corporate-admin/get-users`
  );
  return res;
};

export const addMembers = async (data: any) => {
  const res = (await storefrontApiJsonFetch(
    "/api/corporate-admin/create-user",
    {
      method: "POST",
      headers: requestAuthHeaders(),
      body: JSON.stringify(data),
    }
  )) as BackendResponseType;

  return res;
};

export const addMultipleMembers = async (data: any) => {
  const res = (await storefrontApiJsonFetch(
    "/api/corporate-admin/create-bulk-users",
    {
      method: "POST",
      headers: fileRequestAuthHeaders(),
      body: data,
    }
  )) as BackendResponseType;

  return res;
};

export const updateMembers = async (data: any, id: number) => {
  const res = (await storefrontApiJsonFetch(
    `/api/corporate-admin/user-profile-update/${id}`,
    {
      method: "POST",
      headers: requestAuthHeaders(),
      body: JSON.stringify(data),
    }
  )) as BackendResponseType;

  return res;
};
