import { Box, Flex, Heading, Grid, Text } from "@chakra-ui/react";
import ProductCard from "components/ProductCard";
import { CartDataDetails } from "components/ProductCard/type";
import PromoBadge from "components/PromoBadge";
import productRoutes from "modules/products/routes";
import Cart from "modules/cart";
import { useAddtoCart } from "modules/cart/hooks";
import { Product } from "modules/products/types";
import Link from "next/link";
import React, { SyntheticEvent, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

function PromoPageProductList({
  title,
  subTitle,
  promoProducts,
}: {
  title: string;
  subTitle: string;
  promoProducts: Product[] | undefined;
}) {
  const { t } = useTranslation();
  const cartBtnRef = useRef(null);
  const [cartData, setCartData] = useState<CartDataDetails | null>();
  const {
    isCartOpen,
    setIsCartOpen,
    isLoading,
    handleAddtoCart: sendToCart,
  } = useAddtoCart({
    productDetails: cartData?.productDetails as Product,
    activeVariant: cartData?.variant as string,
    quantity: cartData?.quantity as number,
  });

  const handleAddToCart = (e: SyntheticEvent, details: CartDataDetails) => {
    e.preventDefault();
    setCartData(details);
  };

  useEffect(() => {
    if (cartData?.productDetails.id) {
      sendToCart();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartData]);

  return (
    <>
      <Box id="our-trending-products" py={[10, 40]} px={[4, 48]}>
        <Flex direction={"column"} textAlign={"center"}>
          <Heading mb={4} color={"brand.300"}>
            {title}
          </Heading>
          <Text>{subTitle}</Text>
        </Flex>

        <Flex as="section" px={["4rem"]} pt={["1rem", "6rem"]} justify="center">
          <Grid
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
            ]}
            gap="2rem"
          >
            {promoProducts &&
              promoProducts?.length > 0 &&
              promoProducts?.map((prod: Product, id) => (
                <Box key={id} position={"relative"}>
                  {prod.slug === "matte-black-pvc-card" && (
                    <PromoBadge text="Trending" />
                  )}
                  <ProductCard
                    id={prod.id}
                    name={t("product:title", `${prod.title}`)}
                    description={t(
                      "product:description",
                      `${prod.description}`
                    )}
                    productDetails={prod}
                    buttonText={"Add to Cart".toUpperCase()}
                    onButtonClick={handleAddToCart}
                    isLoading={
                      cartData?.productDetails.id === prod.id
                        ? isLoading
                        : false
                    }
                  />
                </Box>
              ))}
          </Grid>
        </Flex>
        <Flex direction={"column"} textAlign={["center", "right"]} mt={[2,8]}>
          <Link href={productRoutes.products()}>
            <Text cursor="pointer" fontFamily="made outer sans light" textDecoration="underline">
              {'Browse All Products >>'}
            </Text>
          </Link>
        </Flex>
      </Box>

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(!isCartOpen)}
        ref={cartBtnRef}
      />
    </>
  );
}

export default PromoPageProductList;
