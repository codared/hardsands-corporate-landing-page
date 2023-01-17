import { Container } from "@chakra-ui/react";
import React from "react";
import BankDetailDisplay from "./ActionsDisplay/BankDetailsDisplay";
import EventDisplay from "./ActionsDisplay/EventDisplay";
import SocialProfile from "./ActionsDisplay/ProfileCardDisplay";

function CardTapDisplay({ result }: { result: any }) {
  switch (result?.title) {
    case "Bank Account":
      return <BankDetailDisplay {...result.fields} />;
    case "Social Card":
      return <SocialProfile fields={result.fields} />;
    case "Event":
      return <EventDisplay {...result.fields} />;
    default:
      return <Container>No action for this card yet</Container>;
  }
}

export default CardTapDisplay;
