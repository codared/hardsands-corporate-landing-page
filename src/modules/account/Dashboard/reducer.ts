import { AppActionTypes } from "redux/context";

export type DashboardReducerState = {
  error: any;
  loading: boolean;
  members: Member[];
};

const initialState: DashboardReducerState = {
  error: {},
  loading: true,
  members: [],
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
    case "UPDATE_MEMBERS":
      return { ...state, loading: false, members: action.payload };
    default:
      return state;
  }
};

export default dashboardReducer;
