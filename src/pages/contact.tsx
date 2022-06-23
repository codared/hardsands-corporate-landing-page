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
  Button,
  Textarea,
} from "@chakra-ui/react";
import { locationIcon, mailIcon, phoneIcon } from "design";

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
        <Box flex={1}>
          <Heading mb="60px">Get In Touch</Heading>
          <Flex alignItems="center" gap={5} mb={5}>
            <Image h="54px" src={phoneIcon.src} alt="call us"/>
            <Text>+2348975869676</Text>
          </Flex>
          <Flex alignItems="center" gap={5} mb={5}>
            <Image h="54px" src={mailIcon.src} alt="mail us"/>
            <Text>hello@hardsand.com</Text>
          </Flex>
          <Flex alignItems="center" gap={5} mb={5}>
            <Image h="54px" src={locationIcon.src}  alt="address"/>
            <Text>No. 5, Street Address, State, Country</Text>
          </Flex>
        </Box>
        <FormControl flex={1} boxShadow="sm" padding={5}>
          <Grid templateColumns={["", "repeat(2, 1fr)"]} gap={6} mb={5}>
            <Box>
              <FormLabel htmlFor="firstname" fontSize="smaller">
                First Name
              </FormLabel>
              <Input id="firstname" type="text" placeholder="Your First Name" />
            </Box>
            <Box>
              <FormLabel htmlFor="lastname" fontSize="smaller">
                Last Name
              </FormLabel>
              <Input id="lastname" type="text" placeholder="Your Last Name" />
            </Box>
          </Grid>
          <Box mb={5}>
            <FormLabel htmlFor="email" fontSize="smaller">
              Email
            </FormLabel>
            <Input id="email" type="email" placeholder="Your Email Address" />
          </Box>
          <Box mb={5}>
            <FormLabel htmlFor="message">Message</FormLabel>
            <Textarea id="message" placeholder="Your message" rows={8} />
          </Box>
          <Button bg="brand.300" w="full">
            Send Message
          </Button>
        </FormControl>
      </Flex>
    </WithLayout>
  );
};

export default Contact;
