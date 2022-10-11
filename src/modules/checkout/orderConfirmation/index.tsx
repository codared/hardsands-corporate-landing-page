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
import HardsandLink from "components/HardsandsLink";
import { trackOrderConfirmationShown } from "modules/analytics/functions/track";
import { useCurrency } from "modules/cart/hooks";
import PriceSummary from "modules/checkout/components/PriceSummary";
import productRoutes from "modules/products/routes";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import OrderItemCard from "../components/OrderItemCard";
import { Order, OrderItem } from "../types";

interface OrderConfirmationProp {
  checkoutId: string;
  language: string;
  order: Order;
}

const OrderConfirmation = ({ checkoutId, language, order }: OrderConfirmationProp) => {
  const { t } = useTranslation();
  const currency = useCurrency();

  useEffect(() => {
    trackOrderConfirmationShown();
  }, []);


  return (
    <Container p={10} py={20}>
      <Box textAlign={"center"}>
        <Image mx="auto" src={CheckIcon.src} alt="confirmation check" />
        <Box h={8} />
        <Heading>
          {t(
            "confirmation:title:your-order-has-been-placed",
            "Your Order has been placed!"
          )}
        </Heading>
        <Box h={8} />
        <Text>
          {t(
            "confirmation:description:your-order-has-been-successfully-completed",
            "Your order has been successfully completed. Your Order will now be processed and delivered within the next few days. An email would be sent to you for activation code and customization!"
          )}
        </Text>
        <Divider my={10} />
        <Box>
          {order.items.map((item: OrderItem) => (
            <OrderItemCard key={item.id} item={item} />
          ))}
        </Box>
        <Box h={8} />
        <PriceSummary
          t={t}
          activeStep={2}
          currency={currency}
          total={order.total}
          totalDue={order.totalDue}
          shippingSelected={order.shippingSelected}
        />
        <Box h={8} />
        <HardsandLink
          fontSize={"sm"}
          fontWeight={500}
          color={"black"}
          bg={"brand.100"}
          fontFamily="MADE Outer sans"
          href={productRoutes.products()}
          p={["24px 16px", "24px 46px"]}
          borderWidth="2px"
          borderColor={"brand.100"}
          borderRadius="0"
          transition="all 200ms ease-in"
          w="100%"
          display={"block"}
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
        </HardsandLink>
      </Box>
    </Container>
  );
};

export default OrderConfirmation;
