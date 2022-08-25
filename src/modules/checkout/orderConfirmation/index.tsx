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
import PriceSummary from "modules/checkout/components/PriceSummary";
import { useTranslation } from "react-i18next";
import OrderItemCard from "../components/OrderItemCard";

const OrderConfirmation = () => {
  const { t } = useTranslation();

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
          {/* <OrderItemCard /> */}
        </Box>
        <Box h={8} />
        {/* <PriceSummary /> */}
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
          Return Home
        </Button>
        <Box h={8} />
      </Box>
    </Container>
  );
};

export default OrderConfirmation;
