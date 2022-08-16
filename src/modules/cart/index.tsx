import {
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Drawer,
  Box,
  Flex,
  Text,
  DrawerOverlay,
  Heading,
} from "@chakra-ui/react";
import CurrencySelector from "components/CurrenctSelector";
import HardsandLink from "components/HardsandsLink";
import React, { useContext, useEffect } from "react";
import CartItemCard from "modules/cart/components/CartItemCard";
import { selectCart } from "./selectors";
import { formatCurrencyInteger } from "utils/currency";
import { useTranslation } from "react-i18next";
import { computeItemsQuantity } from "./functions";
import productRoutes from "modules/products/routes";
import { loadOrCreateCart } from "./actions";
import { CheckoutContext } from "redux/context";
import { useCurrency } from "./hooks";

const Cart = React.forwardRef(
  (
    {
      isOpen,
      onClose,
    }: {
      isOpen: boolean;
      onClose: any;
    },
    ref
  ) => {
    const { t } = useTranslation();
    const currency = useCurrency();
    const { dispatch, state } = useContext(CheckoutContext);
    const cart = selectCart(state);
    const numberOfItems = cart && computeItemsQuantity(cart.items);

    useEffect(() => {
      if (!cart) {
        dispatch(loadOrCreateCart(currency));
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cart]);

    return (
      <Drawer
        // @ts-ignore
        initialFocusRef={ref}
        isOpen={isOpen}
        placement="right"
        size="sm"
        onClose={() => {
          onClose();
          const portal: any = document.querySelector(
            "#cart__drawer_overlay"
          ) as HTMLElement;
          setTimeout(() => {
            portal.parentNode.style.display = "none";
          }, 500);
        }}
        id="cart__drawer"
      >
        <DrawerOverlay id="cart__drawer_overlay" />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader display={"flex"} justifyContent={"space-between"}>
            <Heading size={"sm"}>Shopping Cart</Heading>{" "}
            <CurrencySelector
              mr={10}
              onChange={(val: string) => {
                console.log(val);
              }}
            />
          </DrawerHeader>

          {!!cart && cart.items.length > 0 ? (
            <>
              <DrawerBody overflowY={"scroll"}>
                <Box>
                  {cart.items.map((item) => (
                    <CartItemCard key={item.id} cartProduct={item} />
                  ))}
                </Box>
              </DrawerBody>

              <DrawerFooter
                display="flex"
                flexDirection={["column"]}
                justifyContent="space-between"
              >
                {/* <Flex
                  mb={[6]}
                  w="100%"
                  display="flex"
                  justifyContent="space-between"
                >
                  <Text>{t("checkout:subtotal", "Subtotal:")}</Text>
                  <Text>
                    {formatCurrencyInteger(cart.subtotal, cart.currency)}
                  </Text>
                </Flex> */}
                {/* {cart.discountTotal !== 0 && (
                  <Flex
                    mb={[6]}
                    w="100%"
                    display="flex"
                    justifyContent="space-between"
                  >
                    <Text>
                      {t("checkout:discount-total", "DiscountTotal:")}
                    </Text>
                    <Text>
                      {formatCurrencyInteger(cart.discountTotal, cart.currency)}
                    </Text>
                  </Flex>
                )} */}
                <Flex
                  mb={[6]}
                  w="100%"
                  display="flex"
                  justifyContent="space-between"
                >
                  <Text fontWeight="bolder">Total:</Text>
                  <Text fontWeight="bolder">
                    {formatCurrencyInteger(cart.total, cart.currency)}
                  </Text>
                </Flex>
                <Flex
                  display="flex"
                  flexDirection={["column", "row"]}
                  justifyContent="space-between"
                  w="100%"
                >
                  <HardsandLink
                    fontSize={"sm"}
                    fontWeight={500}
                    color={"black"}
                    bg={"brand.100"}
                    fontFamily="MADE Outer sans"
                    href={`/checkout/${cart.id}`}
                    p={["12px 16px", "12px 46px"]}
                    borderWidth="2px"
                    borderColor={"brand.100"}
                    borderRadius="0"
                    transition="all 200ms ease-in"
                    w="100%"
                    textAlign="center"
                    _hover={{
                      bg: "transparent",
                      color: "black",
                      borderWidth: "2px",
                      borderColor: "brand.100",
                    }}
                    mb={[6, 0]}
                    // @ts-ignore
                    isDisabled={!numberOfItems || numberOfItems === 0}
                  >
                    {t("common:proceed-to-checkout", "Proceed to checkout")}
                  </HardsandLink>
                  <HardsandLink
                    fontSize={"sm"}
                    fontWeight={500}
                    color={"black"}
                    bg={"white"}
                    href={"#"}
                    p={["12px 16px", "12px 46px"]}
                    border="1px solid black"
                    borderRadius="8px"
                    transition="all 200ms ease-in"
                    w="100%"
                    textAlign="center"
                    display={["none"]}
                    _hover={{
                      bg: "whiteAlpha01",
                    }}
                  >
                    {t("common:continue-shopping", "Continue shopping")}
                  </HardsandLink>
                </Flex>
              </DrawerFooter>
            </>
          ) : (
            <DrawerBody overflowY={"scroll"}>
              <Flex
                h="-webkit-fill-available"
                flex={1}
                justifyContent="center"
                alignItems={"center"}
                direction="column"
              >
                <Text fontWeight={"bolder"}>
                  {t("common:no-item-in-cart", "No item in cart")}
                </Text>
                <HardsandLink
                  textDecoration={"underline"}
                  href={productRoutes.products()}
                >
                  {t("common:continue-shopping", "Continue Shopping")}
                </HardsandLink>
              </Flex>
            </DrawerBody>
          )}
        </DrawerContent>
      </Drawer>
    );
  }
);

Cart.displayName = "Cart";

export default Cart;
