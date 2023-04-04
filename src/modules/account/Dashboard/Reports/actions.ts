import { ThunkActionCreator } from "redux/rootReducer";
import { getReports } from "./services";
import { Report } from "./types";

export const getReportsAction: ThunkActionCreator<Promise<Report>> =
  () => async (dispatch, getState) => {
    dispatch({ type: "APP_LOADING", payload: true });
    const res = await getReports();

    if (res.isError) {
      return dispatch({
        type: "DASHBOARD_APP_ERROR",
        payload: res as any,
      });
    }
    dispatch({
      type: "GET_REPORTS",
      payload: res.result,
    });

    return res.result;
  };
