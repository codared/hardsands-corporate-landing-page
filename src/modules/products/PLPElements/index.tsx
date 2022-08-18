import { Grid, Flex, Container } from "@chakra-ui/react";
import ProductCard from "components/ProductCard";
import PLPSkeleton from "components/ProductCard/ProductSkeleton";
import UsageDemoSection from "modules/hardsands/components/HomePage/UsageDemoSection";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { CheckoutContext } from "redux/context";
import { useTypedDispatch } from "redux/store";
import MiniSteps from "../../../components/miniStepsBanner";
import { fetchAllProductsCached } from "../actions";
import { Product } from "../types";

const ShopPLP = () => {
  const { state } = useContext(CheckoutContext);
  const reduxDispatch = useTypedDispatch();
  const { t } = useTranslation();
  const [products, setProducts] = useState<Product[] | null>(null);
  const selectedCurrency = state.cart.selectedCurrency;

  useEffect(() => {
    reduxDispatch(fetchAllProductsCached(selectedCurrency)).then((prods) => {
      setTimeout(() => {
        setProducts(prods);
      }, 2000);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCurrency]);

  return (
    <>
      <MiniSteps />
      <Container maxWidth={["lg", "7xl"]}>
        {!!products && products?.length !== 0 ? (
          <Flex
            as="section"
            mb={20}
            p={["4rem 1rem", "4rem 6rem"]}
            justify="center"
          >
            <Grid
              templateColumns={[
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
              ]}
              gap="2rem"
            >
              {products.map((prod: Product, id) => (
                <ProductCard
                  key={id}
                  name={t("product:title", `${prod.title}`)}
                  description={t("product:description", `${prod.description}`)}
                  productDetails={prod}
                />
              ))}
            </Grid>
          </Flex>
        ) : (
          <PLPSkeleton />
        )}
      </Container>
      <UsageDemoSection horizontal />
    </>
  );
};

export default ShopPLP;
