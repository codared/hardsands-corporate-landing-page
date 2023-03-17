import React from "react";
import Home from "./mainDash";
import Members from "./Members";

const Dashboard = ({ route }: { route: string[] }) => {
  switch (route[1]) {
    case "members":
      return <Members />;

    default:
      return <Home />;
  }
};

export default Dashboard;
