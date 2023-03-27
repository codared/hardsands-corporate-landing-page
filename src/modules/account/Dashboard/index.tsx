import React from "react";
import Leads from "./Leads";
import Home from "./mainDash";
import Members from "./Members";
import Devices from "./Devices";
import DeviceWithId from "./Devices/[id]";
import Reports from "./Reports";

const Dashboard = ({ route }: { route: string[] }) => {
  switch (route[1]) {
    case "members":
      return <Members />;
    case "leads":
      return <Leads />;
    case "devices":
      if (route[2]) {
        return <DeviceWithId />;
      } else {
        return <Devices />;
      }
    case "reports":
      return <Reports />;
    default:
      return <Home />;
  }
};

export default Dashboard;
