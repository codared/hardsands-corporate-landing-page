import { AppActionTypes } from "redux/context";
import { ActionsType } from "utils/types";
import { ACTIONS } from "./constants";

export type UserAppReducerState = {
  cardActions: Array<any>;
  error: any;
  loading: boolean;
  allActions: ActionsType[];
};

const initialState: UserAppReducerState = {
  cardActions: [],
  error: {},
  loading: true,
  allActions: ACTIONS,
};

const appReducer = (
  state = initialState,
  action: AppActionTypes
): UserAppReducerState => {
  switch (action.type) {
    case "APP_LOADING":
      return { ...state, loading: action.payload };
    case "GET_USER_CARD_ACTIONS":
      return { ...state, cardActions: action.payload };
    case "APP_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default appReducer;
