import Dashboard from "modules/account/Dashboard";
import HardsandsCorperateDash from "modules/account/Dashboard/sharedComponents/DashboardLayout";
import { AUTH_ROUTES } from "modules/authentication/constants";
import { NextPageContext } from "next";
import nextCookies from "next-cookies";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { isTokenExpired } from "utils/functions";
import { isServerRequest } from "utils/nextjs";

const Corperate = (pageContext: any) => {
  const router = useRouter();
  const corpName = (router.query.corpName as string[]) || [];

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <HardsandsCorperateDash routes={corpName}>
        <Dashboard route={corpName} />
      </HardsandsCorperateDash>
    </>
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
  if (_isTokenExpired) {
    redirectTo(AUTH_ROUTES.login);
  }
  return { props: {} };
}

export default Corperate;
