import productRoutes, { blogRoute } from "modules/products/routes";

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
    label: "How to Use",
    href: "/articles/how-to-use",
  },
  {
    label: "Blog",
    href: blogRoute.blogs(),
  },
  { label: "Account", href: "/login" },
  { label: "Corporate", href: "/corporate" },
];
