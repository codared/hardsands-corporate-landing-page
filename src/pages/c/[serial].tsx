import * as Sentry from "@sentry/react";
import CardTapDisplay from "modules/account/components/CardTapDisplay";
import { getCard } from "modules/authentication/services";
import { NextPage, NextPageContext } from "next";
import { isServerRequest } from "utils/nextjs";
import generateVCard from "./vCardGenerator";
import WithoutLayout from "components/WithoutLayout";

const CheckCardActivation: NextPage<{ result: any }> = ({ result }) => {
  return (
    <WithoutLayout
      pageTitle={`My ${result.title} | Hardsands - Business Cards`}
      image_url={result.fields?.profileImage}
    >
      <CardTapDisplay result={result} />
    </WithoutLayout>
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

  const redirectTo = (url: string) => {
    if (res) {
      res.setHeader("location", url);
      res.statusCode = 302;
      res.end();
    }
  };

  try {
    const response = await getCard(serial as string);

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
      const _default = response.result.default;

      switch (_default.title) {
        case "WhatsApp":
          const whatsappLink = `https://wa.me/${_default.fields.phoneCode}${_default.fields.phone}?text=${_default.fields.message}`;
          redirectTo(whatsappLink);
          return { props: {} };
        case "URL":
          redirectTo(_default.fields.url);
          return { props: {} };
        case "Event":
          // Show event details
          return;
        case "Contact Card":
          // download contact card in vcf
          generateVCard(_default.fields, res);
          return { props: { result: _default } };
        case "SMS":
          redirectTo(`sms:${_default.fields.phone}`);
          return { props: {} };
        case "Call":
          redirectTo(`tel:${_default.fields.phone}`);
          return { props: {} };
        case "Email":
          redirectTo(
            `mailto:${_default.fields.email}?subject=${_default.fields.subject}&body=${_default.fields.content}`
          );
          return { props: {} };
        case "Bank Account":
          // Show Bank Account details
          return { props: { result: _default } };
        case "Social Card":
          // Show user profile
          return { props: { result: _default } };

        default:
          return { props: {} };
      }
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
    Sentry.captureException(error);
    return { props: {} };
  }
}

export default CheckCardActivation;
