import WithLayout from "components/WithLayout";
import HowToUse from "modules/hardsands/HowToUse";
import React from "react";
import { useTranslation } from "react-i18next";

const HowToUsePage = () => {
  const { t } = useTranslation();
  return (
    <WithLayout
      pageTitle={t("how-to-use:title", "How to use")}
      pageDescription={t("how-to-use:description", "")}
      image_url="https://cdn.shopify.com/s/files/1/0559/0407/5843/files/HARDSANDS959_1.jpg?v=1668505794"
    >
      <HowToUse />
    </WithLayout>
  );
};

export default HowToUsePage;
