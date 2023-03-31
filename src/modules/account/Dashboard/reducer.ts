import { AppActionTypes } from "redux/context";

export type DashboardReducerState = {
  error: any;
  loading: boolean;
  members: Member[];
  corpCards: any;
};

const initialState: DashboardReducerState = {
  error: {},
  loading: true,
  members: [],
  corpCards: [],
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
    case "GET_CORP_CARD":
      return { ...state, loading: false, corpCards: action.payload };
    case "UPDATE_MEMBERS":
      return { ...state, loading: false, members: action.payload };
    default:
      return state;
  }
};

export default dashboardReducer;
