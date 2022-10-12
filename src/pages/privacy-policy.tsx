import WithLayout from "components/WithLayout";
import React from "react";
import { useTranslation } from "react-i18next";

import PrivacyPolicyPage from "modules/legal/privacyPolicy";

function PrivacyPolicy() {
  const { t } = useTranslation();
  return (
    <WithLayout
      pageTitle={t("meta:privacy-policy.title", "Privacy Policy - Hardsands")}
      pageDescription={t(
        "meta:privacy-policy.description",
        "Hardsands is committed to providing quality services to you, and this policy describes our ongoing responsibility to you in terms of how we maintain your Personal Information."
      )}
    >
      <PrivacyPolicyPage />
    </WithLayout>
  );
}

export default PrivacyPolicy;
