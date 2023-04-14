import React from "react";
import Home from "./mainDash";
import Members from "./Members";
import Devices from "./Devices";

const AccessMembershipDashboard = ({ route }: { route: string[] }) => {
  switch (route[1]) {
    case "members":
      return <Members />;
    case "devices":
      return <Devices routes={route} />;
    default:
      return <Home />;
  }
};

export default AccessMembershipDashboard;
