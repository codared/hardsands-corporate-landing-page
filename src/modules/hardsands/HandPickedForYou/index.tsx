import {
  Container,
  Flex,
  Text,
  Box,
  Heading,
  Image,
  Grid,
  color,
  SimpleGrid,
  Divider,
} from "@chakra-ui/react";
import HardsandsButton from "components/HardsandsButton";
import HardsandLink from "components/HardsandsLink";
import ProductCard from "components/ProductCard";
import { CartDataDetails } from "components/ProductCard/type";
import PromoBadge from "components/PromoBadge";
import Cart from "modules/cart";
import { useAddtoCart } from "modules/cart/hooks";
import productRoutes, { blogRoute } from "modules/products/routes";
import { Product } from "modules/products/types";
import React, {
  SyntheticEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { CheckoutContext } from "redux/context";
import { useTypedSelector } from "redux/store";

const HandPickedForYou = () => {
  const { state } = useContext(CheckoutContext);
  const { t } = useTranslation();
  const cartBtnRef = useRef(null);
  const selectedCurrency = state.cart.selectedCurrency;
  const products = useTypedSelector(
    (prodState) => prodState?.products?.all[selectedCurrency]
  );
  const [cartData, setCartData] = useState<CartDataDetails | null>();
  const {
    isCartOpen,
    setIsCartOpen,
    isLoading,
    handleAddtoCart: sendToCart,
  } = useAddtoCart({
    productDetails: cartData?.productDetails as Product,
    activeVariant: cartData?.variant as string,
    quantity: cartData?.quantity as number,
  });

  const handleAddToCart = (e: SyntheticEvent, details: CartDataDetails) => {
    e.preventDefault();
    setCartData(details);
  };

  useEffect(() => {
    if (cartData?.productDetails.id) {
      sendToCart();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartData]);

  const getProductBySlug = (slugs: string[]) => {
    return products?.filter((prod) => slugs.includes(prod.slug));
  };

  const promoProducts = getProductBySlug([
    "bamboo-wood",
    "sapele-wood",
    "matte-black-card",
  ]);

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
      <Flex
        py={[10, 20]}
        px={[4, 10, 48]}
        // h={'100vh'}
        direction={["column", "row"]}
        bgImage={
          "url(https://cdn.shopify.com/s/files/1/0559/0407/5843/files/2Q7A6845_-_low.jpg?v=1670370869)"
        }
        bgRepeat={"no-repeat"}
        bgSize={["cover", "cover", "contain"]}
        bgPosition={["inherit", "center", "inherit"]}
      >
        <Flex maxW={["full", "40%", "40%"]} alignItems={"center"}>
          <Box w={["100%"]} h={"fit-content"}>
            <Heading size={"2xl"}>Reflect your unique personality</Heading>
            <Text my={[10]}>
              Connect wherever you go. You can easily share your Hardsands
              digital business card with anyone you meet. The best part is, they
              don’t even require an app!
            </Text>
            {/* <Flex mb={10} display={["flex", "none"]} w={["100%", "50%", "50%"]}>
              <Image
                w={"full"}
                src={
                  "https://cdn.shopify.com/s/files/1/0559/0407/5843/files/DSC00115_1.png?v=1669720132"
                }
                alt={"hand picked for you"}
              />
            </Flex> */}
            <HardsandsButton
              // @ts-ignore
              bg={"black"}
              color={"brand.300"}
              w={"full"}
              href={productRoutes.products()}
              _hover={{
                bg: "transparent",
                color: "black",
                borderColor: "black",
              }}
            >
              Buy Now
            </HardsandsButton>
          </Box>
        </Flex>
        {/* <Flex
          display={["none", "flex"]}
          m={"10px auto"}
          w={["100%", "50%", "50%"]}
        >
          <Image
            w={"full"}
            src={
              "https://cdn.shopify.com/s/files/1/0559/0407/5843/files/DSC00115_1.png?v=1669720132"
            }
            alt={"hand picked for you"}
          />
        </Flex> */}
      </Flex>

      {/* New Products Handpicked For You! */}
      <Box py={[10]} px={[4, 48]}>
        <Flex direction={"column"} textAlign={"center"}>
          <Heading mb={4} color={"brand.300"}>
            New Products Handpicked For You!
          </Heading>
          <Text>
            Explore our collection of unique business cards. We guarantee you’ll
            find a match
          </Text>
        </Flex>

        <Flex as="section" p={["4rem 1rem", "4rem 6rem"]} justify="center">
          <Grid
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
            ]}
            gap="2rem"
          >
            {promoProducts &&
              promoProducts?.length > 0 &&
              promoProducts?.map((prod: Product, id) => (
                <Box key={id} position={"relative"}>
                  {prod.slug === "matte-black-card" && (
                    <PromoBadge text="Trending" />
                  )}
                  <ProductCard
                    id={prod.id}
                    name={t("product:title", `${prod.title}`)}
                    description={t(
                      "product:description",
                      `${prod.description}`
                    )}
                    productDetails={prod}
                    buttonText={"Add to Cart".toUpperCase()}
                    onButtonClick={handleAddToCart}
                    isLoading={
                      cartData?.productDetails.id === prod.id
                        ? isLoading
                        : false
                    }
                  />
                </Box>
              ))}
          </Grid>
        </Flex>
      </Box>

      <Box py={[10]} px={[4, 8, 48]}>
        <Flex direction={"column"} textAlign={"center"}>
          <Heading mb={4} color={"brand.300"}>
            How we compare
          </Heading>
          <Text>Check out the features comparison to see for yourself.</Text>
        </Flex>

        <Box mt={[16]}>
          <Flex w={"fit-content"} mx={"auto"}>
            <Box>
              <Box p={[6]} maxW={[400]}>
                <Text h={"30px"}> </Text>
              </Box>
              <Box p={[6]} maxW={[400]}>
                <Text>High-level security</Text>
              </Box>
              <Box p={[6]} maxW={[400]}>
                <Text>Payment links for Visa, Mastercard and more</Text>
              </Box>
              <Box p={[6]} maxW={[400]}>
                <Text>
                  Card sharing via QR code, email, text, WhatsApp, and NFC tag
                </Text>
              </Box>
              <Box p={[6]} maxW={[400]}>
                <Text>Social media links</Text>
              </Box>
              <Box p={[6]} maxW={[400]}>
                <Text>Super intuitive user interface</Text>
              </Box>
              <Box p={[6]} maxW={[400]}>
                <Text>Basic card analytics</Text>
              </Box>
            </Box>
            <Box>
              <Flex
                alignItems={"center"}
                justifyContent={"center"}
                p={[6]}
                w={[200]}
              >
                <Text>Paper Cards</Text>
              </Flex>
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <Flex
                  key={index}
                  alignItems={"center"}
                  justifyContent={"center"}
                  p={[6]}
                  w={[200]}
                >
                  <Text>
                    <AiOutlineCloseCircle size={24} />
                  </Text>
                </Flex>
              ))}
            </Box>
            <Box>
              <Flex
                alignItems={"center"}
                justifyContent={"center"}
                p={[6]}
                w={[200]}
              >
                <Text>Hardsands Cards</Text>
              </Flex>
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <Flex
                  key={index}
                  alignItems={"center"}
                  justifyContent={"center"}
                  bg={"brand.100"}
                  p={[6]}
                  w={[200]}
                >
                  <Text>
                    <AiOutlineCheckCircle size={24} />
                  </Text>
                </Flex>
              ))}
            </Box>
            <Box>
              <Flex
                alignItems={"center"}
                justifyContent={"center"}
                p={[6]}
                w={[200]}
              >
                <Text>Other Cards</Text>
              </Flex>
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <Flex
                  key={index}
                  alignItems={"center"}
                  justifyContent={"center"}
                  p={[6]}
                  w={[200]}
                >
                  <Text>
                    <AiOutlineCloseCircle size={24} />
                  </Text>
                </Flex>
              ))}
            </Box>
          </Flex>
        </Box>
      </Box>

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

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(!isCartOpen)}
        ref={cartBtnRef}
      />
    </Container>
  );
};

export default HandPickedForYou;
