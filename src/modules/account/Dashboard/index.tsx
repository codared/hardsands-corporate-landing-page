import React from "react";
import Leads from "./Leads";
import Home from "./mainDash";
import Members from "./Members";
import Devices from "./Devices";
import DeviceWithId from "./Devices/DeviceWithId";
import Reports from "./Reports";
import ReportWithId from "./Reports/ReportWithId";
import Templates from "./Templates";
import EditEvents from "./Templates/Events/EditEvent";

const Dashboard = ({ route }: { route: string[] }) => {
  switch (route[1]) {
    case "members":
      return <Members />;
    case "templates":
      return <Templates routes={route} />;
    case "leads":
      return <Leads />;
    case "devices":
      if (route[2]) {
        return <DeviceWithId />;
      } else {
        return <Devices routes={route} />;
      }

    case "reports":
      if (route[2]) {
        return <ReportWithId />;
      } else {
        return <Reports />;
      }

    case "edit-events":
      return <EditEvents />;

    default:
      return <Home />;
  }
};

export default Dashboard;
