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
import HardsandsAppLogo from "components/Logo";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { usePreloadProducts } from "modules/products/hooks";
import { useCartItemCount, useCurrency } from "modules/cart/hooks";
import CurrencySelector from "components/CurrencySelector";
import {
  loadOrCreateCart,
  updateCart,
  updateCurrency,
} from "modules/cart/actions";
import { CheckoutContext } from "redux/context";
import { getGeoIpCountryCode } from "utils/geoIp";
import { CreateCartBody } from "modules/cart/types";
import { useRouter } from "next/router";
import { useTypedDispatch } from "redux/store";
import { fetchAllProductsCached } from "modules/products/actions";

const minifyNotificationCount = (count: string | number) => {
  return count.toString().length > 1 ? "9+" : count;
};

export default function Navigation({ pageTitle }: { pageTitle?: string }) {
  const { state, dispatch } = useContext(CheckoutContext);
  const { isOpen, onToggle } = useDisclosure();
  const reduxDispatch = useTypedDispatch();
  const cartItemCount = useCartItemCount();
  const [isCartOpen, setCartOpen] = useState(false);
  const cartBtnRef = useRef(null);
  const cartInitialized = useRef(false);
  const currency = useCurrency();
  const cartId = state.cart.cart?.id;
  const ignoreCountryDiscount = false; // featureFlag('IGNORE_COUNTRY_DISCOUNT', true)
  const router = useRouter();
  const isCorporatePage = pageTitle?.includes("Corporate");

  usePreloadProducts(3000);

  useEffect(() => {
    const initCart = async () => {
      const country = await getGeoIpCountryCode();
      const cartBody: CreateCartBody = {
        currency,
        country: ignoreCountryDiscount ? null : country,
      };

      await dispatch(loadOrCreateCart(currency));
      cartInitialized.current = true;
    };

    const updateCartWithCurrency = () => {
      if (cartId) {
        dispatch(
          updateCart({
            currency,
          })
        );
      }
    };

    if (cartInitialized.current) {
      updateCartWithCurrency();
    } else {
      initCart();
    }

    reduxDispatch(fetchAllProductsCached(currency));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);

  const onCurrencyChange = (currency: string) => {
    dispatch(updateCurrency(currency));
  };

  return (
    <Box
      as="nav"
      w="100%"
      position="sticky"
      zIndex="sticky"
      bg={isCorporatePage ? "white" : "black"}
      top={0}
    >
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

        <Flex
          display={["none", "flex"]}
          color={isCorporatePage ? "black" : "white"}
        >
          <DesktopNav corporateNavs={isCorporatePage} />
        </Flex>

        <Stack
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
          alignItems="center"
          ml={["50px", "unset"]}
        >
          <CurrencySelector
            selectedCurrency={currency}
            mr={10}
            color={isCorporatePage ? "black" : "white"}
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
            <AiOutlineShoppingCart
              color={isCorporatePage ? "black" : "white"}
              size={24}
            />
            {cartItemCount !== 0 && (
              <Box
                display="flex"
                borderRadius="100%"
                bg={isCorporatePage ? "black" : "white"}
                color={isCorporatePage ? "black" : "white"}
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
            color={isCorporatePage ? "black" : "white"}
            display={["none", "flex"]}
            _focus={{ bg: "transparent" }}
            _hover={{ bg: "transparent" }}
            px={0}
            onClick={() => router.push("/login")}
          >
            <Text>Account</Text>
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
                <HiMenuAlt3
                  color={isCorporatePage ? "black" : "white"}
                  size={30}
                />
              ) : (
                <MdClose
                  color={isCorporatePage ? "black" : "white"}
                  size={30}
                />
              )}
            </HardsandLink>
          </Flex>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav corporateNavs={isCorporatePage} />
      </Collapse>
    </Box>
  );
}
