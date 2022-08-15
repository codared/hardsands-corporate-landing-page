import WithLayout from "components/WithLayout";
import OrderConfirmationPage from "modules/checkout/orderConfirmation";
import type { NextPage } from "next";

const Checkout: NextPage = () => {
  return (
    <WithLayout pageTitle="Order Confirmation - Hardsands - One time Business Card">
      <OrderConfirmationPage />
    </WithLayout>
  );
};

export default Checkout;
