import {
  Box,
  Flex,
  Stack,
  Collapse,
  useDisclosure,
  Image,
  Button,
  Text,
} from "@chakra-ui/react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import HardsandLink from "components/HardsandsLink";
import LoginIcon from "design/svg/Login.svg";
import React, { useContext, useEffect, useRef, useState } from "react";
import Cart from "modules/cart";
import { useOffsetScroll } from "./hooks";
import HardsandsAppLogo from "components/Logo";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { usePreloadProducts } from "modules/products/hooks";
import { useCartItemCount } from "modules/cart/hooks";
import CurrencySelector from "components/CurrenctSelector";
import {
  loadOrCreateCart,
  updateCart,
  updateCurrency,
} from "modules/cart/actions";
import { CheckoutContext } from "redux/context";
import { getGeoIpCountryCode } from "utils/geoIp";
import { CreateCartBody } from "modules/cart/types";

const minifyNotificationCount = (count: string | number) => {
  return count.toString().length > 1 ? "9+" : count;
};

export default function Navigation() {
  const { state, dispatch } = useContext(CheckoutContext);
  const { isOpen, onToggle } = useDisclosure();
  const cartItemCount = useCartItemCount();
  const [isCartOpen, setCartOpen] = useState(false);
  const { offset } = useOffsetScroll();
  const cartBtnRef = useRef(null);
  const cartInitialized = useRef(false);
  const selectedCurrency = state.cart.selectedCurrency;
  const cartId = state.cart.cart?.id;
  const ignoreCountryDiscount = false; // featureFlag('IGNORE_COUNTRY_DISCOUNT', true)

  usePreloadProducts(3000);

  console.log("selectedCurrency >>>> ", selectedCurrency);

  useEffect(() => {
    const initCart = async () => {
      const country = await getGeoIpCountryCode();
      const cartBody: CreateCartBody = {
        currency: selectedCurrency,
        country: ignoreCountryDiscount ? null : country,
      };

      await dispatch(loadOrCreateCart(selectedCurrency));
      cartInitialized.current = true;
    };

    const updateCartWithCurrency = () => {
      if (cartId) {
        dispatch(
          updateCart({
            currency: selectedCurrency,
          })
        );
      }
    };

    if (cartInitialized.current) {
      updateCartWithCurrency();
    } else {
      initCart();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCurrency]);

  const onCurrencyChange = (currency: string) => {
    dispatch(updateCurrency(currency));
  };

  return (
    <Box as="nav" w="100%" position="sticky" zIndex="sticky" bg="black" top={0}>
      <Cart
        isOpen={isCartOpen}
        onClose={() => setCartOpen(!isCartOpen)}
        ref={cartBtnRef}
      />
      <Flex
        minH={"70px"}
        py={[2]}
        px={[4, 36]}
        align={"center"}
        justifyContent={"space-between"}
      >
        <HardsandsAppLogo />

        <Flex display={["none", "flex"]} color="white">
          <DesktopNav />
        </Flex>

        <Stack
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
          alignItems="center"
          ml={["50px", "unset"]}
        >
          <CurrencySelector
            selectedCurrency={selectedCurrency}
            mr={10}
            color="white"
            onChange={onCurrencyChange}
          />
          <Button
            bg="transparent"
            _focus={{ bg: "transparent" }}
            _hover={{ bg: "transparent" }}
            onClick={() => {
              const portal: any = document.querySelector(
                "#cart__drawer_overlay"
              ) as HTMLElement;
              if (portal?.parentNode) portal.parentNode.style.display = "flex";
              setCartOpen(!isCartOpen);
            }}
            display="flex"
            px={0}
            // @ts-ignore
            ref={cartBtnRef}
          >
            <AiOutlineShoppingCart color="white" size={24} />
            {cartItemCount !== 0 && (
              <Box
                display="flex"
                borderRadius="100%"
                bg="black"
                color="white"
                w="23px"
                h="23px"
                alignSelf="flex-start"
              >
                <Text alignSelf="flex-end">
                  {minifyNotificationCount(cartItemCount)}
                </Text>
              </Box>
            )}
          </Button>

          <Button
            bg="transparent"
            _focus={{ bg: "transparent" }}
            _hover={{ bg: "transparent" }}
            px={0}
          >
            <Image
              boxSize="26px"
              src={LoginIcon.src}
              alt="hardsands login icon"
            />
          </Button>

          <Flex
            ml={[-2]}
            display={["flex", "none", "none"]}
            justifyContent="end"
          >
            <HardsandLink
              onClick={onToggle}
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
              href={"#"}
            >
              {!isOpen ? (
                <HiMenuAlt3 color="white" size={30} />
              ) : (
                <MdClose color="white" size={30} />
              )}
            </HardsandLink>
          </Flex>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}
