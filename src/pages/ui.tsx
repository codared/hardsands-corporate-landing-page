import { Box, Container, Flex, Switch, SimpleGrid } from "@chakra-ui/react";
import CartItemCard from "components/CartItemCard";
import Footer from "components/Footer";
import Navigation from "components/Navigation";
import UserProductCard from "components/UserProductCard";
import ProductCard from "components/ProductCard";
import { HomePage } from "modules/hardsands";

const UIPage = () => {
  return (
    <>
      <Navigation />
      <UserProductCard />
      <Container maxW='container.lg'>
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
      </Container>
      <Switch opacity="0.5" colorScheme="orange" size="lg" />
      <Box>
        <CartItemCard />
        <CartItemCard />
        <CartItemCard />
        <CartItemCard />
      </Box>
      <Footer />
    </>
  );
};

export default UIPage;
