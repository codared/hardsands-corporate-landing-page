import {
  Stack,
  Flex,
  Box,
  SimpleGrid,
  Icon,
  Text,
  Container,
  Heading,
} from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack textAlign={"center"} mb={10}>
      <Text minHeight={['unset', "72px"]} fontSize={"2xl"} fontWeight={600}>
        {title}
      </Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

const MoreThanABusinessCardSection = () => {
  const { t } = useTranslation();

  return (
    <Box py={[20, 20, 40]} px={[4, 20, 20]}>
      <Container maxWidth={"7xl"}>
        <Box textAlign={"center"} mb={10}>
          <Heading
            mb={[2]}
            color={"brand.300"}
            textTransform={"uppercase"}
            fontSize={32}
          >
            {t(
              "common:title:more-than-just-a-business-card",
              "More Than Just a Business Card"
            )}
          </Heading>
          <Text>
            {t(
              "common:title:more-than-just-a-business-card",
              "Improve your connections, create more leads, and increase your sales."
            )}
          </Text>
        </Box>
        <SimpleGrid columns={[1, 2, 4]} spacing={10}>
          <Feature
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            title={t(
              "common:title:share-your-contact-details",
              "Share Your Contact Details"
            )}
            text={t(
              "common:share-your-contact-details:text",
              "With a single tap, share your contact details (including your phone number), paying details & addresses, social media profiles, video links, and more."
            )}
          />
          <Feature
            icon={<Icon as={FcDonate} w={10} h={10} />}
            title={t("common:title:conversion-of-leads", "Conversion of leads")}
            text={t(
              "common:conversion-of-leads:text",
              "Instead of waiting to follow up, invite consumers to use your booking system or calendar and close the transaction right away."
            )}
          />
          <Feature
            icon={<Icon as={FcInTransit} w={10} h={10} />}
            title={t("common:title:digital-marketing", "Digital Marketing")}
            text={t(
              "common:digital-marketing:text",
              "Direct prospects to social media accounts, dedicated landing pages, and much more."
            )}
          />
          <Feature
            icon={<Icon as={FcInTransit} w={10} h={10} />}
            title={t("common:title:real-time-update", "Real-Time Update")}
            text={t(
              "common:real-time-update:text",
              "Save time and money by not having to buy new business cards every time your contact information changes. Simply modify your information in 5 seconds."
            )}
          />
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default MoreThanABusinessCardSection;
