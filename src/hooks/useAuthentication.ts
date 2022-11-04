import {
  HARDSANDS_LOGIN_COOKIE,
  APP_ROUTE,
} from "modules/authentication/constants";
import { getCookie } from "modules/shared/cookie";
import { useRouter } from "next/router";
import { isTokenExpired } from "utils/functions";

const useAuthentication = () => {
  const router = useRouter();
  const cookie = getCookie(HARDSANDS_LOGIN_COOKIE);
  const _isTokenExpired = isTokenExpired(cookie as string);

  if (!_isTokenExpired) {
    router.push(APP_ROUTE.home);
  }

  return;
};

export default useAuthentication;
