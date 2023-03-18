import React from "react";
import Leads from "./Leads";
import Home from "./mainDash";
import Members from "./Members";

const Dashboard = ({ route }: { route: string[] }) => {
  switch (route[1]) {
    case "members":
      return <Members />;
    case "leads":
      return <Leads />;

    default:
      return <Home />;
  }
};

export default Dashboard;
