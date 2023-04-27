import React from "react";
import Home from "./mainDash";
import Members from "./Members";
import Devices from "./Devices";
import Leads from "../Dashboard/Leads";
import Reports from "../Dashboard/Reports";
import Support from "../Dashboard/Support/FAQ";
import ReportIssue from "../Dashboard/Support/ReportIssue";
import FAQ from "../Dashboard/Support/FAQ";

const AccessMembershipDashboard = ({ route }: { route: string[] }) => {
  switch (route[1]) {
    case "members":
      return <Members />;
    case "devices":
      return <Devices routes={route} />;
    case "leads":
      return <Leads />;
    case "reports":
      return <Reports />;
    case "support":
      switch (route[2]) {
        case "faq":
          return <FAQ />
          case "report-issue":
            return <ReportIssue />
        default:
          return <ReportIssue />;
      }

    default:
      return <Home />;
  }
};

export default AccessMembershipDashboard;
