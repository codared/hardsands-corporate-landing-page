import { Box, Container, Heading, SimpleGrid, Flex } from "@chakra-ui/react";
import HardsandLink from "components/HardsandsLink";
import ProductCard from "components/ProductCard";

const ProductShowcaseSection = () => {
  return (
    <Box py={[20, 20, 28]}>
      <Container maxW="container.lg">
        <Heading mb={[18, 20, 28]} textAlign="center">
          Hand Picked for You
        </Heading>
        <SimpleGrid columns={[2, 3, 4]} spacing={[2, 3, 5]}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </SimpleGrid>

        <Flex justify="center" my={10}>
          <HardsandLink
            fontSize={"lg"}
            fontWeight={500}
            color={"white"}
            bg={"black"}
            href={"/shop"}
            p={["12px 16px", "12px 46px"]}
            border="1px solid black"
            borderRadius="8px"
            textAlign="center"
            transition="all 200ms ease-in"
            _hover={{
              bg: "transparent",
              color: "black",
            }}
          >
            See More Cards
          </HardsandLink>
        </Flex>
      </Container>
    </Box>
  );
};

export default ProductShowcaseSection;
