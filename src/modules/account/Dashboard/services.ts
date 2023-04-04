import { makeTheAuthenticatedRequest } from "../services";

export const getDashboardData = async () => {
  const res = await makeTheAuthenticatedRequest(
    `/api/corporate-admin/dashboard`
  );
  return res;
};
