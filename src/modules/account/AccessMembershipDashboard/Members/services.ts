import { makeTheAuthenticatedRequest } from "modules/account/services";
import { storefrontApiJsonFetch } from "modules/api";
import { fileRequestAuthHeaders, requestAuthHeaders } from "utils/functions";
import { BackendResponseType } from "utils/types";

export const getMembers = async () => {
  const res = await makeTheAuthenticatedRequest(
    `/api/access-corporate-admin/get-members`
  );
  return res;
};

export const addMembers = async (data: any) => {
  const res = (await storefrontApiJsonFetch(
    "/api/access-corporate-admin/create-member",
    {
      method: "POST",
      headers: requestAuthHeaders(),
      body: JSON.stringify(data),
    }
  )) as BackendResponseType;

  return res;
};

// export const addMultipleMembers = async (data: any) => {
//   const res = (await storefrontApiJsonFetch(
//     "/api/corporate-admin/create-bulk-users",
//     {
//       method: "POST",
//       headers: fileRequestAuthHeaders(),
//       body: data,
//     }
//   )) as BackendResponseType;

//   return res;
// };

export const updateMembers = async (data: any, id: number) => {
  const res = (await storefrontApiJsonFetch(
    `/api/access-corporate-admin/edit-member/${id}`,
    {
      method: "POST",
      headers: requestAuthHeaders(),
      body: JSON.stringify(data),
    }
  )) as BackendResponseType;

  return res;
};

// export const addActionToMember = async (data: any, userId: number) => {
//   const res = (await storefrontApiJsonFetch(
//     `/api/corporate-admin/addAction/${userId}`,
//     {
//       method: "PUT",
//       headers: requestAuthHeaders(),
//       body: JSON.stringify(data),
//     }
//   )) as BackendResponseType;

//   return res;
// };

export const removeMember = async (userId: number) => {
  const res = (await storefrontApiJsonFetch(
    `/api/access-corporate-admin/remove-member/${userId}`,
    {
      method: "POST",
      headers: requestAuthHeaders(),
    }
  )) as BackendResponseType;

  return res;
};
