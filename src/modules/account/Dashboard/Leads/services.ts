import { makeTheAuthenticatedRequest } from "modules/account/services";

export const getLeadsResponse = async (type = "ALL") => {
  const res = await makeTheAuthenticatedRequest(
    `/api/corporate-admin/get-leads?type=${type}`
  );
  return res;
};
