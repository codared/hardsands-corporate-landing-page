import Dashboard from "modules/account/Dashboard";
import HardsandsCorperateDash from "modules/account/Dashboard/sharedComponents/DashboardLayout";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const Corperate = (pageContext: any) => {
  const router = useRouter();
  const corpName = (router.query.corpName as string[]) || [];

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <HardsandsCorperateDash routes={corpName} active={1}>
        <Dashboard route={corpName} />
      </HardsandsCorperateDash>
    </>
  );
};

// export const getServersideProps = async (context: any) => {
//   return {
//     props: {
//       pageContext: context,
//     },
//   };
// };

export default Corperate;
