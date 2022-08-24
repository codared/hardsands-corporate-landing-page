import { Box, Flex, Heading, Divider } from "@chakra-ui/react";
import PriceSummary from "components/PriceSummary";
import React from "react";
import { TFunction } from "react-i18next";
import { CHECKOUT_STEPS } from "../constants";
import { Order, OrderItem } from "../types";
import OrderItemCard from "./OrderItemCard";

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
    <Box w="100%">
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
          total={order.total as unknown as number}
          totalDue={order.totalDue}
          fontSize={18}
          shippingSelected={order.shippingSelected}
        />
      </Flex>
    </Box>
  );
};

export default OrderSummary;
