import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import HardsandLink from "components/HardsandsLink";
import WithLayout from "components/WithLayout";
import productRoutes from "modules/products/routes";
import Head from "next/head";

export default function NotFound() {
  return (
    <WithLayout>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <Flex h="100vh" py={10} px={6} alignItems="center">
        <Box textAlign="center" width="100%">
          <Heading
            display="inline-block"
            as="h1"
            fontSize="10rem"
            bgGradient="linear(to-r, sandTone3, sandTone3)"
            backgroundClip="text"
          >
            404
          </Heading>
          <Text fontSize={24} mt={3} mb={2}>
            Page Not Found
          </Text>
          <Text color={"gray.500"} mb={6}>
            The page you&lsquo;re looking for does not seem to exist
          </Text>
          <HardsandLink
            fontSize={"sm"}
            fontWeight={500}
            color={"black"}
            href={productRoutes.products()}
            w="fit-content"
            p={["none", "12px 16px", "12px 46px"]}
            border="1px solid black"
            borderRadius="8px"
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
    </WithLayout>
  );
}
