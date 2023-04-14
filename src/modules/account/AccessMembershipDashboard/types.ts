import { Member } from "./Members/types";

export type DashboardReducerState = {
  error: any;
  loading: boolean;
  members: Member[];
  leads: any[];
  corpCards: CorpCard[];
  reports: any;
  company: string;
  dashboard: any;
};

export type CorpCard = {
  cardSerial: string;
  status: "ASSIGNED" | "UNASSIGNED" | "INACTIVE";
  clicks?: number;
  hits: number;
  user: {
    firstName: string;
    lastName: string;
    email: string;
    position: string;
    fullName?: string;
  };
  cardVariant: string;
};
