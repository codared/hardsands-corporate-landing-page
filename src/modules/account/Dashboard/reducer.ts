import { AppActionTypes } from "redux/context";
import { getOnlyActions } from "../functions";
import { DashboardReducerState } from "./types";

const initialState: DashboardReducerState = {
  error: {},
  loading: true,
  company: '',
  members: [],
  corpCards: [],
  leads: [],
  reports: {
    totalMembers: 0,
    totalClicks: 0,
    totalCards: 0,
    members: [],
  },
};

const dashboardReducer = (
  state = initialState,
  action: AppActionTypes
): DashboardReducerState => {
  switch (action.type) {
    case "DASHBOARD_APP_ERROR":
      return { ...state, error: action.payload };
    case "APP_LOADING":
      return { ...state, loading: action.payload };
    case "GET_MEMBERS":
      return { ...state, loading: false, members: action.payload };
    case "ADD_MEMBER_ACTION":
      const members = JSON.parse(JSON.stringify([...state.members]));
      const newMembers = members.map((m: any) => {
        if (m.id === action.payload[0].userId) {
          m.actions = [...getOnlyActions(action.payload)];
        }
        return { ...m };
      });
      return { ...state, members: [...newMembers] };
    case "REMOVE_MEMBER_ACTION":
      const statemembers = JSON.parse(JSON.stringify([...state.members]));
      // find the member and add the action
      const newStateMembers = statemembers.map(
        (m: { id: any; actions: any }) => {
          if (m.id === action.payload[0].userId) {
            m.actions = [...getOnlyActions(action.payload)];
          }
          return { ...m };
        }
      );
      return { ...state, members: [...newStateMembers] };
    case "GET_REPORTS":
      return { ...state, loading: false, reports: action.payload };
    case "GET_CORP_CARD":
      return { ...state, loading: false, corpCards: action.payload };
    case "GET_LEADS_RESPONSE":
      return { ...state, loading: false, leads: action.payload };
    case "UPDATE_MEMBERS":
      return { ...state, loading: false, members: action.payload };
    case "SET_COMPANY_NAME":
      return { ...state, loading: false, company: action.payload };
    default:
      return state;
  }
};

export default dashboardReducer;
