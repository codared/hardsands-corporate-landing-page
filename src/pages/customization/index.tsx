import WithLayout from "components/WithLayout";
import Customization from "modules/customization";
import { NextPage } from "next";

const CustomizationPage: NextPage = () => {
  return (
    <WithLayout pageTitle="Hardsands - Customization">
      <Customization />
    </WithLayout>
  );
};

export default CustomizationPage;
