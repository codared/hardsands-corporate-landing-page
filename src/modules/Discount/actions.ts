import { loadCart } from "modules/cart/actions";
import { CartResponse } from "modules/cart/types";
import { loadOrder } from "modules/checkout/actions";
import track from "modules/checkout/analytics";
import { Order } from "modules/checkout/types";
import { ThunkActionCreator } from "redux/rootReducer";
import { addDiscountCode } from "./service";

export const addDiscountCodeCheckoutAction: ThunkActionCreator<
  Promise<{
    isError: boolean;
    message: string;
    result: Order | CartResponse;
  } | void>
> = (moduleType: string, moduleId: string, code: string) => async (dispatch) => {
  const res = await addDiscountCode(moduleType, moduleId, code);
  if (!res.isError) {
    // track.trackIdentifyUser(res.userDetails)
    track.setOrder(res.result as Order);
    // shipping address must exist here
    dispatch(loadOrder(res.result as Order));
  }
  return res;
};

export const addDiscountCodeCart: ThunkActionCreator<
  Promise<{
    isError: boolean;
    message: string;
    result: Order | CartResponse;
  } | void>
> = (moduleType: string, moduleId: string, code: string) => async (dispatch) => {
  const res = await addDiscountCode(moduleType, moduleId, code);
  if (!res.isError) {
    // track.trackIdentifyUser(res.userDetails)
    // track.setOrder(res.result);
    // shipping address must exist here
    dispatch(loadCart(res.result as CartResponse, true));
  }
  return res;
};
