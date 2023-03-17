import HardsandsCorperateDash from "modules/account/components/DashboardLayout";
import Dashboard from "modules/account/Dashboard";
import { useRouter } from "next/router";
import React from "react";

const Corperate = (pageContext: any) => {
  const router = useRouter();
  const corpName = (router.query.corpName as string[]) || [];

  return (
    <HardsandsCorperateDash active={1}>
      <Dashboard route={corpName} />
      {/* {corpName[0] === 'dashboard' && <div>Dashboard</div>} */}
    </HardsandsCorperateDash>
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
