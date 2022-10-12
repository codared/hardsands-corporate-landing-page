import WithLayout from "components/WithLayout";
import ResetPasswordFormPage from "modules/authentication/components/ResetPasswordFormPage";
import { AUTH_ROUTES } from "modules/authentication/constants";
import { NextPage, NextPageContext } from "next";
import { isServerRequest } from "utils/nextjs";

const ResetPasswordForm: NextPage<{
  passwordToken: string;
  identifier: number;
}> = ({ passwordToken, identifier }) => {

  return (
    <WithLayout pageTitle="Reset Password | Hardsands">
      <ResetPasswordFormPage
        passwordToken={passwordToken}
        identifier={identifier}
      />
    </WithLayout>
  );
};

export async function getServerSideProps(ctx: NextPageContext) {
  // no props need to be sent back down for SPA navigates
  // only initial page render
  if (!isServerRequest(ctx) || typeof window !== "undefined") {
    return { props: {} };
  }

  const {
    query: { passwordToken, identifier },
    res,
  } = ctx;

  try {
    let passwordResetObj = {
      passwordToken: passwordToken as string,
      identifier: parseInt(identifier as string, 10),
    };

    return { props: passwordResetObj };
  } catch (e) {
    if (res) {
      res.setHeader("location", AUTH_ROUTES.login);
      res.statusCode = 302;
      res.end();
    }
    return { props: {} };
  }
}

export default ResetPasswordForm;
