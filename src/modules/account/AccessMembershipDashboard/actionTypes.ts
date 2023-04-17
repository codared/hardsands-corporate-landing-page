import { CorpCard } from "./types";
import { Member } from "./Members/types";

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

export interface GetCorpCards {
  type: "GET_CORP_CARD";
  payload: CorpCard[];
}

export interface GetReports {
  type: "GET_REPORTS";
  payload: any;
}

export interface AddActionMember {
  type: "ADD_MEMBER_ACTION";
  payload: any;
}

export interface RemoveActionMember {
  type: "REMOVE_MEMBER_ACTION";
  payload: any;
}

export interface SetCompanyName {
  type: "SET_COMPANY_NAME";
  payload: any;
}

export interface GetLeadsResponse {
  type: "GET_LEADS_RESPONSE";
  payload: any;
}

export interface GetDashboardData {
  type: "GET_DASHBOARD_DATA";
  payload: any;
}

export interface AccessRemoveMember {
  type: "ACCESS_REMOVE_MEMBER";
  payload: any;
}

export type AccessDashboardActionTypes =
  | GetDashboardData
  | GetMembers
  | AddMembers
  | UpdateMembers
  | DashboardAppError
  | GetReports
  | GetCorpCards
  | AddActionMember
  | RemoveActionMember
  | SetCompanyName
  | AccessRemoveMember
  | GetLeadsResponse;
