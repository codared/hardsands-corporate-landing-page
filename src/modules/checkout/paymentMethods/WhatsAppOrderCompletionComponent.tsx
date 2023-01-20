import { Box } from "@chakra-ui/react";
import HardsandLink from "components/HardsandsLink";
import React from "react";
import { formatCurrencyInteger } from "utils/currency";
import { WHATSAPP_MESSAGE, WHATSAPP_PHONE_NUMBER } from "../constants";
import { Order } from "../types";

function WhatsAppOrderCompletionComponent({
  order,
  currency,
}: {
  currency: string;
  order: Order;
}) {
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

  return (
    <Box>
      <HardsandLink href={whatsappLink}>Complete on WhatsApp</HardsandLink>
    </Box>
  );
}

export default WhatsAppOrderCompletionComponent;
