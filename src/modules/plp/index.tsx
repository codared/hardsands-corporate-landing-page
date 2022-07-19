import { Grid, Flex, Image, Text } from "@chakra-ui/react";
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
                "Our most exclusive product - premium, innovative, bespoke."
              )}
              price={t("product:price", "78,000")}
            />
          ))}
        </Grid>
      </Flex>
      <UsageDemoSection />
    </>
  );
};

export default ShopPLP;
