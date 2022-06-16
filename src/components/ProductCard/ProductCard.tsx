import {
  Flex,
  Box,
  useColorModeValue,
  Circle,
  Image,
  Text,
  Heading,
} from "@chakra-ui/react";
import HardsandLink from "components/HardsandsLink";

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
  name: string,
  price: any
}
export const ProductCard = ({name, price}: ProductCardProps) => {
  return (
    <HardsandLink
      href="#"
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

        <Image
          src={data.imageURL}
          alt={`Picture of ${data.name}`}
          borderRadius={20}
        />

        <Box p={["3", "6"]}>
          <Heading fontWeight="bolder" fontSize={["14px", "20px", "18px"]} textTransform="capitalize">
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
            <Text fontWeight="bolder" fontSize={[12,14, 16]} color="brand.300">
              ₦{price}
            </Text>
          </Flex>
        </Box>
      </Box>
    </HardsandLink>
  );
};

export default ProductCard;
