import React from "react";
import Leads from "./Leads";
import Home from "./mainDash";
import Members from "./Members";
import Devices from "./Devices";
import DeviceWithId from "./Devices/[id]";

const Dashboard = ({ route }: { route: string[] }) => {
  console.log(route)
  switch (route[1]) {
    case "members":
      return <Members />;
    case "leads":
      return <Leads />;
    case "devices":
      if(route[2]) {
        return <DeviceWithId />
      } else {
        return  <Devices />
      };
    default:
      return <Home />;
  }
};

export default Dashboard;
