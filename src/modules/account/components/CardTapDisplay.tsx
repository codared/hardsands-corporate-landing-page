import { Container } from "@chakra-ui/react";
import generateVCard from "pages/c/vCardGenerator";
import React from "react";
import BankDetailDisplay from "./BankDetailsDisplay";
import VCardFileCreator from "./VCardFileCreator";

function CardTapDisplay({ result }: { result: any }) {
  switch (result?.title) {
    case "Bank Account":
      return (
        <Container>
          <BankDetailDisplay {...result.fields} />
        </Container>
      );
    // case "Contact Card":
    //   console.log("got here >>>>> ");
    //   return <VCardFileCreator {...result.fields} />;
    default:
      return <Container>No action for this card yet</Container>;
  }
}

export default CardTapDisplay;
