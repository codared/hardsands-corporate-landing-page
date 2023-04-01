import { AppActionTypes } from "redux/context";
import { Report } from "./Reports/types";

export type DashboardReducerState = {
  error: any;
  loading: boolean;
  members: Member[];
  corpCards: any;
  reports: Report;
};

const initialState: DashboardReducerState = {
  error: {},
  loading: true,
  members: [],
  corpCards: [],
  reports: {
    totalMembers: 0,
    totalClicks: 0,
    totalCards: 0,
    members: [],
  },
};

export type CorpCard = {
  cardSerial: string;
  status: "ASSIGNED" | "UNASSIGNED" | "INACTIVE";
  clicks: number;
  user: {
    firstName: string;
    lastName: string;
    email: string;
    position: string;
  };
  cardVariant: string;
};

export type Member = {
  cardStatus: string;
  cardVisits: number;
  corporatePosition: string;
  email: string;
  fullName: string;
  isActive: boolean;
  userId: number;
  actions?: {
    id: number | string;
    action: string;
    type: string;
    actionCategory: string;
  };
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
    case "GET_REPORTS":
      return { ...state, loading: false, reports: action.payload };
    case "GET_CORP_CARD":
      return { ...state, loading: false, corpCards: action.payload };
    case "UPDATE_MEMBERS":
      return { ...state, loading: false, members: action.payload };
    default:
      return state;
  }
};

export default dashboardReducer;
