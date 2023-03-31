import { ThunkActionCreator } from "redux/rootReducer";
import { Member } from "../reducer";
import { getCards } from "./services";

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
