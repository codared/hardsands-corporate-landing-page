import WithLayout from "components/WithLayout";
import type { NextPage } from "next";
import {
  Box,
  Image,
  Grid,
  Link,
  Flex,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";
import {
  aboutHeaderImg,
  headerImg,
  womanImg,
  largeHeadshotImg,
  itemPlaceholderImg,
} from "assets";

const About: NextPage = () => {
  return (
    <WithLayout pageTitle="Hardsands - One time Business Card">
      <Flex
        as="header"
        px={["2rem", "8rem"]}
        pt="6rem"
        flexDir={["column-reverse", "row"]}
        gap="6rem"
        justify="center"
      >
        <Box>
          <Text fontSize="5xl" fontWeight="bolder" mb="1.5rem">
            About Hardsands
          </Text>
          <Text fontSize="4xl" mb="1.5rem">
            Share your business <br />
            information with{" "}
            <Text
              as="span"
              display="block"
              textTransform="uppercase"
              color="brand.300"
            >
              SWAG
            </Text>
          </Text>
          <Text mb="40px" maxW="480px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
          <Link href="/" colorScheme="green">
            <Button
              px="30px"
              py="15px"
              bg="black"
              color="white"
              textTransform="capitalize"
            >
              Buy your card
            </Button>
          </Link>
        </Box>
        <Image
          borderRadius={["300px", "200px"]}
          maxH={["full", "600px"]}
          objectFit="cover"
          src={aboutHeaderImg.src}
          alt="placeholder"
        />
      </Flex>
      <Flex
        as="section"
        p={["2.5rem", "8rem"]}
        flexDir={["column", "row"]}
        gap="6rem"
        justify="center"
      >
        <Image
          borderRadius={["300px", "200px"]}
          maxH={["full", "600px"]}
          objectFit="cover"
          src={womanImg.src}
          alt="placeholder"
        />
        <Box>
          <Text
            fontSize="5xl"
            fontWeight="bolder"
            mb="1.5rem"
            color="brand.300"
            textTransform="capitalize"
          >
            Take full control
          </Text>
          <Text mb="40px" maxW="480px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
          <Link href="/" colorScheme="green">
            <Button
              px="30px"
              py="15px"
              variant="outline"
              border="1px"
              borderColor="gray.800"
              textTransform="capitalize"
            >
              Design your card
            </Button>
          </Link>
        </Box>
      </Flex>
      <Box
        as="section"
        px={["2rem", "8rem"]}
        pt="6rem"
        bgColor="black"
        color="white"
      >
        <Text fontSize="5xl" fontWeight="bolder">
          What Customers are saying
        </Text>
      </Box>
    </WithLayout>
  );
};

export default About;
