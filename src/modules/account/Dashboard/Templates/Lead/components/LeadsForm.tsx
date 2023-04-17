import { useState } from "react";
import { Box, Flex, Image, Button, Text } from "@chakra-ui/react";
import { getCardImageFromSlug } from "modules/products/functions";
import { getCookie } from "modules/shared/cookie";
import { HARDSANDS_CORPERATE_NAME } from "modules/authentication/constants";
import FormInput from "./FormInput";
import CustomModal from "components/CustomModal";

interface FormProps {
  formData: any;
  firstName?: string;
  isPreview?: boolean;
  togglePreview: () => void;
}

const LeadsForm = ({ formData, isPreview, togglePreview }: FormProps) => {

  const {
    firstName,
    lastName,
    text,
    email,
    phoneNo,
    handleFirstNameChange,
    handleLastNameChange,
    handleEmailChange,
    handlePhoneNoChange,
    handleTextChange,
  } = formData;

  const img = getCardImageFromSlug("epoxy-tag-black");
  const companyName = getCookie(HARDSANDS_CORPERATE_NAME) || "";
  return (
    <>
      <Box bg="#fff" as="form" p={6} border="1px solid #D9D9D9" w={"517px"}>
        <Flex alignItems={"center"} mb={16}>
          <Image
            rounded={"full"}
            width={"85px"}
            h={"85px"}
            objectFit={"cover"}
            src={img}
            alt={companyName}
            mr={6}
          />
          <Box h={4} />
          <Text fontSize={20} fontWeight={"bolder"} textAlign={"center"}>
            {companyName}
          </Text>
        </Flex>
        <Text fontSize={"0.875rem"} fontWeight="500">
          Full Name
        </Text>
        <Box display="flex" gap={4}>
          <FormInput
            id="first-name"
            type="text"
            label="First Name"
            labelBottom
            value={firstName}
            onChange={handleFirstNameChange}
            readOnly={isPreview}
          />
          <FormInput
            id="last-name"
            type="text"
            label="Last Name"
            value={lastName}
            onChange={handleLastNameChange}
            labelBottom
            readOnly={isPreview}
          />
        </Box>
        <FormInput
          label="Email Address"
          id="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          readOnly={isPreview}
        />
        <FormInput
          label="Phone Number"
          id="phone"
          type="text"
          value={phoneNo}
          onChange={handlePhoneNoChange}
          readOnly={isPreview}
        />
        <FormInput
          label="Text"
          id="text"
          type="text"
          value={text}
          onChange={handleTextChange}
          readOnly={isPreview}
        />
        {isPreview ? (
          <Button bg="brand.300" width={"100%"} mt={5} color="#fff">
            Submit
          </Button>
        ) : (
          <>
            <Button bg="brand.100" width={"100%"}>
              Add Custom Field
            </Button>
            <Button
              bg="brand.300"
              width={"100%"}
              mt={5}
              color="#fff"
              onClick={togglePreview}
            >
              Create Form
            </Button>
          </>
        )}
      </Box>
    </>
  );
};

export default LeadsForm;
