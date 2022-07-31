import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react";
import HardsandLink from "components/HardsandsLink";
import QuantityModifier from "components/QuantityModifier";
import DeleteIcon from "design/svg/delete_icon.svg";
import { useState } from "react";

const CartItemCard = () => {
  const [quantity, setQuantity] = useState<number>(0);
  return (
    <>
      <Flex w="100%" justifyContent="space-between" py={5}>
        <Flex justifyContent="space-between" mr={2}>
          <Box>
            <Image
              boxSize={20}
              objectFit="contain"
              src={
                "https://res.cloudinary.com/dtumqh3dd/image/upload/v1657205110/hardsands/Rectangle_213_epjh2x.svg"
              }
              alt="cart product image"
            />
          </Box>
          <Flex direction="column" justifyContent="space-between" ml={2}>
            <Box>
              <Text fontWeight={'bold'}>Hardsands Metal Card</Text>
              <Text fontSize={"small"}>Customized</Text>
            </Box>
            <HardsandLink
              href={"#"}
              color="black"
              display="flex"
              _hover={{
                opacity: ".5",
              }}
              scale="10%"
              fontSize="smaller"
              textDecoration={'underline'}
            >
              Remove
            </HardsandLink>
          </Flex>
        </Flex>
        <Flex direction="column" justifyContent="space-between">
          <Text alignSelf={"end"} color="brand.300" fontWeight={600}>
            ₦78,800.00
          </Text>
          <QuantityModifier quantity={quantity} onChange={setQuantity} />
        </Flex>
      </Flex>
      <Divider colorScheme="brand.300" />
    </>
  );
};

export default CartItemCard;
