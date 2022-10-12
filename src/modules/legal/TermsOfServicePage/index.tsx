import { Box, Container, Heading, Text } from "@chakra-ui/react";
import HardsandLink from "components/HardsandsLink";
import React from "react";
import { useTranslation } from "react-i18next";
import { MailtoInfoLink } from "../MailtoInfoLink";

function TermsOfServicePage() {
  const { t } = useTranslation();

  return (
    <main>
      <Container maxW={"4xl"} py={["135px"]}>
        <Heading mb={22}>Terms and Condition</Heading>
        <Box h={30} />
        <Box mb={10}>
          <Text mb={4}>
            {t(
              "terms:hardsands-technology-limited",
              `Hardsands Technology Limited operates this website. The phrases "we," "us," and "our" refer to Hardsands Technology Limited. Hardsands Technology Limited provides this website, including all information, tools, and services available from it, to you, the user, conditioned on your acceptance of all terms, conditions, policies, and notices indicated here.`
            )}
          </Text>
          <Text mb={4}>
            {t(
              "terms:before-accessing-or-using-our-website",
              `Before accessing or using our website, please carefully read our Terms of Service. You agree to be bound by these Terms of Service by accessing or using any part of the website. You may not visit the website or use any services unless you agree to all of the terms and conditions of this agreement. Acceptance is solely restricted to these Terms of Service if these Terms of Service are deemed an offer.`
            )}
          </Text>
          <Text mb={4}>
            {t(
              "terms:you-agree-to-the-following-terms-and–conditions",
              `You agree to the following terms and conditions (“Terms of Service”, “Terms”), including other terms and policies that are linked herein and/or accessible by hyperlink, by using our site, using our services, or making a purchase from us. All users of the site, including without limitation browsers, merchants, enterprises,  customers, and/or content producers, are subject to these Terms of Service.`
            )}
          </Text>
          <Text mb={4}>
            {t(
              "terms:we-retain-the-right-to-update",
              `We retain the right to update, amend, or replace any section of these Terms of Service by publishing updates and/or modifications to our website. You have to check this page for modifications regularly. Your continued use or access to the website following the publication of such modifications implies acceptance of those changes.`
            )}
          </Text>
        </Box>
        <Box mb={10}>
          <Heading as="h4" size="md" mb={4}>
            {t("terms:terms-of-our-online-store", `Terms of our online store`)}
          </Heading>
          <Text>
            {t(
              "terms:by-agreeing-to-these-terms-of-service",
              `By agreeing to these Terms of Service, you agree not to use our products for any unlawful or unauthorized purpose, and you agree not to break any laws in your jurisdiction by using the Service (including but not limited to copyright laws).`
            )}
          </Text>
          <Text>
            {t(
              "terms:you-are-not-permitted",
              `You are not permitted to send any worms, viruses, or disruptive code.`
            )}
          </Text>
          <Text>
            {t(
              "terms:any-violation-of-the-terms",
              `Any violation of the Terms will result in the immediate termination of your Services.`
            )}
          </Text>
        </Box>
        <Box mb={10}>
          <Heading as="h4" size="md" mb={4}>
            {t("terms:product-and-services", `Product and Services`)}
          </Heading>
          <Text mb={4}>
            {t(
              "terms:we-have-made-every-effort-to-accurately",
              `We have made every effort to accurately portray the colors and images of our products that appear in the store.`
            )}
          </Text>
          <Text mb={4}>
            {t(
              "terms:we-cannot-guarantee-that-your-computer",
              `We cannot guarantee that your computer monitor will accurately display any color.`
            )}
          </Text>
          <Text mb={4}>
            {t(
              "terms:certain-products-or-services",
              `Certain products or services may only be offered through the website. These products or services may be restricted in number and are only returnable or refundable under our Return-Refund Policy.`
            )}
          </Text>
          <Text mb={4}>
            {t(
              "terms:all-product-descriptions-are-subject",
              `All product descriptions are subject to change at any moment, without notice, at our sole discretion. We have the right to withdraw any product at any time. Any offer for a product or service made on this site is invalid and prohibited.`
            )}
          </Text>
          <Text mb={4}>
            {t(
              "terms:we-make-no-guarantee-that-the–quality",
              `We make no guarantee that the quality of any products, services, information, or other product purchased or accessed by you will meet your expectations, nor do we guarantee that any errors in the Service will be rectified.`
            )}
          </Text>
        </Box>
        <Box mb={10}>
          <Heading as="h4" size="md" mb={4}>
            {t("terms:billing-and-payment-terms", `Billing and Payment Terms`)}
          </Heading>
          <Text mb={4}>
            {t(
              "terms:we-have-made-every-effort-to-accurately",
              `We reserve the right, in our sole discretion, to limit or cancel the number of products purchased per person.  Orders placed by or under the same customer account, the same payment card, and/or orders using the same shipping address may be subject to these limitations.`
            )}
          </Text>
          <Text mb={4}>
            {t(
              "terms:if-we-alter-or-cancel-an-order",
              `If we alter or cancel an order, we may attempt to notify you by contacting the e-mail or phone number provided at the time the purchase was made.`
            )}
          </Text>
          <Text mb={4}>
            {t(
              "terms:we-have-the-right-to-limit",
              `We have the right to limit or reject orders that appear to be placed by dealers, resellers, or distributors.`
            )}
          </Text>
        </Box>
        <Box mb={10}>
          <Heading as="h4" size="md" mb={4}>
            {t(
              "terms:disclaimer-of-warranties-limitation-of-liability",
              `Disclaimer of warranties; Limitation of Liability`
            )}
          </Heading>
          <Text mb={4}>
            {t(
              "terms:we-can-not-guarantee-that-the-results",
              `We can not guarantee that the results acquired from using the service will be accurate or dependable.
              We make no guarantees, representations, or warranties that your use of our service will be continuous, timely, secure, or error-free`
            )}
          </Text>
          <Text mb={4}>
            {t(
              "terms:you-accept-that-we-may-discontinue",
              `You accept that we may discontinue the service for indeterminate lengths of time or cancel it at any moment without prior notification to you.`
            )}
          </Text>
          <Text mb={4}>
            {t(
              "terms:hardsands-technology-limited-our-director",
              `Hardsands Technology Limited, our directors, employees, affiliates, agents, contractors, service providers, or licensors shall in no event be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation, lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages, whether in contract, tort (including negligence), strict liability, or otherwise.`
            )}
          </Text>
        </Box>
        <Box mb={10}>
          <Heading as="h4" size="md" mb={4}>
            {t("terms:service-and-price-changes", `Service and Price Changes`)}
          </Heading>
          <Text mb={4}>
            {t(
              "terms:our-product-prices-are-subject",
              `Our product prices are subject to change without notice.We retain the right to alter or discontinue the Service (or any part or content thereof) at any time and without notice.`
            )}
          </Text>
          <Text mb={4}>
            {t(
              "terms:we-will-not-be-accountable",
              `We will not be accountable to you or any third person if the Service is modified, priced, suspended, or discontinued.`
            )}
          </Text>
        </Box>
        <Box mb={10}>
          <Heading as="h4" size="md" mb={4}>
            {t("terms:extra-tools", `Extra Tools`)}
          </Heading>
          <Text mb={4}>
            {t(
              "terms:we-may-give-you-access-to-third-party",
              `We may give you access to third-party tools over which we have no control or involvement.`
            )}
          </Text>
          <Text mb={4}>
            {t(
              "terms:any-use-of-optional-tools-given",
              `Any use of optional tools given through the site is solely at your own risk and discretion, and you should verify that you are acquainted with and approve of the conditions under which the tools are supplied by the relevant third-party supplier(s).`
            )}
          </Text>
          <Text mb={4}>
            {t(
              "terms:you-understand-and-agree-that-we-provide",
              `You understand and agree that we provide access to such tools "as is" and "as available," without any warranties, representations, or terms of any kind, and without any endorsement. We will have no liability resulting from or related to your use of optional third-party tools.`
            )}
          </Text>
          <Text mb={4}>
            {t(
              "terms:we-may-potentially-add-additional-services",
              `We may potentially add additional services and/or features to the website in the future (including, the release of new tools and resources). Such additional features and/or services will likewise be subject to these Terms of Service.`
            )}
          </Text>
        </Box>
        <Box mb={10}>
          <Heading as="h4" size="md" mb={4}>
            {t("terms:prohibited-usage", `Prohibited Usage`)}
          </Heading>
          <Text mb={4}>
            {t(
              "terms:you-are-not-permitted-to-use-the-site",
              `You are not permitted to use the site or its content to (a) infringe upon or violate our intellectual property rights or the intellectual property rights of others; (b) to violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances; (c) to solicit others to perform or participate in any unlawful acts; or (d) for any unlawful purpose e)spam, phishing, pharming, pretexting, spidering, crawling, or scraping;  (f) to collect or track the personal information of others; (g) to upload or transmit viruses or any other type of malicious code that will or may be used to affect the functionality or operation of the Service or any related website, other websites, or the Internet; or (h) for any obscene or immoral purpose. (i) providing inaccurate or misleading information,
              If you violate any of the prohibited uses, we retain the right to discontinue your use of the Service on our site. 
              `
            )}
          </Text>
        </Box>
        <Box mb={10}>
          <Heading as="h4" size="md" mb={4}>
            {t("terms:termination", `Termination`)}
          </Heading>
          <Text mb={4}>
            {t(
              "terms:for-all-purposes-the-parties-responsibilities-and-liabilities",
              `For all purposes, the parties' responsibilities and liabilities accrued prior to the termination date shall survive the termination of this agreement.`
            )}
          </Text>
          <Text mb={4}>
            {t(
              "terms:these-terms-of-Service-will-remain-in-effect-until-you-or-we-cancel-them",
              `These Terms of Service will remain in effect until you or we cancel them. You may terminate these Terms of Service at any time by telling us that you no longer desire to utilize our Services or by ceasing usage of our website.`
            )}
          </Text>
          <Text mb={4}>
            {t(
              "terms:if-you-fail-or-we-believe-you-have-failed-to-comply",
              `If you fail, or we believe you have failed to comply with any term or condition of these Terms of Service, we may terminate this agreement at any time without notice, you will remain liable for all sums owed up to and including the date of termination.`
            )}
          </Text>
        </Box>
        <Box mb={10}>
          <Heading as="h4" size="md" mb={4}>
            {t(
              "terms:terms-of-service-modifications",
              `Terms of service modifications`
            )}
          </Heading>
          <Text mb={4}>
            {t(
              "terms:you-can-review-the-most-recent-version-of-the-terms-of-service",
              `You can review the most recent version of the Terms of Service at any time by visiting this page.`
            )}
          </Text>
          <Text mb={4}>
            {t(
              "terms:we-retain-the-right-at-our-sole-discretion",
              `We retain the right, at our sole discretion, to update, amend, or replace any section of these Terms of Service by publishing updates and modifications to our website. You must check our website for updates regularly. Your continued use of or access to our website or the Service following the publication of any modifications to these Terms of Service indicates acceptance of such changes.`
            )}
          </Text>
        </Box>
      </Container>
    </main>
  );
}

export default TermsOfServicePage;
