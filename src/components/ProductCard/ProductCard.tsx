import {
  Flex,
  Button,
  Box,
  useColorModeValue,
  Circle,
  Image,
  Text,
  Heading,
  Link,
} from "@chakra-ui/react";
import HardsandsButton from "components/HardsandsButton";
import HardsandLink from "components/HardsandsLink";
import { rightArrow } from "design";
import { slugify } from "utils/string";
import { ProductCardProps } from "./type";

const data = {
  isNew: true,
  imageURL:
    "https://res.cloudinary.com/dtumqh3dd/image/upload/v1656008822/hardsands/Rectangle_4_od8jnr.png",
  name: "Wayfarer Classic",
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
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
      >
        {data.isNew && (
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="red.200"
          />
        )}

        <Image src={img} alt={`Picture of ${data.name}`} objectFit="cover" />

        <Box p={["4"]} border="1px solid #F4E9E1" borderTop="none">
          <Heading
            textTransform="capitalize"
            fontWeight="normal"
            fontSize="1.5rem"
            mb={3}
            maxW={["full", "396px"]}
          >
            {name}
          </Heading>
          <Text mb={[3, 6]} fontSize="small">
            {description}
          </Text>
          <Flex mt={[0, 3, 3]} justify="space-between">
            <Box m="auto 0">
              {/* <Text
                fontSize={[10, 12, 14]}
                textDecoration="line-through"
                color="danger"
              >
                ₦{price}
              </Text> */}
              <Text fontWeight="bolder" fontSize="xl">
                ₦{price}
              </Text>
            </Box>
            <HardsandsButton text={"Shop Now".toUpperCase()} href={`/shop/${slugify(name)}`} />
          </Flex>
        </Box>
      </Box>
    </HardsandLink>
  );
};

export default ProductCard;
