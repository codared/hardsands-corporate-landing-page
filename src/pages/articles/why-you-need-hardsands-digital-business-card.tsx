import WithLayout from "components/WithLayout";
import WhyYouNeed from "modules/hardsands/WhyYouNeed";
import React from "react";
import { useTranslation } from "react-i18next";

const WhyYouNeedPage = () => {
  const { t } = useTranslation();
  return (
    <WithLayout
      pageTitle={t(
        "why-you-need:title",
        "Why you need to get a hardsands digital business card right now - Hardsands"
      )}
      pageDescription={t(
        "why-you-need:description",
        "A business card is one of your most important marketing tools. It is a physical embodiment of your brand that you can give to people you meet. It is a representation of who you are and what you do."
      )}
      image_url="https://cdn.shopify.com/s/files/1/0559/0407/5843/files/HARDSANDS959_1.jpg?v=1668505794"
    >
      <WhyYouNeed />
    </WithLayout>
  );
};

export default WhyYouNeedPage;
