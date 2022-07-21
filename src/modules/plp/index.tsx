import { Grid, Flex, Image, Text, Container } from "@chakra-ui/react";
import ProductCard from "components/ProductCard";
import UsageDemoSection from "modules/hardsands/components/HomePage/UsageDemoSection";
import { useTranslation } from "react-i18next";
import MiniSteps from "../../components/miniStepsBanner";

const ShopPLP = () => {
  const { t } = useTranslation();
  const idArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <>
      <MiniSteps />
      <Container maxWidth={["lg", "7xl"]}>
        <Flex as="section" p={["4rem 1rem", "4rem 6rem"]} justify="center">
          <Grid
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
            ]}
            gap="2rem"
          >
            {idArray.map((id) => (
              <ProductCard
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
      </Container>
      <UsageDemoSection horizontal />
    </>
  );
};

export default ShopPLP;
