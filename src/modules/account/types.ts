import { IconType } from "react-icons";

export type AccountNavItemsType = {
  title: string;
  href: string;
  icon: IconType;
  children?: Array<AccountNavItemsType>;
};

export type UserCardActionsType = {
  id: number;
  cardSerialId: string;
  actionId: number;
  userId: number;
  actionValue?: string;
  whatsappMessage?: string | null;
};
