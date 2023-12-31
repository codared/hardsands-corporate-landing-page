import { ThunkActionCreator } from "redux/rootReducer";
import { mergeActions } from "utils/functions";
import { getGeoIpCountryCode } from "utils/geoIp";
import { ActionsType, BackendResponseType } from "utils/types";
import { ACTIONS } from "./constants";
import {
  addUserCardAction,
  getAllActions,
  getUserCardActions,
  getUserCards,
  getUserDetails,
  getUserStatistics,
  setUserCardsActionDefault,
  updateUserCardAction,
} from "./services";
import {
  CardActionUpdate,
  UserCardActionsType,
  UserCardType,
  UserDetails,
} from "./types";

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

export const getAllActionsActions: ThunkActionCreator<
  Promise<UserCardType[]>
> = () => async (dispatch, getState) => {
  const res = await getAllActions();

  // const allActions = mergeActions(res.result, ACTIONS);

  if (res.isError) {
    return dispatch({
      type: "APP_ERROR",
      payload: res as any,
    });
  }

  dispatch({
    type: "GET_ALL_ACTIONS",
    payload: res.result,
  });

  return res.result;
};

export const getUserCountry: ThunkActionCreator<Promise<any>> =
  () => async (dispatch, getState) => {
    const _country = await getGeoIpCountryCode();

    if (!_country) {
      return dispatch({
        type: "APP_ERROR",
        payload: _country as any,
      });
    }

    dispatch({
      type: "GET_USER_COUNTRY",
      payload: { ...getState(), country: _country },
    });

    return _country;
  };

export const getUserCardsAction: ThunkActionCreator<Promise<UserCardType[]>> =
  () => async (dispatch, getState) => {
    const res = await getUserCards();

    if (res.isError) {
      return dispatch({
        type: "APP_ERROR",
        payload: res as any,
      });
    }
    dispatch({
      type: "GET_USER_CARDS",
      payload: res.result,
    });

    return res.result;
  };

export const getCardStatisticsAction: ThunkActionCreator<
  Promise<UserCardType[]>
> = (cardSerial: string) => async (dispatch, getState) => {
  const res = await getUserStatistics(cardSerial);

  if (res.isError) {
    return dispatch({
      type: "APP_ERROR",
      payload: res as any,
    });
  }
  dispatch({
    type: "GET_STATISTICS",
    payload: res.result,
  });

  return res.result;
};

export const getUserDetailsAction: ThunkActionCreator<Promise<UserDetails>> =
  () => async (dispatch, getState) => {
    const res = await getUserDetails();

    if (res.isError) {
      return dispatch({
        type: "APP_ERROR",
        payload: res as any,
      });
    }
    dispatch({
      type: "GET_USER_DETAILS",
      payload: res.result,
    });

    return res.result;
  };

export const setUserCardsActionDefaultAction: ThunkActionCreator<
  Promise<UserCardType[]>
> = (cardSerial: string, actionId: string) => async (dispatch, getState) => {
  const res = await setUserCardsActionDefault(cardSerial, actionId);

  if (res.isError) {
    return dispatch({
      type: "APP_ERROR",
      payload: res as any,
    });
  }
  dispatch({
    type: "GET_USER_CARD_ACTIONS",
    payload: res.result,
  });

  return res.result;
};

export const addUserCardsAction: ThunkActionCreator<
  Promise<BackendResponseType>
> = (data: CardActionUpdate) => async (dispatch, getState) => {
  const res = await addUserCardAction(data);

  if (res.isError) {
    dispatch({
      type: "APP_ERROR",
      payload: res as any,
    });
  }
  dispatch({
    type: "ADD_CARD_ACTION",
    payload: res.result,
  });

  return res;
};

export const updateUserCardsAction: ThunkActionCreator<
  Promise<BackendResponseType>
> = (data: CardActionUpdate) => async (dispatch, getState) => {
  const { actionId, ...rest } = data;
  // return;
  const res = await updateUserCardAction(actionId, rest);

  if (res.isError) {
    dispatch({
      type: "APP_ERROR",
      payload: res as any,
    });
  }
  dispatch({
    type: "ADD_CARD_ACTION",
    payload: res.result,
  });

  return res;
};
