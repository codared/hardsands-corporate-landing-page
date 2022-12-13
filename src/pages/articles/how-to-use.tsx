import WithLayout from "components/WithLayout";
import HowToUse from "modules/hardsands/HowToUse";
import React from "react";
import { useTranslation } from "react-i18next";

const HowToUsePage = () => {
  const { t } = useTranslation();
  return (
    <WithLayout
      pageTitle={t("how-to-use:title", "How to use - Hardsands")}
      pageDescription={t(
        "how-to-use:description",
        "The average person collects dozens, if not hundreds, of business cards throughout their career. With so many cards, it can be tough to keep track of them all – and even tougher to find the one you need when you need it."
      )}
      image_url="https://cdn.shopify.com/s/files/1/0559/0407/5843/files/HARDSANDS959_1.jpg?v=1668505794"
    >
      <HowToUse />
    </WithLayout>
  );
};

export default HowToUsePage;
