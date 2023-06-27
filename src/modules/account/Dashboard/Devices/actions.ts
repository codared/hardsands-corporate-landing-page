import { ThunkActionCreator } from "redux/rootReducer";
import { Member } from "../Members/types";
import { getCards, resetCardService } from "./services";

export const getCorpCardsAction: ThunkActionCreator<Promise<Member>> =
  () => async (dispatch, getState) => {
    dispatch({ type: "APP_LOADING", payload: true });
    const res = await getCards();

    if (res.isError) {
      return dispatch({
        type: "DASHBOARD_APP_ERROR",
        payload: res as any,
      });
    }
    dispatch({
      type: "GET_CORP_CARD",
      payload: res.result,
    });

    return res.result;
  };

export const resetCardAction: ThunkActionCreator<Promise<any>> =
  (serial) => async (dispatch, getState) => {
    dispatch({ type: "APP_LOADING", payload: true });
    const res = await resetCardService(serial);

    if (res.isError) {
      return dispatch({
        type: "DASHBOARD_APP_ERROR",
        payload: res as any,
      });
    }
    dispatch({
      type: "GET_CORP_CARD",
      payload: res.result,
    });

    return res;
  };
