import config from "core/config";
import { useRouter } from "next/router";
import { Order } from "../types";
import { PaystackButton } from "react-paystack";
import { useCurrency } from "modules/cart/hooks";
import { Box } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { PaystackCurrencyTypes } from "./types";
import { completeOrderCheck } from "../checkoutApi";
import track from "../analytics";

const publicKey = config("PAYSTACK_PUBLIC_KEY");

const PaystackButtonComponent = ({
  order,
  handleCancel,
  setLoading,
  onOptionChange,
}: {
  order: Order;
  onOptionChange: (data: any) => void;
  setLoading: (loading: boolean) => void;
  handleCancel: (message: string) => void;
}) => {
  const currency = useCurrency() as PaystackCurrencyTypes;
  const router = useRouter();

  const {
    paymentMethod: {
      paystack: { checkoutHash, custom_fields, reference },
    },
    userDetails: { email },
    total,
    totalDue,
    discountedAmount,
  } = order;

  const handleOrderPaymentCheck = async () => {
    setLoading(true);
    // Call the check order endpoint
    // if response and draftorder is true then payment is complete
    const res = await completeOrderCheck({
      paymentToken: reference,
      checkoutToken: checkoutHash,
    });

    if (res.isError || res.result.draftOrder) {
      track.trackPaymentError("paystack");
      return handleCancel(res.message as string);
    }

    if (!res.result.draftOrder) {
      setLoading(false);
      track.trackOrderPurchase(res.result);
      return router.push(`/checkout/${checkoutHash}/confirmation`);
    }
    return setLoading(false); // not complete;
  };

  const handleClick = () => {
    onOptionChange(handleOrderPaymentCheck);
  };

  const componentProps = {
    email,
    amount: !!discountedAmount ? discountedAmount : totalDue,
    metadata: {
      custom_fields,
    },
    publicKey,
    reference,
    currency,
    text: "Pay with Paystack",
    onSuccess: handleOrderPaymentCheck,
    onClose: () => {},
    // onClose: () => handleCancel("Your Payment wasn't Successful!!!"),
  };

  const trackPaystack = () => {
    track.trackPaymentAttempted({ method: "paystack" });
  };

  return (
    <Box
      onClick={trackPaystack}
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
