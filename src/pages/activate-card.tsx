import WithLayout from "components/WithLayout";
import CardActivationPage from "modules/authentication/components/CardActivationPage";
import type { NextPage, NextPageContext } from "next";
import { isServerRequest } from "utils/nextjs";

const ActivateCard: NextPage<{ isError: boolean; result: any }> = ({
  result,
  isError,
}) => {
  return (
    <WithLayout pageTitle="Card Activation | Hardsands">
      <CardActivationPage isError={isError} result={result} />
    </WithLayout>
  );
};

export async function getServerSideProps(ctx: NextPageContext) {
  // dont handle async data fetches because the component's useProduct hook handles this
  if (!isServerRequest(ctx)) {
    return { props: {} };
  }

  const {
    query: { serial, productId },
  } = ctx;

  return { props: { isError: false, result: { serial, productId } } };
}

export default ActivateCard;
