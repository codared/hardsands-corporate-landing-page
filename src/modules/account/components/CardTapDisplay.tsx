import { Container } from "@chakra-ui/react";
import React from "react";
import BankDetailDisplay from "./BankDetailsDisplay";
import SocialProfile from "./ProfileCardDisplay";

function CardTapDisplay({ result }: { result: any }) {
  switch (result?.title) {
    case "Bank Account":
      return <BankDetailDisplay {...result.fields} />;
    case "Profile":
      return <SocialProfile {...result.fields} />;
    default:
      return <Container>No action for this card yet</Container>;
  }
}

export default CardTapDisplay;
