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
  Button,
} from "@chakra-ui/react";
import CurrencySelector from "components/CurrencySelector";
import HardsandLink from "components/HardsandsLink";
import React, { useContext, useEffect, useState } from "react";
import CartItemCard from "modules/cart/components/CartItemCard";
import { selectCart } from "./selectors";
import { formatCurrencyInteger } from "utils/currency";
import { useTranslation } from "react-i18next";
import { computeItemsQuantity } from "./functions";
import productRoutes from "modules/products/routes";
import { loadOrCreateCart, removeCartItem, updateCurrency } from "./actions";
import { CheckoutContext } from "redux/context";
import { useCurrency } from "./hooks";
import { CartResponseItem, CreateCheckoutFromCartBody } from "./types";
import { useRouter } from "next/router";
import { useIsMountedRef } from "utils/hooks";
import { getCheckoutRoutes } from "modules/checkout/routes";
import { createCartOrder } from "./cartApi";
import { loadOrder } from "modules/checkout/actions";
import { trackCartViewed } from "modules/analytics/functions/track";
import Discount from "modules/Discount";

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
    const router = useRouter();
    const currency = useCurrency();
    const { dispatch, state } = useContext(CheckoutContext);
    const cart = selectCart(state);
    const numberOfItems = cart && computeItemsQuantity(cart.items);
    const [isLoading, setIsLoading] = useState(false);
    const isMounted = useIsMountedRef();

    useEffect(() => {
      if (!cart) {
        dispatch(loadOrCreateCart(currency));
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cart]);

    useEffect(() => {
      if (isOpen) {
        if (cart?.id) {
          trackCartViewed({
            cartId: cart?.id,
            total: cart?.total / 100,
            currency,
            isEmpty: cart?.items.length ? false : true,
            quantity: cart.items.length,
          });
        }
      }
    }, [isOpen]);

    const onRemoveItem = async (item: CartResponseItem) => {
      return await dispatch(removeCartItem(item));
    };

    const onOrderCreated = () => {
      onClose();
    };

    const handleProcessToCheckout = async () => {
      setIsLoading(true);

      const body: CreateCheckoutFromCartBody = {
        cartId: cart?.id as string,
      };

      const order = await createCartOrder(body);
      const routes = getCheckoutRoutes();

      dispatch(loadOrder(order));

      if (order) {
        router.push(
          routes?.checkout({ hash: order.cartHash }) ??
            `/checkout/${order.checkoutToken}`
        );
        onOrderCreated();
        if (isMounted.current) {
          setIsLoading(false);
        }
      }
    };

    const onCurrencyChange = (currency: string) => {
      dispatch(updateCurrency(currency));
    };

    return (
      <Drawer
        // @ts-ignore
        initialFocusRef={ref}
        isOpen={isOpen}
        placement="right"
        size="sm"
        onClose={() => {
          onClose();
          // const portal: any = document.querySelector(
          //   "#cart__drawer_overlay"
          // ) as HTMLElement;
          // if (portal.parentNode) {
          //   setTimeout(() => {
          //     portal.parentNode.style.display = "none";
          //   }, 500);
          // }
        }}
        id="cart__drawer"
      >
        <DrawerOverlay id="cart__drawer_overlay" />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader display={"flex"} justifyContent={"space-between"}>
            <Heading size={"sm"}>Shopping Cart</Heading>{" "}
            <CurrencySelector
              display={["block", "none"]}
              mr={10}
              selectedCurrency={currency}
              onChange={onCurrencyChange}
            />
          </DrawerHeader>

          {!!cart && cart.items.length > 0 ? (
            <>
              <DrawerBody overflowY={"scroll"}>
                <Box>
                  {cart.items.map((item) => (
                    <CartItemCard
                      key={item.id}
                      cartProduct={item}
                      onRemoveItem={onRemoveItem}
                    />
                  ))}
                </Box>
              </DrawerBody>

              <DrawerFooter
                display="flex"
                flexDirection={["column"]}
                justifyContent="space-between"
              >
                <Discount
                  w={["full"]}
                  mb={[6]}
                  moduleType={"cart"}
                  moduleId={cart.id}
                />
                <Flex
                  mb={[6]}
                  w="100%"
                  display="flex"
                  justifyContent="space-between"
                >
                  <Text>{t("checkout:subtotal", "Subtotal:")}</Text>
                  <Text>
                    {formatCurrencyInteger(cart.subtotal, cart.currency)}
                  </Text>
                </Flex>
                {!!cart.discountCode && cart.discountedAmount !== 0 && (
                  <Flex
                    mb={[6]}
                    w="100%"
                    display="flex"
                    justifyContent="space-between"
                  >
                    <Text>
                      {t("checkout:discount-total", "Discount Amount:")}
                    </Text>
                    <Text>
                      {"- "}
                      {formatCurrencyInteger(
                        cart.discountedAmount,
                        cart.currency
                      )}
                    </Text>
                  </Flex>
                )}
                <Flex
                  mb={[6]}
                  w="100%"
                  display="flex"
                  justifyContent="space-between"
                >
                  <Text fontWeight="bolder">Total:</Text>
                  <Text fontWeight="bolder">
                    {formatCurrencyInteger(
                      cart.discountTotal || cart.total,
                      cart.currency
                    )}
                  </Text>
                </Flex>
                <Flex
                  display="flex"
                  flexDirection={["column", "row"]}
                  justifyContent="space-between"
                  w="100%"
                >
                  <Button
                    fontSize={"sm"}
                    fontWeight={500}
                    color={"black"}
                    bg={"brand.100"}
                    fontFamily="MADE Outer sans Light"
                    // href={`/checkout/${cart.id}`}
                    // p={["12px 18px", "16px 46px"]}
                    py={["1.6rem"]}
                    onClick={handleProcessToCheckout}
                    // px={[22]}
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
                    disabled={!numberOfItems || numberOfItems === 0}
                    isLoading={isLoading}
                    loadingText={"Proceeding to checkout..."}
                  >
                    {t("common:proceed-to-checkout", "Proceed to checkout")}
                  </Button>
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
