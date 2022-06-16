import WithLayout from "components/WithLayout";
import type { NextPage } from "next";
import { Box, Image, Grid, Heading } from "@chakra-ui/react";
import { HelpCard } from "components/HelpCard";
import { liveChatIcon, faqIcon, contactIcon } from "assets";

const Reviews: NextPage = () => {
  const reviewText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud";
  return (
    <WithLayout pageTitle="Hardsands - Customer Reviews">
      <Box as="header" bgColor="brand.100" p="3rem 3rem 4rem">
        <Heading textAlign="center">Help Center</Heading>
      </Box>
      <Box as="section" p={["3rem", "4rem 2rem", "4rem 12rem"]}>
        <Grid templateColumns={["", "repeat(3, 1fr)"]} gap="1.5rem" maxW="1000px" mx="auto">
          <HelpCard
            title="FAQ"
            icon={faqIcon}
            text="Find answers to questions you may have about Hardsands and our products."
          />
          <HelpCard
            title="Live Chat"
            icon={liveChatIcon}
            text="Chat with a live representative, get quick help and support from our team of professionals."
          />
          <HelpCard
            title="Contact Us"
            icon={contactIcon}
            text="Use any of our contact channels to get in touch with our support team."
          />
        </Grid>
      </Box>
    </WithLayout>
  );
};

export default Reviews;
