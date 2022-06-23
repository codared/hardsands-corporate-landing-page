import WithLayout from "components/WithLayout";
import type { NextPage } from "next";
import { Box, Grid, Flex, Button, Heading } from "@chakra-ui/react";
import { FullReviewCard } from "components/ReviewCard";
import ProductCard from "components/ProductCard";

const Shop: NextPage = () => {
  const idArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <WithLayout pageTitle="Hardsands - Shop">
      <Box as="header" bgColor="brand.100" p="3rem 3rem 4rem">
        <Heading textAlign="center">Top Notch Cards Just for you</Heading>
      </Box>
      <Flex as="section" p={["4rem 1rem", "4rem 6rem"]} justify="center">
        <Grid templateColumns={["", "repeat(3, 1fr)"]} gap="2.5rem" maxW={1000}>
          {idArray.map((id) => (
            <ProductCard key={id} name="Hardsands metal card" price="78,000" />
          ))}
        </Grid>
      </Flex>
    </WithLayout>
  );
};

export default Shop;
