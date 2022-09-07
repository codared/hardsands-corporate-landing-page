import { Box } from "@chakra-ui/react";
import WithLayout from "components/WithLayout";
import { APP_ROUTE } from "modules/authentication/constants";
import { getCard } from "modules/authentication/services";
import { NextPage, NextPageContext } from "next";
import { isServerRequest } from "utils/nextjs";

const CheckCardActivation: NextPage = () => {
  return (
    <WithLayout pageTitle="Card Activation Check | Hardsands">
      <Box />
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
    res,
  } = ctx;

  console.log("serial >>> ", serial);

  const redirectTo = (url: string) => {
    if (res) {
      res.setHeader("location", url);
      res.statusCode = 302;
      res.end();
    }
  };

  //   const { hardsands_user_token } = nextCookies(ctx);
  //   const _isTokenExpired = isTokenExpired(hardsands_user_token as string);
  //   if (!_isTokenExpired) {
  //     redirectTo(APP_ROUTE.home);
  //   }

  try {
    const response = await getCard(serial as string);
    console.log("response >>> ", response);

    const activationUrl = `/activate-card?serial=${response?.data?.data.cardSerial}&productId=${response?.data?.data.productId}`;

    if (
      !!response &&
      response.isError &&
      response?.data?.nextStep === "activateCard"
    ) {
      redirectTo(activationUrl);
    }

    if (!!response && !response.isError) {
      // redirect to card default action;
      // redirectTo(APP_ROUTE.home);
    }

    if (
      !!response &&
      response.isError &&
      response?.message === "Card not found."
    ) {
      redirectTo("/404");
    }

    return { props: response };
  } catch (error) {
    console.log("error >>> ", error);
    // redirectTo("/500");
    return { props: {} };
  }
}

export default CheckCardActivation;
