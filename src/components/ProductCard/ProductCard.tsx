import {
  Flex,
  Box,
  useColorModeValue,
  Circle,
  Image,
  Text,
  Heading,
} from "@chakra-ui/react";
import HardsandsButton from "components/HardsandsButton";
import HardsandLink from "components/HardsandsLink";
import { useCurrency } from "modules/cart/hooks";
import productRoutes from "modules/products/routes";
import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { formatCurrencyInteger } from "utils/currency";
import { getProductOptions } from "utils/functions";
import { slugify } from "utils/string";
import { ProductCardProps } from "./type";
import VariantSelector from "./VariantSelector";

const data = {
  isNew: true,
  imageURL:
    "https://res.cloudinary.com/dtumqh3dd/image/upload/v1657205110/hardsands/Rectangle_213_epjh2x.svg",
  name: "Wayfarer Classic",
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};

export const PreviewProductCard = ({
  name,
  price,
  img = data.imageURL,
  description,
}: ProductCardProps) => {
  return (
    <HardsandLink
      href={`${productRoutes.products()}/${slugify(name)}`}
      outline="none"
      _hover={{ color: "unset" }}
      _focus={{
        outline: "none !important",
      }}
    >
      <Box
        bg={useColorModeValue("white", "gray.800")}
        position="relative"
        mb={[0]}
        // border="1px solid #F4E9E1"
      >
        <Image
          src={img}
          alt={`Picture of ${data.name}`}
          objectFit="cover"
          w="100%"
        />

        <Box p={["4"]} textAlign={"center"}>
          <Heading
            textTransform="capitalize"
            fontWeight="normal"
            fontSize={20}
            mb={3}
            maxW={["full", "396px"]}
          >
            {name}
          </Heading>

          <Text
            textAlign={"center"}
            fontWeight="bolder"
            fontSize={["xl"]}
            mr={[10, 5]}
            mt={2}
            color="brand.300"
          >
            ₦{price}
          </Text>
        </Box>
      </Box>
    </HardsandLink>
  );
};

export const ProductCard = ({
  name,
  productDetails,
  img = data.imageURL,
  description,
}: ProductCardProps) => {
  const selectedCurrency = useCurrency();
  const productVariants = getProductOptions(productDetails.options);
  const [variant, setVariant] = useState(productVariants[0]);
  const price = formatCurrencyInteger(
    productDetails.variants[variant].price,
    selectedCurrency
  );

  return (
    <HardsandLink
      href={`${productRoutes.products()}/${slugify(name)}`}
      outline="none"
      _hover={{ color: "unset" }}
      _focus={{
        outline: "none !important",
      }}
      height="100%"
    >
      <Box
        bg={useColorModeValue("white", "gray.800")}
        position="relative"
        mb={[0]}
        height="100%"
        // border="1px solid #F4E9E1"
      >
        <Image
          src={img}
          alt={`Picture of ${data.name}`}
          objectFit="cover"
          w="100%"
        />

        <Flex
          direction={"column"}
          justifyContent={"space-between"}
          p={["4"]}
          textAlign="center"
          height={"55%"}
        >
          <Box>
            <Heading
              textTransform="capitalize"
              fontWeight="normal"
              fontSize="1.2rem"
              mb={3}
              maxW={["full", "396px"]}
            >
              {name}
            </Heading>
            <Text mb={[3, 6]} fontSize={[12, 14]} noOfLines={[3, 3, 4]}>
              {description}
            </Text>
          </Box>
          <Flex mt={[0, 3, 3]} justify="space-between" flexDir={["column"]}>
            <Flex mb={2} justifyContent={"space-between"} alignItems={"center"}>
              <Box>
                <VariantSelector
                  onChange={(val: string) => setVariant(val)}
                  selectorType={productDetails.options.title}
                  variants={productVariants}
                />
              </Box>
              <Box m="auto 0">
                <Text
                  fontSize={[12, 12, 14]}
                  textDecoration="line-through"
                  color="danger"
                  textAlign={"end"}
                  display="none"
                >
                  {price}
                </Text>
                <Text fontWeight="bolder" fontSize={["1.2rem"]} ml={[10, 5]}>
                  {price}
                </Text>
              </Box>
            </Flex>
            <HardsandsButton
              text={"Shop Now".toUpperCase()}
              href={`${productRoutes.products()}/${slugify(name)}`}
              // @ts-ignore
              w={"full"}
              p={["12px 16px", "10px 25px"]}
              Icon={AiOutlineShoppingCart}
              iconSize={20}
              borderWidth="1px"
              borderStyle="solid"
              borderColor="brand.100"
              bg={"brand.100"}
              color="black"
              _hover={{
                bg: "transparent",
                color: "black",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "brand.200",
              }}
            />
          </Flex>
        </Flex>
      </Box>
    </HardsandLink>
  );
};

export default ProductCard;
