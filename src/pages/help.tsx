import WithLayout from "components/WithLayout";
import type { NextPage } from "next";
import { Box, Input, Grid, Heading, Flex, Link } from "@chakra-ui/react";
import { HelpCard } from "components/HelpCard";
import mailIcon from "design/svg/mail_bg.svg";

const Reviews: NextPage = () => {
  return (
    <WithLayout pageTitle="Hardsands - Customer Reviews">
      <Flex
        as="header"
        bgColor="brand.100"
        p="3rem 3rem 4rem"
        flexDir="column"
        alignItems="center"
      >
        <Heading textAlign="center" mb="40px">
          Help Center
        </Heading>
        <Input borderColor="gray.500" p={3} maxW="420" />
      </Flex>
      <Box as="section" p={["3rem", "4rem 2rem", "4rem 12rem"]}>
        <Grid
          templateColumns={["", "repeat(3, 1fr)"]}
          gap="1.5rem"
          maxW="1000px"
          mx="auto"
        >
          <HelpCard
            title="FAQ"
            icon={mailIcon}
            text="Find answers to questions you may have about Hardsands and our products."
          />
          <HelpCard
            title="Live Chat"
            icon={mailIcon}
            text="Chat with a live representative, get quick help and support from our team of professionals."
          />
          <Link href="/contact">
            <HelpCard
              title="Contact Us"
              icon={mailIcon}
              text="Use any of our contact channels to get in touch with our support team."
            />
          </Link>
        </Grid>
      </Box>
    </WithLayout>
  );
};

export default Reviews;
