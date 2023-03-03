import {
  Container,
  Flex,
  Text,
  Box,
  Heading,
  Image,
  SimpleGrid,
  Divider,
} from "@chakra-ui/react";
import HardsandsButton from "components/HardsandsButton";
import productRoutes, { blogRoute } from "modules/products/routes";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { CheckoutContext } from "redux/context";
import { useTypedSelector } from "redux/store";
import { getProductsBySlug } from "utils/functions";
import HowWeCompare from "../components/HowWeCompare";
import ActionSection from "../components/NewActionsSection";
import PageHeader from "../components/PageHeader";
import PromoPageProductList from "../components/PromoPageProductList";
import WhatCustomersAreSaying from "../components/WhatCustomersAreSaying";

const HandPickedForYou = () => {
  const { state } = useContext(CheckoutContext);
  const { t } = useTranslation();
  const selectedCurrency = state.cart.selectedCurrency;
  const products = useTypedSelector(
    (prodState) => prodState?.products?.all[selectedCurrency]
  );

  const promoProducts = getProductsBySlug(
    ["matte-black-pvc-card", "bamboo-wood", "sapele-wood"],
    products
  );

  return (
    <Container overflow={"hidden"} p={[0, "inherit"]} maxW={["100%", "9xl"]}>
      <PageHeader
        title={t(
          "pages:header:title:tap-and-share-your-information-with-anyone-on-the-go",
          "Tap and share your Information with anyone on the Go"
        )}
        subTitle={t(
          "pages:header:description:connect-wherever-you-go",
          "Connect wherever you go. You can easily share your info with anyone you meet by tapping any Hardsands digital business card on their smartphones. The best part is, they don’t even require an app!"
        )}
        type={"light"}
        bgImage={
          "https://cdn.shopify.com/s/files/1/0559/0407/5843/files/2Q7A6845_-_low.jpg?v=1670370869"
        }
        buttonHref={productRoutes.products()}
        buttonText="Buy Now"
      />

      <PromoPageProductList
        title={t(
          "pages:product-list:title:new-products-handpicked-for-you",
          "New Products Handpicked For You!"
        )}
        subTitle={t(
          "pages:product-list:subtitle:explore-our-collection-of-unique-business-cards",
          "Explore our collection of unique digital business cards. We guarantee you’ll find a match"
        )}
        promoProducts={promoProducts}
      />

      <HowWeCompare py={[2]} />

      <Box position={"relative"} overflow="unset" py={[10, 48]} px={[4, 4, 48]}>
        <Box
          position={"absolute"}
          w={"200vw"}
          height={["50vh", "60vh"]}
          bg={"brand.100"}
          zIndex={-1}
          top={[200, 50, -250]}
          left={0}
          opacity={0.5}
          transform={"skewY(-20deg)"}
        />
        <Flex
          zIndex={1}
          w={"full"}
          justifyContent={"center"}
          direction={["column-reverse", "row"]}
        >
          <Box my={[6, "auto"]} mr={[10]} w={["100%", "30%"]}>
            <Heading>
              The fastest way to connect with new people
            </Heading>
            <Text my={[10]}>
              Say farewell to stacks of paper business cards. Say hello to
              sleek, simple, and modern networking gear. Express yourself in
              ways never before possible with our digital business card.
            </Text>
            <HardsandsButton
              // @ts-ignore
              textTransform={"uppercase"}
              href={productRoutes.products()}
              text={"Shop Now"}
              w={"full"}
            />
          </Box>
          <Box w={["100%", "50%", "50%"]}>
            <Image
              maxW={["100%", "100%", "lg"]}
              mx={"auto"}
              mb={[0, '4rem']}
              src={
                // "https://cdn.shopify.com/s/files/1/0559/0407/5843/files/HARDSANDS960_1_d5bc5fc9-7373-49f3-8f5a-e5ff8c25a2fb.jpg?v=1677052452"
                "https://cdn.shopify.com/s/files/1/0559/0407/5843/files/landing_page_asset_1.png?v=1670851695"
              }
              alt={""}
            />
          </Box>
        </Flex>
      </Box>

      <WhatCustomersAreSaying />

      <Box mb={[10, 20]} py={[10]} px={[4, 2, 48]}>
        <Flex
          w={"full"}
          justifyContent={"center"}
          direction={["column-reverse", "row-reverse"]}
        >
          <Box w={["100%", "50%"]}>
            <Image
              src="https://cdn.shopify.com/s/files/1/0559/0407/5843/files/005.jpg?v=1671758151"
              alt={"Reasons Why"}
            />
          </Box>
          <Box my={[8, "auto"]} ml={[0, 10]} w={["100%", "30%"]}>
            <Heading>Why Us?</Heading>
            <Text my={[10]}>
              While there are many popular digital business cards, Hardsands
              offers you a truly customizable dashboard with features that let
              you more effectively connect, communicate, and market yourself.
            </Text>
            <HardsandsButton
              href={productRoutes.products()}
              // @ts-ignore
              textTransform={"uppercase"}
              text={"Try a card"}
              w={"full"}
              display={["none", "flex"]}
            />
          </Box>
        </Flex>
        <HardsandsButton
          href={productRoutes.products()}
          // @ts-ignore
          textTransform={"uppercase"}
          text={"Try a card"}
          w={"full"}
          my={20}
          display={["flex", "none"]}
        />
      </Box>

      <ActionSection />

      <Flex
        direction={["column", "row"]}
        bg={"black"}
        py={[10, 20]}
        px={[4, 8, 48]}
      >
        <Box mr={4} w={["100%", "50%", "50%"]}>
          <Flex mb={4}>
            <Divider w={100} m={"auto 0"} />
            <Text mt={"5px"} ml={3} textTransform={"uppercase"}>
              Blog
            </Text>
          </Flex>
          <Heading color={"brand.300"}>Go through our Blog</Heading>
          <Text my={[10]} color={"white"}>
            Our blog is a great place to learn more about the different types of
            cards we offer as well as networking tips and tricks. From beginner
            tips to expert advice, we have something for everyone. So whether
            you&apos;re new to the world of digital business cards and
            networking or you&apos;re a seasoned pro, be sure to check out our
            blog for all the latest information.
          </Text>
        </Box>

        <Box w={["100%", "50%"]} h={"100%"} m={"auto 0"}>
          <Flex justifyContent={"center"} alignItems={"center"}>
            <HardsandsButton
              href={blogRoute.blogs()}
              // @ts-ignore
              textTransform={"uppercase"}
              text={"Check our blog"}
              w={"full"}
            />
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default HandPickedForYou;
