import { Box, Container, Flex } from "@chakra-ui/react";
import { ProductColors } from "modules/shared/constants";
import { Product, ProductDetails } from "utils/types";
import ProductImageSlide from "./ProductImageSlides";

interface ProductDetailSectionProps {
  product: Product | null;
  productDetails: ProductDetails | null;
  productColor?: ProductColors;
}

const PRODUCTS_IMAGES = [
  "https://res.cloudinary.com/dtumqh3dd/image/upload/v1657205110/hardsands/Rectangle_213_epjh2x.svg",
  "https://res.cloudinary.com/dtumqh3dd/image/upload/v1657205110/hardsands/Rectangle_213_epjh2x.svg",
  "https://res.cloudinary.com/dtumqh3dd/image/upload/v1657205110/hardsands/Rectangle_213_epjh2x.svg",
];

const ProductDetailSection = ({
  product,
  productDetails,
  productColor,
}: ProductDetailSectionProps) => {
  //   return productDetails && product ? <Box>Hello world product</Box> : null;
  return (
    <Container maxWidth={["lg", "7xl"]}>
      <Flex as="section" p={["4rem 1rem"]}>
        <Flex
          w="100%"
          mx={['unset', 24]}
          maxW={["100%", "80%"]}
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

          {/* Product Description Section */}
          <ProductDescriptionSection />
          {/* End Product Description Section */}
        </Flex>
      </Flex>
    </Container>
  );
};

export default ProductDetailSection;
