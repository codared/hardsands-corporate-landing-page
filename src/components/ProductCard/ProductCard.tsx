import {
  Flex,
  Box,
  useColorModeValue,
  Circle,
  Image,
  Text,
  Heading,
  Link,
} from "@chakra-ui/react";
import HardsandLink from "components/HardsandsLink";
import { rightArrow } from "design";

const data = {
  isNew: true,
  imageURL:
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
  name: "Wayfarer Classic",
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};

interface ProductCardProps {
  name: string;
  description?: string;
  price: any;
  img?: string;
}
export const ProductCard = ({
  name,
  price,
  img = data.imageURL,
}: ProductCardProps) => {
  return (
    <HardsandLink
      href="/shop"
      outline="none"
      _hover={{ color: "unset" }}
      _focus={{
        outline: "none !important",
      }}
    >
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW={["100%", "100%", 300]}
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

        <Image src={img} alt={`Picture of ${data.name}`} borderRadius={20} />

        <Box p={["3", "6"]}>
          <Heading
            fontWeight="bolder"
            fontSize={["14px", "20px", "18px"]}
            textTransform="capitalize"
          >
            {name}
          </Heading>

          <Flex mt={[0, 3, 3]}>
            <Text
              fontWeight="bolder"
              mr={2}
              alignSelf="end"
              fontSize={[10, 12, 14]}
              textDecoration="line-through"
            >
              ₦{price}
            </Text>
            <Text fontWeight="bolder" fontSize={[12, 14, 16]} color="brand.300">
              ₦{price}
            </Text>
          </Flex>
        </Box>
      </Box>
    </HardsandLink>
  );
};

export const HomeProductCard = ({
  name,
  img = data.imageURL,
  description,
  price,
}: ProductCardProps) => (
  <HardsandLink
    href="/shop"
    outline="none"
    _hover={{ color: "unset" }}
    _focus={{
      outline: "none !important",
    }}
  >
    <Box
      bg={useColorModeValue("white", "gray.800")}
      maxW="250px"
      position="relative"
      mb={[0]}
    >
      <Image src={img} alt={`Picture of ${data.name}`} borderRadius={20} />

      <Box p={["3", "6"]}>
        <Flex
          color="brand.300"
          justify="space-between"
          alignItems="flex-end"
          mb={4}
        >
          <Heading fontWeight="bolder" textTransform="uppercase" fontSize="xl">
            {name}
          </Heading>
          <Text fontWeight="bolder" fontSize="small">
            from ₦{price}
          </Text>
        </Flex>

        <Text mb={8}>{description}</Text>
        <Link
          href="/shop"
          textTransform="uppercase"
          color="gray.600"
          display="flex"
          alignItems="center"
        >
          <span>See more details</span>
          <Image
            src={rightArrow.src}
            alt="right arrow"
            display="inline"
            ml="3"
          />
        </Link>
      </Box>
    </Box>
  </HardsandLink>
);

export default ProductCard;
