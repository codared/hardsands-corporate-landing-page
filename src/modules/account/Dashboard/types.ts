import { Member } from "./Members/types";
import { Report } from "./Reports/types";

export type DashboardReducerState = {
  error: any;
  loading: boolean;
  members: Member[];
  corpCards: any;
  reports: Report;
  company: string;
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
