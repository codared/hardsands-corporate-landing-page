import { getCookie } from "modules/shared/cookie";
import { slugify } from "utils/string";

export const HARDSANDS_LOGIN_COOKIE = "hardsands_user_token";
export const HARDSANDS_CORPERATE_NAME = "hardsands_corperate_name";

export const AUTH_ROUTES = {
  login: "/login",
  signup: "/signup",
  signupSuccess: "/signup/success",
  reset: "/reset-password",
};

const companyName = getCookie(HARDSANDS_CORPERATE_NAME);

export const APP_ROUTE = {
  home: "/app",
  dashboard: `/dashboard/${slugify(companyName)}`,
};

export const UserTypes = {
  NORMAL: "NORMAL",
  CORP_USER: "USER",
  CORP_ADMIN: "ADMIN",
};
