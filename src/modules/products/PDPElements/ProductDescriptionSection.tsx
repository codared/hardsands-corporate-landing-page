import { Box, Button, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import HardsandsAccordion from "components/HardsandsAccordion";
import QuantitySelector from "components/HardsandsButton/QuantitySelector";
import VariantSelector from "components/ProductCard/VariantSelector";
import Cart from "modules/cart";
import { addItemToCart } from "modules/cart/actions";
import { useCurrency } from "modules/cart/hooks";
import { useContext, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { CheckoutContext } from "redux/context";
import { formatCurrencyInteger } from "utils/currency";
import { getProductOptions } from "utils/functions";
import { Product } from "../types";

const ProductDescriptionSection = ({
  productDetails,
}: {
  productDetails: Product;
}) => {
  const { t } = useTranslation();
  const { dispatch } = useContext(CheckoutContext);
  const [quantity, setQuantity] = useState(1);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const productVariants = getProductOptions(productDetails.options);
  const currency = useCurrency();
  const cartBtnRef = useRef(null);
  const [activeVariant, setActiveVariant] = useState<string | number>(
    productVariants[0]
  );
  const [isLoading, setIsLoading] = useState(false);

  const price = formatCurrencyInteger(
    productDetails.variants[activeVariant].price,
    currency
  );
  const handleAddtoCart = async () => {
    setIsLoading(true);

    const customizedCartItem = {
      productId: productDetails.id,
      productVariant: activeVariant,
      quantity,
    };

    try {
      await dispatch(addItemToCart(customizedCartItem));
      setIsLoading(false);
      setIsCartOpen(true);
    } catch (err) {
      setIsLoading(false);
    }
  };

  const accordionItems = [
    {
      title: t("pdp:how-it-works", "How it works"),
      description: t(
        "pdp:how-it-works:description",
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
			eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
			enim ad minim veniam, quis nostrud exercitation ullamco laboris
			nisi ut aliquip ex ea commodo consequat.`
      ),
    },
  ];

  return (
    <Box w={["100%", "100%", "50%"]}>
      <Heading fontSize={28}>
        {t("product:title", `${productDetails.title}`)}
      </Heading>
      <Box h={8} />
      <Flex justifyContent={"space-between"}>
        <Heading fontSize={20} color={"brand.300"}>
          {t("product:product-price", `${price}`)}
        </Heading>
        <Flex alignItems={"center"}>
          <Flex justify={"center"} alignItems={"center"}>
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarHalf />
            <BsStar />
          </Flex>
          <Box w={4} />
          <Text>{t("product:review-title", "23 Reviews")}</Text>
        </Flex>
      </Flex>
      <Box h={8} />
      <Text>{t("product:description", `${productDetails.description}`)}</Text>
      <Box h={8} />
      <Flex w="full">
        <VariantSelector
          selectorType={`${productDetails.options.title}_`}
          variants={productVariants}
          onChange={setActiveVariant}
        />
      </Flex>
      <Box h={8} />
      <Flex position={"relative"} direction={["column", "row"]}>
        <QuantitySelector quantity={quantity} onChange={setQuantity} />
        <Box h={4} />
        <Button
          px={[4]}
          py={[8]}
          mr={[4]}
          cursor="pointer"
          w={"100%"}
          borderRadius={"none"}
          justifyContent={"center"}
          transition={"all ease-in-out 200ms"}
          bg="brand.200"
          color={"black"}
          _hover={{
            bg: "black",
            color: "brand.200",
          }}
          fontFamily={"MADE Outer sans"}
          onClick={handleAddtoCart}
          userSelect="none"
          ref={cartBtnRef}
          isLoading={isLoading}
          loadingText="Adding to cart..."
        >
          <Text>{t("product:add-to-cart", "Add to cart")}</Text>
          {/* <Box as={"span"}>{"  -  "}</Box>
          <Text>{t("product:product-price", `${price}`)}</Text> */}
        </Button>
      </Flex>
      <Box h={8} />
      {/* <Divider my={8} /> */}
      <HardsandsAccordion accordionItems={accordionItems} />
      {/* <Divider my={8} /> */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(!isCartOpen)}
        ref={cartBtnRef}
      />
    </Box>
  );
};

export default ProductDescriptionSection;
