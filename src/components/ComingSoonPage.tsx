import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import productRoutes from "modules/products/routes";
import React from "react";
import HardsandLink from "./HardsandsLink";

function ComingSoonPage() {
  return (
    <Flex h="100vh" py={10} px={6} alignItems="center">
      <Box textAlign="center" width="100%">
        <Heading
          display="inline-block"
          as="h1"
          fontSize="5rem"
          bgGradient="linear(to-r, sandTone3, sandTone3)"
          backgroundClip="text"
        >
          Coming Soon
        </Heading>
        <Text fontSize={24} mt={3} mb={2}>
          Page under construction
        </Text>
        <Text color={"gray.500"} mb={6}>
          You would probably get notified when this page is done
        </Text>
        <HardsandLink
          fontSize={"sm"}
          fontWeight={500}
          color={"black"}
          href={productRoutes.products()}
          w="fit-content"
          p={["none", "12px 16px", "12px 46px"]}
          border="1px solid black"
          borderRadius="none"
          transition="all 200ms ease-in"
          _hover={{
            bg: "white",
            color: "black",
          }}
          margin="0 auto"
        >
          Go to Shop
        </HardsandLink>
      </Box>
    </Flex>
  );
}

export default ComingSoonPage;
