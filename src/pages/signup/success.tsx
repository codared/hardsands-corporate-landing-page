import WithLayout from "components/WithLayout";
import SignUpSuccess from "modules/authentication/components/SignUpSuccess";
import React from "react";

function SuccessPage() {
  return (
    <WithLayout pageTitle="Successful Sign up - Hardsands">
      <SignUpSuccess />
    </WithLayout>
  );
}

export default SuccessPage;
