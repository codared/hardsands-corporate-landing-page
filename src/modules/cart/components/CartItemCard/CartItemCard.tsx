import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react";
import HardsandLink from "components/HardsandsLink";
import QuantityModifier from "components/QuantityModifier";
import { updateCartItem } from "modules/cart/actions";
import { CartResponse, CartResponseItem } from "modules/cart/types";
import { useContext, useState } from "react";
import { CheckoutContext } from "redux/context";
import { formatCurrencyInteger } from "utils/currency";

interface CartItemCardProd {
  cartProduct: CartResponseItem;
  onRemoveItem: (item: CartResponseItem) => Promise<CartResponse>;
}

const CartItemCard = ({ cartProduct, onRemoveItem }: CartItemCardProd) => {
  const { dispatch } = useContext(CheckoutContext);
  const [isUpdating, setIsUpdating] = useState(false);
  const [quantity, setQuantity] = useState<number>(cartProduct.quantity);

  const onQuantityUpdate = async (quantity: number) => {
    setQuantity(quantity);
    setIsUpdating(true);
    await dispatch(
      updateCartItem(cartProduct, {
        quantity,
      })
    );
    setIsUpdating(false);
    return;
  };

  const handleRemoveCartItem = () => {
    setIsUpdating(true);
    onRemoveItem(cartProduct);
  };

  return (
    <>
      <Flex
        w="100%"
        justifyContent="space-between"
        py={5}
        position={"relative"}
      >
        {isUpdating && (
          <Box
            position={"absolute"}
            top={0}
            left={0}
            right={0}
            bottom={0}
            bg={"rgba(255, 255, 255, .5)"}
            zIndex={1}
          />
        )}
        <Flex justifyContent="space-between" mr={2}>
          <Box>
            <Image
              boxSize={20}
              objectFit="contain"
              src={
                cartProduct?.image ||
                "https://res.cloudinary.com/dtumqh3dd/image/upload/v1657205110/hardsands/Rectangle_213_epjh2x.svg"
              }
              alt={`${cartProduct.product.title} cart product image`}
            />
          </Box>
          <Flex direction="column" justifyContent="space-between" ml={2}>
            <Box>
              <Text fontWeight={"bold"}>{cartProduct.product.title}</Text>
              <Text fontSize={"small"}>{cartProduct.productVariantKey}</Text>
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
              textDecoration={"underline"}
              onClick={handleRemoveCartItem}
            >
              Remove
            </HardsandLink>
          </Flex>
        </Flex>
        <Flex direction="column" justifyContent="space-between">
          <Text alignSelf={"end"} color="brand.300" fontWeight={600}>
            {formatCurrencyInteger(cartProduct.price, cartProduct.currency)}
          </Text>
          <QuantityModifier quantity={quantity} onChange={onQuantityUpdate} />
        </Flex>
      </Flex>
      <Divider colorScheme="brand.300" />
    </>
  );
};

export default CartItemCard;
