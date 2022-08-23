import { useContext, useEffect } from "react";
import { CheckoutContext } from "redux/context";

import { fetchOrder } from "../actions";
import { selectCheckoutCurrentOrder } from "../selectors";
import { CheckoutError, Order } from "../types";

/**
 * If we don't yet have an order, this will return `null`, `false` if the
 * cart id does not exist or is otherwise invalid.
 */
export function useOrder(checkoutId: string): null | false | Order {
  const { state, dispatch } = useContext(CheckoutContext);
  const order = selectCheckoutCurrentOrder(state);
  const orderCart = order?.checkoutToken;

  useEffect(
    () => {
      if (!orderCart || orderCart !== checkoutId) {
        dispatch(fetchOrder(checkoutId));
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [checkoutId, orderCart]
  );

  return order;
}

export function useLoadOrderError(): CheckoutError | undefined {
  const { state } = useContext(CheckoutContext);

  return state.checkout.error;
}
