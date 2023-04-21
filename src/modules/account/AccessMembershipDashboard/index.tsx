import React from "react";
import Home from "./mainDash";
import Members from "./Members";
import Devices from "./Devices";
import Templates from "../Dashboard/Templates";
import EditSocialCard from "../Dashboard/Templates/SocialCard/EditSocialCard";
import EditEmail from "../Dashboard/Templates/Email/EditEmail";
import EditURL from "../Dashboard/Templates/URL/EditUrl";
import EditBankAccount from "../Dashboard/Templates/BankAccount/EditBankAccount";
import EditWhatsapp from "../Dashboard/Templates/Whatsapp/EditWhatsapp";
import EditSMS from "../Dashboard/Templates/SMS/EditSMS";
import EditEvent from "../Dashboard/Templates/Events/EditEvent";
import EditLead from "../Dashboard/Templates/Lead/EditLead";
import EditContactCard from "../Dashboard/Templates/ContactCard/EditContactCard";
import EditCall from "../Dashboard/Templates/Call/EditCall";
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
    case "templates":
      switch (route[2]) {
        case "social-card-edit":
          return <EditSocialCard />;
        case "whatsapp-edit":
          return <EditWhatsapp />;
        case "sms-edit":
          return <EditSMS />;
        case "email-edit":
          return <EditEmail />;
        case "events-edit":
          return <EditEvent />;
        case "leads-edit":
          return <EditLead />;
        case "bank-account-edit":
          return <EditBankAccount />;
        case "contact-card-edit":
          return <EditContactCard />;
        case "call-edit":
          return <EditCall />;
        case "url-edit":
          return <EditURL />;
        default:
          return <Templates />;
      }
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
