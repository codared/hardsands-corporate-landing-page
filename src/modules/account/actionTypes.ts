import { ActionsType } from "utils/types";
import { UserCardType, UserDetails } from "./types";

export interface GetUserCardActions {
  type: "GET_USER_CARD_ACTIONS";
  payload: ActionsType[];
}

export interface GetAllActions {
  type: "GET_ALL_ACTIONS";
  payload: ActionsType[];
}

export interface GetUserCards {
  type: "GET_USER_CARDS";
  payload: UserCardType[] | null;
}

export interface GetUserDetails {
  type: "GET_USER_DETAILS";
  payload: UserDetails | null;
}

export interface GetCardStatistics {
  type: "GET_STATISTICS";
  payload: any[] | null;
}

export interface AddUserCardAction {
  type: "ADD_CARD_ACTION";
  payload: ActionsType[];
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
  | GetUserCards
  | GetAllActions
  | AddUserCardAction
  | GetCardStatistics
  | GetUserDetails
  | UserAppLoading;
