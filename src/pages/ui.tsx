import {
  Box,
  Container,
  Switch,
  SimpleGrid,
} from "@chakra-ui/react";
import CartItemCard from "components/CartItemCard";
import Footer from "components/layout/Footer";
import Navigation from "components/layout/Navigation";
import UserProductCard from "components/UserProductCard";
import ProductCard from "components/ProductCard";
import { HomePage } from "modules/hardsands";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import React from "react";

const UIPage = () => {
  return (
    <ParallaxProvider>
      <Navigation />
      <Container maxW="container.lg">
        <SimpleGrid columns={[2, 3, 4]} spacing={[2, 3, 5]}>
          <ProductCard name="Hardsands metal card" price="78,000" />
          <ProductCard name="Hardsands metal card" price="78,000"/>
          <ProductCard name="Hardsands metal card" price="78,000"/>
          <ProductCard name="Hardsands metal card" price="78,000"/>
          <ProductCard name="Hardsands metal card" price="78,000"/>
          <ProductCard name="Hardsands metal card" price="78,000"/>
          <ProductCard name="Hardsands metal card" price="78,000"/>
          <ProductCard name="Hardsands metal card" price="78,000"/>
        </SimpleGrid>
      </Container>
      <Parallax speed={-10}>
        <UserProductCard />
      </Parallax>
      <Switch opacity="0.5" colorScheme="orange" size="lg" />
      <Box>
        <CartItemCard />
        <CartItemCard />
        <CartItemCard />
        <CartItemCard />
      </Box>
      <Footer />
    </ParallaxProvider>
  );
};

export default UIPage;
