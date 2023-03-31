import { Member } from "./reducer";

export interface GetMembers {
  type: "GET_MEMBERS";
  payload: Member[];
}

export interface AddMembers {
  type: "ADD_MEMBERS";
  payload: Member | null;
}

export interface UpdateMembers {
  type: "UPDATE_MEMBERS";
  payload: any;
}

export interface DashboardAppError {
  type: "DASHBOARD_APP_ERROR";
  payload: any;
}

export type DashboardActionTypes =
  | GetMembers
  | AddMembers
  | UpdateMembers
  | DashboardAppError;
