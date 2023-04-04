import { makeTheAuthenticatedRequest } from "modules/account/services";

export const getReports = async () => {
  const res = await makeTheAuthenticatedRequest(
    `/api/corporate-admin/reports/all`
  );
  return res;
};
