import {
  Flex,
  Heading,
  Grid,
  Box,
  Button,
  Text,
  Checkbox,
  Divider,
  Link,
} from "@chakra-ui/react";
import _ from "lodash";
import CustomInput from "components/CustomInput";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useTypedDispatch } from "redux/store";
import { SignupSchema } from "../formSchema";
import { SignUpUserType } from "../types";
import { registerUser } from "../services";
import AlertMessage, { AlertStatus } from "components/AlertMessage";
import { getGeoIpCountryCode } from "utils/geoIp";
import { useRouter } from "next/router";
import { AUTH_ROUTES } from "../constants";
import GoogleLogin from "./GoogleLogin";

export default function SignUpPage() {
  const { t } = useTranslation();
  const router = useRouter();
  const [alertMessage, setAlertMessage] = useState<{
    status: AlertStatus;
    name?: string;
    message: string;
  }>({
    status: undefined,
    name: "",
    message: "",
  });
  const [country, setCountry] = useState<string | null>(null);
  const dispatch = useTypedDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showErrorMessages, setShowErrorMessages] = useState<boolean>(false);

  const init = async () => {
    const _country = await getGeoIpCountryCode();
    return setCountry(_country);
  };

  useEffect(() => {
    if (!country) {
      init();
    }
  }, []);

  const handleSubmitForm = async (e: any) => {
    e.preventDefault();
    values.country = country as string;

    setIsLoading(true);
    if (_.isEmpty(errors)) {
      try {
        const res = await registerUser(values);

        if (res.isError) {
          setAlertMessage({
            status: "error",
            name: res.name,
            message: res.message as string,
          });
        } else {
          router.push(AUTH_ROUTES.signupSuccess);
        }

        setIsLoading(false);
      } catch (error) {
        // Sentry.exception();
        setIsLoading(false);
      }
    } else {
      setShowErrorMessages(true);
    }
    setIsLoading(false);
  };

  const initialValues: SignUpUserType = {
    firstName: "",
    email: "",
    lastName: "",
    country: country || "",
    password: "",
    sendMarketingEmails: false,
  };

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues,
    validationSchema: SignupSchema,
    onSubmit: handleSubmitForm,
  });

  return (
    <Flex
      as="section"
      p={["3rem 1rem", "4rem 2rem", "4rem 12rem"]}
      justify="center"
    >
      <form onSubmit={handleSubmitForm}>
        <Box padding={["1rem", 10]} maxW="565">
          {!!alertMessage.status && (
            <AlertMessage
              t={t}
              title={alertMessage.name}
              status={alertMessage.status}
              showCancelMessage={alertMessage.message}
              setShowCancelMessage={(message: string | null) =>
                setAlertMessage({ status: undefined, message: "" })
              }
            />
          )}
          <Heading mb={10}>Sign Up</Heading>
          {/* <Text mb={5}>Activate your Hardsands card to get started! 😎</Text> */}
          <Flex color="white" justify="stretch" gap={5} mt={10}>
            <GoogleLogin
              type="signup"
              setIsLoading={setIsLoading}
              setAlertMessage={setAlertMessage}
            />
          </Flex>
          <Divider my={10} />
          <Grid templateColumns={["", "repeat(2, 1fr)"]} gap={6} mb={5}>
            <Box>
              <CustomInput
                p={["24px 16px", "24px 16px"]}
                placeholder="Your First Name"
                name={"firstName"}
                label="First Name"
                defaultValue={values.firstName}
                onChange={handleChange}
                isRequired
                // isInvalid={!!errors.firstName}
                isError={showErrorMessages && !!errors.firstName}
                errorMessage={errors.firstName}
              />
            </Box>
            <Box>
              <CustomInput
                p={["24px 16px", "24px 16px"]}
                placeholder="Your Last Name"
                name={"lastName"}
                label="Last Name"
                defaultValue={values.lastName}
                onChange={handleChange}
                isRequired
                // isInvalid={!!errors.lastName}
                isError={showErrorMessages && !!errors.lastName}
                errorMessage={errors.lastName}
              />
            </Box>
          </Grid>
          <Box mb={5}>
            <CustomInput
              p={["24px 16px", "24px 16px"]}
              placeholder="Your Email Address"
              name={"email"}
              label="Email"
              value={values.email}
              // isInvalid={!!errors.email}
              isError={showErrorMessages && !!errors.email}
              // isRequired
              errorMessage={errors.email}
              onChange={handleChange}
            />
          </Box>
          <Box mb={5}>
            <CustomInput
              p={["24px 16px", "24px 16px"]}
              placeholder="Your Password"
              name={"password"}
              label="Password"
              type="password"
              onChange={handleChange}
              value={values.password}
              // isRequired
              // isInvalid={!!errors.password}
              isError={showErrorMessages && !!errors.password}
              errorMessage={errors.password}
            />
          </Box>
          <Checkbox
            name="sendMarketingEmails"
            colorScheme={"orange"}
            checked={values.sendMarketingEmails}
            fontSize={"smaller"}
            onChange={handleChange}
            mb={6}
          >
            {t(
              "signup:by-clicking-this",
              "By Clicking this, I agree to recieving marketing messages from Hardsands with the email address provided. View our Privacy Policy for more."
            )}
          </Checkbox>
          <Button
            fontSize={14}
            fontWeight={500}
            color={"black"}
            bg={"brand.100"}
            fontFamily="MADE Outer sans Light"
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
            type={"submit"}
            isLoading={isLoading}
            loadingText={"Signing up..."}
          >
            Sign Up
          </Button>
          <Text textAlign="center" my={5}>
            Already have an account?{" "}
            <Link
              href={AUTH_ROUTES.login}
              style={{ textDecoration: "underline", color: "#DF9F71" }}
            >
              Log in
            </Link>
          </Text>
        </Box>
      </form>
    </Flex>
  );
}
