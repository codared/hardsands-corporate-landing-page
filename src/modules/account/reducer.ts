import { AppActionTypes } from "redux/context";
import { mergeActions } from "utils/functions";
import { ActionsType } from "utils/types";
import { ACTIONS } from "./constants";
import { UserCardType } from "./types";

export type UserAppReducerState = {
  cardActions: Array<ActionsType>;
  cards: UserCardType[] | null;
  error: any;
  loading: boolean;
  allActions: ActionsType[];
};

const initialState: UserAppReducerState = {
  cardActions: [],
  error: {},
  cards: null,
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
    case "GET_ALL_ACTIONS":
      return { ...state, allActions: mergeActions(action.payload, ACTIONS) };
    case "ADD_CARD_ACTION":
      return { ...state, cardActions: action.payload };
    case "GET_USER_CARDS":
      return { ...state, cards: action.payload };
    case "APP_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default appReducer;
