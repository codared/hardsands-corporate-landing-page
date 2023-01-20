import { Box, Button, Flex, Text, Image } from "@chakra-ui/react";
import { PayStackIcon } from "assets";
import CheckAccordion from "components/CheckAccordion";
import { useState } from "react";
import { TFunction } from "react-i18next";
import { FaWhatsapp } from "react-icons/fa";
import PaystackButtonComponent from "../paymentMethods/Paystack";
import WhatsAppOrderCompletionComponent from "../paymentMethods/WhatsAppOrderCompletionComponent";
import { Order } from "../types";

const PaymentMethods = ({
  order,
  currency,
  t,
  handleCancel,
  setProcessingPayment,
}: {
  t: TFunction;
  currency: string;
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
              title: (
                <Flex alignItems={"center"}>
                  <Image
                    boxSize={"14px"}
                    src={PayStackIcon.src}
                    alt={"PayStackIcon"}
                    style={{ marginRight: "10px" }}
                  />
                  Paystack
                </Flex>
              ),
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
          // case 'whatsapp':
          case "bankTransfer":
            return {
              value: 2,
              title: (
                <Flex alignItems={"center"}>
                  <FaWhatsapp color="green" style={{ marginRight: "10px" }} />{" "}
                  WhatsApp
                </Flex>
              ),
              content: (
                <WhatsAppOrderCompletionComponent
                  currency={currency}
                  order={order}
                />
              ),
            };
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
            {t("checkout:payment options", "Payment Options")}
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
