import { Box, Container, Heading, Text } from "@chakra-ui/react";
import HardsandLink from "components/HardsandsLink";
import React from "react";
import { useTranslation } from "react-i18next";
import { MailtoInfoLink } from "../MailtoInfoLink";

function ReturnPolicyPage() {
  const { t } = useTranslation();

  return (
    <main>
      <Container maxW={"4xl"} py={["135px"]}>
        <Heading mb={22}>Refund - Return Policy</Heading>
        <Box h={30} />
        <Box mb={10}>
          <Text>
            {t(
              "returns:this-refund-policy-outlines",
              `This Refund Policy outlines our refund procedures.`
            )}
          </Text>
        </Box>
        <Box mb={10}>
          <Heading as="h4" size="md" mb={4}>
            {t("returns:returns", `Returns`)}
          </Heading>
          <Text>
            {t(
              "returns:we-will-replace-a-product",
              `We will replace a product only if it has been deemed faulty by a company representative. Before shipment, all goods are inspected for faults and completeness. You must notify us of any faults, shortages, or exceptions within 14 days of the order date.`
            )}
          </Text>
        </Box>
        <Box mb={10}>
          <Heading as="h4" size="md" mb={4}>
            {t("returns:refunds", `Refunds`)}
          </Heading>
          <Text mb={4}>
            {t(
              "returns:if-your-hardsands-card",
              `If your Hardsands card or Epoxy is damaged, you may be entitled to a replacement. We provide replacements for damaged Hardsands cards or Epoxy with picture proof within 72 hours of delivery. If an Epoxy fails to stick properly to a case or phone, you may be entitled to a replacement rather than a refund.`
            )}
          </Text>
          <Text>
            {t(
              "returns:if-you-have-successfully-activated",
              `If you have successfully activated your Hardsands and are still having problems tapping into a compatible device after contacting`
            )}{" "}
            <MailtoInfoLink />
            {t(
              "returns:you-will-be-eligible-for-a-refund",
              `, you will be eligible for a refund. We will notify you through email once your refund request has been granted. Your refund will then be processed within 3-5 days of receiving your request, and a refund will be made automatically to the original means of payment.`
            )}
          </Text>
        </Box>
        <Box mb={10}>
          <Heading as="h4" size="md" mb={4}>
            {t("returns:warranty", `Warranty`)}
          </Heading>
          <Text>
            {t(
              "returns:you-are-entitled-to-a-free-replacement",
              `You are entitled to a free replacement if your Hardsands Poxy loses its stickiness during the first 30 days of your purchase being listed as delivered.`
            )}
          </Text>
        </Box>
        <Box mb={10}>
          <Heading as="h4" size="md" mb={4}>
            {t("returns:delayed-refunds", `Delayed Refunds`)}
          </Heading>
          <Text>
            {t(
              "returns:if-you-havent-received-your-refund-yet",
              `If you haven't received your refund yet, double-check your bank account. Next, call your bank. There is normally some processing time before a refund is posted. If you've done this and still haven't received your refund, please contact us at`
            )}{" "}
            <MailtoInfoLink />
            {"."}
          </Text>
        </Box>
        <Box mb={10}>
          <Heading as="h4" size="md" mb={4}>
            {t("returns:exchanges", `Exchanges`)}
          </Heading>{" "}
          <Text mb={4}>
            {t(
              "returns:we-do-not-accept-exchanges",
              `We do not accept exchanges.`
            )}
          </Text>
          <Text>
            {t(
              "returns:if-you-have-any-concerns",
              `If you have any concerns or would want to file a complaint regarding our refund-return policies, please contact us through email at`
            )}{" "}
            <MailtoInfoLink />
            {"."}
          </Text>
        </Box>
      </Container>
    </main>
  );
}

export default ReturnPolicyPage;
