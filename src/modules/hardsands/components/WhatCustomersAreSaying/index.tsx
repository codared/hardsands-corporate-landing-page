import { Box, Flex, Heading, HStack } from "@chakra-ui/react";
import React from "react";
import ReviewCarouselSlide from "./ReviewCarousel";

function WhatCustomersAreSaying() {
  const reviews = [
    {
      text: "This card is a life-saver when it comes to networking! Sharing my details with just one tap has made everything so much easier. It is so convenient and hassle-free it is, and it's definitely saved me time and effort. I no longer have to fumble around with a stack of business cards and worry about losing them. I highly recommend it to anyone who wants to make networking a breeze.",
      author: "Okoli Chinonso",
      location: "Lagos, Nigeria",
    },
    {
      text: "I was a bit skeptical about getting the card at first, but after using it for a few weeks, I'm sold! It's amazing how much more professional and sophisticated I feel when I share my details with just one tap. I had to get it for my staff, and it has been a game-changer. Not only does it save us costs from constantly printing new business cards, but it's amazing how something as simple as a digital card can have such a big impact on our business. I'm glad I made the investment, and I'm sure you will too!",
      author: "Bello Halimat",
      location: "Abuja, Nigeria",
    },
    {
      text: "I've been using my Hardsands card for a while now, and it never fails to impress people. It's sleek and sophisticated, and it definitely adds to my professional image. I love how I can bring it out and share my details with just one tap, it's always a great conversation starter too. If you want to leave a lasting impression, this is the card for you!",
      author: "Eronmosele Adesua",
      location: "Benin, Nigeria",
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
