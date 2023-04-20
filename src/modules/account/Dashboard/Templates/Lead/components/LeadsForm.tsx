import { useState, useRef, FormEvent } from "react";
import { Box, Flex, Image, Button, Text, Input } from "@chakra-ui/react";
import { getCardImageFromSlug } from "modules/products/functions";
import FormInput from "./FormInput";
import { CameraIcon, EditTextIcon } from "assets/index";


interface FormProps {
  formData: any;
  firstName?: string;
  isPreview?: boolean;
  togglePreview: () => void;
  submitForm?: (e: FormEvent) => void;
}

const LeadsForm = ({ formData, isPreview, togglePreview, submitForm }: FormProps) => {
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
  const companyName = "Johnson's and Jonhson's";
  const [companyLogo, setCompanyLogo] = useState(img);
  const uploadLogoRef = useRef<HTMLInputElement>(null);

  const handleCompanyLogo = (e: any) => {
    setCompanyLogo(e.target.files[0]);
  };

  console.log(companyLogo);

  return (
    <>
      <Box bg="#fff" as="form" p={6} border="1px solid #D9D9D9" w={"517px"}>
        <Flex alignItems={"center"} mb={16}>
          <Box pos="relative" mr={6}>
            <Image
              rounded={"full"}
              width={"85px"}
              h={"85px"}
              objectFit={"cover"}
              src={img}
              alt={companyName}
            />
            {!isPreview && (
              <Image
                src={CameraIcon.src}
                alt="Upload company logo"
                pos="absolute"
                right={0}
                bottom={0}
                onClick={() => uploadLogoRef.current?.click()}
              />
            )}

            <Input
              type="file"
              onChange={handleCompanyLogo}
              alt="upload company logo"
              hidden
              ref={uploadLogoRef}
              accept=".jpg,.jpeg,.png,.svg"
            />
          </Box>

          <Text fontSize={20} fontWeight={"bolder"} textAlign={"center"} mr={2}>
            {companyName}
          </Text>
          {!isPreview && <Image src={EditTextIcon.src} alt="Edit company name" />}
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
          <Button bg="brand.300" width={"100%"} mt={5} color="#fff" onClick={submitForm}>
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
