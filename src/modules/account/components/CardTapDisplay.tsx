import { Container } from "@chakra-ui/react";
import React from "react";
import BankDetailDisplay from "./BankDetailsDisplay";

function CardTapDisplay({ result }: { result: any }) {
  switch (result.title) {
    case "Bank Account":
      return (
        <Container>
          <BankDetailDisplay {...result.fields} />
        </Container>
      );
    default:
      return <Container>No action for this card yet</Container>;
  }
}

export default CardTapDisplay;
