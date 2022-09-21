import { Box, Container, Flex, Spinner, Text } from "@chakra-ui/react";
import { useContext, useEffect, useRef, useState } from "react";
import _ from "lodash";
import CustomerInfoForm, { Values } from "./components/CustomerInfoForm";
import CheckoutBreakcrumbs from "./components/CheckoutBreadcrumbs";
import ShippingInfo from "./components/ShippingInfo";
import PaymentInfo from "./components/PaymentMethods";
import OrderSummary from "./components/OrderSummary";
import { CHECKOUT_STEPS } from "./constants";
import { Order } from "./types";
import { useOrder } from "./hooks/useOrder";
import { FormikErrors } from "formik";
import { useTranslation } from "react-i18next";
import { useCurrency } from "modules/cart/hooks";
import { CheckoutContext } from "redux/context";
import { saveCustomerInfo, saveShippingMethod } from "./actions";
import AlertMessage from "components/AlertMessage";
import { EcommerceCartAction } from "modules/analytics/types";
import { trackBeginCheckout, trackCheckoutStep } from "modules/analytics/functions/track";
import track from "./analytics";

interface CheckoutPageProp {
  checkoutId: string;
  language: string;
}

const CheckoutPage = ({ checkoutId, language }: CheckoutPageProp) => {
  const beginCheckoutTracked = useRef(false)
  const { t } = useTranslation();
  const { dispatch } = useContext(CheckoutContext);
  const order = useOrder(checkoutId) as Order;
  const currency = useCurrency();
  const [isLoading, setIsLoading] = useState(false);
  const [showCancelMessageError, setShowCancelMessageError] = useState<
    string | null
  >(null);

  const [activeStep, setActiveStep] = useState(
    CHECKOUT_STEPS.STEP_SHIPPING_INFO_FORM
  );

  useEffect(() => {
    if (!!order?.shippingDetails) {
      setActiveStep(CHECKOUT_STEPS.STEP_SHIPPING_INFO_CONFIRMATION);
    }
    if (order?.shippingMethods.length && !!order?.shippingSelected) {
      setActiveStep(CHECKOUT_STEPS.STEP_PAYMENT_INFO);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [order]);

  useEffect(() => {
    if (!order || beginCheckoutTracked.current) {
      return
    }

    const products: EcommerceCartAction[]  = order.items.map(item => ({
      id: item.product.id,
      quantity: item.quantity,
      name: item.title,
      variant: item.productVariantKey,
      price: item.price/100,
      currency: item.currency,
      cartId: order.cartId,
      category: item.productVariantKey?.toLowerCase() === "plain" || item.productVariantKey?.toLowerCase() === "customized" ? "CARD" : "EPOXY"
    })) 

    trackBeginCheckout(products)
    beginCheckoutTracked.current = true
  }, [order])

  useEffect(() => {
    if (!activeStep) {
      return
    } 
    
    trackCheckoutStep(activeStep, {
      cartId: order.cartId
    })
  }, [activeStep])

  const handleSubmitCustomerInfoForm = async (
    values: Values,
    errors: FormikErrors<Values>
  ) => {
    setIsLoading(true);
    if (_.isEmpty(errors)) {
      try {
        const res = await dispatch(saveCustomerInfo(values)) as Order;
        track.trackIdentifyUser(res.userDetails)

        setActiveStep(CHECKOUT_STEPS.STEP_SHIPPING_INFO_CONFIRMATION);
        setIsLoading(false);
      } catch (error) {
        // Sentry.exception();
        setIsLoading(false);
      }
    }
  };

  const handleSubmitShippingMethod = async (shippingMethodId: number) => {
    setIsLoading(true);
    if (!!shippingMethodId) {
      try {
        const res = await dispatch(saveShippingMethod(shippingMethodId));
        setActiveStep(CHECKOUT_STEPS.STEP_PAYMENT_INFO);
        setIsLoading(false);
      } catch (error) {
        // Sentry.exception();
        setIsLoading(false);
      }
    }
  };

  const handleChangeAddress = () => {
    setActiveStep(CHECKOUT_STEPS.STEP_SHIPPING_INFO_FORM);
  };

  const handleCancel = (message: string) => {
    setShowCancelMessageError(message);
  };

  // console.log("order >>>> ", order);

  if (!order) {
    return (
      <Flex
        p={[20, 40]}
        flex={1}
        justifyContent={"center"}
        direction={"column"}
        alignItems={"center"}
        bg="rgba(255, 255, 255, .7)"
      >
        <Spinner size="xl" />
        <Box h={8} />
        <Text>{t("checkout:getting-your-order", "Getting Your Order...")}</Text>
      </Flex>
    );
  }

  return (
    <Container maxW={"4xl"} py={20}>
      <CheckoutBreakcrumbs
        activeStep={activeStep}
        setActiveStep={setActiveStep}
      />
      <Box h={8} />
      {!!showCancelMessageError && (
        <AlertMessage
          t={t}
          status={"error"}
          showCancelMessage={showCancelMessageError}
          setShowCancelMessage={setShowCancelMessageError}
        />
      )}
      <Flex mt={[10]} direction={["column-reverse", "column", "row"]}>
        <Box w="100%" position={"relative"}>
          {activeStep === CHECKOUT_STEPS.STEP_SHIPPING_INFO_FORM && (
            <CustomerInfoForm
              order={order}
              setIsLoading={setIsLoading}
              onFormSubmit={handleSubmitCustomerInfoForm}
            />
          )}
          {activeStep === CHECKOUT_STEPS.STEP_SHIPPING_INFO_CONFIRMATION && (
            <ShippingInfo
              t={t}
              order={order}
              currency={currency}
              handleSubmitShippingMethod={handleSubmitShippingMethod}
              handleChangeAddress={handleChangeAddress}
            />
          )}
          {activeStep === CHECKOUT_STEPS.STEP_PAYMENT_INFO && (
            <PaymentInfo
              t={t}
              order={order}
              handleCancel={handleCancel}
            />
          )}
          {isLoading && (
            <Flex
              position={"absolute"}
              left={0}
              right={0}
              top={0}
              bottom={0}
              flex={1}
              justifyContent={"center"}
              alignItems={"center"}
              bg="rgba(255, 255, 255, .7)"
            >
              <Spinner size="xl" />
            </Flex>
          )}
        </Box>
        <Box w={14} />
        <OrderSummary
          activeStep={activeStep}
          currency={currency}
          t={t}
          order={order as Order}
        />
      </Flex>
    </Container>
  );
};

export default CheckoutPage;
