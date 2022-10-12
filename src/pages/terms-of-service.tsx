import WithLayout from "components/WithLayout";
import TermsOfServicePage from "modules/legal/TermsOfServicePage";
import React from "react";
import { useTranslation } from "react-i18next";

function PrivacyPolicy() {
  const { t } = useTranslation();

  return (
    <WithLayout
      pageTitle={t("common:terms-of-service", "Terms Of Service - Hardsands")}
      pageDescription={t(
        "meta:terms-of-service.desc",
        "Learn about Hardsand's terms and services and how they apply to you. Navigate your hardsands business card experience with confidence to get your best networking responses."
      )}
    >
      <TermsOfServicePage />
    </WithLayout>
  );
}

export default PrivacyPolicy;
