import {
  Flex,
  Heading,
  Box,
  Button,
  Text,
  Grid,
  Checkbox,
} from "@chakra-ui/react";
import _ from "lodash";
import AlertMessage, { AlertStatus } from "components/AlertMessage";
import CustomInput from "components/CustomInput";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { APP_ROUTE, AUTH_ROUTES, HARDSANDS_LOGIN_COOKIE } from "../constants";
import { CardActivationSchema } from "../formSchema";
import {
  activateCard,
  getCard,
  loginActivateCard,
  signupActivateCard,
} from "../services";
import { CardActivationType, SignupCardActivationType } from "../types";
import { setCookie } from "modules/shared/cookie";
import { getGeoIpCountryCode } from "utils/geoIp";
import { ResponseType } from "../services";

function CardActivationPage({
  isError,
  result,
}: {
  isError: boolean;
  result: any;
}) {
  const { t } = useTranslation();

  const [alertMessage, setAlertMessage] = useState<{
    status: AlertStatus;
    name?: string;
    message: string;
  }>({
    status: undefined,
    name: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showSignupForm, setShowSignupForm] = useState<boolean>(false);
  const [showLoginForm, setShowLoginForm] = useState<boolean>(false);
  const [country, setCountry] = useState<string | null>(null);

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
    if (showLoginForm && !values.password) return;
    if (showSignupForm && !values.password) return;

    e.preventDefault();

    setIsLoading(true);
    if (_.isEmpty(errors)) {
      try {
        let res: ResponseType;
        if (showSignupForm && !showLoginForm) {
          // _.omit(values, ['password', 'username']);
          console.log("submiting sign up .....", values);
          res = await signupActivateCard(values);
        } else if (showLoginForm && !showSignupForm) {
          const { firstName, lastName, country, sendMarketingEmails, ...rest } =
            values;
          //   console.log("submiting login .....", rest);
          res = await loginActivateCard(rest);
        } else {
          const {
            firstName,
            lastName,
            country,
            sendMarketingEmails,
            password,
            ...rest
          } = values;
          console.log("submiting activation initializer .....", rest);
          res = await activateCard(rest);
        }

        if (res.isError) {
          setAlertMessage({
            status: "error",
            name: res.name,
            message: res.message as string,
          });
        } else {
          //   console.log("res.result.nextStep >>> ", res.result.nextStep);
          if (res.result.nextStep === "LOGIN") {
            // show login form
            setShowLoginForm(true);
          } else if (res.result.nextStep === "SIGNUP") {
            // Show sign up form
            setShowSignupForm(true);
          }
          //   setAlertMessage({
          //     status: "success",
          //     name: "Redirecting",
          //     message: res.result.message as string,
          //   });
          //   setCookie(HARDSANDS_LOGIN_COOKIE, res.result.token, 365);
          //   router.push(APP_ROUTE.home);
        }

        setIsLoading(false);
      } catch (error) {
        // Sentry.exception();
        setIsLoading(false);
      }
    }
    setIsLoading(false);
  };

  const initialValues: CardActivationType | SignupCardActivationType = {
    cardSerial: (result?.serial as string) || "",
    productId: result?.productId || "",
    activationCode: 0,
    email: "",
    password: "",
    country: (country as string) || "",
    firstName: "",
    lastName: "",
    sendMarketingEmails: false,
  };

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues,
    validationSchema: CardActivationSchema,
    onSubmit: handleSubmitForm,
  });

  //   console.log("result?.productId >>> ", result?.productId);

  return (
    <Flex
      as="section"
      p={["3rem 1rem", "4rem 2rem", "4rem 12rem"]}
      justify="center"
    >
      <Box padding={10} maxW="565">
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
        <Heading mb={5}>Activate Card</Heading>
        {/* <Text mb={5}>Welcome back, Login 😎</Text> */}
        <form onSubmit={handleSubmitForm}>
          {!showLoginForm && (
            <>
              <Grid templateColumns={["", "repeat(2, 1fr)"]} gap={6} mb={5}>
                <Box>
                  <CustomInput
                    p={["24px 16px", "24px 16px"]}
                    placeholder="Product ID"
                    name={"productId"}
                    label="Product ID"
                    value={result?.productId || values.productId}
                    isInvalid={!!errors.productId}
                    isError={!!errors.productId}
                    isDisabled
                    errorMessage={errors.productId}
                    onChange={() => {}}
                  />
                </Box>
                <Box>
                  <CustomInput
                    p={["24px 16px", "24px 16px"]}
                    placeholder="Activation Code"
                    name={"activationCode"}
                    label="Activation Code"
                    type="number"
                    onChange={handleChange}
                    value={values.activationCode.toString()}
                    isRequired
                    isInvalid={!!errors.activationCode}
                    isError={!!errors.activationCode}
                    errorMessage={errors.activationCode}
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
                  isInvalid={!!errors.email}
                  isError={!!errors.email}
                  isRequired
                  errorMessage={errors.email}
                  onChange={handleChange}
                />
              </Box>
            </>
          )}
          {showLoginForm && (
            <>
              {showSignupForm && (
                <Grid templateColumns={["", "repeat(2, 1fr)"]} gap={6} mb={5}>
                  <Box>
                    <CustomInput
                      p={["24px 16px", "24px 16px"]}
                      placeholder="Your First Name"
                      name={"firstName"}
                      label="First Name"
                      value={values.firstName}
                      onChange={handleChange}
                      isRequired
                      isInvalid={!!errors.firstName}
                      isError={!!errors.firstName}
                      errorMessage={errors.firstName}
                    />
                  </Box>
                  <Box>
                    <CustomInput
                      p={["24px 16px", "24px 16px"]}
                      placeholder="Your Last Name"
                      name={"lastName"}
                      label="Last Name"
                      value={values.lastName}
                      onChange={handleChange}
                      isRequired
                      isInvalid={!!errors.lastName}
                      isError={!!errors.lastName}
                      errorMessage={errors.lastName}
                    />
                  </Box>
                </Grid>
              )}
              <Box mb={5}>
                <CustomInput
                  p={["24px 16px", "24px 16px"]}
                  placeholder="Your Password"
                  name={"password"}
                  label="Enter password to login"
                  type="password"
                  onChange={handleChange}
                  value={values.password}
                  isRequired
                  isInvalid={!!errors.password}
                  isError={!!errors.password}
                  errorMessage={errors.password}
                />
              </Box>
              {showSignupForm && (
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
              )}
            </>
          )}

          {/* <Text textAlign="center" mb={5}>
              <Link href={AUTH_ROUTES.reset} color="brand.300">
                Forgot your password?
              </Link>
            </Text> */}
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
            type={"submit"}
            isLoading={isLoading}
            loadingText={"Activating Card..."}
          >
            {showLoginForm ? "Login" : "Activate Card"}
          </Button>
          {/* <Text textAlign="center" my={5}>
              Don&apos;t have an account?
              <Link href={AUTH_ROUTES.signup} color="brand.300">
                Sign up
              </Link>
            </Text> */}
          <Flex color="white" justify="stretch" gap={5} mt={10}>
            <Button
              fontSize={14}
              fontWeight={500}
              color={"white"}
              fontFamily="MADE Outer sans"
              onClick={() => {}}
              p={["24px 16px", "24px 46px"]}
              borderWidth="2px"
              borderColor={"blueBtn"}
              borderRadius="0"
              transition="all 200ms ease-in"
              w="100%"
              textAlign="center"
              _hover={{
                bg: "transparent",
                color: "black",
                borderWidth: "2px",
                borderColor: "blueBtn",
              }}
              mb={[6, 0]}
              flex={1}
              bg="blueBtn"
            >
              Login with
              <Box ml={2}>
                <FaFacebookF size={14} />
              </Box>
            </Button>
            <Button
              fontSize={14}
              fontWeight={500}
              color={"white"}
              fontFamily="MADE Outer sans"
              onClick={() => {}}
              p={["24px 16px", "24px 46px"]}
              borderWidth="2px"
              borderColor={"redBtn"}
              borderRadius="0"
              transition="all 200ms ease-in"
              w="100%"
              textAlign="center"
              _hover={{
                bg: "transparent",
                color: "black",
                borderWidth: "2px",
                borderColor: "redBtn",
              }}
              mb={[6, 0]}
              flex={1}
              bg="redBtn"
            >
              Login with{" "}
              <Box ml={2}>
                <FcGoogle size={14} />
              </Box>
            </Button>
          </Flex>
        </form>
      </Box>
    </Flex>
  );
}

export default CardActivationPage;
