import { getCookie } from "modules/shared/cookie";
import { slugify } from "utils/string";

export const HARDSANDS_LOGIN_COOKIE = "hardsands_user_token";
export const HARDSANDS_CORPERATE = "hardsands_corperate";

export const AUTH_ROUTES = {
  login: "/login",
  signup: "/signup",
  signupSuccess: "/signup/success",
  reset: "/reset-password",
};

const cookies = getCookie(HARDSANDS_CORPERATE);
const { corpName: companyName } = cookies
  ? JSON.parse(cookies)
  : { corpName: "" };

export const APP_ROUTE = {
  home: "/app",
  dashboard: `/dashboard/{slug}`,
};

export const SERVER_APP_ROUTE = {
  home: "/app",
  dashboard: `/dashboard/{companyName}`,
};

export const UserRoleTypes = {
  NORMAL: "NORMAL",
  CORP_USER: "USER",
  CORP_ADMIN: "ADMIN",
};

export const UserModuleTypes = {
  RETAIL: "RETAIL",
  ACCESS: "ACCESS",
  CORPORATE: "CORPORATE",
};
