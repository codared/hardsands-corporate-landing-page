import WithLayout from "components/WithLayout";
import type { NextPage } from "next";
import {
  Box,
  Grid,
  Flex,
  Button,
  Heading,
} from "@chakra-ui/react";
import { FullReviewCard } from "components/ReviewCard";

const Reviews: NextPage = () => {
  const reviewText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud";
  return (
    <WithLayout pageTitle="Hardsands - Customer Reviews">
      <Box as="header" bgColor="brand.100" p="3rem 3rem 4rem">
        <Heading textAlign="center">What our Customers are Saying</Heading>
      </Box>
      <Box as="section" p={["1rem 3rem", "2rem 6rem", "4rem 12rem"]}>
        <Grid templateColumns={["", "repeat(2, 1fr)"]} gap="2.5rem">
          <FullReviewCard name="John Doe" review={reviewText} />
          <FullReviewCard name="John Doe" review={reviewText} />
          <FullReviewCard name="John Doe" review={reviewText} />
          <FullReviewCard name="John Doe" review={reviewText} />
          <FullReviewCard name="John Doe" review={reviewText} />
          <FullReviewCard name="John Doe" review={reviewText} />
          <FullReviewCard name="John Doe" review={reviewText} />
          <FullReviewCard name="John Doe" review={reviewText} />
          <FullReviewCard name="John Doe" review={reviewText} />
          <FullReviewCard name="John Doe" review={reviewText} />
        </Grid>
      </Box>
   
        <Flex justify="center" mt="2rem">
          <Button px="30px" py="15px" variant="outline" borderColor="black" mb="40">
            See more reviews
          </Button>
        </Flex>
    </WithLayout>
  );
};

export default Reviews;
