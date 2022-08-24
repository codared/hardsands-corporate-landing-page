import { Box, Flex, Divider, Text } from "@chakra-ui/react";
import { CHECKOUT_STEPS } from "modules/checkout/constants";
import { ShippingMethods } from "modules/checkout/types";
import { TFunction } from "react-i18next";
import { formatCurrencyInteger } from "utils/currency";

const PriceSummary = ({
  fontSize = 20,
  total,
  totalDue,
  currency,
  activeStep,
  shippingSelected,
  t,
}: {
  fontSize?: number;
  total: number;
  currency: string;
  totalDue: number;
  shippingSelected: ShippingMethods;
  activeStep: CHECKOUT_STEPS;
  t: TFunction;
}) => {
  const getTaxPrice = (): string | null => {
    switch (activeStep) {
      case CHECKOUT_STEPS.STEP_PAYMENT_INFO:
        return formatCurrencyInteger(total, currency);
      default:
        return t("checkout:to-be-calculated", "To be calculated at next step");
    }
  };
  const getShippingPrice = (): string | null => {
    switch (activeStep) {
      case CHECKOUT_STEPS.STEP_PAYMENT_INFO:
        return !!shippingSelected
          ? formatCurrencyInteger(shippingSelected.price, currency)
          : formatCurrencyInteger(0, currency);
      default:
        return t("checkout:to-be-calculated", "To be calculated at next step");
    }
  };

  return (
    <Box>
      <Flex mb={[6]} w="100%" display="flex" justifyContent="space-between">
        <Text fontSize={[fontSize - 4, fontSize - 2]}>
          {t("checkout:subtotal", "Subtotal:")}
        </Text>
        <Text fontSize={[fontSize - 4, fontSize - 2]}>
          {formatCurrencyInteger(total, currency)}
        </Text>
      </Flex>
      {
        <Flex mb={[6]} w="100%" display="flex" justifyContent="space-between">
          <Text fontSize={[fontSize - 4, fontSize - 2]}>
            {t("checkout:shipping", "Shipping:")}
          </Text>
          <Text fontSize={[fontSize - 4, fontSize - 2]}>
            {getShippingPrice()}
          </Text>
        </Flex>
      }
      <Flex mb={[6]} w="100%" display="flex" justifyContent="space-between">
        <Text fontSize={[fontSize - 4, fontSize - 2]}>Tax:</Text>
        <Text fontSize={[fontSize - 4, fontSize - 2]}>{getTaxPrice()}</Text>
      </Flex>
      <Divider my={5} />
      <Flex mb={[6]} w="100%" display="flex" justifyContent="space-between">
        <Text fontSize={[fontSize - 4, fontSize]} fontWeight="bolder">
          {t("checkout:total", "Total:")}
        </Text>
        <Text fontSize={[fontSize - 4, fontSize]} fontWeight="bolder">
          {formatCurrencyInteger(total, currency)}
        </Text>
      </Flex>
    </Box>
  );
};

export default PriceSummary;
