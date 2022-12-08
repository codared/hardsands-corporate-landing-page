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
import { Product } from "modules/products/types";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { CheckoutContext } from "redux/context";
import { useTypedSelector } from "redux/store";
import { getProductBySlug } from "utils/functions";
import HowWeCompare from "../components/HowWeCompare";
import PageHeader from "../components/PageHeader";
import PromoPageProductList from "../components/PromoPageProductList";

const HandPickedForYou = () => {
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

  const reasonsWhy = [
    {
      text: "No Apps Needed!",
      bg: "brand.100",
      color: "black",
    },
    {
      text: "WorldWide Shipping",
      bg: "red",
      color: "white",
    },
    {
      text: "User-friendly",
      bg: "teal",
      color: "white",
    },
    {
      text: "Eco-freiendly",
      bg: "orange.500",
      color: "white",
    },
    {
      text: "Cost Effective",
      bg: "brand.100",
      color: "black",
    },
    {
      text: "24/7 responsive customer support",
      bg: "black",
      color: "white",
    },
  ];

  return (
    <Container overflow={"hidden"} p={[0, "inherit"]} maxW={["100%", "9xl"]}>
      <PageHeader
        title={t(
          "pages:header:title:reflect-your-unique-personality",
          "Reflect your unique personality"
        )}
        subTitle={t(
          "pages:header:description:connect-wherever-you-go",
          "Connect wherever you go. You can easily share your Hardsands digital business card with anyone you meet. The best part is, they don’t even require an app!"
        )}
        type={"dark"}
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
          "Explore our collection of unique business cards. We guarantee you’ll find a match"
        )}
        promoProducts={promoProducts}
      />

      <HowWeCompare />

      <Box position={"relative"} overflow="unset" py={[10, 48]} px={[4, 4, 48]}>
        <Box
          position={"absolute"}
          w={"200vw"}
          height={"50vh"}
          bg={"brand.100"}
          zIndex={-1}
          top={[200, 50, -200]}
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
              A one-stop-shop that helps you connect with new people
            </Heading>
            <Text my={[10]}>
              Say farewell to stacks of paper business cards. Say hello to
              sleek, simple and modern networking gear. Express yourself in ways
              never before possible with a business card.
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
              maxW={["100%", "100%", "md"]}
              mx={"auto"}
              src={
                "https://cdn.shopify.com/s/files/1/0559/0407/5843/files/2Q7A77062_1.jpg?v=1670110867"
              }
              alt={""}
            />
          </Box>
        </Flex>
      </Box>

      <Box mb={[10, 20]} py={[10]} px={[4, 2, 48]}>
        <Flex
          w={"full"}
          justifyContent={"center"}
          direction={["column-reverse", "row"]}
        >
          <Box w={["100%", "50%"]}>
            <SimpleGrid
              w={"fit-content"}
              columns={[2, 2, 3]}
              gap={2}
              m={"0 auto"}
            >
              {reasonsWhy.map((item, index) => (
                <Flex
                  key={index}
                  bg={item.bg}
                  justifyContent={"center"}
                  alignItems={"center"}
                  boxSize={150}
                  p={[10]}
                  color={item.color}
                  textTransform={"uppercase"}
                >
                  <Text>{item.text}</Text>
                </Flex>
              ))}
            </SimpleGrid>
          </Box>
          <Box my={[8, "auto"]} ml={[0, 10]} w={["100%", "30%"]}>
            <Heading>Reasons Why!</Heading>
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
