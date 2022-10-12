import { Flex, Heading, Box, Link, Button, Text } from "@chakra-ui/react";
import _ from "lodash";
import AlertMessage, { AlertStatus } from "components/AlertMessage";
import CustomInput from "components/CustomInput";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { AUTH_ROUTES } from "../constants";
import { ResetSchema } from "../formSchema";
import { resetUserPassword } from "../services";
import { ResetUserPasswordType } from "../types";

function ResetPassword() {
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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showErrorMessages, setShowErrorMessages] = useState<boolean>(false);

  const handleSubmitForm = async (e: any) => {
    e.preventDefault();

    setIsLoading(true);
    if (_.isEmpty(errors)) {
      try {
        const res = await resetUserPassword(values);

        if (res.isError) {
          setAlertMessage({
            status: "error",
            name: res.name,
            message: res.message as string,
          });
        } else {
          setAlertMessage({
            status: "success",
            name: "Email Sent",
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

  const initialValues: ResetUserPasswordType = {
    email: "",
  };

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues,
    validationSchema: ResetSchema,
    onSubmit: handleSubmitForm,
  });

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

        {alertMessage.status === "success" ? (
          <></>
        ) : (
          <>
            <Heading mb={5}>Reset your Password</Heading>
            <form onSubmit={handleSubmitForm}>
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
                loadingText={"Reseting in..."}
              >
                Reset Password
              </Button>
              <Text textAlign="center" my={5}>
                <Link href={AUTH_ROUTES.login} color="brand.300">
                  Login
                </Link>
              </Text>
            </form>
          </>
        )}
      </Box>
    </Flex>
  );
}

export default ResetPassword;
