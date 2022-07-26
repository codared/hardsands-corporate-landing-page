import { Box, Divider, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import HardsandsAccordion from "components/HardsandsAccordion";
import ChangeColorButton from "components/HardsandsButton/ChangeColorButton";
import QuantitySelector from "components/HardsandsButton/QuantitySelector";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

const ProductDescriptionSection = () => {
  const { t } = useTranslation();
  const [activeColor, setActiveColor] = useState<string | number>("");

  const handleAddtoCart = () => {
    console.log("adding to cart...");
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
      <Heading fontSize={28}>{t("product:title", "Wooden Card")}</Heading>
      <Box h={8} />
      <Flex justifyContent={"space-between"}>
        <Heading fontSize={20} color={"brand.300"}>
          {t("product:product-price", "N30,500")}
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
      <Text>
        {t(
          "product:description",
          `Typing one nonsense to make it make sense which will eventually be replaced when the copywriter is ready. Typing one nonsense to make it make sense which will eventually be replaced when the copywriter is ready. Typing one nonsense to make it make sense which will eventually be replaced when the copywriter is ready.`
        )}
      </Text>
      <Box h={8} />
      <Flex w="full">
        <ChangeColorButton
          color="orange.900"
          name="Dark Brown"
          id={1}
          activeColor={activeColor}
          onClick={setActiveColor}
        />
        <ChangeColorButton
          color="brand.300"
          name="Dark Brown"
          id={2}
          activeColor={activeColor}
          onClick={setActiveColor}
        />
      </Flex>
      <Box h={8} />
      <Flex position={"relative"} direction={["column", "row"]}>
        <QuantitySelector
          quantity={1}
          onChange={(val: number) => console.log("quantity >>> ", val)}
        />
        <Box h={4} />
        <HStack
          px={[2]}
          py={[2]}
          mr={[4]}
          cursor="pointer"
          w={"100%"}
          justify={"center"}
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
        >
          <Text>Add to cart</Text>
          <Box as={"span"}>{" - "}</Box>
          <Text>{"N40,000"}</Text>
        </HStack>
      </Flex>
      <Box h={8} />
      {/* <Divider my={8} /> */}
      <HardsandsAccordion accordionItems={accordionItems} />
      {/* <Divider my={8} /> */}
    </Box>
  );
};

export default ProductDescriptionSection;
