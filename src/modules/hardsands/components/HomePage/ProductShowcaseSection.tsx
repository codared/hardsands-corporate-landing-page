import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Flex,
  Text,
} from "@chakra-ui/react";
import { HomeProductCard } from "components/ProductCard";
import { useTranslation } from "react-i18next";

const ProductShowcaseSection = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth={"7xl"}>
      <Box py={[10, 10, 16]}>
        <Heading
          color="brand.300"
          mb={[2]}
          textTransform={"uppercase"}
          fontSize={32}
        >
          {t("common:our-product-materials", "Our Product Materials")}
        </Heading>
        <Text>
          {t(
            "common:check-out-our-catalogue",
            "Check out our catalogue of cards materials of your choice."
          )}
        </Text>
        <SimpleGrid mt={[14]} columns={[2, 3, 3]} spacing={[2, 3, 5]}>
          <HomeProductCard
            img="https://res.cloudinary.com/dtumqh3dd/image/upload/v1657205110/hardsands/Rectangle_213_epjh2x.svg"
            name={t("product:pvc", "PVC")}
            price={t("product:price", "20,500.00")}
            t={t}
            description={t(
              "product:description:pvc-is-a-customizable-card",
              "PVC is a customizable card for your business or blablabla. I’m lost of words to use so here is a placeholder that doesn’t make sense."
            )}
          />
          <HomeProductCard
            img="https://res.cloudinary.com/dtumqh3dd/image/upload/v1657205099/hardsands/Rectangle_213_1_i94rzl.svg"
            name={t("product:metal", "Metal")}
            price={t("product:price", "40,500.00")}
            t={t}
            description={t(
              "product:description:pvc-is-a-customizable-card",
              "PVC is a customizable card for your business or blablabla. I’m lost of words to use so here is a placeholder that doesn’t make sense."
            )}
          />
          <HomeProductCard
            img="https://res.cloudinary.com/dtumqh3dd/image/upload/v1657205110/hardsands/Rectangle_213_epjh2x.svg"
            name={t("product:wood", "Wood")}
            price={t("product:price", "20,500.00")}
            t={t}
            description={t(
              "product:description:pvc-is-a-customizable-card",
              "PVC is a customizable card for your business or blablabla. I’m lost of words to use so here is a placeholder that doesn’t make sense."
            )}
          />
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default ProductShowcaseSection;
