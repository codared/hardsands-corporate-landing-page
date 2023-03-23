import React from "react";
import Leads from "./Leads";
import Home from "./mainDash";
import Members from "./Members";
import Devices from "./Devices";

const Dashboard = ({ route }: { route: string[] }) => {
  switch (route[1]) {
    case "members":
      return <Members />;
    case "leads":
      return <Leads />;
    case "devices":
      return <Devices />;
    default:
      return <Home />;
  }
};

export default Dashboard;
