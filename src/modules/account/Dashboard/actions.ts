import { ThunkActionCreator } from "redux/rootReducer";

export const setCompanyNameAction: ThunkActionCreator<Promise<any>> =
  (companyName: string) => async (dispatch, getState) => {
    dispatch({
      type: "SET_COMPANY_NAME",
      payload: companyName,
    });
  };
