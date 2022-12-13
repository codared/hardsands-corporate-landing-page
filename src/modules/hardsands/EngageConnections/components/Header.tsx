import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import HardsandsButton from "components/HardsandsButton";
import { CartDataDetails } from "components/ProductCard/type";
import Rating from "components/Rating";
import { Product } from "modules/products/types";
import React, { SyntheticEvent } from "react";

function Header({
  price,
  isAddingToCart,
  handleAddToCart,
  variant,
  productDetails,
}: {
  price: string;
  isAddingToCart?: boolean;
  handleAddToCart?: (e: SyntheticEvent, details: CartDataDetails) => void;
  variant: string;
  productDetails: Product;
}) {
  return (
    <Box
      p={[10, 10, 40]}
      bg={
        "url(https://cdn.shopify.com/s/files/1/0559/0407/5843/files/Group_877.png?v=1670882076)"
      }
      bgRepeat={"no-repeat"}
      bgPosition={["unset", "left"]}
      id={"matte-black-purchase"}
    >
      <Flex direction={["column", "row"]} justifyContent={"center"}>
        <Image
          maxW={["xs", "xs", "sm"]}
          src={
            "https://cdn.shopify.com/s/files/1/0559/0407/5843/files/Rectangle_753.png?v=1670959669"
          }
          alt={"0% Paper 100% sustainable"}
        />
        <Box w={[0, 10, 20]} />
        <Box h={14} display={["block", "none"]} />
        <Flex
          direction={"column"}
          ml={[0, 14]}
          w={["100%", "50%", "40%"]}
          textAlign={"left"}
          justifyContent={"center"}
        >
          <Heading>0% Paper 100% sustainable</Heading>
          <Box h={6} />
          <Text>
            The matte black PVC card is a new product from our sustainable
            range. It is made of 100% recycled PVC and is completely recyclable.
            It has a beautiful matte finish and is designed to last.
          </Text>
          <Box h={6} />
          <HStack>
            <Rating rating={4.2} numReviews={155} />
          </HStack>
          <Box h={6} />
          <HStack flexDirection={["column-reverse", "column-reverse", "row"]}>
            <Button
              isLoading={isAddingToCart}
              loadingText={"Adding to cart..."}
              w={["100%", "100%", "50%"]}
              fontSize={"sm"}
              fontWeight="bold"
              color={"black"}
              bg={"brand.200"}
              p={["12px 16px", "28px 46px"]}
              display="flex"
              alignItems="center"
              justifyContent={"center"}
              transition="all 200ms ease-in"
              textTransform={"uppercase"}
              border="1px solid #F5D7BB"
              borderRadius={"none"}
              _hover={{
                bg: "transparent",
                color: "brand.300",
                border: "1px solid #DF9F71",
              }}
              fontFamily="Made Outer Sans Regular"
              onClick={
                !!handleAddToCart
                  ? (e: SyntheticEvent) =>
                      handleAddToCart(e, {
                        variant,
                        productDetails,
                        quantity: 1,
                      })
                  : () => {}
              }
            >
              {"Add to Cart"}
            </Button>
            <Box
              w={["100%", "100%", "50%"]}
              bg={"transparent"}
              border={"none"}
              color={"brand.300"}
              fontWeight={"bold"}
              fontFamily={"MADE Outer Sans"}
              px={[0, 0, 6]}
              textAlign={["left"]}
            >
              <Text textDecoration={"line-through"} color={"black"}>
                {price}
              </Text>
              <Text fontSize={["xl", "2xl"]}>{price}</Text>
            </Box>
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Header;
