import WithLayout from "components/WithLayout";
import type { NextPage } from "next";
import ResetPassword from "modules/authentication/components/ResetPassword";

const ResetPasswordPage: NextPage = () => {
  return (
    <WithLayout pageTitle="Reset Passward | Hardsands">
      <ResetPassword />
    </WithLayout>
  );
};

export default ResetPasswordPage;
