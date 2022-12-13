import WithLayout from "components/WithLayout";
import HandPickedForYou from "modules/hardsands/HandPickedForYou";
import React from "react";
import { useTranslation } from "react-i18next";

const HandPickedForYouPage = () => {
  const { t } = useTranslation();
  return (
    <WithLayout
      pageTitle={t("pages:hand-picked-for-you", "Hand Picked for you - Hardsands Business cards")}
      pageDescription={t(
        "pages:hand-picked-for-you.desc",
        "Connect wherever you go. You can easily share your Hardsands digital business card with anyone you meet. The best part is, they don’t even require an app!"
      )}
      image_url="https://cdn.shopify.com/s/files/1/0559/0407/5843/files/2Q7A6847_2_-_low.jpg?v=1670370868"
    >
      <HandPickedForYou />
    </WithLayout>
  );
};

export default HandPickedForYouPage;
