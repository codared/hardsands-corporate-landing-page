import { Lead } from "./Leads/types";
import { Member } from "./Members/types";
import { Report } from "./Reports/types";

export type DashboardReducerState = {
  error: any;
  loading: boolean;
  members: Member[];
  leads: Lead[];
  corpCards: any;
  reports: Report;
  company: string;
  companyLogo: string;
  dashboard: any;
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
