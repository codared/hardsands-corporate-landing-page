import { Member } from "../Members/types";

export type Report = {
  totalMembers: number | string;
  totalClicks: number | string;
  totalCards: number | string;
  members: Member[];
};
