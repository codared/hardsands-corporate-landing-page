export interface GetUserCardActions {
  type: "GET_USER_CARD_ACTIONS";
  payload: any[];
}

export interface UserAppError {
  type: "APP_ERROR";
  payload: any[];
}

export interface UserAppLoading {
  type: "APP_LOADING";
  payload: boolean;
}

export type UserAppActionTypes =
  | GetUserCardActions
  | UserAppError
  | UserAppLoading;
