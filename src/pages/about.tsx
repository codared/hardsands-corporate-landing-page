import WithLayout from "components/WithLayout";
import type { NextPage } from "next";
import { Box, Heading, Flex, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import HardsandsButton from "components/HardsandsButton";

const About: NextPage = () => {
  const { t } = useTranslation();
  return (
    <WithLayout pageTitle="About Us - Hardsands">
      <Flex
        pt="6rem"
        flexDir={["column-reverse", "row"]}
        justify="center"
        w={"50%"}
        m={"0 auto"}
        mb={20}
      >
        <Box>
          <Heading fontSize="5xl" fontWeight="bolder" mb="1.5rem">
            {t("about-us:about-hardsands", "About Hardsands")}
          </Heading>
          <Flex fontFamily={"MADE Outer sans"} fontSize="2xl" mb="1.5rem">
            <Text>
              {t(
                "about-us:share-your-business",
                "Share your business information with"
              )}
            </Text>
            <br />
            <Text
              as="span"
              display="block"
              textTransform="uppercase"
              color="brand.300"
              ml={2}
            >
              {t("about-us:swag", "SWAG")}
            </Text>
          </Flex>
          <Text mb="40px" maxW="100%">
            {t(
              "about-us:digital-business-cards",
              `Digital business cards are the new wave of business cards. They are
            more versatile, easier to store, and more eco-friendly than
            traditional business cards. And, at Hardsands, we are proud to offer
            the best digital business cards on the market.`
            )}
          </Text>
          <Text mb="40px" maxW="100%">
            {t(
              "about-us:our-team-is-comprised-of-experienced-professionals",
              `Our team is comprised of experienced professionals who are passionate about delivering the best possible product to our customers. We use cutting-edge technology to create digital business cards that are both stylish and functional.`
            )}
          </Text>
          <Text mb="40px" maxW="100%">
            {t(
              "about-us:we-believe-that-first-impressions-are-everything",
              `We believe that first impressions are everything, and that's why we're dedicated to helping businesses make the best possible impression with our high-quality, stylish business cards. And, most importantly, we offer a 100% satisfaction guarantee so that you can be sure you're making the best investment for your business.`
            )}
          </Text>
          <Text mb="40px" maxW="100%">
            {t(
              "about-us:so-why-wait",
              `So why wait? Get started today and see the difference that our digital business cards can make for your business.`
            )}
          </Text>
          <HardsandsButton>
            {t("about-us:buy-your-card", "Buy Your Card")}
          </HardsandsButton>
        </Box>
      </Flex>
    </WithLayout>
  );
};

export default About;
