import { Flex, Text } from "@chakra-ui/react";
import HardsandLink from "components/HardsandsLink";
import productRoutes from "modules/products/routes";
import React from "react";

function NoCardMessage() {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      justifyContent="center"
      alignItems={"center"}
      direction="column"
    >
      <Text>You dont have any cards, please order one now</Text>
      <HardsandLink
        fontSize={"sm"}
        fontWeight={500}
        color={"black"}
        bg={"brand.100"}
        fontFamily="MADE Outer sans"
        py={[6]}
        borderWidth="2px"
        borderColor={"brand.100"}
        borderRadius="0"
        transition="all 200ms ease-in"
        w="30%"
        textAlign="center"
        _hover={{
          bg: "transparent",
          color: "black",
          borderWidth: "2px",
          borderColor: "brand.100",
        }}
        mt={[6, 10]}
        mb={[6, 0]}
        href={productRoutes.products()}
      >
        Buy Now
      </HardsandLink>
    </Flex>
  );
}

export default NoCardMessage;
