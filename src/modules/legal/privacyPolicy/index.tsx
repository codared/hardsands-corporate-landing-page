import { Box, Container, Heading, Text } from "@chakra-ui/react";
import HardsandLink from "components/HardsandsLink";
import React from "react";
import { useTranslation } from "react-i18next";
import { MailtoInfoLink } from "../MailtoInfoLink";

function PrivacyPolicyPage() {
  const { t } = useTranslation();

  return (
    <main>
      <Container maxW={"4xl"} py={["135px"]}>
        <Heading mb={22}>Privacy Policy</Heading>
        <Box h={30} />
        <Box mb={10}>
          <Text>
            {t(
              "policy:policy-text-1",
              `Hardsands is committed to providing quality services to you, and this
          policy describes our ongoing responsibility to you in terms of how we
          maintain your Personal Information.`
            )}
          </Text>
        </Box>
        <Box mb={10}>
          <Heading as="h4" size="md" mb={4}>
            {t(
              "policy:policy-what-personal-information",
              `What Personal Information are we collecting?`
            )}
          </Heading>
          <Text>
            {t(
              "policy:policy-we-collect-the-following",
              `We collect the following personal information from you on our website: email address, first and last name, bank account and payment details,phone number, and shipping address.`
            )}
          </Text>
        </Box>
        <Box mb={10}>
          <Heading as="h4" size="md" mb={4}>
            {t(
              "policy:policy-why-are-we-collecting",
              `Why are we collecting your Personal Information?`
            )}
          </Heading>
          <Text mb={4}>
            {t(
              "policy:we-collect-personal-information",
              `We collect Personal Information so that we can provide you with the services you desire, fulfill your requests, deliver quality to our customers, and give information to our customers, and our marketing team. 
              `
            )}
          </Text>
          <Text mb={4}>
            {t(
              "policy:we-need-your-name",
              `We need your name, shipping address (if different), and bank information so that we can take payment and deliver the products to you. We will notify you at the point of collecting information from you, whether you are required to provide the information to us.`
            )}
          </Text>
          <Text mb={4}>
            {t(
              "policy:you-may-unsubscribe",
              `You may unsubscribe from our mailing/marketing lists at any time by emailing us at`
            )}
          </Text>
          <MailtoInfoLink />
        </Box>
        <Box mb={10}>
          <Heading as="h4" size="md" mb={4}>
            {t(
              "policy:policy-what-do-we-do-with-your-personal-information",
              `What do we do with your personal information`
            )}
          </Heading>
          <Text>
            {t(
              "policy:policy-we-use-this-personal-information-to",
              `We use this personal information to:  deliver products and services to you,  enhance our services and adapt our website and its content to your specific tastes.`
            )}
          </Text>
        </Box>
        <Box mb={10}>
          <Heading as="h4" size="md" mb={4}>
            {t(
              "policy:policy-who-do-we-share-your-personal-information-with",
              `Who do we share your personal information with?`
            )}
          </Heading>
          <Text>
            {t(
              "policy:policy-we-will-not-disclose-your-personal-information",
              `We will not disclose your personal information with any other third party.\n
              We usually share your name and delivery address with our delivery partners. This data exchange helps our delivery partners to deliver your ucse products to you.
              `
            )}
          </Text>
        </Box>
        <Box mb={10}>
          <Heading as="h4" size="md" mb={4}>
            {t(
              "policy:policy-how-do-we-collect-your-personal-information",
              `How do we collect your Personal Information?`
            )}
          </Heading>
          <Text>
            {t(
              "policy:policy-we-will-not-disclose-your-personal-information",
              `This Personal Information is obtained in many ways including interviews, correspondence, telephone, and by email, via our website www.hardsands.com, from media and publications, from other publicly available sources, from cookies- delete all that aren’t applicable, and from third parties. We don’t guarantee website links or the policy of authorized third parties.`
            )}
          </Text>
        </Box>
        <Box mb={10}>
          <Heading as="h4" size="md" mb={4}>
            {t("policy:policy-use-of-cookies", `Use of Cookies`)}
          </Heading>
          <Text>
            {t(
              "policy:policy-we-will-not-disclose-your-personal-information",
              `A cookie is a little text file that is stored on your device (computer, smartphone, or other electronic device) when you visit our website. These allow us to recognize you and your device and save information about your preferences or previous activities.`
            )}
          </Text>
        </Box>
        <Box mb={10}>
          <Heading as="h4" size="md" mb={4}>
            {t(
              "policy:protecting-your-personal-information",
              `Protecting Your Personal Information`
            )}
          </Heading>
          <Text mb={4}>
            {t(
              "policy:we-restrict-access-to-your-personal-information",
              `We restrict access to your personal information to those with a legitimate business need to know. Those that process your information will do so only in an authorized manner and are bound by a duty of confidentiality`
            )}
          </Text>
          <Text mb={4}>
            {t(
              "policy:we-have-sufficient-security-measures",
              `We have sufficient security measures in place to protect personal information from being mistakenly lost or misused.`
            )}
          </Text>
          <Text>
            {t(
              "policy:we-will-notify-you-and-any-applicable-authority",
              `We will notify you and any applicable authority of a suspected data security breach if we are legally compelled to do so.`
            )}
          </Text>
          <Text>
            {t(
              "policy:we-also-have-mechanisms",
              `We also have mechanisms in place to respond to any suspected data security violation.`
            )}
          </Text>
        </Box>
        <Box mb={10}>
          <Heading as="h4" size="md" mb={4}>
            {t("policy:policy-updates", `Policy Updates`)}
          </Heading>
          <Text>
            {t(
              "policy:this-policy-is-subject-to-modification",
              `This policy is subject to modification and is published on our website.`
            )}
          </Text>
        </Box>
      </Container>
    </main>
  );
}

export default PrivacyPolicyPage;
