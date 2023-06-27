import { storefrontApiJsonFetch } from "modules/api";
import { fileRequestAuthHeaders, requestAuthHeaders } from "utils/functions";
import { BackendResponseType } from "utils/types";

export const changeCompanyLogoService = async (data: any) => {
  const res = (await storefrontApiJsonFetch(
    "/api/corporate-admin/update-profile-picture",
    {
      method: "POST",
      headers: fileRequestAuthHeaders(),
      body: data,
    }
  )) as BackendResponseType;

  return res;
};

export const changeCompanyNameService = async (data: any) => {
  const res = (await storefrontApiJsonFetch(
    "/api/corporate-admin/update-name",
    {
      method: "POST",
      headers: requestAuthHeaders(),
      body: JSON.stringify(data),
    }
  )) as BackendResponseType;

  return res;
};

export const changePasswordService = async (data: any) => {
  const res = (await storefrontApiJsonFetch(
    "/api/corporate-admin/update-password",
    {
      method: "POST",
      headers: requestAuthHeaders(),
      body: JSON.stringify(data),
    }
  )) as BackendResponseType;

  return res;
};
