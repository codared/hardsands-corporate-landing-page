import WithLayout from "components/WithLayout";
import type { NextPage } from "next";
import SignUpPage from "modules/authentication/components/SignUpPage";

const Login: NextPage = () => {
  return (
    <WithLayout pageTitle="Hardsands - Sign Up">
      <SignUpPage />
    </WithLayout>
  );
};

export default Login;
