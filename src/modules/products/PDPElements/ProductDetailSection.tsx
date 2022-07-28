import { Box, Container, Flex, Grid, Heading } from "@chakra-ui/react";
import { PreviewProductCard } from "components/ProductCard/ProductCard";
import { PDPSkeleton } from "components/ProductCard/ProductSkeleton";
import UsageDemoSection from "modules/hardsands/components/HomePage/UsageDemoSection";
import { ProductColors } from "modules/shared/constants";
import { useTranslation } from "react-i18next";
import { Product, ProductDetails } from "utils/types";
import ProductDescriptionSection from "./ProductDescriptionSection";
import ProductImageSlide from "./ProductImageSlides";

interface ProductDetailSectionProps {
  product: Product | null;
  productDetails: ProductDetails | null;
  productColor?: ProductColors;
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
}: ProductDetailSectionProps) => {
  const { t } = useTranslation();
  const idArray = [0, 1, 2];
  // return productDetails && product ? (
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
            <ProductDescriptionSection />
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
                {idArray.map((id) => (
                  <PreviewProductCard
                    key={id}
                    name={t("product:title", "Hardsands metal card")}
                    description={t(
                      "product:description",
                      "PVC is a customizable card for your business or blablabla. I’m lost of words to use so here is a placeholder that doesn’t make sense."
                    )}
                    price={t("product:price", "78,000")}
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
