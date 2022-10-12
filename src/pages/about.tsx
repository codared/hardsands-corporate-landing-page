import WithLayout from "components/WithLayout";
import type { NextPage } from "next";
import {
  Box,
  Image,
  Heading,
  Link,
  Flex,
  Stack,
  Text,
  Button,
  Grid,
} from "@chakra-ui/react";
import { ReviewCard } from "components/ReviewCard";
import HardsandLink from "components/HardsandsLink";
import productRoutes from "modules/products/routes";

const About: NextPage = () => {
  return (
    <WithLayout pageTitle="Hardsands - About">
      <Flex
        as="header"
        px={["2rem", "8rem"]}
        pt="6rem"
        flexDir={["column-reverse", "row"]}
        gap="6rem"
        justify="center"
      >
        <Box>
          <Heading fontSize="5xl" fontWeight="bolder" mb="1.5rem">
            About Hardsands
          </Heading>
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
          <HardsandLink
            fontSize={"sm"}
            fontWeight={500}
            color={"white"}
            bg={"black"}
            href={productRoutes.products()}
            w="fit-content"
            p={["none", "12px 16px", "12px 46px"]}
            border="1px solid black"
            borderRadius="8px"
            transition="all 200ms ease-in"
            _hover={{
              bg: "white",
              color: "black",
            }}
          >
            Buy Your Card
          </HardsandLink>
        </Box>
        <Image
          borderRadius={["300px", "200px"]}
          maxH={["full", "600px"]}
          objectFit="cover"
          src="https://res.cloudinary.com/dtumqh3dd/image/upload/v1655428800/hardsands/about-header_n9m1qb.png"
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
          src="https://res.cloudinary.com/dtumqh3dd/image/upload/v1655428491/hardsands/woman_rjf3sl.jpg"
          alt="placeholder"
        />
        <Box>
          <Heading
            fontSize="5xl"
            fontWeight="bolder"
            mb="1.5rem"
            color="brand.300"
            textTransform="capitalize"
          >
            Take full control
          </Heading>
          <Text mb="40px" maxW="480px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
          <HardsandLink
            fontSize={"sm"}
            fontWeight={500}
            color={"black"}
            href={productRoutes.products()}
            p={["none", "12px 16px", "12px 46px"]}
            border="1px solid black"
            borderRadius="8px"
            transition="all 200ms ease-in"
            _hover={{
              bg: "black",
              color: "white",
            }}
          >
            Learn More
          </HardsandLink>
        </Box>
      </Flex>
      <Box
        as="section"
        px={["2rem", "8rem"]}
        pt="6rem"
        bgColor="black"
        color="white"
      >
        <Heading fontSize="5xl" fontWeight="bolder" textAlign="center">
          What Customers are saying
        </Heading>
        <Flex overflow="auto" gap={12} py="60px">
          <ReviewCard
            name="John Doe"
            review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud "
          />
          <ReviewCard
            name="John Doe"
            review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud "
          />
          <ReviewCard
            name="John Doe"
            review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud "
          />
        </Flex>
      </Box>
    </WithLayout>
  );
};

export default About;
