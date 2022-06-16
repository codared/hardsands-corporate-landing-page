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
  Heading,
} from "@chakra-ui/react";
import { HelpCard } from "components/HelpCard";

const Reviews: NextPage = () => {
  const reviewText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud";
  return (
    <WithLayout pageTitle="Hardsands - Customer Reviews">
      <Box as="header" bgColor="brand.100" p="3rem 3rem 4rem">
        <Heading textAlign="center">Help Center</Heading>
      </Box>
      <Box as="section" p={["1rem 3rem", "2rem 6rem", "4rem 12rem"]}>
        <Grid templateColumns={["", "repeat(3, 1fr)"]} gap="2.5rem">
          <HelpCard icon="John Doe" review={reviewText} />
          <HelpCard icon="John Doe" review={reviewText} />
          <HelpCard icon="John Doe" review={reviewText} />
        </Grid>
      </Box>
    </WithLayout>
  );
};

export default Reviews;
