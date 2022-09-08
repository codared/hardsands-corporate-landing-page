import { ThunkActionCreator } from "redux/rootReducer";
import { getUserCardActions } from "./services";
import { UserCardActionsType } from "./types";

const dispatchApploading = (payload: boolean): any => {
  return {
    type: "APP_LOADING",
    payload,
  };
};

export const getUserCardActionsActions: ThunkActionCreator<
  Promise<UserCardActionsType[]>
> = (cardSerial: string) => async (dispatch, getState) => {
  dispatch(dispatchApploading(true));
  const res = await getUserCardActions(cardSerial);

  if (res.isError) {
    dispatch(dispatchApploading(false));
    return dispatch({
      type: "APP_ERROR",
      payload: res as any,
    });
  }
  dispatch({
    type: "GET_USER_CARD_ACTIONS",
    payload: res.result,
  });
  dispatch(dispatchApploading(false));
  return res.result.cardActions;
};
