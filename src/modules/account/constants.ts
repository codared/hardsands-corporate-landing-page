import { AiOutlineIdcard, AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { AccountNavItemsType, ActionsType } from "utils/types";

export const ACCOUNT_ROOT = "/app";

export const ACCOUNT_NAV_ITEMS: AccountNavItemsType[] = [
  {
    id: 1,
    title: "My Card",
    href: `${ACCOUNT_ROOT}`,
    icon: AiOutlineIdcard,
  },
  {
    id: 2,
    title: "Orders",
    href: `${ACCOUNT_ROOT}/orders`,
    icon: AiOutlineShoppingCart,
  },
  {
    id: 3,
    title: "Profile",
    href: `${ACCOUNT_ROOT}/profile`,
    icon: CgProfile,
  },
];

export const ACTIONS: ActionsType[] = [
  {
    id: 1,
    title: 'Profile',
    icon: CgProfile,
    isDefault: true,
  },
  {
    id: 2,
    title: 'WhatsApp',
    icon: CgProfile,
    isDefault: false,
  },
  {
    id: 3,
    title: 'Facebook',
    icon: CgProfile,
    isDefault: false,
  },
];
