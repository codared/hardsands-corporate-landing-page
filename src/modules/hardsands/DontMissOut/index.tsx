import {
    Container,
    Heading,
    Stack,
    Text,
    HStack,
    Box,
    Image,
    VStack,
    Flex,
  } from "@chakra-ui/react";
  import HardsandsButton from "components/HardsandsButton";
  import productRoutes from "modules/products/routes";
  import React, { useContext } from "react";
  import { useTranslation } from "react-i18next";
  import { CheckoutContext } from "redux/context";
  import { useTypedSelector } from "redux/store";
  import { getProductBySlug } from "utils/functions";
  import HowWeCompare from "../components/HowWeCompare";
  import PageHeader from "../components/PageHeader";
  import PromoPageProductList from "../components/PromoPageProductList";
  
  function DontMissOut() {
    const { state } = useContext(CheckoutContext);
    const { t } = useTranslation();
    const selectedCurrency = state.cart.selectedCurrency;
    const products = useTypedSelector(
      (prodState) => prodState?.products?.all[selectedCurrency]
    );

    const promoProducts = getProductBySlug(
      ["bamboo-wood", "sapele-wood", "matte-black-card"],
      products
    );

    return (
      <Container overflow={"hidden"} p={[0, "inherit"]} maxW={["100%", "9xl"]}>
        <PageHeader
          title={t(
            "pages:header:title:dont-miss-out-on-this-special-offer",
            "Don't miss out on this special offer! "
          )}
          subTitle={t(
            "pages:header:description:looking-to-save-on-your-next-purchase",
            "Looking to save on your next purchase? For a limited time, get a 20% discount on all purchases. Act now to take advantage of this special offer!"
          )}
          type={"light"}
          bgImage={
            "https://cdn.shopify.com/s/files/1/0559/0407/5843/files/Rectangle_705_1.jpg?v=1670441529"
          }
          buttonHref={productRoutes.products()}
          buttonText="Buy Now"
        />
  
        <PromoPageProductList
          title={t(
            "pages:header:title:our-trending-products",
            "Our Trending Products"
          )}
          subTitle={t(
            "pages:header:description:explore-our-collection-of-unique-business-cards",
            "Explore our collection of unique business cards. We guarantee you’ll find a match"
          )}
          promoProducts={promoProducts}
        />
  
        <Stack
          // h={'100vh'}
          direction={["column", "row"]}
          bgImage={`url(https://cdn.shopify.com/s/files/1/0559/0407/5843/files/2Q7A67932_-_low.jpg?v=1670370869)`}
          bgRepeat={"no-repeat"}
          bgSize={["cover", "cover", "cover"]}
          bgPosition={["inherit", "center", "center"]}
          position={"relative"}
        >
          <Box
            py={[10, 20]}
            px={[4, 10, 48]}
            bgGradient={
              "linear(to-r, rgba(0, 0, 0, 1), rgba(0, 0, 0, .8), rgba(0, 0, 0, .4), transparent)"
            }
            w={"full"}
            color={"white"}
          >
            <Box w={["full", "60%"]}>
              <Heading textTransform={"capitalize"}>
                save on your next purchase
              </Heading>
              <Text my={[6]}>
                Simply use the promo code on checkout. Thanks for shopping with
                us!
              </Text>
            </Box>
            <HStack>
              <HardsandsButton
                // @ts-ignore
                w={"half"}
                href={"#"}
              >
                {"CARD2022"}
              </HardsandsButton>
              <Text
                // @ts-ignore
                w={"half"}
                // @ts-ignore
                bg={"transparent"}
                border={"none"}
                color={"brand.300"}
                fontWeight={"bold"}
                fontFamily={"MADE Outer Sans"}
                px={[10]}
              >
                {"DEC 1 - DEC 25"}
              </Text>
            </HStack>
          </Box>
        </Stack>
  
        <HowWeCompare py={[10, 40]} />
  
        <Stack
          direction={["column-reverse", "row"]}
          bgImage={
            "https://res.cloudinary.com/dtumqh3dd/image/upload/v1657261446/hardsands/background_vector_dq6aud.svg"
          }
          bgRepeat={["no-repeat", "repeat"]}
          bgSize={["cover"]}
          bgColor={"black"}
          position={"relative"}
          py={[10, 20]}
          px={[4, 10, 48]}
        >
          <Flex
            direction={"column"}
            justifyContent={"center"}
            w={["full", "40%"]}
            color={"white"}
          >
            <Box>
              <Heading textTransform={"capitalize"}>
                A better way to connect, regardless of your line of work
              </Heading>
              <Text my={[6]}>
                Whether you&apos;re a freelancer, a small business owner, or a
                corporate executive, we provide you with the perfect way to
                connect with potential leads and colleagues
              </Text>
            </Box>
            <HStack>
              <HardsandsButton
                // @ts-ignore
                w={"full"}
                href={"#"}
              >
                {"SHOP NOW"}
              </HardsandsButton>
            </HStack>
          </Flex>
          <Box my={20} w={["full", "50%"]}>
            <Image
              m={"0 auto"}
              src={
                "https://cdn.shopify.com/s/files/1/0559/0407/5843/files/grid.svg?v=1670447649"
              }
              alt={"grid points"}
            />
          </Box>
        </Stack>
      </Container>
    );
  }
  
  export default DontMissOut;
  