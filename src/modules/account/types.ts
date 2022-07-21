import { IconType } from "react-icons";

export type AccountNavItemsType = {
  title: string;
  href: string;
  icon: IconType;
  children?: Array<AccountNavItemsType>;
};
