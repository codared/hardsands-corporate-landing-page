import { storefrontApiJsonFetch } from "modules/api";
import { CartResponse } from "modules/cart/types";
import { Order } from "modules/checkout/types";

/**
 * Sets the email associated to the order.
 */
export const addDiscountCode = async (
  moduleType: string,
  moduleId: string,
  code: string
): Promise<{ isError: boolean; message: string; result: Order | CartResponse }> => {
  const res = (await storefrontApiJsonFetch(
    `/api/${moduleType}/${moduleId}/promocode`,
    {
      method: moduleType === "checkout" ? "POST" : "PUT",
      body: JSON.stringify({ promoCode: code }),
      headers: { "content-type": "application/json" },
    }
  )) as { isError: boolean; message: string; result: Order | CartResponse };

  return res;
};
