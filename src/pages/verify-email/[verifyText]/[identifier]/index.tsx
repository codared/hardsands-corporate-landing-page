import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { CheckIcon } from "assets";
import { IoIosCloseCircle } from "react-icons/io";
import HardsandLink from "components/HardsandsLink";
import { AUTH_ROUTES, HARDSANDS_LOGIN_COOKIE } from "modules/authentication/constants";
import { verifyEmail } from "modules/authentication/services";
import { setCookie } from "modules/shared/cookie";
import { NextPage, NextPageContext } from "next";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { isServerRequest } from "utils/nextjs";

const VerifyEmail: NextPage<{
  isError?: boolean;
  result?: any;
  message?: string;
  name?: string;
}> = ({ isError, result, message }) => {
  const { t } = useTranslation();

  useEffect(() => {
    if (!isError && result.token) {
      setCookie(HARDSANDS_LOGIN_COOKIE, result.token, 365);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container p={10} py={20}>
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
                "verify:success:your-account-has-been-verified",
                "Your Account has been Verified!"
              )
            : t(
                "verify:fail:your-account-was-not-verified",
                "Your Account was not Verified!"
              )}
        </Heading>
        <Box h={8} />
        <Text>
          {!isError
            ? t(
                "verify:success:you-can-now-head-to-the-accounts-page",
                "Your account has been Verified!. You can now head to the accounts page and do more with your hardsands cards."
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
      {!isError && (
        <HardsandLink
          fontSize={"sm"}
          fontWeight={500}
          color={"black"}
          bg={"brand.100"}
          fontFamily="MADE Outer sans"
          href={"/app"}
          p={["24px 16px", "24px 46px"]}
          borderWidth="2px"
          borderColor={"brand.100"}
          borderRadius="0"
          transition="all 200ms ease-in"
          textAlign="center"
          _hover={{
            bg: "transparent",
            color: "black",
            borderWidth: "2px",
            borderColor: "brand.100",
          }}
          mb={[6, 0]}
        >
          {t("verify:go-to-account", "Go to Accounts")}
        </HardsandLink>
      )}
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
    query: { verifyText, identifier },
    res,
  } = ctx;

  try {
    let verifyEmailResponse = await verifyEmail({
      verifyText: verifyText as string,
      identifier: parseInt(identifier as string, 10),
    });

    return { props: verifyEmailResponse };
  } catch (e) {
    // redirectToProducts(productRoutes.products());
    if (res) {
      res.setHeader("location", AUTH_ROUTES.login);
      res.statusCode = 302;
      res.end();
    }
    return { props: {} };
  }
}

export default VerifyEmail;
