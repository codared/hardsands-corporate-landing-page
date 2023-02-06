import { storefrontApiJsonFetch } from "modules/api";

/**
 * Sets the email associated to the order.
 */
export const getTrackingDetails = async (
  trackingId: string
): Promise<{
  isError: boolean;
  message: string;
  result: any;
}> => {
  const res = (await storefrontApiJsonFetch(`/api/track/${trackingId}`, {
    method: "GET",
    headers: { "content-type": "application/json" },
  })) as { isError: boolean; message: string; result: any };

  return res;
};
