import WithLayout from "components/WithLayout";
import type { NextPage } from "next";
import ShopPLP from "modules/products/PLPElements";

const Products: NextPage = () => {
  return (
    <WithLayout pageTitle="Hardsands - Products">
      <ShopPLP />
    </WithLayout>
  );
};

export default Products;
