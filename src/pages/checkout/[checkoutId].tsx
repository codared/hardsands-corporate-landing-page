import WithLayout from "components/WithLayout";
import CheckoutPage from "modules/checkout";
import type { NextPage } from "next";

const Checkout: NextPage = () => {
  return (
    <WithLayout pageTitle="Checkout - Hardsands - One time Business Card">
      <CheckoutPage />
    </WithLayout>
  );
};

export default Checkout;
