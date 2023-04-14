import * as Sentry from "@sentry/react";
import CardTapDisplay from "modules/account/components/CardTapDisplay";
import { getCard } from "modules/authentication/services";
import { NextPage, NextPageContext } from "next";
import { isServerRequest } from "utils/nextjs";
import generateVCard from "./vCardGenerator";
import WithoutLayout from "components/WithoutLayout";
import nextCookies from "next-cookies";
import { v5 as uuid } from "uuid";

const CheckCardActivation: NextPage<{ result: any }> = ({ result }) => {
  return (
    <WithoutLayout
      pageTitle={
        result?.title || result?.cardTitle
          ? `My ${
              result.title || result.cardTitle
            } | Hardsands - Business Cards`
          : "Hardsands - Business Cards"
      }
      image_url={result?.fields?.profileImage}
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
    req,
  } = ctx;

  const redirectTo = (url: string) => {
    if (res) {
      res.setHeader("location", url);
      res.statusCode = 302;
      res.end();
    }
  };

  try {
    let { hardsands_device_id } = nextCookies(ctx);
    const userAgent = req?.headers["user-agent"] as string;
    const deviceUUID = uuid(userAgent, uuid.URL);

    if (!hardsands_device_id) {
      // set new device id forever
      // setCookie("hardsands_device_id", deviceUUID, {
      //   maxAge: 30 * 24 * 60 * 60,
      //   path: "/",
      // });
      // hardsands_device_id = deviceUUID;
    }

    const response = await getCard(serial as string);

    if (
      !!response &&
      response.isError &&
      response?.data?.nextStep === "activateCard"
    ) {
      const activationUrl = `/activate-card?serial=${response?.data?.data.cardSerial}&productId=${response?.data?.data.productId}`;

      redirectTo(activationUrl);
    } else if (
      !!response &&
      response.isError &&
      response?.data?.nextStep === "activateCorporateCard"
    ) {
      const activationUrl = `/corporate/activate-card?serial=${response?.data?.data.cardSerial}`;

      redirectTo(activationUrl);
    } else if (
      !!response &&
      response.isError &&
      response?.data?.nextStep === "activateAccessCard"
    ) {
      const activationUrl = `/membership/activate-card?serial=${response?.data?.data.cardSerial}`;

      redirectTo(activationUrl);
    }

    if (!!response && !response.isError) {
      // redirect to card default action;
      const _default = response.result.default;

      switch (_default.title) {
        case "WhatsApp":
          const whatsappLink = `https://wa.me/${_default.fields.phoneCode}${
            _default.fields.phone
          }?text=${encodeURIComponent(_default.fields.message)}`;
          redirectTo(whatsappLink);
          return { props: {} };
        case "URL":
          redirectTo(_default.fields.url);
          return { props: {} };
        case "Event":
          // Show event details
          return { props: { result: _default } };
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
            `mailto:${_default.fields.email}?subject=${encodeURIComponent(
              _default.fields.subject
            )}&body=${encodeURIComponent(_default.fields.content)}`
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
