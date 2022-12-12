import { Box, Flex, Heading, HStack } from "@chakra-ui/react";
import React from "react";
import ReviewCarouselSlide from "./ReviewCarousel";

function WhatCustomersAreSaying() {
  const reviews = [
    {
      text: "We had to print new cards every time one of our employees got a promotion, and it was simply wasteful.  With Hardsands, we just update the info on the portal. Much easier and less expensive than ordering a new batch. Plus, our customers enjoy the first tap. There is a significant wow factor.",
      author: "Sue Carney",
      location: "UK",
    },
    {
      text: "Very quick service with customising my dashboard. Very professional business cards. The dashboard is very simple to use and I love how quickly you can change your default action on each card if needed.",
      author: "ERIC JONES",
      location: "USA",
    },
    {
      text: "We're launching a new company called Eco Warriors, and the idea of a more environmentally friendly business card fits perfectly with our values. It's a great way to share your contact information without cutting down any more trees!! Please save the trees!!",
      author: "DAVID BASSEY",
      location: "NIGERIA",
    },
  ];

  return (
    <Box mb={[10, 20]} py={[10]} px={[4, 2, 48]}>
      <Flex direction={"column"} textAlign={"center"}>
        <Heading mb={4} color={"brand.300"}>
          What Our Customers Are Saying
        </Heading>
      </Flex>

      <HStack position={"relative"}>
        <ReviewCarouselSlide reviews={reviews} imgAlt={"Customer Reviews"} />
      </HStack>
    </Box>
  );
}

export default WhatCustomersAreSaying;
