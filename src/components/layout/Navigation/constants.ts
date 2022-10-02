import productRoutes from "modules/products/routes";

export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Products",
    href: productRoutes.products(),
  },
  {
    label: "Reviews",
    href: "/reviews",
  },
  { label: "Account", href: "/login" },
];
