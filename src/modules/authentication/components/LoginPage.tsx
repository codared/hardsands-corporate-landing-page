import {
  Flex,
  Heading,
  Box,
  Link,
  Button,
  Text,
  Divider,
} from "@chakra-ui/react";
import _ from "lodash";
import AlertMessage, { AlertStatus } from "components/AlertMessage";
import CustomInput from "components/CustomInput";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  APP_ROUTE,
  AUTH_ROUTES,
  HARDSANDS_LOGIN_COOKIE,
  UserTypes,
} from "../constants";
import { LoginSchema } from "../formSchema";
import { loginUser } from "../services";
import { LoginUserType } from "../types";
import { setCookie } from "modules/shared/cookie";
import GoogleLogin from "./GoogleLogin";
import { slugify } from "utils/string";

function LoginPage() {
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
        const res = await loginUser(values);

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

          if (res.result.role === UserTypes.CORP_ADMIN) {
            router.push(
              APP_ROUTE.dashboard.replace(
                "{slug}",
                slugify(res.result.corpName)
              )
            );
          } else {
            router.push(APP_ROUTE.home);
          }
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

  const initialValues: LoginUserType = {
    email: "",
    password: "",
  };

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit: handleSubmitForm,
  });

  return (
    <Flex
      as="section"
      p={["2rem .5rem", "4rem 2rem", "4rem 12rem"]}
      justify="center"
    >
      <Box p={["1rem", 10]} w={["100%", "565px"]}>
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
        <Heading mb={5}>Login</Heading>
        <Text mb={5}>Welcome back, Login 😎</Text>
        <Flex color="white" justify="stretch" gap={5} mt={10}>
          <GoogleLogin
            type="login"
            setIsLoading={setIsLoading}
            setAlertMessage={setAlertMessage}
          />
        </Flex>
        <Box position="relative" my={10}>
          <Text bg="white" position={"absolute"} top="-11px" zIndex={1} px={2}>
            Or signin with Email
          </Text>
          <Divider />
        </Box>
        <form onSubmit={handleSubmitForm}>
          <Box mb={5}>
            <CustomInput
              p={["24px 16px", "24px 16px"]}
              placeholder="Your Email Address"
              name={"email"}
              label="Email"
              value={values.email}
              isInvalid={!!errors.email}
              isError={showErrorMessages && !!errors.email}
              isRequired
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
              isRequired
              // isInvalid={!!errors.password}
              isError={showErrorMessages && !!errors.password}
              errorMessage={errors.password}
            />
          </Box>
          <Text textAlign="center" mb={5}>
            <Link href={AUTH_ROUTES.reset} color="brand.300">
              Forgot your password?
            </Link>
          </Text>
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
            loadingText={"Logging in..."}
          >
            Login
          </Button>
          <Text textAlign="center" my={5}>
            Don&apos;t have an account?
            <Link href={AUTH_ROUTES.signup} color="brand.300">
              Sign up
            </Link>
          </Text>
        </form>
      </Box>
    </Flex>
  );
}

export default LoginPage;
