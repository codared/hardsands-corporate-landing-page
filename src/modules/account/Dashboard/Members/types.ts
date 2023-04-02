import { Report } from "../Reports/types";

export type DashboardReducerState = {
  error: any;
  loading: boolean;
  members: Member[];
  corpCards: any;
  reports: Report;
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
  id: number;
  cardStatus: string;
  status: string;
  cardVisits: number;
  corporatePosition: string;
  email: string;
  fullName: string;
  isActive: boolean;
  userId?: number;
  img?: string;
  actions?: {
    id: number | string;
    action: string;
    type: string;
    actionCategory: string;
  }[];
};
