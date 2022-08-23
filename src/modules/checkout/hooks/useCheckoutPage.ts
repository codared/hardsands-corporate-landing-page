import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { range } from "utils/array";
import { removeURLParameters } from "utils/url";
import { ORDER_LOAD_ERROR } from "../actions";
import { CHECKOUT_STEPS } from "../constants";
import { isAddress, isIncompleteAddress } from "../functions";
import { getCheckoutRoutes } from "../routes";
import { CheckoutRedirectFlow } from "../types";
import { useOrder, useLoadOrderError } from "./useOrder";

const useCheckoutPages = (cartId: string) => {
  const routes = getCheckoutRoutes();
  const [initialStepInitialized, setInitialStepInitialized] = useState(false);
  const [currentPageNumber, setCurrentPageNumber] = useState(0);
  const [naturalPage, setNaturalPage] = useState(0);
  const [checkoutRedirectFlow, setCheckoutRedirectFlow] =
    useState<CheckoutRedirectFlow>();
  const [
    hasSubmittedShippingConfirmation,
    setHasSubmittedShippingConfirmation,
  ] = useState(false);

  const order = useOrder(cartId);
  const orderLoadError = useLoadOrderError();
  const enabledPages = range(naturalPage);
  const router = useRouter();

  // figure out how far in the checkout user has progressed to
  useEffect(() => {
    if (orderLoadError?.key === ORDER_LOAD_ERROR) {
      router.push(routes?.pageNotFound() ?? "/404");
      return;
    }

    if (!order) {
      return;
    }

    let naturalPage = CHECKOUT_STEPS.STEP_SHIPPING_INFO_FORM;
    if (isAddress(order.shipping_address?.data)) {
      naturalPage = CHECKOUT_STEPS.STEP_SHIPPING_INFO_CONFIRMATION;
    }
    if (hasSubmittedShippingConfirmation) {
      naturalPage = CHECKOUT_STEPS.STEP_PAYMENT_INFO;
    }
    setNaturalPage(naturalPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [order, orderLoadError, hasSubmittedShippingConfirmation]);

  // on load determine what page to show
  useEffect(() => {
    if (initialStepInitialized) {
      return;
    }
    if (!order) {
      return;
    }

    const shippingAddress = order.shipping_address?.data;

    // check for any checkout redirect flow on query param
    const queryParams = router.query;
    if (queryParams.flow == "adyen-redirect") {
      setCheckoutRedirectFlow({
        flow: queryParams.flow,
        data: {
          MD: queryParams.MD,
          PaRes: queryParams.PaRes,
        },
      });
      setCurrentPageNumber(CHECKOUT_STEPS.STEP_PAYMENT_INFO);
      // remove adyen redirect query params from address url to allow smooth retry in case of error during validation
      window.history.replaceState(
        {},
        document.title,
        removeURLParameters(window.location.href, ["flow", "MD", "PaRes"])
      );
    } else if (
      isAddress(shippingAddress) &&
      !isIncompleteAddress(shippingAddress)
    ) {
      setCurrentPageNumber(CHECKOUT_STEPS.STEP_SHIPPING_INFO_CONFIRMATION);
    } else {
      setCurrentPageNumber(CHECKOUT_STEPS.STEP_SHIPPING_INFO_FORM);
    }

    setInitialStepInitialized(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialStepInitialized, order]);

  const nextPage = () => {
    if (currentPageNumber === CHECKOUT_STEPS.STEP_SHIPPING_INFO_CONFIRMATION) {
      setHasSubmittedShippingConfirmation(true);
    }
    setCurrentPageNumber(currentPageNumber + 1);
  };

  const prevPage = () => {
    const prevPageNumber = currentPageNumber - 1;
    setCurrentPageNumber(prevPageNumber);
  };

  return {
    setCurrentPageNumber,
    currentPageNumber,
    enabledPages,
    nextPage,
    prevPage,
    checkoutRedirectFlow,
  };
};

export default useCheckoutPages;
