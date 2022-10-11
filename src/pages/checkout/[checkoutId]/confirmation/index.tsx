import WithLayout from "components/WithLayout";
import { resetCart } from "modules/cart/actions";
import { useOrder } from "modules/checkout/hooks/useOrder";
import OrderConfirmationPage from "modules/checkout/orderConfirmation";
import { Order } from "modules/checkout/types";
import { getLanguage } from "modules/i18n/actions";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { CheckoutContext } from "redux/context";

const OrderConfirmation: NextPage = () => {
  const router = useRouter();
  const { dispatch } = useContext(CheckoutContext);
  const {
    query: { checkoutId },
  } = router;

  useEffect(() => {
    if (checkoutId === undefined) {
      router.push("/404");
      return;
    }
  }, [checkoutId, router]);

  const order = useOrder(checkoutId as string) as Order;

  const language = getLanguage();

  useEffect(() => {
    dispatch(resetCart());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!order) {
      router.push("/");
    }
  }, [order, router]);

  return (
    <WithLayout
      isCheckout
      pageTitle="Order Confirmation - Hardsands - One time Business Card"
    >
      {checkoutId && order && (
        <OrderConfirmationPage
          checkoutId={Array.isArray(checkoutId) ? checkoutId[0] : checkoutId}
          language={language}
          order={order}
        />
      )}
    </WithLayout>
  );
};

export default OrderConfirmation;
