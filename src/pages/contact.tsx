import WithLayout from "components/WithLayout";
import type { NextPage } from "next";
import {
  Box,
  Input,
  Grid,
  FormControl,
  FormLabel,
  Heading,
  Flex,
  Image,
  Text,
  Stack,
} from "@chakra-ui/react";
import mailIcon from "design/svg/mail_bg.svg";

const Contact: NextPage = () => {
  return (
    <WithLayout pageTitle="Hardsands - Contact Us">
      <Flex
        as="header"
        bgColor="brand.100"
        p="3rem 3rem 4rem"
        flexDir="column"
        alignItems="center"
      >
        <Heading textAlign="center">Contact Us</Heading>
      </Flex>
      <Flex
        as="section"
        p={["3rem", "4rem 2rem", "4rem 12rem"]}
        flexDir={["column", "row"]}
      >
        <Flex mt="10">
          <Box>
            <Heading mb="60px">Get In Touch</Heading>
            <Flex alignItems="center" gap={5} mb={5}>
              <Image h="54px" src={mailIcon.src} />
              <Text>+2348975869676</Text>
            </Flex>
            <Flex alignItems="center" gap={5} mb={5}>
              <Image h="54px" src={mailIcon.src} />
              <Text>hello@hardsand.com</Text>
            </Flex>
            <Flex alignItems="center" gap={5} mb={5}>
              <Image h="54px" src={mailIcon.src} />
              <Text>No. 5, Street Address, State, Country</Text>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </WithLayout>
  );
};

export default Contact;
