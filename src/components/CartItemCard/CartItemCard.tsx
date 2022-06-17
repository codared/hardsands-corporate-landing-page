import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react";
import HardsandLink from "components/HardsandsLink";
import QuantityModifier from "components/QuantityModifier";
import Placeholder from "design/svg/mastercard.png";
import DeleteIcon from "design/svg/delete_icon.svg";
import { useState } from "react";

const CartItemCard = () => {
  const [quantity, setQuantity] = useState<number>(0);
  return (
    <>
      <Flex w="100%" justifyContent="space-between" py={5}>
        <Flex justifyContent="space-between" mr={6}>
          <Box>
            <Image
              boxSize={20}
              objectFit="cover"
              src={Placeholder.src}
              alt="product image"
            />
          </Box>
          <Flex direction="column" justifyContent="space-between" ml={5}>
            <Text>Hardsands Metal Card</Text>
            <Text fontWeight={600}>₦78,800.00</Text>
          </Flex>
        </Flex>
        <Flex direction="column" justifyContent="space-between">
          <HardsandLink
            href={"#"}
            color="danger"
            display="flex"
            _hover={{
              opacity: ".5",
            }}
            alignSelf="end"
            scale="10%"
            fontSize="smaller"
          >
            <Image
              boxSize={4}
              src={DeleteIcon.src}
              alt="delete image"
              mr="10px"
            />
            Remove
          </HardsandLink>
          <QuantityModifier quantity={quantity} onChange={setQuantity} />
        </Flex>
      </Flex>
      <Divider colorScheme="brand.300" />
    </>
  );
};

export default CartItemCard;
