import { Box, Flex, Checkbox, Button, Text } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import CustomInput from "components/CustomInput";
import { useTranslation } from "react-i18next";

const CustomerInfoForm = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <Text fontWeight={"bold"}>Customer Info</Text>
      <Box h={2} />
      <Formik
        initialValues={{
          firstName: "",
          email: "",
          lastName: "",
          address: "",
          homeAddress: "",
          city: "",
          state: "",
          country: "",
          zipCode: "",
          phoneNumber: "",
        }}
        onSubmit={async (values: any) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <CustomInput placeholder="Email address" name={"email"} />
          <Box h={2} />
          <Flex>
            <CustomInput placeholder="First Name" name={"firstName"} />
            <Box w={4} />
            <CustomInput placeholder="Last Name" name={"lastName"} />
          </Flex>
          <Box h={2} />
          <CustomInput placeholder="Address" name={"address"} />
          <Box h={2} />
          <CustomInput
            placeholder="Apartment, Suite, etc"
            name={"homeAddress"}
          />
          <Box h={2} />
          <Flex>
            <CustomInput placeholder="City" name={"city"} />
            <Box w={4} />
            <CustomInput placeholder="Phone Number" name={"phoneNumber"} />
          </Flex>
          <Box h={2} />
          <Flex>
            <CustomInput type="select" placeholder="Country" name={"country"} />
            <Box w={6} />
            <CustomInput type="select" placeholder="State" name={"state"} />
            <Box w={6} />
            <CustomInput placeholder="Zip Code" name={"zipCode"} />
          </Flex>
          <Box h={8} />
          <Checkbox colorScheme={"orange"} value="true" fontSize={"smaller"}>
            {t(
              "checkout:button:by-clicking-the-checkbox",
              "By Clicking the checkbox, I agree to recieving marketing messages from Hardsands with the email address provided. View our terms & conditions here."
            )}
          </Checkbox>
          <Box h={8} />
          <Button
            fontSize={14}
            fontWeight={500}
            color={"black"}
            bg={"brand.100"}
            fontFamily="MADE Outer sans"
            onClick={() => {}}
            p={["24px 16px", "24px 46px"]}
            borderWidth="2px"
            borderColor={"brand.100"}
            borderRadius="0"
            transition="all 200ms ease-in"
            w="100%"
            textAlign="center"
            _hover={{
              bg: "transparent",
              color: "black",
              borderWidth: "2px",
              borderColor: "brand.100",
            }}
            mb={[6, 0]}
          >
            Proceed to Shipping Information
          </Button>
          <Box h={6} />
        </Form>
      </Formik>
    </Box>
  );
};

export default CustomerInfoForm;
