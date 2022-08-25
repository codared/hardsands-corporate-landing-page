import WithLayout from "components/WithLayout";
import { resetCart } from "modules/cart/actions";
import OrderConfirmationPage from "modules/checkout/orderConfirmation";
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

  const language = getLanguage();

  useEffect(() => {
    if (checkoutId === undefined) {
      router.push("/404");
      return;
    }
  }, [checkoutId, router]);

  useEffect(() => {
    dispatch(resetCart());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <WithLayout
      isCheckout
      pageTitle="Order Confirmation - Hardsands - One time Business Card"
    >
      {checkoutId && (
        <OrderConfirmationPage
          checkoutId={Array.isArray(checkoutId) ? checkoutId[0] : checkoutId}
          language={language}
        />
      )}
    </WithLayout>
  );
};

export default OrderConfirmation;
