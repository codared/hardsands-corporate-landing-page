import { Member } from "../reducer";

export type Report = {
  totalMembers: number | string;
  totalClicks: number | string;
  totalCards: number | string;
  members: Member[];
};
