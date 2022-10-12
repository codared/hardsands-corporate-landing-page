import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Flex,
  Text,
} from "@chakra-ui/react";
import { HomeProductCard } from "components/ProductCard";
import useTrackProductImpression from "modules/analytics/hooks/useTrackProductImpression";
import { EcommerceProduct } from "modules/analytics/types";
import { useCurrency } from "modules/cart/hooks";
import { getProductImageFromSlug } from "modules/products/functions";
import { useTranslation } from "react-i18next";
import { useTypedSelector } from "redux/store";
import { formatCurrencyInteger } from "utils/currency";
import { getProductOptions } from "utils/functions";

const ProductShowcaseSection = () => {
  const { t } = useTranslation();
  const currency = useCurrency();
  const products = useTypedSelector((state) => state?.products?.all[currency]);

  return (
    <Container maxWidth={"7xl"}>
      <Box py={[10, 10, 16]}>
        <Box textAlign={"center"}>
          <Heading
            color="brand.300"
            mb={[2]}
            textTransform={"uppercase"}
            fontSize={32}
          >
            {t("common:our-product-materials", "Our Products")}
          </Heading>
          <Text>
            {t(
              "common:check-out-our-catalogue",
              "Check out our catalogue of cards of your choice."
            )}
          </Text>
        </Box>
        <SimpleGrid mt={[14]} columns={[1, 2, 3]} spacing={[2, 3, 5]}>
          {products &&
            products.length &&
            products.slice(0, 3).map((prod) => {
              const options = getProductOptions(prod.options);

              const eCommerceProd: EcommerceProduct = {
                id: prod.id,
                name: prod.title,
                price: prod.variants[options[0]].price
              }

              // useTrackProductImpression(eCommerceProd, currency)

              return (
                <HomeProductCard
                  key={prod.id}
                  slug={prod.slug}
                  img={getProductImageFromSlug(prod.slug, options[0])}
                  name={t("product:title", "{{title}}", {
                    title: prod.title,
                  })}
                  price={t("product:price", "{{price}}", {
                    price: formatCurrencyInteger(
                      prod.variants[options[0]].price,
                      currency
                    ),
                  })}
                  t={t}
                  description={t("product:description", "{{description}}", {
                    description: prod.description,
                  })}
                />
              );
            })}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default ProductShowcaseSection;
