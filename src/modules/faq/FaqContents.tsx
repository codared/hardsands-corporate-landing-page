import { Box, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { MailtoInfoLink } from "modules/legal/MailtoInfoLink";
import React from "react";
import { useTranslation } from "react-i18next";

const FaqContents = () => {
  const { t } = useTranslation();

  const GeneralContent = [
    {
      title: t("faq:what-is-hardsands-card", "What is hardsands card?"),
      text: t(
        "faq:the-hardsands-cards-utilize-nfc-technology",
        "The hardsands Cards utilize NFC technology. We could think of them as highly functional business cards that are ideal for the modern age."
      ),
    },
    {
      title: t(
        "faq:how-do-hardsands-cards-and-epoxy-work",
        "How do hardsands cards and Epoxy work?"
      ),
      text: t(
        "faq:you-can-wirelessly-transmit",
        "You can wirelessly transmit your contact information or navigate visitors to your Website Landing Page, whatsapp, Social Media platforms, and so much more with a single tap on a smartphone or by scanning the personalized QR code!"
      ),
    },
    {
      title: t(
        "faq:where-should-i-place-my-hardsand-epoxy",
        "Where should I place my hardsand Epoxy?"
      ),
      text: t(
        "faq:images-displaying-where-a-epoxy-can-be-placed",
        "Images displaying where a Epoxy can be placed"
      ),
    },
    {
      title: t(
        "faq:can-i-get-a-hardsands-card",
        "Can I get a hardsands card with my own logo/branding?"
      ),
      text: t(
        "faq:we-are-not-allowing-customization",
        "No, we are not allowing customization for now."
      ),
    },
    {
      title: t(
        "faq:can-i-order-multiple-hardsands-cards-epoxy",
        "Can I order multiple hardsands cards Epoxy?"
      ),
      text: t("faq:yes-you-can", "Yes, You can."),
    },
    {
      title: t(
        "faq:what-surfaces-may-hardsand-epoxy-stick-to",
        "What surfaces may hardsand Epoxy stick to?"
      ),
      text: t(
        "faq:hardsands-epoxy-sticks-properly",
        "Hardsands Epoxy sticks properly to all case materials, with the exception of leather and some silicones.In these scenarios, we recommend placing the Epoxy underneath your case; hardsands Epoxy works through most case materials."
      ),
    },
    {
      title: t(
        "faq:is-there-a-monthly-fee",
        "Is there a monthly fee for using hardsands card or hardsands Epoxy?"
      ),
      text: t(
        "faq:no-there-arent-any-recurring-charges",
        "No, there aren't any recurring charges. It’s a one time payment only for the cards"
      ),
    },
    {
      title: t(
        "faq:is-it-necessary-for-the-receiver",
        "Is it necessary for the receiver to use a hardsand product or an app to receive my info?"
      ),
      text: t(
        "faq:no-the-other-person-does-not-need",
        "No! The other person does not need a Epoxy or app to receive your info"
      ),
    },
    {
      title: t(
        "faq:how-can-i-share-with-phones",
        "How can I share with phones that aren't compatible?"
      ),
      text: t(
        "faq:iphones-as-old-as-the-iPhone-6",
        "iPhones as old as the iPhone 6 and almost all Androids can use their camera to scan your Hardsands QR code. Your Hardsands QR code can be found at the back of your card or in your account dashboard."
      ),
    },
    {
      title: t(
        "faq:how-to-enable-nfc-on-an-android",
        "How to Enable NFC on an Android"
      ),
      text: t(
        "faq:on-some-android-phones",
        "On some Android phones, NFC may be disabled by default. Make sure NFC is enabled by searching for and turning on NFC in the settings."
      ),
    },
    {
      title: t(
        "faq:will-hardsand-epoxy-work-under-my-phone-case",
        "Will Hardsand Epoxy work under my phone case?"
      ),
      text: t("faq:yes", "Yes."),
    },
  ];

  const ShoppingContent = [
    {
      title: t(
        "faq:how-long-will-it-take-to-receive",
        "How long will it take to receive my hardsands product once I order it?"
      ),
      text: t(
        "faq:for-the-shipping-of-the-cards",
        "For the Shipping of the Cards Regular – 3-4 days within Lagos 6-8 days to the other states. Express – 1-2 days within Lagos 4-8  days to the other states This is only a rough estimate."
      ),
    },
    {
      title: t("faq:how-can-i-track-my-order", "How can I track my order?"),
      text: t(
        "faq:once-we-have-processed-your-order",
        "Once we have processed your order. We will update you together with the tracker via email."
      ),
    },
    {
      title: t("faq:hardsand-was-not-delivered", "Hardsand was not delivered."),
      text: t(
        "faq:there-are-occasions-when-your-shipment",
        "There are occasions when your shipment is marked delivered but does not arrive for another 24-48 hours. If your product has not arrived within this time range, please contact"
      ),
      hasMailtoLink: true,
    },
    {
      title: t("faq:whats-my-activation-code", "What’s my activation code?"),
      text: t(
        "faq:the-activation-code-is-a-6-digit-number",
        "The activation code is a 6-digit number necessary to activate your card; this activation code is provided to your email a day before your card arrives. No worries, you can always request for a resend after you receive your card."
      ),
    },
  ];

  const AfterReceivingContent = [
    {
      title: t("faq:how-can-i-contact-support", "How can I contact support?"),
      text: t(
        "faq:for-any-trouble-or-concerns-with-your-card",
        "For any trouble or concerns with your card, you can use this page: https://hardsands.com/support/ or email us at "
      ),
      hasMailtoLink: true,
    },
    {
      title: t(
        "faq:is-our-stored-information-secure",
        "Is our stored information secure?"
      ),
      text: t(
        "faq:yes–all-details-and-information-stored",
        "Yes, all details and information stored on our website are stored and secured"
      ),
    },
    {
      title: t(
        "faq:can-i-track-my-cards-performance",
        "Can I track my card’s performance?"
      ),
      text: t(
        "faq:yes-using-the–statistics-feature",
        "Yes, using the statistics feature on the account dashboard."
      ),
    },
  ];

  return (
    <Box>
      <Box mb={10}>
        <Heading as="h4" size="md" mb={4}>
          General
        </Heading>
        <UnorderedList>
          {GeneralContent.map((item) => (
            <ListItem key={item.title}>
              <Heading fontWeight={'lighter'} size="sm">{item.title}</Heading>
              <Text mb={4}>{item.text}</Text>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
      <Box mb={10}>
        <Heading as="h4" size="md" mb={4}>
          Shopping
        </Heading>
        <UnorderedList>
          {ShoppingContent.map((item) => (
            <ListItem key={item.title}>
              <Heading fontWeight={'lighter'} size="sm">{item.title}</Heading>
              <Text mb={4}>
                {item.text} {item.hasMailtoLink && <MailtoInfoLink />}
              </Text>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
      <Box mb={10}>
        <Heading as="h4" size="md" mb={4}>
          After Receiving Card
        </Heading>
        <UnorderedList>
          {AfterReceivingContent.map((item) => (
            <ListItem key={item.title}>
              <Heading fontWeight={'lighter'} size="sm">{item.title}</Heading>
              <Text mb={4}>
                {item.text}
                {item.hasMailtoLink && <MailtoInfoLink />}
              </Text>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </Box>
  );
};

export default FaqContents;
