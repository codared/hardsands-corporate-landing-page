import { ThunkActionCreator } from "redux/rootReducer";
import { getDashboardData } from "./services";

export const setCompanyNameAction: ThunkActionCreator<Promise<any>> =
  (companyName: string) => async (dispatch, getState) => {
    dispatch({
      type: "SET_COMPANY_NAME",
      payload: companyName,
    });
  };

export const setCompanyLogoAction: ThunkActionCreator<Promise<any>> =
  (companyName: string) => async (dispatch, getState) => {
    dispatch({
      type: "UPDATE_CORPORATE_LOGO",
      payload: companyName,
    });
  };

// get dashboard data
export const getDashboardDataAction: ThunkActionCreator<Promise<any>> =
  () => async (dispatch, getState) => {
    dispatch({ type: "APP_LOADING", payload: true });
    const res = await getDashboardData();

    if (res.isError) {
      return dispatch({
        type: "DASHBOARD_APP_ERROR",
        payload: res as any,
      });
    }
    dispatch({
      type: "GET_DASHBOARD_DATA",
      payload: res.result,
    });

    return res.result;
  };
