import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";

const CheckoutBreakcrumbs = ({
  activeStep,
  setActiveStep,
}: {
  activeStep: number;
  setActiveStep: (val: number) => void;
}) => {
  return (
    <Box fontWeight={"bold"}>
      <Breadcrumb separator="&#7036;">
        <BreadcrumbItem
          color={activeStep === 0 ? "brand.300" : "black"}
          onClick={() => setActiveStep(0)}
        >
          <BreadcrumbLink href="#">Customer Info</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem
          color={activeStep === 1 ? "brand.300" : "black"}
          onClick={() => setActiveStep(1)}
        >
          <BreadcrumbLink href="#">Shipping Info</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem
          color={activeStep === 2 ? "brand.300" : "black"}
          onClick={() => setActiveStep(2)}
        >
          <BreadcrumbLink href="#">Payment</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Box>
  );
};

export default CheckoutBreakcrumbs;
