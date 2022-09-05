import { Flex, Heading, Box, Link, Button, Text } from "@chakra-ui/react";
import _ from "lodash";
import AlertMessage, { AlertStatus } from "components/AlertMessage";
import CustomInput from "components/CustomInput";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { APP_ROUTE, AUTH_ROUTES, HARDSANDS_LOGIN_COOKIE } from "../constants";
import { ResetPasswordFormSchema } from "../formSchema";
import { resetPassword } from "../services";
import { ResetUserPasswordFormType } from "../types";
import { setCookie } from "modules/shared/cookie";

function ResetPasswordFormPage({
  passwordToken,
  identifier,
}: {
  passwordToken: string;
  identifier: number;
}) {
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

  const handleSubmitForm = async (e: any) => {
    e.preventDefault();

    values.passwordToken = passwordToken;
    values.identifier = identifier;

    setIsLoading(true);
    if (_.isEmpty(errors)) {
      try {
        console.log('values >>>> ', values);
        const res = await resetPassword(values);

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
          setCookie(HARDSANDS_LOGIN_COOKIE, res.result.token, 365);
          router.push(APP_ROUTE.home);
        }

        setIsLoading(false);
      } catch (error) {
        // Sentry.exception();
        setIsLoading(false);
      }
    }
    setIsLoading(false);
  };

  const initialValues: ResetUserPasswordFormType = {
    password: "",
    identifier: 0,
    passwordToken: "",
  };

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues,
    validationSchema: ResetPasswordFormSchema,
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
        <Heading mb={5}>Reset your Password</Heading>

        <form onSubmit={handleSubmitForm}>
          <Box mb={5}>
            <CustomInput
              p={["24px 16px", "24px 16px"]}
              placeholder="Your New Password"
              name={"password"}
              label="New Password"
              type="password"
              onChange={handleChange}
              value={values.password}
              isRequired
              isInvalid={!!errors.password}
              isError={!!errors.password}
              errorMessage={errors.password}
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
      </Box>
    </Flex>
  );
}

export default ResetPasswordFormPage;
