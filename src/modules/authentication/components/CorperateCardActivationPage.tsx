import {
  Flex,
  Heading,
  Box,
  Button,
  Text,
  Grid,
  Checkbox,
  Divider,
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
import {
  CardActivationSchema,
  CorperateCardActivationSchema,
} from "../formSchema";
import {
  activateCard,
  loginAccessCorperateActivateCard,
  loginActivateCard,
  loginCorperateActivateCard,
  signupActivateCard,
} from "../services";
import {
  CardActivationType,
  CorperateCardActivationType,
  SignupCardActivationType,
} from "../types";
import { setCookie } from "modules/shared/cookie";
import { getGeoIpCountryCode } from "utils/geoIp";
import Router from "next/router";
import Link from "next/link";
import { BackendResponseType } from "utils/types";
import GoogleLogin from "./GoogleLogin";

function CorperateCardActivationPage({
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
  const [showErrorMessages, setShowErrorMessages] = useState<boolean>(false);
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
    e.preventDefault();

    setIsLoading(true);
    if (_.isEmpty(errors)) {
      try {
        let res: BackendResponseType;

        if (result?.isAccessActivation) {
          res = await loginAccessCorperateActivateCard(values);
        } else {
          res = await loginCorperateActivateCard(values);
        }

        if (res.isError) {
          setAlertMessage({
            status: "error",
            name: res.name,
            message: res.message as string,
          });
        } else {
          setAlertMessage({
            status: "success",
            name: "Redirecting",
            message: res.result.message as string,
          });
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

  const initialValues: CorperateCardActivationType = {
    cardSerial: (result?.serial as string) || "",
    email: "",
  };

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues,
    validationSchema: CorperateCardActivationSchema,
    onSubmit: handleSubmitForm,
  });

  return (
    <Flex
      as="section"
      p={["3rem 1rem", "4rem 2rem", "4rem 12rem"]}
      justify="center"
    >
      <Box padding={10} w="665px">
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
        <Divider my={10} />
        <form onSubmit={handleSubmitForm}>
          {!showLoginForm && !showSignupForm && (
            <>
              <Box mb={5}>
                <CustomInput
                  p={["24px 16px", "24px 16px"]}
                  placeholder="Your Email Address"
                  name={"email"}
                  label="Email"
                  value={values.email}
                  // isInvalid={!!errors.email}
                  isError={showErrorMessages && !!errors.email}
                  isRequired
                  errorMessage={errors.email}
                  onChange={handleChange}
                />
              </Box>
            </>
          )}
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
            loadingText={"Activating Card..."}
          >
            {showLoginForm ? "Login" : "Activate Card"}
          </Button>
        </form>
      </Box>
    </Flex>
  );
}

export default CorperateCardActivationPage;
