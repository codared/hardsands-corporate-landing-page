import WithLayout from "components/WithLayout";
import type { NextPage, NextPageContext } from "next";
import ResetPassword from "modules/authentication/components/ResetPassword";
import { APP_ROUTE } from "modules/authentication/constants";
import nextCookies from "next-cookies";
import { isTokenExpired } from "utils/functions";
import { isServerRequest } from "utils/nextjs";

const ResetPasswordPage: NextPage = () => {
  return (
    <WithLayout pageTitle="Reset Passward | Hardsands">
      <ResetPassword />
    </WithLayout>
  );
};

export async function getServerSideProps(ctx: NextPageContext) {
  // dont handle async data fetches because the component's useProduct hook handles this
  if (!isServerRequest(ctx)) {
    return { props: {} };
  }
  const { res } = ctx;

  const redirectTo = (url: string) => {
    if (res) {
      res.setHeader("location", url);
      res.statusCode = 302;
      res.end();
    }
  };

  const { hardsands_user_token } = nextCookies(ctx);
  const _isTokenExpired = isTokenExpired(hardsands_user_token as string);
  if (!_isTokenExpired) {
    redirectTo(APP_ROUTE.home);
  }
  return { props: { isTokenExpired: _isTokenExpired } };
}

export default ResetPasswordPage;
