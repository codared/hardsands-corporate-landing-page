import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import OrderItemCard from "modules/checkout/components/OrderItemCard";
import { OrderItem } from "modules/checkout/types";
import React from "react";
import moment from "moment";
import { formatCurrencyInteger } from "utils/currency";
import { buildDeliverySteps, daysFromNowByDate } from "./functions";
import { TrackOrderDetails } from "./types";
import { STEPS } from "modules/track-order/constants";

function TrackOrderDetails({ details }: { details: TrackOrderDetails }) {
  const activeStep = buildDeliverySteps(
    details?.delaysAt,
    details?.deliveredAt,
    details?.dispatchedAt
  );

  return (
    <Container py={[20, 40]}>
      <Heading>{`Order ID #${details?.trackingId}`}</Heading>

      <Box mt={[8]}>
        <Flex justifyContent={"space-between"} py={[1]}>
          <Text
            textTransform={"uppercase"}
            fontWeight={"bold"}
            fontSize={["smaller", "initial"]}
          >
            Tracking Number:
          </Text>
          <Text color={"brand.300"} fontWeight={"bold"}>
            {details?.trackingId}
          </Text>
        </Flex>
        <Flex justifyContent={"space-between"} py={[1]}>
          <Text
            textTransform={"uppercase"}
            fontWeight={"bold"}
            fontSize={["smaller", "initial"]}
          >
            DATE OF PURCHASE:
          </Text>
          <Text color={"brand.300"} fontWeight={"bold"}>
            {moment(details?.orderedAt).format("LL")}
          </Text>
        </Flex>
        <Flex justifyContent={"space-between"} py={[1]}>
          <Text
            textTransform={"uppercase"}
            fontWeight={"bold"}
            fontSize={["smaller", "initial"]}
          >
            SHIPPING ADDRESS:
          </Text>
          <Text color={"brand.300"} fontWeight={"bold"}>
            {details.shippingDetails?.address1 ??
              details.shippingDetails?.address2}
          </Text>
        </Flex>
        <Flex justifyContent={"space-between"} py={[1]}>
          <Text
            textTransform={"uppercase"}
            fontWeight={"bold"}
            fontSize={["smaller", "initial"]}
          >
            EXPECTED DELIVERY DATE:
          </Text>
          <Text color={"brand.300"} fontWeight={"bold"}>
            {moment(
              daysFromNowByDate(new Date(details?.orderedAt as string))
            ).format("LL")}
          </Text>
        </Flex>
      </Box>

      <Box mt={[8]} mb={[20]}>
        <SimpleGrid columns={[1]} gap={0}>
          {STEPS.map(({ step, title, description }) => {
            if (step === 3 && !details.delaysAt) return null;
            return (
              <Box
                position={"relative"}
                h={activeStep !== step ? 70 : 130}
                key={step}
                transition={"all ease-in-out 200ms"}
              >
                <Box
                  boxSize={6}
                  borderRadius={"full"}
                  borderWidth={6}
                  bg={activeStep >= step ? "brand.300" : "white"}
                  borderColor={
                    activeStep === step
                      ? "brand.300"
                      : step - 1 <= activeStep
                      ? "brand.300"
                      : "gray.300"
                  }
                  position={"relative"}
                  zIndex={1}
                />
                <Box
                  width={[1.5]}
                  bg={activeStep >= step ? "brand.300" : "gray.300"}
                  height={["100%"]}
                  position={"absolute"}
                  transform={"translateX(150%)"}
                />
                <Box ml={[8]}>
                  <Text textTransform={"uppercase"} mb={[2]} fontSize={13}>
                    {title}
                  </Text>
                  {activeStep === step && (
                    <Text fontSize={13}>{description}</Text>
                  )}
                </Box>
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>

      <Box my={[8]}>
        <Text fontSize={24} fontWeight={"bold"}>
          Items in the package
        </Text>
        <Box>
          {!!details.items &&
            details?.items?.length &&
            details?.items.map((item: OrderItem) => (
              <OrderItemCard key={item.id} item={item} />
            ))}
        </Box>
        <Flex py={[10]} justifyContent={"space-between"}>
          <Text fontWeight="bolder" fontSize={[14, 20]}>
            Payment Total:
          </Text>
          <Text
            alignSelf={["flex-start", "center"]}
            color={"brand.300"}
            fontWeight="bolder"
            fontSize={[14, 20]}
            ml={[0, 2]}
          >
            {formatCurrencyInteger(
              details?.totalDue,
              details?.currency || "NGN"
            )}
          </Text>
        </Flex>
      </Box>
    </Container>
  );
}

export default TrackOrderDetails;
