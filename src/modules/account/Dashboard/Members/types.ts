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
