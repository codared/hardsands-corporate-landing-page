import { Box } from "@chakra-ui/react";
import HardsandLink from "components/HardsandsLink";
import React from "react";
import { formatCurrencyInteger } from "utils/currency";
import { WHATSAPP_MESSAGE, WHATSAPP_PHONE_NUMBER } from "../constants";
import { Order } from "../types";

export const redirectToWhatsApp = (order: Order, currency: string) => {
  const orderTotal = formatCurrencyInteger(
    order.discountTotal || order.totalDue,
    currency
  );
  const message = WHATSAPP_MESSAGE.replace(
    "{{firstname}}",
    order.userDetails.firstName
  )
    .replace("{{lastname}}", order.userDetails.lastName)
    .replace("{{email}}", order.userDetails.email)
    .replace("{{total}}", orderTotal);

  const whatsappLink = `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
  return whatsappLink;
};

function WhatsAppOrderCompletionComponent({
  order,
  currency,
  onOptionChange,
}: {
  currency: string;
  order: Order;
  onOptionChange: (data: any) => void;
}) {
  const handleClick = () => {
    onOptionChange(redirectToWhatsApp(order, currency));
  };

  return (
    <Box>
      <HardsandLink onClick={handleClick} href={"#"}>
        Complete on WhatsApp
      </HardsandLink>
    </Box>
  );
}

export default WhatsAppOrderCompletionComponent;
