import { Box, Container, Flex, Grid, Heading } from "@chakra-ui/react";
import { PreviewProductCard } from "components/ProductCard/ProductCard";
import { useCurrency } from "modules/cart/hooks";
import UsageDemoSection from "modules/hardsands/components/HomePage/UsageDemoSection";
import { ProductColors } from "modules/shared/constants";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useTypedSelector } from "redux/store";
import { formatCurrencyInteger } from "utils/currency";
import { getProductOptions } from "utils/functions";
import { ProductDetails } from "utils/types";
import { Product } from "../types";
import ProductDescriptionSection from "./ProductDescriptionSection";
import ProductImageSlide from "./ProductImageSlides";

interface ProductDetailSectionProps {
  product: Product;
  productDetails: ProductDetails | null;
  productColor?: ProductColors;
  selectedVariant?: string;
}

const PRODUCTS_IMAGES = [
  "https://res.cloudinary.com/dtumqh3dd/image/upload/v1657205110/hardsands/Rectangle_213_epjh2x.svg",
  "https://res.cloudinary.com/dtumqh3dd/image/upload/v1655984088/hardsands/Hero_Images_keeoue.png",
  "https://res.cloudinary.com/dtumqh3dd/image/upload/v1657261446/hardsands/background_vector_dq6aud.svg",
];

const ProductDetailSection = ({
  product,
  productDetails,
  productColor,
  selectedVariant,
}: ProductDetailSectionProps) => {
  const { t } = useTranslation();
  const currency = useCurrency();
  const allProducts = useTypedSelector(
    (state) => state?.products?.all[currency]
  );
  console.log("allProducts >>>> ", allProducts);
  return (
    <>
      <Container maxWidth={["lg", "7xl"]}>
        <Flex
          as="section"
          p={["4rem 1rem"]}
          direction={"column"}
          justify={"space-between"}
        >
          <Flex
            w="100%"
            mx={["unset", 18]}
            maxW={["100%"]}
            px={[0, 2]}
            pb={[0, null, 20]}
            direction={["column", null, "row"]}
            align={["center", "flex-start"]}
          >
            {/* Image slides */}
            <ProductImageSlide
              productDetails={{ otherImageUrls: PRODUCTS_IMAGES }}
              imgAlt={"product hardsands wooded card"}
            />
            {/* EndImage slides */}

            <Box w={20} />

            {/* Product Description Section */}
            <ProductDescriptionSection
              selectedVariant={selectedVariant}
              productDetails={product as Product}
            />
            {/* End Product Description Section */}
          </Flex>

          <Box as="section" p={["4rem .2rem", "4rem 6rem"]}>
            <Heading fontSize={20}>
              {t(
                "common:similar-products-you-might-love",
                "Similar products you might love!"
              )}
            </Heading>
            <Box h={10} />
            <Flex>
              <Grid
                templateColumns={[
                  "repeat(1, 1fr)",
                  "repeat(2, 1fr)",
                  "repeat(3, 1fr)",
                ]}
                gap="2rem"
              >
                {!!allProducts &&
                  allProducts.length &&
                  allProducts
                    .filter((allProd) => allProd.id !== product.id)
                    .slice(0, 3)
                    .map((prod) => (
                      <PreviewProductCard
                        key={prod.id}
                        name={t("product:title", `${prod.title}`)}
                        description={t(
                          "product:description",
                          `${prod.description}`
                        )}
                        productDetails={prod}
                      />
                    ))}
              </Grid>
            </Flex>
          </Box>
        </Flex>
      </Container>
      <UsageDemoSection horizontal />
    </>
  );
  // ) : (
  //   <PDPSkeleton />
  // );
};

export default ProductDetailSection;
