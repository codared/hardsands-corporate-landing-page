import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import HardsandsButton from "components/HardsandsButton";
import productRoutes from "modules/products/routes";
import React from "react";

function ActionSection({ ...rest }) {
  return (
    <Box
      {...rest}
      mx={"auto"}
      py={[10, 20]}
      px={[4, 8, 48]}
    >
      <Flex direction={["column", "row"]} flexBasis={1}>
        <Image
          w={["100%", "50%"]}
          src={
            "https://cdn.shopify.com/s/files/1/0559/0407/5843/files/006_1.png?v=1672849506"
          }
          alt={"have complete control over your actions"}
          mb={[10, 0]}
        />
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          direction={"column"}
          w={["100%", "50%"]}
        >
          <Heading textAlign={["center", "unset"]}>
            Have Complete Control over your card&apos;s Actions
          </Heading>
          <Box h={[10]} />
          <Text textAlign={["center", "unset"]}>
            {
              "You can choose from a variety of different actions to add a personal touch to your profile. Once a connection taps your card, your default action gets shared with them."
            }
          </Text>
          <Box h={[10]} />
          <HardsandsButton
            // @ts-ignore
            w={"full"}
            href={productRoutes.products()}
          >
            {"TRY A CARD"}
          </HardsandsButton>
        </Flex>
      </Flex>
    </Box>
  );
}

export default ActionSection;
