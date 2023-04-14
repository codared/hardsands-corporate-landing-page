import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { CheckIcon } from "assets";
import { IoIosCloseCircle } from "react-icons/io";
import HardsandLink from "components/HardsandsLink";
import {
  AUTH_ROUTES,
  HARDSANDS_LOGIN_COOKIE,
} from "modules/authentication/constants";
import { verifyAccessCorperateEmail } from "modules/authentication/services";
import { setCookie } from "modules/shared/cookie";
import { NextPage, NextPageContext } from "next";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { isServerRequest } from "utils/nextjs";
import { useTypedDispatch } from "redux/store";

const VerifyAccessCorperateEmail: NextPage<{
  isError?: boolean;
  result?: any;
  message?: string;
  name?: string;
}> = ({ isError, result, message }) => {
  const { t } = useTranslation();
  const dispatch = useTypedDispatch();

  useEffect(() => {
    if (!isError && result.token) {
      setCookie(HARDSANDS_LOGIN_COOKIE, result.token, 365);
    //   dispatch({ type: "GET_USER_DETAILS", payload: result });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container p={10} py={20}>
      <Flex direction={"column"}>
        <Box textAlign={"center"}>
          {!isError && (
            <Image
              mx="auto"
              src={CheckIcon.src}
              alt="verification success check"
            />
          )}
          {isError && (
            <Flex justifyContent={"center"}>
              <IoIosCloseCircle size={120} />
            </Flex>
          )}
          <Box h={8} />
          <Heading fontSize={18}>
            {!isError
              ? t(
                  "verify:success:your-email-has-been-verified",
                  "Your Email has been Verified!"
                )
              : t(
                  "verify:fail:your-email-was-not-verified",
                  "Your Email was not Verified!"
                )}
          </Heading>
          <Box h={8} />
          <Text>
            {!isError
              ? t(
                  "verify:success:you-can-now-head-to-the-accounts-page",
                  "Your Email has been Verified!. You can now head to the accounts page and do more with your hardsands cards."
                )
              : t(
                  "verify:failed:you-can-now-head-to-the-accounts-page",
                  "{{message}}",
                  { message }
                )}
          </Text>
          <HardsandLink
            textDecoration={"underline"}
            href="mailto:info@hardsands.com"
          >
            info@hardsands.com
          </HardsandLink>
        </Box>
        <Box h={100} />
        {/* {!isError && (
          <HardsandLink
            href={`/app`}
            fontSize={"sm"}
            fontWeight={500}
            color={"black"}
            bg={"brand.100"}
            fontFamily="MADE Outer sans Light"
            py={[2]}
            borderWidth="2px"
            borderColor={"brand.100"}
            borderRadius="0"
            transition="all 200ms ease-in"
            w={["100%"]}
            textAlign="center"
            _hover={{
              bg: "transparent",
              color: "black",
              borderWidth: "2px",
              borderColor: "brand.100",
            }}
            mt={[6, 10]}
            mb={[6, 0]}
          >
            {t("verify:go-to-account", "Go to Accounts")}
          </HardsandLink>
        )} */}
      </Flex>
    </Container>
  );
};

export async function getServerSideProps(ctx: NextPageContext) {
  // no props need to be sent back down for SPA navigates
  // only initial page render
  if (!isServerRequest(ctx) || typeof window !== "undefined") {
    return { props: {} };
  }

  const {
    query: { verificationParams },
    res,
  } = ctx;

  const [verificationCode, userId, cardSerial] = verificationParams as string[];

  try {
    let verifyEmailResponse = await verifyAccessCorperateEmail({
      verifyHash: verificationCode as string,
      userId: parseInt(userId as string, 10),
      cardSerial: cardSerial as string,
    });

    return { props: verifyEmailResponse };
  } catch (e) {
    if (res) {
      res.setHeader("location", AUTH_ROUTES.login);
      res.statusCode = 302;
      res.end();
    }
    return { props: {} };
  }
}

export default VerifyAccessCorperateEmail;
