import { Container, Box, Heading, Image, Text } from "@chakra-ui/react";
import { CheckIcon } from "assets";
import React from "react";
import { useTranslation } from "react-i18next";

export default function SignUpSuccess() {
  const { t } = useTranslation();

  return (
    <Container p={10} py={20}>
      <Box textAlign={"center"}>
        <Image mx="auto" src={CheckIcon.src} alt="sign up success check" />
        <Box h={8} />
        <Heading fontSize={18}>
          {t(
            "signup:success:your-account-has-been-created",
            "Your Account has been Created!"
          )}
        </Heading>
        <Heading>
          {t(
            "signup:success:your-account-has-been-created",
            "Check your email"
          )}
        </Heading>
        <Box h={8} />
        <Text>
          {t(
            "signup:success:your-order-has-been-successfully-created",
            "Your account has been successfully created. Check your email for an email verification link!"
          )}
        </Text>
      </Box>
    </Container>
  );
}
