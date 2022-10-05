import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
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
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { IoIosCloseCircle } from "react-icons/io";
import OrderItemCard from "../components/OrderItemCard";
import { useOrder } from "../hooks/useOrder";
import { Order, OrderItem } from "../types";

interface ErrorConfirmationProp {
  checkoutId: string;
  language: string;
}

const ErrorConfirmation = ({ checkoutId, language }: ErrorConfirmationProp) => {
  const { t } = useTranslation();

  return (
    <Container p={10} py={20}>
      <Box textAlign={"center"}>
        <Flex justifyContent={"center"}>
          <IoIosCloseCircle size={120} />
        </Flex>
        <Box h={8} />
        <Heading>
          {t(
            "confirmation:title:your-order-was-unsuccessful",
            "Your order was unsuccessful!"
          )}
        </Heading>
        <Box h={8} />
        <Text>
          {t(
            "confirmation:description:your-order-was-not-successfully-completed",
            "Your order was not successfully please try again or contact support"
          )}
        </Text>
        <Divider my={10} />
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
        <Box h={8} />
      </Box>
    </Container>
  );
};

export default ErrorConfirmation;
