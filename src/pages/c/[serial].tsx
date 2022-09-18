import WithLayout from "components/WithLayout";
import CardTapDisplay from "modules/account/components/CardTapDisplay";
import { getCard } from "modules/authentication/services";
import { NextPage, NextPageContext } from "next";
import { isServerRequest } from "utils/nextjs";

const CheckCardActivation: NextPage<{ result: any }> = ({ result }) => {
  return (
    <WithLayout pageTitle="Card Tap | Hardsands">
      <CardTapDisplay result={result} />
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
          const whatsappLink = `https://wa.me/${_default.fields.phone}?text=${_default.fields.message}`;
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
          return;
        case "SMS":
          redirectTo(
            `sms:${_default.fields.phone}?body=${_default.fields.text}`
          );
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
        case "Profile":
          // Show user profile
          return { props: {} };

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
    return { props: {} };
  }
}

export default CheckCardActivation;
