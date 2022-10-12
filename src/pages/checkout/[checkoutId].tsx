import WithLayout from "components/WithLayout";
import CheckoutPage from "modules/checkout";
import { setTrackingFunctions } from "modules/checkout/analytics";
import * as track from "modules/analytics/functions/track";
import { getLanguage } from "modules/i18n/actions";
import lifecycle from "modules/lifecycle/Lifecycle";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { CheckoutContext } from "redux/context";
import { setLifecycleInstance } from "utils/lifecyle";

const Checkout: NextPage = () => {
  const router = useRouter();
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
    setTrackingFunctions(track);
    setLifecycleInstance(lifecycle);
  }, []);

  return (
    <WithLayout
      isCheckout
      pageTitle="Checkout | Hardsands - One time Business Card"
    >
      {checkoutId && (
        <CheckoutPage
          checkoutId={Array.isArray(checkoutId) ? checkoutId[0] : checkoutId}
          language={language}
        />
      )}
    </WithLayout>
  );
};

export default Checkout;
