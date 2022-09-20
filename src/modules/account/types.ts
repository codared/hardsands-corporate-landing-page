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

export type UserCardType = {
  activatedAt: string;
  cardSerial: string;
  productId: string;
  url: string;
};

export type CardActionUpdate = {
  cardSerialId: string;
  actionId: number;
  [key: string]: string | number;
};

export const enum APP_TAB {
  ACTIONS ='ACTIONS',
  STATS ='STATS',
  SETTINGS ='SETTINGS',
}

export const enum APP_SCREEN {
  HOME ='HOME',
  STATS = 'STATS',
  ACTIONS ='ACTIONS',
  EDIT ='EDIT',
  SETTINGS ='SETTINGS',
}
