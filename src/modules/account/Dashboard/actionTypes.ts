import { CorpCard } from "./types";
import { Report } from "./Reports/types";
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
  payload: Report;
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

export type DashboardActionTypes =
  | GetMembers
  | AddMembers
  | UpdateMembers
  | DashboardAppError
  | GetReports
  | GetCorpCards
  | AddActionMember
  | RemoveActionMember
  | SetCompanyName
  | GetLeadsResponse;
