import { ThunkActionCreator } from "redux/rootReducer";
import { getLeadsResponse } from "./services";
import { Lead } from "./types";

export const getLeadsResponseAction: ThunkActionCreator<Promise<Lead>> =
  (type = "ALL") =>
  async (dispatch, getState) => {
    dispatch({ type: "APP_LOADING", payload: true });
    const res = await getLeadsResponse(type);

    if (res.isError) {
      return dispatch({
        type: "DASHBOARD_APP_ERROR",
        payload: res as any,
      });
    }
    dispatch({
      type: "GET_LEADS_RESPONSE",
      payload: res.result,
    });

    return res.result;
  };
