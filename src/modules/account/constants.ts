import { AiOutlineIdcard, AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { AccountNavItemsType } from "utils/types";

export const ACCOUNT_NAV_ITEMS: AccountNavItemsType[] = [
  {
    title: "My Cards",
    href: "/cards",
    icon: AiOutlineIdcard,
  },
  {
    title: "Orders",
    href: "/orders",
    icon: AiOutlineShoppingCart,
  },
  {
    title: "Profile",
    href: "/account",
    icon: CgProfile,
  },
];
