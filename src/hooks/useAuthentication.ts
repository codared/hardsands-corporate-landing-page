import {
  HARDSANDS_LOGIN_COOKIE,
  HARDSANDS_CORPERATE,
  APP_ROUTE,
  AUTH_ROUTES,
} from "modules/authentication/constants";
import { getCookie } from "modules/shared/cookie";
import { useRouter } from "next/router";
import { handleLogout, isTokenExpired } from "utils/functions";

const useAuthentication = () => {
  const router = useRouter();
  const cookie = getCookie(HARDSANDS_LOGIN_COOKIE);
  const hardsands_corperate = JSON.parse(
    getCookie(HARDSANDS_CORPERATE) || "{}"
  );
  const _isTokenExpired = isTokenExpired(cookie as string);

  if (!_isTokenExpired) {
    if (hardsands_corperate?.role) {
      return (
        !location.href.includes("/dashboard") &&
        router.push(APP_ROUTE.dashboard)
      );
    } else {
      return !location.href.includes("/app") && router.push(APP_ROUTE.home);
    }
  }

  typeof window !== "undefined" && handleLogout();
  if (typeof window !== "undefined" && !location.href.includes("/login")) {
    router.push(AUTH_ROUTES.login);
  }
  return;
};

export default useAuthentication;
