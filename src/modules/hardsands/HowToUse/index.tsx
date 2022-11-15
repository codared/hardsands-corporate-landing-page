import {
  Container,
  Heading,
  Stack,
  Text,
  VStack,
  Image,
  ListItem,
  UnorderedList,
  Box,
} from "@chakra-ui/react";
import HardsandsButton from "components/HardsandsButton";
import HardsandLink from "components/HardsandsLink";
import { MailtoInfoLink } from "modules/legal/MailtoInfoLink";
import productRoutes from "modules/products/routes";
import React from "react";
import { useTranslation } from "react-i18next";

const HowToUse = () => {
  const { t } = useTranslation();

  return (
    <Container py={[8, 30]}>
      <Image
        my={10}
        w={"100%"}
        src={
          "https://cdn.shopify.com/s/files/1/0559/0407/5843/files/HARDSANDS959_1.jpg?v=1668505794"
        }
        alt={"hardsands business card - how to use 0"}
      />
      <VStack mb={20}>
        <Text>
          The average person collects dozens, if not hundreds, of business cards
          throughout their career. With so many cards, it can be tough to keep
          track of them all – and even tougher to find the one you need when you
          need it.
        </Text>
        <Text>
          This is where{" "}
          <HardsandLink textDecoration={"underline"} href="/">
            Hardsands
          </HardsandLink>{" "}
          comes in. We are a digital business card service that helps you share
          information instantly and on the go.
        </Text>
        <Text>
          With an NFC-enabled device, such as a smartphone, you can simply tap
          or hover your Hardsands card or hardsands epoxy on the front or back
          camera of your device to automatically share your info with anyone. To
          learn more about how to use our service, read on!
        </Text>
      </VStack>
      <Stack mb={2}>
        <Heading textAlign={"start"} size={"md"}>
          How to use your Hardsands business card
        </Heading>
        <Text>
          Once you{" "}
          <HardsandLink
            textDecoration={"underline"}
            href={productRoutes.products()}
          >
            purchase a card
          </HardsandLink>
          , you can get started
        </Text>
      </Stack>
      <Box mb={20}>
        <Heading mt={10} size={"sm"}>
          Activate your card
        </Heading>
        <Text>
          Once you have received your card, if you use an <b>Android</b> device
          you need to first ensure your NFC is turned on. To do so, go to your
          settings, search for NFC, and make sure it’s turned on. Then proceed
          to place it somewhere around your back camera or mid section of your
          device.
        </Text>{" "}
        <Text>
          For <b>IPhone</b> place the card on the front camera or top of the
          device, and a notification should pop up instantly. Click on the
          notification, which redirects you to a page where you have to fill in
          your activation code and email.
        </Text>
        <Text mt={4}>
          <b>Note:</b> The Activation code would have been sent to you before
          you received the card. If you did not get one, please contact support.
        </Text>
        <Image
          my={10}
          mx={"auto"}
          src={
            "https://cdn.shopify.com/s/files/1/0559/0407/5843/files/activate-form.jpg?v=1668506739"
          }
          alt={"hardsands business card - how to use 1"}
        />
        <Text>
          Input the activation code you received after paying for the card and
          sign in with your Google account.
        </Text>
        <Image
          maxW={"302px"}
          my={10}
          mx={"auto"}
          src={
            "https://cdn.shopify.com/s/files/1/0559/0407/5843/files/Screenshot_2022-11-15_at_12.08.47_PM.png?v=1668510550"
          }
          alt={"hardsands business card - how to use 2"}
        />
      </Box>
      <Box mb={20}>
        <Heading mb={4} size={"sm"}>
          Create your profile
        </Heading>
        <Text>
          You&apos;ll see your card in 2d format when you are logged in.
        </Text>
        <Image
          maxW={"302px"}
          mx={"auto"}
          my={10}
          src={
            "https://cdn.shopify.com/s/files/1/0559/0407/5843/files/unnamed_2.jpg?v=1668506739"
          }
          alt={"hardsands business card - how to use 3"}
        />
        <Text>
          Click on your card, and you will be directed to a screen like this.
        </Text>
        <Image
          maxW={"302px"}
          my={10}
          mx={"auto"}
          src={
            "https://cdn.shopify.com/s/files/1/0559/0407/5843/files/IMG_5569.jpg?v=1668506739"
          }
          alt={"hardsands business card - how to use 4"}
        />
        <Text>
          Here, there are three options available. You either open your card
          actions, check out statistics or share your details via a QR code.
        </Text>
        <Image
          maxW={"302px"}
          my={10}
          mx={"auto"}
          src={
            "https://cdn.shopify.com/s/files/1/0559/0407/5843/files/IMG_5571.jpg?v=1668506740"
          }
          alt={"hardsands business card - how to use 5"}
        />
        <Text>
          If you click on card actions, you will be redirected to a dashboard
          where you can customize your default action. There are currently eight
          actions, including:
        </Text>
        <Box>
          <UnorderedList>
            <ListItem>Social Card</ListItem>
            <ListItem>WhatsApp</ListItem>
            <ListItem>URL</ListItem>
            <ListItem>Contact Card</ListItem>
            <ListItem>SMS</ListItem>
            <ListItem>Call</ListItem>
            <ListItem>Email</ListItem>
            <ListItem>Bank Account Transfer Details</ListItem>
          </UnorderedList>
        </Box>
        <Image
          maxW={"302px"}
          my={10}
          mx={"auto"}
          src={
            "https://cdn.shopify.com/s/files/1/0559/0407/5843/files/IMG_5570.jpg?v=1668506739"
          }
          alt={"hardsands business card - how to use 5"}
        />
        <Text>
          After filling in the required information for your default action,
          save it. Once you tap the card on someone&apos;s phone, they are
          linked to your default action.
        </Text>
        <Heading mt={10} mb={4} size={"sm"}>
          Share your card
        </Heading>
        <Text>
          With a single swipe on any smartphone, you can begin sharing your
          identity and what you do.
        </Text>

        <Text>
          Did you find this article helpful? Let us know, or email us at{" "}
          <MailtoInfoLink />.
        </Text>

        {/* @ts-ignore */}
        <HardsandsButton my={20}>Shop Now</HardsandsButton>
      </Box>
    </Container>
  );
};

export default HowToUse;
