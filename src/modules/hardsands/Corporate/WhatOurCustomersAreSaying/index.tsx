import { Box, Flex, Heading, HStack } from "@chakra-ui/react";
import React from "react";
import ReviewCarouselSlide from "./ReviewCarousel";
import { Customer1, Customer2, Customer3 } from "assets/index";

function WhatCustomersAreSaying() {
  const reviews = [
    {
      img: Customer1.src,
    },
    {
      img: Customer2.src,
    },
    {
      img: Customer3.src,
    },
    {
      img: Customer1.src,
    },
    {
      img: Customer2.src,
    },
    {
      img: Customer3.src,
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
