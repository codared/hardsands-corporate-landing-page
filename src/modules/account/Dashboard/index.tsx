import React from "react";
import Members from "./Members";

const Dashboard = ({ route }: { route: string[] }) => {
  switch (route[1]) {
    case "members":
      return <Members />;

    default:
      return <div>Dashoboard</div>;
  }
};

export default Dashboard;
