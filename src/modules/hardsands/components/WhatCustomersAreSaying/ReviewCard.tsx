import { VStack, Heading, Text } from "@chakra-ui/react";
import React from "react";

function ReviewCard({ review }: { review: any }) {
  return (
    <VStack
      p={[10]}
      minW={["100%", 500]} 
      justifyContent={"space-between"}
      alignItems={["center"]}
      bg={"brand.10"}
    >
      <Text textAlign={["center"]}>{review.text}</Text>

      <VStack mt={[10]}>
        <Heading textTransform={"uppercase"} size={"md"} color={"brand.300"}>
          {review.author}
        </Heading>
        <Text>{review.location}</Text>
      </VStack>
    </VStack>
  );
}

export default ReviewCard;
