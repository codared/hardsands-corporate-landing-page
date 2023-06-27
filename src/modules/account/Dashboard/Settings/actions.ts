import { ThunkActionCreator } from "redux/rootReducer";
import { changeCompanyLogoService, changeCompanyNameService, changePasswordService } from "./services";

export const changeCompanyLogoAction: ThunkActionCreator<Promise<any>> =
  (data) => async (dispatch, getState) => {
    let res;
    res = await changeCompanyLogoService(data);

    if (res.isError) {
      return dispatch({
        type: "DASHBOARD_APP_ERROR",
        payload: res as any,
      });
    }
    dispatch({
      type: "UPDATE_CORPORATE_LOGO",
      payload: res.result.profileImage,
    });

    return res.result;
  };

export const changeCompanyNameAction: ThunkActionCreator<Promise<any>> =
  (data) => async (dispatch, getState) => {
    let res;
    res = await changeCompanyNameService(data);

    if (res.isError) {
      return dispatch({
        type: "DASHBOARD_APP_ERROR",
        payload: res as any,
      });
    }
    dispatch({
      type: "SET_COMPANY_NAME",
      payload: res.result.name,
    });

    return res;
  };

export const changePasswordAction: ThunkActionCreator<Promise<any>> =
  (data) => async (dispatch, getState) => {
    let res;
    res = await changePasswordService(data);

    if (res.isError) {
      return dispatch({
        type: "DASHBOARD_APP_ERROR",
        payload: res as any,
      });
    }

    return res;
  };
