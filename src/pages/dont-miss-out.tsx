import WithLayout from "components/WithLayout";
import DontMissOut from "modules/hardsands/DontMissOut";
import React from "react";
import { useTranslation } from "react-i18next";

function DontMissOutPage() {
  const { t } = useTranslation();
  return (
    <WithLayout
      pageTitle={t(
        "pages:dont-miss-out",
        "Don't miss out on this special offer - Hardsands Business cards"
      )}
      pageDescription={t(
        "pages:dont-miss-out.desc",
        "Looking to save on your next purchase? For a limited time, get a 20% discount on all purchases. Act now to take advantage of this special offer!"
      )}
      image_url="https://cdn.shopify.com/s/files/1/0559/0407/5843/files/Rectangle_705_1.jpg?v=1670441529"
    >
      <DontMissOut />
    </WithLayout>
  );
}

export default DontMissOutPage;
