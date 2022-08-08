import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Divider,
  Flex,
  Heading,
} from "@chakra-ui/react";
import PriceSummary from "components/PriceSummary";
import { useState } from "react";
import OrderItemCard from "./components/OrderItemCard";
import CustomerInfoForm from "./components/CustomerInfoForm";
import CheckoutBreakcrumbs from "./components/CheckoutBreadcrumbs";
import ShippingInfo from "./components/ShippingInfo";
import PaymentInfo from "./components/PaymentMethods";

const CheckoutPage = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <Container maxW={"4xl"} py={20}>
      <CheckoutBreakcrumbs
        activeStep={activeStep}
        setActiveStep={setActiveStep}
      />
      <Box h={8} />
      <Flex direction={["column", "column", "row"]}>
        <Box w="100%">
					{activeStep === 0 && <CustomerInfoForm />}
					{activeStep === 1 && <ShippingInfo />}
					{activeStep === 2 && <PaymentInfo />}
				</Box>
        <Box w={14} />
        <Box w="100%">
          <Flex direction={"column"} bg={"brand.10"} p={5}>
            <Heading fontSize={20}>Order Summary</Heading>
            <Divider my={5} />
            <OrderItemCard
              p={["0px 5px"]}
              titleFontSize={[14, 16]}
              subTitleFontSize={[12, 14]}
            />
            <Divider my={5} />
            <PriceSummary fontSize={18} />
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default CheckoutPage;
