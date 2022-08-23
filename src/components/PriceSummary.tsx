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
  t,
}: {
  fontSize?: number;
  total: number;
  currency: string;
  totalDue: number;
  activeStep: CHECKOUT_STEPS;
  t: TFunction;
}) => {
  const getTaxText = (): string | null => {
    switch (activeStep) {
      case CHECKOUT_STEPS.STEP_SHIPPING_INFO_FORM:
        return "To be calculated next step";
      case CHECKOUT_STEPS.STEP_SHIPPING_INFO_CONFIRMATION:
        return formatCurrencyInteger(totalDue, currency);
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
          {formatCurrencyInteger(totalDue, currency)}
        </Text>
      </Flex>
      {
        <Flex mb={[6]} w="100%" display="flex" justifyContent="space-between">
          <Text fontSize={[fontSize - 4, fontSize - 2]}>
            {t("checkout:shipping", "Shipping:")}
          </Text>
          <Text fontSize={[fontSize - 4, fontSize - 2]}>
            {formatCurrencyInteger(totalDue, currency)}
          </Text>
        </Flex>
      }
      <Flex mb={[6]} w="100%" display="flex" justifyContent="space-between">
        <Text fontSize={[fontSize - 4, fontSize - 2]}>Tax:</Text>
        <Text fontSize={[fontSize - 4, fontSize - 2]}>{getTaxText()}</Text>
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
