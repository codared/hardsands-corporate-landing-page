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
import CurrencySelector from "components/CurrenctSelector";
import HardsandLink from "components/HardsandsLink";
import React, { useContext, useEffect, useState } from "react";
import CartItemCard from "modules/cart/components/CartItemCard";
import { selectCart } from "./selectors";
import { formatCurrencyInteger } from "utils/currency";
import { useTranslation } from "react-i18next";
import { computeItemsQuantity } from "./functions";
import productRoutes from "modules/products/routes";
import { loadOrCreateCart, removeCartItem } from "./actions";
import { CheckoutContext } from "redux/context";
import { useCurrency } from "./hooks";
import { CartResponseItem, CreateCheckoutFromCartBody } from "./types";
import { useRouter } from "next/router";
import { useIsMountedRef } from "utils/hooks";
import { getCheckoutRoutes } from "modules/checkout/routes";
import { createCartOrder } from "./cartApi";
import { loadOrder } from "modules/checkout/actions";
import { trackCartViewed } from "modules/analytics/functions/track";

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
            quantity: cart.items.length
          })

        }
      }
    }, [isOpen])

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
        // additionalOffers: promotions.map(
        //   ({ slug: id, productOptions: product_option_value_ids = [] }) => ({
        //     id,
        //     product_option_value_ids,
        //   })
        // ),
      };

      const order = await createCartOrder(body);
      const routes = getCheckoutRoutes();

      console.log('order >>>>> ', order);
      dispatch(loadOrder(order));

      // const couponQuery = overrideCoupon
      //   ? `?override_coupon=${overrideCoupon}`
      //   : "";

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
              display={["block", "none"]}
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
                  <Button
                    fontSize={"sm"}
                    fontWeight={500}
                    color={"black"}
                    bg={"brand.100"}
                    fontFamily="MADE Outer sans"
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
                  {/* <HardsandLink
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
                  </HardsandLink> */}
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
