import { Box, Button, Flex, Text } from "@chakra-ui/react";
import CustomInput from "components/CustomInput";
import { createGiftOfferUserAction } from "modules/account/services";
import React, { FormEvent, useState } from "react";

function GiftOfferForm() {
  const [giftOfferEmail, setGiftOffer] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [offerLoading, setOfferLoading] = useState(false);

  const handleGiftOfferSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setOfferLoading(true);
    e.preventDefault();
    const payload = {
      Email: giftOfferEmail,
      UserAgent: navigator.userAgent,
      CreatedAt: new Date(),
    };

    const res = await createGiftOfferUserAction(payload);
    if (res[0].Email) {
      setGiftOffer("");
      setSuccessMessage(
        "Submitted! You would receive an email when this offer is ready"
      );
    }
    setOfferLoading(false);
  };

  return (
    <form onSubmit={handleGiftOfferSubmit}>
      <Flex direction={["column", "row"]}>
        <Box>
          <CustomInput
            value={giftOfferEmail}
            placeholder="Enter Email"
            name={"giftOfferLetterEmail"}
            onChange={(e) => setGiftOffer(e.target.value)}
          />
          <Text color="green.500">{successMessage}</Text>
        </Box>
        <Button
          borderRadius={"0"}
          bg={"brand.200"}
          color="black"
          type={"submit"}
          isLoading={offerLoading}
          loadingText="Submiting..."
        >
          Submit
        </Button>
      </Flex>
    </form>
  );
}

export default GiftOfferForm;
