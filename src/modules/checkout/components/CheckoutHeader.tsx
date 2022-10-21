import { Box, Flex, Stack } from "@chakra-ui/react";
import React, { useContext, useEffect, useRef } from "react";
import HardsandsAppLogo from "components/Logo";
import CurrencySelector from "components/CurrenctSelector";
import {
  loadOrCreateCart,
  updateCart,
  updateCurrency,
} from "modules/cart/actions";
import { CheckoutContext } from "redux/context";

export default function CheckoutHeader() {
  const { state, dispatch } = useContext(CheckoutContext);
  const cartInitialized = useRef(false);
  const selectedCurrency = state.cart.selectedCurrency;
  const cartId = state.cart.cart?.id;

  useEffect(() => {
    const initCart = async () => {
      await dispatch(loadOrCreateCart(selectedCurrency));
      cartInitialized.current = true;
    };

    const updateCartWithCurrency = async () => {
      if (cartId) {
        dispatch(
          updateCart({
            currency: selectedCurrency,
          })
        );
        window.location.reload();
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
      <Flex
        minH={"70px"}
        py={[2]}
        px={[4, 36]}
        align={"center"}
        justifyContent={"space-between"}
      >
        <HardsandsAppLogo />

        <Stack
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
          alignItems="center"
          ml={["50px", "unset"]}
        >
          {/* <CurrencySelector
            selectedCurrency={selectedCurrency}
            mr={10}
            color="white"
            onChange={onCurrencyChange}
          /> */}
        </Stack>
      </Flex>
    </Box>
  );
}
