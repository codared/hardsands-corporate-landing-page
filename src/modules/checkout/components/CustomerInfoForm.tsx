import { Box, Flex, Checkbox, Button, Text } from "@chakra-ui/react";
import { FormikErrors, useFormik } from "formik";
import CustomInput from "components/CustomInput";
import { useTranslation } from "react-i18next";
import _ from "lodash";
import CustomSelect from "components/CustomSelect";
import { CustomerInfoSchema } from "../formScheme";
import {
  getCountriesList,
  getCountryPhoneCode,
  getStatesList,
} from "utils/getCountries";
import { Order } from "../types";

const initialValues = {
  firstName: "",
  email: "",
  lastName: "",
  address1: "",
  city: "",
  countryId: "",
  zip: "",
  provinceId: "",
  phoneCode: "",
  phone: "",
  agreedToReceiveEmail: false,
};

export type Values = typeof initialValues;

const CustomerInfoForm = ({
  setIsLoading,
  onFormSubmit,
  showErrorMessages,
  order: { shippingDetails, userDetails },
}: {
  order: Order;
  showErrorMessages?: boolean;
  setIsLoading: (loading: boolean) => void;
  onFormSubmit: (val: Values, errors: FormikErrors<Values>) => void;
}) => {
  const { t } = useTranslation();

  const handleSubmitCustomerInfoForm = (e: any) => {
    e.preventDefault();
    onFormSubmit(values, errors);
  };

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      firstName: userDetails?.firstName || "",
      email: userDetails?.email || "",
      lastName: userDetails?.lastName || "",
      address1: shippingDetails?.address1 || "",
      city: shippingDetails?.city || "",
      countryId: shippingDetails?.countryId || "",
      zip: shippingDetails?.zip || "",
      provinceId: shippingDetails?.provinceId || "",
      phoneCode: shippingDetails?.phoneCode || "",
      phone: shippingDetails?.phone || "",
      agreedToReceiveEmail: userDetails?.agreedToReceiveEmail || false,
    },
    validationSchema: CustomerInfoSchema,
    onSubmit: handleSubmitCustomerInfoForm,
  });

  return (
    <Box>
      <Text fontWeight={"bold"}>
        {t("checkout:customer-info", "Customer Info")}
      </Text>
      <Box h={2} />
      <form onSubmit={handleSubmitCustomerInfoForm}>
        <>
          <CustomInput
            placeholder="Email address"
            name={"email"}
            value={values.email}
            onChange={handleChange}
            // isInvalid={!!errors.email}
            isError={showErrorMessages && !!errors.email}
            isRequired
            errorMessage={errors.email}
          />
          <Box h={2} />
          <Flex>
            <CustomInput
              placeholder="First Name"
              name={"firstName"}
              value={values.firstName}
              onChange={handleChange}
              isRequired
              // isInvalid={!!errors.firstName}
              isError={showErrorMessages && !!errors.firstName}
              errorMessage={errors.firstName}
            />
            <Box w={4} />
            <CustomInput
              placeholder="Last Name"
              name={"lastName"}
              value={values.lastName}
              onChange={handleChange}
              isRequired
              // isInvalid={!!errors.lastName}
              isError={showErrorMessages && !!errors.lastName}
              errorMessage={errors.lastName}
            />
          </Flex>
          <Box h={2} />
          <CustomInput
            placeholder="Shipping Address"
            name={"address1"}
            value={values.address1}
            onChange={handleChange}
            isRequired
            // isInvalid={!!errors.address1}
            isError={showErrorMessages && !!errors.address1}
            errorMessage={errors.address1}
          />
          <Box h={2} />
          <CustomInput
            placeholder="City"
            name={"city"}
            value={values.city}
            onChange={handleChange}
          />
          <Box h={2} />
          <Flex>
            <>
              <CustomSelect
                placeholder="Country"
                options={getCountriesList()}
                name={"countryId"}
                value={values.countryId}
                onChange={handleChange}
                isRequired
                // isInvalid={!!errors.countryId}
                isError={showErrorMessages && !!errors.countryId}
                errorMessage={errors.countryId}
                _key={"id"}
                _value={"name"}
              />
              <Box w={4} />
              <CustomSelect
                _key={"id"}
                _value={"name"}
                placeholder="State"
                isDisabled={!values.countryId}
                options={getStatesList(values.countryId)}
                name={"provinceId"}
                value={values.provinceId}
                onChange={handleChange}
                isRequired
                // isInvalid={!!errors.provinceId}
                isError={showErrorMessages && !!errors.provinceId}
                errorMessage={errors.provinceId}
              />
            </>
          </Flex>
          <Box h={2} />
          <>
            <CustomInput
              placeholder="Zip Code"
              name={"zip"}
              value={values.zip}
              onChange={handleChange}
              // isInvalid={!!errors.zip}
              isError={showErrorMessages && !!errors.zip}
              errorMessage={errors.zip}
            />
          </>
          <Box h={2} />
          <Flex>
            <CustomSelect
              _key={"value"}
              _value={"title"}
              placeholder="Country Phone Code"
              options={getCountryPhoneCode()}
              name={"phoneCode"}
              value={values.phoneCode}
              onChange={handleChange}
              isRequired
              // isInvalid={!!errors.phoneCode}
              isError={showErrorMessages && !!errors.phoneCode}
              errorMessage={errors.phoneCode}
            />
            <Box w={4} />
            <CustomInput
              placeholder="Phone Number"
              name={"phone"}
              value={values.phone}
              onChange={handleChange}
              isRequired
              // isInvalid={!!errors.phone}
              isError={showErrorMessages && !!errors.phone}
              errorMessage={errors.phone}
            />
          </Flex>
          <Box h={8} />
          <Checkbox
            name="agreedToReceiveEmail"
            colorScheme={"orange"}
            defaultChecked={
              values.agreedToReceiveEmail || userDetails.agreedToReceiveEmail
            }
            fontSize={"smaller"}
            onChange={handleChange}
          >
            {t(
              "checkout:button:by-clicking-the-checkbox",
              "By Clicking the checkbox, You agree to receiving marketing messages from Hardsands with the email address provided. View our terms & conditions here."
            )}
          </Checkbox>
          <Box h={8} />
          <Button
            fontSize={14}
            fontWeight={500}
            color={"black"}
            bg={"brand.100"}
            fontFamily="MADE Outer sans Light"
            type={"submit"}
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
            {t(
              "checkout:proceed-to-shipping-information",
              "Proceed to Shipping Information"
            )}
          </Button>
          <Box h={6} />
        </>
      </form>
    </Box>
  );
};

export default CustomerInfoForm;
