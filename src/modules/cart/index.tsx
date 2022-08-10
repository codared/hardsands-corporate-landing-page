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
import React from "react";
import CartItemCard from "modules/cart/components/CartItemCard";

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

          <DrawerBody overflowY={"scroll"}>
            <Box>
              <CartItemCard />
              <CartItemCard />
              <CartItemCard />
              <CartItemCard />
            </Box>
          </DrawerBody>

          <DrawerFooter
            display="flex"
            flexDirection={["column"]}
            justifyContent="space-between"
          >
            <Flex
              mb={[6]}
              w="100%"
              display="flex"
              justifyContent="space-between"
            >
              <Text>SubTotal:</Text>
              <Text>₦78,800.00</Text>
            </Flex>
            <Flex
              mb={[6]}
              w="100%"
              display="flex"
              justifyContent="space-between"
            >
              <Text>Shipping:</Text>
              <Text>₦8,800.00</Text>
            </Flex>
            <Flex
              mb={[6]}
              w="100%"
              display="flex"
              justifyContent="space-between"
            >
              <Text fontWeight="bolder">Total:</Text>
              <Text fontWeight="bolder">₦78,800.00</Text>
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
                href={"/checkout/iouhyg_tfrdfyguhioi_jhugytfryguhij"}
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
              >
                Proceed to Checkout
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
                display={["block", "none"]}
                _hover={{
                  bg: "whiteAlpha01",
                }}
              >
                Continue Shopping
              </HardsandLink>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  }
);

Cart.displayName = "Cart";

export default Cart;
