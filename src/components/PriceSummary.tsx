import { Box, Flex, Divider, Text } from "@chakra-ui/react";
import { CHECKOUT_STEPS } from "modules/checkout/constants";
import { TFunction } from "react-i18next";
import { formatCurrencyInteger } from "utils/currency";

const PriceSummary = ({
  fontSize = 20,
  total,
  totalDue,
  currency,
  activeStep,
  shippingDetails,
  t,
}: {
  fontSize?: number;
  total: number;
  currency: string;
  totalDue: number;
  shippingDetails: any;
  activeStep: CHECKOUT_STEPS;
  t: TFunction;
}) => {
  const getTaxPrice = (): string | null => {
    switch (activeStep) {
      case CHECKOUT_STEPS.STEP_SHIPPING_INFO_FORM:
        return t("checkout:to-be-calculated", "To be calculated at next step");
      case CHECKOUT_STEPS.STEP_SHIPPING_INFO_CONFIRMATION:
        return formatCurrencyInteger(total, currency);
      default:
        return null;
    }
  };
  const getShippingPrice = (): string | null => {
    switch (activeStep) {
      case CHECKOUT_STEPS.STEP_SHIPPING_INFO_FORM:
        return t("checkout:to-be-calculated", "To be calculated at next step");
      case CHECKOUT_STEPS.STEP_SHIPPING_INFO_CONFIRMATION:
        return !!shippingDetails
          ? formatCurrencyInteger(total, currency)
          : formatCurrencyInteger(0, currency);
      default:
        return null;
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
