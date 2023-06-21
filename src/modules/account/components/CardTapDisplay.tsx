import { Container } from "@chakra-ui/react";
import React from "react";
import BankDetailDisplay from "./ActionsDisplay/BankDetailsDisplay";
import EventDisplay from "./ActionsDisplay/EventDisplay";
import LinkTreeDisplay from "./ActionsDisplay/LinkTree/LinkTreeDisplay";
import MemberShipProfile from "./ActionsDisplay/MemberShipProfile";
import SocialProfile from "./ActionsDisplay/ProfileCardDisplay";

function CardTapDisplay({ result }: { result: any }) {
  switch (result?.title) {
    case "Bank Account":
      return <BankDetailDisplay {...result.fields} />;
    case "Social Card":
      return <SocialProfile fields={result.fields} />;
    case "ACCESS CARD":
      return <MemberShipProfile fields={result} />;
    case "Event":
      return <EventDisplay {...result.fields} />;
    case "Link tree":
      return <LinkTreeDisplay data={result.fields.links} />;
    default:
      return <Container>No action for this card yet</Container>;
  }
}

export default CardTapDisplay;
