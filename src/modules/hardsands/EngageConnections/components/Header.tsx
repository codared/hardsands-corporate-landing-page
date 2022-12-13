import { Box, Flex, Heading, HStack, Image, Text } from "@chakra-ui/react";
import HardsandsButton from "components/HardsandsButton";
import Rating from "components/Rating";
import React from "react";

function Header() {
  return (
    <Box
      p={[10, 10, 40]}
      bg={
        "url(https://cdn.shopify.com/s/files/1/0559/0407/5843/files/Group_877.png?v=1670882076)"
      }
      bgRepeat={"no-repeat"}
      bgPosition={["unset", "left"]}
    >
      <Flex direction={["column", "row"]} justifyContent={"center"}>
        <Image
          maxW={["xs", "xs", "sm"]}
          //   boxSize={'300'}
          src={
            "https://cdn.shopify.com/s/files/1/0559/0407/5843/files/2Q7A67802_-_low.jpg?v=1670370869"
          }
          alt={"0% Paper 100% sustainable"}
        />
        <Box w={[0, 10, 20]} />
        <Box h={14} display={["block", "none"]} />
        <Flex
          direction={"column"}
          ml={[0, 14]}
          w={["100%", "50%", "30%"]}
          textAlign={"left"}
          justifyContent={"center"}
        >
          <Heading>0% Paper 100% sustainable</Heading>
          <Box h={6} />
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            ty
          </Text>
          <Box h={6} />
          <HStack>
            <Rating rating={4.2} numReviews={999999} />
          </HStack>
          <Box h={6} />
          <HStack flexDirection={["row", "column-reverse", "row"]}>
            <HardsandsButton
              // @ts-ignore
              w={["50%", "100%", "50%"]}
              href={"#"}
            >
              {"Add to Cart"}
            </HardsandsButton>
            <Box
              // @ts-ignore
              w={["50%", "100%", "50%"]}
              // @ts-ignore
              bg={"transparent"}
              border={"none"}
              color={"brand.300"}
              fontWeight={"bold"}
              fontFamily={"MADE Outer Sans"}
              px={[10, 0, 10]}
              textAlign={["right", "left", "right"]}
            >
              <Text textDecoration={"line-through"} color={"black"}>
                {"$45.00"}
              </Text>
              <Text fontSize={["xl", "2xl"]}>{"$35.99"}</Text>
            </Box>
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Header;
