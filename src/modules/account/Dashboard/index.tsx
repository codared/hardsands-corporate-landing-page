import React from "react";
import Leads from "./Leads";
import Home from "./mainDash";
import Members from "./Members";
import Devices from "./Devices";
import DeviceWithId from "./Devices/DeviceWithId";
import Reports from "./Reports";
import ReportWithId from "./Reports/ReportWithId";
import Templates from "./Templates";
import EditEvent from "./Templates/Events/EditEvent";
import AssignEvent from "./Templates/Events/AssignEvent";
import EditURL from "./Templates/URL/EditUrl";
import EditCall from "./Templates/Call/EditCall";
import EditWhatsapp from "./Templates/Whatsapp/EditWhatsapp";
import EditEmail from "./Templates/Email/EditEmail";
import EditSMS from "./Templates/SMS/EditSMS";
import EditBankAccount from "./Templates/BankAccount/EditBankAccount";
import EditContactCard from "./Templates/ContactCard/EditContactCard";
import EditSocialCard from "./Templates/SocialCard/EditSocialCard";
import EditLead from "./Templates/Lead/EditLead";

const Dashboard = ({ route }: { route: string[] }) => {
  switch (route[1]) {
    case "members":
      return <Members />;
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
    default:
      return <Home />;
  }
};

export default Dashboard;
