import { Box, Flex, Heading, Divider } from "@chakra-ui/react";
import PriceSummary from "./PriceSummary";
import React from "react";
import { TFunction } from "react-i18next";
import { CHECKOUT_STEPS } from "../constants";
import { Order, OrderItem } from "../types";
import OrderItemCard from "./OrderItemCard";
import AcceptedPaymentMethods from "./AcceptedPaymentMethods";

const OrderSummary = ({
  order,
  t,
  currency,
  activeStep,
}: {
  order: Order;
  t: TFunction;
  currency: string;
  activeStep: CHECKOUT_STEPS;
}) => {
  return (
    <Box w="100%" mb={[12, 0]}>
      <Flex direction={"column"} bg={"brand.10"} p={5}>
        <Heading fontSize={20}>
          {t("checkout:order-summary", "Order Summary")}
        </Heading>
        <Divider my={5} />
        {order.items.map((item: OrderItem) => (
          <OrderItemCard
            key={item.id}
            item={item}
            p={["0px 5px"]}
            titleFontSize={[14, 16]}
            subTitleFontSize={[12, 14]}
          />
        ))}
        <Divider my={5} />
        <PriceSummary
          t={t}
          activeStep={activeStep}
          currency={currency}
          total={order.total}
          totalDue={order.totalDue}
          fontSize={18}
          shippingSelected={order.shippingSelected}
        />
      </Flex>
      <AcceptedPaymentMethods t={t} />
    </Box>
  );
};

export default OrderSummary;
