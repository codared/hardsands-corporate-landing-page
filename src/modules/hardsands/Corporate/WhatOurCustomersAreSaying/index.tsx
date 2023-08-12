import { Box, Flex, Heading, HStack } from "@chakra-ui/react";
import React from "react";
import ReviewCarouselSlide from "./ReviewCarousel";
import { Customer1, Customer2, Customer3 } from "assets/index";

function WhatOurCustomersAreSaying() {
  const reviews = [
    {
      img: Customer1.src,
      text: "We had to print new cards every time one of our employees got a promotion, and it was simply wasteful. With Hardsands, we just update the info on the portal. Much easier and less expensive than ordering a new batch. Plus, our customers enjoy the first tap. There is a significant wow factor.",
      author: "DAVID BASSEY",
    },
    {
      img: Customer2.src,
      text: "We had to print new cards every time one of our employees got a promotion, and it was simply wasteful. With Hardsands, we just update the info on the portal. Much easier and less expensive than ordering a new batch. Plus, our customers enjoy the first tap. There is a significant wow factor.",
      author: "DAVID BASSEY",
    },
    {
      img: Customer3.src,
      text: "We had to print new cards every time one of our employees got a promotion, and it was simply wasteful. With Hardsands, we just update the info on the portal. Much easier and less expensive than ordering a new batch. Plus, our customers enjoy the first tap. There is a significant wow factor.",
      author: "DAVID BASSEY",
    },
    {
      img: Customer1.src,
      text: "We had to print new cards every time one of our employees got a promotion, and it was simply wasteful. With Hardsands, we just update the info on the portal. Much easier and less expensive than ordering a new batch. Plus, our customers enjoy the first tap. There is a significant wow factor.",
      author: "DAVID BASSEY",
    },
    {
      img: Customer2.src,
      text: "We had to print new cards every time one of our employees got a promotion, and it was simply wasteful. With Hardsands, we just update the info on the portal. Much easier and less expensive than ordering a new batch. Plus, our customers enjoy the first tap. There is a significant wow factor.",
      author: "DAVID BASSEY",
    },
    {
      img: Customer3.src,
      text: "We had to print new cards every time one of our employees got a promotion, and it was simply wasteful. With Hardsands, we just update the info on the portal. Much easier and less expensive than ordering a new batch. Plus, our customers enjoy the first tap. There is a significant wow factor.",
      author: "DAVID BASSEY",
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

export default WhatOurCustomersAreSaying;
