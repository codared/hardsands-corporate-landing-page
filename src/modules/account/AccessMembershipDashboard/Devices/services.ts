import { makeTheAuthenticatedRequest } from "modules/account/services";

export const getCards = async () => {
  const res = await makeTheAuthenticatedRequest(`/api/access-corporate-admin/cards`);
  return res;
};
