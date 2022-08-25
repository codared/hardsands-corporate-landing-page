import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { CheckIcon } from "assets";
import { useCurrency } from "modules/cart/hooks";
import PriceSummary from "modules/checkout/components/PriceSummary";
import { useTranslation } from "react-i18next";
import OrderItemCard from "../components/OrderItemCard";
import { useOrder } from "../hooks/useOrder";
import { Order, OrderItem } from "../types";

interface OrderConfirmationProp {
  checkoutId: string;
  language: string;
}

const OrderConfirmation = ({ checkoutId, language }: OrderConfirmationProp) => {
  const { t } = useTranslation();
  const currency = useCurrency();
  const order = useOrder(checkoutId) as Order;

  return (
    <Container p={10} py={20}>
      <Box textAlign={"center"}>
        <Image mx="auto" src={CheckIcon.src} alt="confirmation check" />
        <Box h={8} />
        <Heading>
          {t(
            "confirmation:title:thank-you-for-your-order",
            "Thank You for Your Order!"
          )}
        </Heading>
        <Box h={8} />
        <Text>
          {t(
            "confirmation:description:thank-you-for-your-purchase",
            "Thank you for your purchase! Your order has been successfully completed. Your Order will now be processed and delivered within the next few days."
          )}
        </Text>
        <Divider my={10} />
        <Box>
          {order.items.map((item: OrderItem) => (
            <OrderItemCard
              key={item.id}
              item={item}
              // p={["0px 5px"]}
              // titleFontSize={[14, 16]}
              // subTitleFontSize={[12, 14]}
            />
          ))}
        </Box>
        <Box h={8} />
        <PriceSummary
          t={t}
          activeStep={2}
          currency={currency}
          total={order.total}
          totalDue={order.totalDue}
          // fontSize={18}
          shippingSelected={order.shippingSelected}
        />
        <Box h={8} />
        <Button
          fontSize={"sm"}
          fontWeight={500}
          color={"black"}
          bg={"brand.100"}
          fontFamily="MADE Outer sans"
          onClick={() => {}}
          p={["24px 16px", "24px 46px"]}
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
          {t("checkout:return-home", "Return Home")}
        </Button>
        <Box h={8} />
      </Box>
    </Container>
  );
};

export default OrderConfirmation;
