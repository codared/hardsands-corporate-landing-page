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
    case "assign-event":
      return <AssignEvent />;
    case "edit-call":
      return <EditCall />;
    case "edit-whatsapp":
      return <EditWhatsapp />;
    case "edit-bank-account":
      return <EditBankAccount />;
    case "edit-sms":
      return <EditSMS />;
    case "edit-email":
      return <EditEmail />;
    case "edit-url":
      return <EditURL />;
    case "edit-lead":
      return <EditLead />;
    case "edit-contact-card":
      return <EditContactCard />;
    case "edit-social-card":
      return <EditSocialCard />;
    default:
      return <Home />;
  }
};

export default Dashboard;
