import { AppActionTypes } from "redux/context";
import { mergeActions } from "utils/functions";
import { ActionsType } from "utils/types";
import { ACTIONS } from "./constants";
import { UserCardType, UserDetails } from "./types";

export type UserAppReducerState = {
  cardActions: Array<ActionsType>;
  cards: UserCardType[] | null;
  cardStatistics: any;
  error: any;
  loading: boolean;
  allActions: ActionsType[];
  user: UserDetails | null;
};

const initialState: UserAppReducerState = {
  cardActions: [],
  error: {},
  cards: null,
  loading: true,
  allActions: ACTIONS,
  cardStatistics: {},
  user: null,
};

const appReducer = (
  state = initialState,
  action: AppActionTypes
): UserAppReducerState => {
  switch (action.type) {
    case "APP_LOADING":
      return { ...state, loading: action.payload };
    case "GET_USER_CARD_ACTIONS":
      return { ...state, cardActions: action.payload, loading: false };
    case "GET_ALL_ACTIONS":
      console.log("all actions >>> ", 'payload >>> ',  action.payload, ACTIONS);
      return {
        ...state,
        allActions: mergeActions(action.payload, ACTIONS),
        loading: false,
      };
    case "ADD_CARD_ACTION":
      return { ...state, cardActions: action.payload };
    case "GET_USER_CARDS":
      return { ...state, cards: action.payload, loading: false };
    case "GET_USER_DETAILS":
      return { ...state, user: action.payload, loading: false };
    case "GET_STATISTICS":
      return { ...state, cardStatistics: action.payload, loading: false };
    case "APP_ERROR":
      return { ...state, error: action.payload };
    case "GET_USER_COUNTRY":
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default appReducer;
