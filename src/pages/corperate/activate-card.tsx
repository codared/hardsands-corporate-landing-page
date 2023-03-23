import WithLayout from "components/WithLayout";
import CorperateCardActivationPage from "modules/authentication/components/CorperateCardActivationPage";
import type { NextPage, NextPageContext } from "next";
import { useRouter } from "next/router";
import { isServerRequest } from "utils/nextjs";

const ActivateCard: NextPage<{ isError: boolean; result: any }> = ({
  result,
  isError,
}) => {
  return (
    <WithLayout pageTitle="Card Activation | Hardsands">
      <CorperateCardActivationPage isError={isError} result={result} />
    </WithLayout>
  );
};

export async function getServerSideProps(ctx: NextPageContext) {
  // dont handle async data fetches because the component's useProduct hook handles this
  if (!isServerRequest(ctx)) {
    return { props: {} };
  }

  const {
    query: { serial },
  } = ctx;

  return { props: { isError: false, result: { serial } } };
}

export default ActivateCard;
