import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { CHECKOUT_STEPS } from "../constants";

const CheckoutBreakcrumbs = ({
  activeStep,
  setActiveStep,
}: {
  activeStep: number;
  setActiveStep: (val: number) => void;
}) => {
  return (
    <Box fontWeight={"bold"}>
      <Breadcrumb separator=">">
        <BreadcrumbItem
          color={
            activeStep === CHECKOUT_STEPS.STEP_SHIPPING_INFO_FORM
              ? "brand.300"
              : "black"
          }
          onClick={() => setActiveStep(0)}
        >
          <BreadcrumbLink href="#">Customer Info</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem
          color={
            activeStep === CHECKOUT_STEPS.STEP_SHIPPING_INFO_CONFIRMATION
              ? "brand.300"
              : "black"
          }
          onClick={() =>
            activeStep < CHECKOUT_STEPS.STEP_SHIPPING_INFO_CONFIRMATION
              ? null
              : setActiveStep(CHECKOUT_STEPS.STEP_SHIPPING_INFO_CONFIRMATION)
          }
        >
          <BreadcrumbLink href="#">Shipping Info</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem
          color={
            activeStep === CHECKOUT_STEPS.STEP_PAYMENT_INFO
              ? "brand.300"
              : "black"
          }
          onClick={() =>
            activeStep < CHECKOUT_STEPS.STEP_PAYMENT_INFO
              ? null
              : setActiveStep(CHECKOUT_STEPS.STEP_PAYMENT_INFO)
          }
        >
          <BreadcrumbLink href="#">Payment</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Box>
  );
};

export default CheckoutBreakcrumbs;
