import React from "react";
import { useRouter } from "next/router";
import Home from "./Home";

const Dashboard = ({ route }: { route: string[] }) => {
  const { pathname } = useRouter();

  switch (pathname) {
    case "/dashboard/[...corpName]":
      return <Home />;
    default:
      return <Home />;
  }
};

export default Dashboard;
