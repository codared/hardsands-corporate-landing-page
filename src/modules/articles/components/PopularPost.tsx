import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import HardsandsButton from "components/HardsandsButton";
import { blogRoute } from "modules/products/routes";
import React from "react";

function PopularPost() {
  return (
    <Box mb={[10]} w={["100%", "100%", "80%"]} py={[10]} mx={["auto"]}>
      <Flex px={[6, 40]} direction={["column", "row"]}>
        <Box mb={[6, 0]} w={["100%", "50%"]}>
          <Heading
            color={"brand.300"}
            fontSize={"lg"}
            borderBottom={"1px solid black"}
            pb={2}
          >
            Popular Post
          </Heading>
          <Image
            mt={[6]}
            display={["block", "none"]}
            mx={"auto"}
            src="https://cdn.shopify.com/s/files/1/0559/0407/5843/files/Group_948.png?v=1674729819"
            alt="blog image"
          />
          <Box w={["100%"]}>
            <Heading py={6}>
              Menstrual Leaves; should every work place adopt the menstrual
              leave policy
            </Heading>
            <Text py={[6]}>
              Lorem Ipsum is simply dummy text of the printing
            </Text>
            <HardsandsButton
              href={blogRoute.detail({ slug: "mentrual-reviews" })}
              // @ts-ignore
              _hover={{
                bg: "transparent",
                color: "black",
                borderColor: "black",
              }}
            >
              Read Post
            </HardsandsButton>

            <Text
              fontSize={"lg"}
              borderBottom={"1px solid black"}
              pb={2}
              mt={10}
            >
              Posted: Jan 5, 2021 by kennedy sM
            </Text>
          </Box>
        </Box>
        <Box w={["100%", "50%"]}>
          <Image
            display={["none", "block"]}
            mx={"auto"}
            src="https://cdn.shopify.com/s/files/1/0559/0407/5843/files/Group_948.png?v=1674729819"
            alt="blog image"
          />
        </Box>
      </Flex>
    </Box>
  );
}

export default PopularPost;
