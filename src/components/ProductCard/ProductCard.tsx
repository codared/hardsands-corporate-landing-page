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
import { AiOutlineShoppingCart } from "react-icons/ai";
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

export const NewProductCard = ({
  name,
  price,
  img = data.imageURL,
  description,
}: ProductCardProps) => {
  return (
    <HardsandLink
      href={`/shop/${slugify(name)}`}
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
        border="1px solid #F4E9E1"
      >
        {/* {data.isNew && (
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="red.200"
          />
        )} */}

        <Image
          src={img}
          alt={`Picture of ${data.name}`}
          objectFit="cover"
          w="100%"
        />

        <Box p={["4"]}>
          <Heading
            textTransform="capitalize"
            fontWeight="normal"
            fontSize="1.5rem"
            mb={3}
            maxW={["full", "396px"]}
          >
            {name}
          </Heading>
          <Text mb={[3, 6]} fontSize={[14, 16]}>
            {description}
          </Text>
          <Flex
            mt={[0, 3, 3]}
            justify="space-between"
            flexDir={["row", "column", "row"]}
          >
            <Box m="auto 0">
              {/* <Text
                fontSize={[10, 12, 14]}
                textDecoration="line-through"
                color="danger"
              >
                ₦{price}
              </Text> */}
              <Text fontWeight="bolder" fontSize={["xl"]} mr={[10, 5]}>
                ₦{price}
              </Text>
            </Box>
            <HardsandsButton
              text={"Shop Now".toUpperCase()}
              href={`/shop/${slugify(name)}`}
              // @ts-ignore
              w={"full"}
              p={["12px 16px", "10px 25px"]}
              iconMargin={[10, 4, 4]}
            />
          </Flex>
        </Box>
      </Box>
    </HardsandLink>
  );
};

export const ProductCard = ({
  name,
  price,
  img = data.imageURL,
  description,
}: ProductCardProps) => {
  return (
    <HardsandLink
      href={`/shop/${slugify(name)}`}
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
        border="1px solid #F4E9E1"
      >
        <Image
          src={img}
          alt={`Picture of ${data.name}`}
          objectFit="cover"
          w="100%"
        />

        <Box p={["4"]} textAlign="center">
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
          <Flex mt={[0, 3, 3]} justify="space-between" flexDir={["column"]}>
            <Flex mb={2} justifyContent={"space-between"} alignItems={"center"}>
              <Box>
                <VariantSelector
                  selectorType="color"
                  variants={["black", "brand.200"]}
                />
                {/* <VariantSelector
                  selectorType="style"
                  variants={["Plain", "Customized"]}
                /> */}
              </Box>
              <Box m="auto 0">
                {/* <Text
                  fontSize={[12, 12, 14]}
                  textDecoration="line-through"
                  color="danger"
                  textAlign={"end"}
                >
                  ₦{price}
                </Text> */}
                <Text fontWeight="bolder" fontSize={["xl"]} ml={[10, 5]}>
                  ₦{price}
                </Text>
              </Box>
            </Flex>
            <HardsandsButton
              text={"Shop Now".toUpperCase()}
              href={`/shop/${slugify(name)}`}
              // @ts-ignore
              w={"full"}
              p={["12px 16px", "10px 25px"]}
              Icon={AiOutlineShoppingCart}
              iconSize={20}
            />
          </Flex>
        </Box>
      </Box>
    </HardsandLink>
  );
};

export default ProductCard;
