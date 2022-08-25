import config from "core/config";
import { useRouter } from "next/router";
import { Order } from "../types";
import { PaystackButton } from "react-paystack";
import { useCurrency } from "modules/cart/hooks";
import { Box } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { PaystackCurrencyTypes } from "./types";

const publicKey = config("PAYSTACK_PUBLIC_KEY");

const PaystackButtonComponent = ({
  order,
  handleCancel,
}: {
  order: Order;
  handleCancel: (message: string) => void;
}) => {
  const currency = "NGN" as PaystackCurrencyTypes;
  const router = useRouter();

  const {
    paymentMethod: { checkoutHash, custom_fields, reference },
    userDetails: { email },
    total,
    totalDue,
  } = order;

  const componentProps = {
    email,
    amount: totalDue,
    metadata: {
      custom_fields,
    },
    publicKey,
    reference,
    currency,
    text: "Pay with Paystack",
    onSuccess: () => router.push(`/checkout/${checkoutHash}/confirmation`),
    onClose: () => handleCancel("You haven't made the payment complete!!!!"),
  };

  return (
    <Box
      css={css`
        & > button {
          cursor: pointer;
          text-align: center;
          font-size: 10px;
          letter-spacing: 0.1rem;
          text-transform: uppercase;
          //   background-color: #f8ecde;
          font-weight: bold;
          color: black;
          border: 1px solid black;
          //   border-radius: 5px;
          width: 100%;
          height: 45px;
          margin-top: 20px;
        }

        & > button:hover {
          background-color: transparent;
        }
      `}
    >
      <PaystackButton {...componentProps} />
    </Box>
  );
};

export default PaystackButtonComponent;
