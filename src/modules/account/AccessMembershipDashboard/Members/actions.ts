import { ThunkActionCreator } from "redux/rootReducer";
import { Member } from "../Members/types";
import {
  // addActionToMember,
  addMembers,
  // addMultipleMembers,
  getMembers,
  // removeActionToMember,
  updateMembers,
} from "./services";

export const getMembersAction: ThunkActionCreator<Promise<Member>> =
  () => async (dispatch, getState) => {
    dispatch({ type: "APP_LOADING", payload: true });
    const res = await getMembers();

    if (res.isError) {
      return dispatch({
        type: "DASHBOARD_APP_ERROR",
        payload: res as any,
      });
    }
    dispatch({
      type: "GET_MEMBERS",
      payload: res.result,
    });

    return res.result;
  };

export const addMembersAction: ThunkActionCreator<Promise<any>> =
  (data, type = "single") =>
  async (dispatch, getState) => {
    let res;
    if (type === "single") {
      res = await addMembers(data);
    }
    // else {
    //   res = await addMultipleMembers(data);
    // }

    if (res?.isError) {
      return dispatch({
        type: "DASHBOARD_APP_ERROR",
        payload: res as any,
      });
    }
    dispatch({
      type: "ADD_MEMBERS",
      payload: res?.result,
    });

    return res?.result;
  };

export const editMembersAction: ThunkActionCreator<Promise<any>> =
  (data, id) => async (dispatch, getState) => {
    const res = await updateMembers(data, id);

    if (res.isError) {
      return dispatch({
        type: "DASHBOARD_APP_ERROR",
        payload: res as any,
      });
    }
    dispatch({
      type: "UPDATE_MEMBERS",
      payload: res.result,
    });

    return res.result;
  };

// export const addActionToMembersAction: ThunkActionCreator<Promise<any>> =
//   (data, userId) => async (dispatch, getState) => {
//     const res = await addActionToMember(data, userId);

//     if (res.isError) {
//       return dispatch({
//         type: "DASHBOARD_APP_ERROR",
//         payload: res as any,
//       });
//     }
//     dispatch({
//       type: "ADD_MEMBER_ACTION",
//       payload: res.result,
//     });

//     return res.result;
//   };

// export const removeActionToMembersAction: ThunkActionCreator<Promise<any>> =
//   (data, userId) => async (dispatch, getState) => {
//     const res = await removeActionToMember(data, userId);

//     if (res.isError) {
//       return dispatch({
//         type: "DASHBOARD_APP_ERROR",
//         payload: res as any,
//       });
//     }
//     dispatch({
//       type: "REMOVE_MEMBER_ACTION",
//       payload: res.result,
//     });

//     return res.result;
//   };
