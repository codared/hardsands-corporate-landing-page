import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import CheckAccordion from "components/CheckAccordion";
import { MasterCardIcon, VisaCardIcon } from "design";
import { useState } from "react";
import { TFunction } from "react-i18next";
import PaystackButtonComponent from "../paymentMethods/Paystack";
import { Order } from "../types";
import LoadingSpinner from "./LoadingSpinner";

const PaymentMethods = ({
  order,
  t,
  handleCancel,
  setProcessingPayment,
}: {
  t: TFunction;
  order: Order;
  handleCancel: (message: string) => void;
  setProcessingPayment: (loading: boolean) => void;
}) => {
  const [payment, setPayment] = useState<number | null>(null);

  const buildPaymentMethods = () => {
    const keys = Object.keys(order.paymentMethod);

    return keys
      .map((paymentMethod: string) => {
        switch (paymentMethod) {
          case "paystack":
            return {
              value: 1,
              title: "Paystack",
              content: (
                <PaystackButtonComponent
                  order={order}
                  handleCancel={handleCancel}
                  setLoading={setProcessingPayment}
                />
              ),
            };
          // case 'paypal':
          // case 'stripe':
          default:
            return;
        }
      })
      .filter((data) => !!data);
  };

  return (
    <>
      <Box mb={10}>
        <>
          <Text fontWeight={"bold"}>
            {t("checkout:payment method", "Payment Method")}
          </Text>
          <Box h={2} />
          <CheckAccordion
            defaultIndex={[0]}
            onChange={(val: string | number) => setPayment(val as number)}
            options={buildPaymentMethods()}
          />
        </>
      </Box>
      <Button
        fontSize={14}
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
        isDisabled={!payment}
      >
        {t("checkout:complete -checkout", "Complete Checkout")}
      </Button>
    </>
  );
};

export default PaymentMethods;
