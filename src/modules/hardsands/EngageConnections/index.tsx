import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import HardsandsButton from "components/HardsandsButton";
import { CartDataDetails } from "components/ProductCard/type";
import Cart from "modules/cart";
import { useAddtoCart } from "modules/cart/hooks";
import { Product } from "modules/products/types";
import React, {
  SyntheticEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import { CheckoutContext } from "redux/context";
import { useTypedSelector } from "redux/store";
import { formatCurrencyInteger } from "utils/currency";
import { getProductBySlug } from "utils/functions";
import Header from "./components/Header";

function EngageConnections() {
  const { state } = useContext(CheckoutContext);
  const { t } = useTranslation();
  const cartBtnRef = useRef(null);
  const [cartData, setCartData] = useState<CartDataDetails | null>();
  const [selectedVariant, setSelectedVariant] = useState<string>("Plain");
  const selectedCurrency = state.cart.selectedCurrency;
  const products = useTypedSelector(
    (prodState) => prodState?.products?.all[selectedCurrency]
  );

  const promoProduct = getProductBySlug("matte-black-card", products);

  const {
    isCartOpen,
    setIsCartOpen,
    handleAddtoCart: sendToCart,
    isLoading,
  } = useAddtoCart({
    productDetails: !!promoProduct ? promoProduct : ({} as Product),
    activeVariant: selectedVariant,
    quantity: 1,
  });

  const price = formatCurrencyInteger(
    !!promoProduct ? promoProduct?.variants[selectedVariant].price : 0,
    selectedCurrency,
    0
  );

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

  const steps = [
    {
      img: "https://cdn.shopify.com/s/files/1/0559/0407/5843/files/HARDSANDS945_1.jpg?v=1668094030",
      title: "Sleek and professional",
      text: "The perfect way to exude an air of professionalism. This sleek card gives you an edge over the competition and conveys a message of sophistication and success.",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0559/0407/5843/files/HARDSANDS945_1.jpg?v=1668094030",
      title: "Power and prestige",
      text: "This is the card for people who mean business - it conveys a sense of class. It commands attention and leaves a lasting impression.",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0559/0407/5843/files/HARDSANDS945_1.jpg?v=1668094030",
      title: "Perfect for formal occasions",
      text: "The elegant, yet simple design makes it ideal for formal gatherings. Plus, its black colour gives it a professional look that sets it apart from other business cards.",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0559/0407/5843/files/HARDSANDS945_1.jpg?v=1668094030",
      title: "Luxurious look and feel",
      text: "The black matte finish adds a touch of class and sophistication to the card. We have designed the card with careful attention to detail and it exudes quality.",
    },
  ];

  if (!promoProduct) return null;

  return (
    <Container overflow={"hidden"} p={[0, "inherit"]} maxW={["100%", "9xl"]}>
      {!!promoProduct && (
        <Header
          isAddingToCart={isLoading}
          price={price}
          handleAddToCart={handleAddToCart}
          variant={selectedVariant}
          productDetails={promoProduct}
        />
      )}

      <Flex
        direction={["column", "column", "row"]}
        justifyContent={"center"}
        alignItems={"center"}
        bg={"black"}
        p={[10, 10, 40]}
      >
        <Box
          mb={[20, 20, 0]}
          w={["100%", "100%", "50%"]}
          color={"white"}
          justifyContent={"center"}
        >
          <Heading fontSize={["4xl", "6xl"]}>
            Engage connections with an immersive experience
          </Heading>
          <Box h={6} />
          <Text w={["100%", "60%"]}>
            It may seem like a simple way to share your contact information. But
            with a little creativity, you can create an immersive experience
            that will engage your connections and leave a lasting impression.
          </Text>
          <Box h={6} />
          <HardsandsButton href="#matte-black-purchase">
            Buy Now
          </HardsandsButton>
        </Box>

        <Image
          w={["lg", "lg", "50%"]}
          h={"auto"}
          src={
            "https://cdn.shopify.com/s/files/1/0559/0407/5843/files/Group_945.png?v=1670954330"
          }
          alt={"Engage connections with an immersive experience"}
        />
      </Flex>

      <Flex direction={["column"]} justifyContent={"center"} p={[10, 10, 40]}>
        <Box w={["full"]} textAlign={"center"} mb={[10, 20]}>
          <Heading textTransform={"capitalize"}>
            4 REASONS WHY YOU NEED THE BLACK MATTE CARD
          </Heading>
        </Box>

        <Flex direction={["column"]} w={["100%", "100%", "70%"]} m={"0 auto"}>
          {steps.map((step: any, index: number) => (
            <Flex
              key={step.title}
              justifyContent={["center"]}
              alignItems={["center"]}
              direction={["column", index % 2 === 0 ? "row" : "row-reverse"]}
              mb={[14, 0]}
            >
              <Image w={["full", "xs"]} src={step.img} alt={step.title} />
              <Box w={[0, 24, 32]} h={[6, 10, 0]} />
              <Box
                w={["100%", "40%"]}
                textAlign={["left", index % 2 === 0 ? "left" : "right"]}
              >
                <Heading fontWeight={"normal"}>{step.title}</Heading>
                <Box h={6} />
                <Text>{step.text}</Text>
              </Box>
            </Flex>
          ))}
        </Flex>
      </Flex>

      <Box
        p={[10, 10, 48]}
        bg={
          "url(https://cdn.shopify.com/s/files/1/0559/0407/5843/files/slideBg.svg?v=1670951411)"
        }
        bgRepeat={"no-repeat"}
        bgPosition={["center"]}
        bgSize={"cover"}
        mb={[10]}
      >
        <Flex direction={["column", "row"]} justifyContent={"center"}>
          <Flex
            direction={"column"}
            ml={[0, 14]}
            w={["100%", "60%", "40%"]}
            textAlign={"left"}
            justifyContent={"center"}
          >
            <Heading>Join the 1% of the 1%</Heading>
            <Box h={6} />
            <Text>
              What if we told you that in one step, you could join the 1%? Sure,
              it sounds like a sales pitch. But it&apos;s true! We want you to
              be ahead of the game.
            </Text>
            <Box h={6} />
            <HardsandsButton
              // @ts-ignore
              w={"full"}
              href={"#"}
            >
              {"TRY NOW"}
            </HardsandsButton>
          </Flex>
          {/* <Box w={20} />
          <Box h={14} display={["block", "none"]} />
          <Image
            maxW={"sm"}
            src={
              "https://cdn.shopify.com/s/files/1/0559/0407/5843/files/landing_page_asset_1.png?v=1670851695"
            }
            alt={"Join the 1% of the 1%"}
          /> */}
        </Flex>
      </Box>

      <Box maxW={"80%"} m={"0 auto 100px"} p={[10, 10, 40]} bgColor={"black"}>
        <Flex
          direction={["column", "column", "row"]}
          justifyContent={"center"}
          alignItems={["center"]}
        >
          <Image
            maxW={["100%"]}
            w={"sm"}
            src={
              "https://cdn.shopify.com/s/files/1/0559/0407/5843/files/2Q7A67802_-_low.jpg?v=1670370869"
            }
            alt={"Personalized Corporate Gifting"}
          />
          <Box w={20} />
          <Box h={[14]} display={["block", "block", "none"]} />
          <Flex
            direction={"column"}
            ml={[0, 0, 14]}
            w={["100%", "60%", "30%"]}
            textAlign={"left"}
            justifyContent={"center"}
            color={"white"}
          >
            <Heading>Personalized Corporate Gifting</Heading>
            <Box h={6} />
            <Text>
              Very soon, you would be able to give the gift of professional
              networking. it is a great way to show your appreciation for an
              employee or to support a friend as they start their own business
            </Text>
            <Box h={6} />
            <HardsandsButton
              // @ts-ignore
              w={"full"}
              href={"#"}
            >
              {"Coming Soon"}
            </HardsandsButton>
          </Flex>
        </Flex>
      </Box>

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(!isCartOpen)}
        ref={cartBtnRef}
      />
    </Container>
  );
}

export default EngageConnections;
