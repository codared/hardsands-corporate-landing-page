import WithLayout from "components/WithLayout";
import type { NextPage, NextPageContext } from "next";
import LoginPage from "modules/authentication/components/LoginPage";
import { isServerRequest } from "utils/nextjs";
import nextCookies from "next-cookies";
import { isTokenExpired } from "utils/functions";

const Login: NextPage = () => {
  return (
    <WithLayout pageTitle="Hardsands - Login">
      <LoginPage />
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
    redirectTo("/app");
  }
  return { props: {} };
}

export default Login;
