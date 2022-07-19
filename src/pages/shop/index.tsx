import WithLayout from "components/WithLayout";
import type { NextPage } from "next";
import ShopPLP from "modules/plp";

const Shop: NextPage = () => {
  return (
    <WithLayout pageTitle="Hardsands - Shop">
      <ShopPLP />
    </WithLayout>
  );
};

export default Shop;
