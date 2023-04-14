import { makeTheAuthenticatedRequest } from "../services";

export const getDashboardData = async () => {
  const res = await makeTheAuthenticatedRequest(
    `/api/access-corporate-admin/dashboard`
  );
  return res;
};
