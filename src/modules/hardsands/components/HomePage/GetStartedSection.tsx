import { Box, Container, Flex, Heading, Text, Image } from "@chakra-ui/react";
import HardsandsButton from "components/HardsandsButton";
import { useTranslation } from "react-i18next";

const GetStartedSection = () => {
  const { t } = useTranslation();

  return (
    <Box
      backgroundImage={
        "https://res.cloudinary.com/dtumqh3dd/image/upload/v1657221490/hardsands/Rectangle_215_jiq6vr.svg"
      }
      // backgroundAttachment="fixed"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      width={["100%"]}
      px={[4, 20, 20]}
      mt={10}
      py={[20, 20, 0]}
    >
      <Container maxWidth={"7xl"}>
        <Flex justifyContent={"center"}>
          <Flex justifyContent="center" flexDirection={"column"}>
            <Heading color="brand.300" mb={10}>
              {t("common:call-to-action:a-single-card", "A Single Card")}
              <br />
              {t("common:call-to-action:for-life", "For Life")}
            </Heading>
            <Text width={['full', 550]} fontSize={20} mb={10}>
              {t(
                "common:call-to-action:got-a-promotion-relocated-offices",
                `Got a promotion, relocated offices, or changed your phone number? Printing new business cards is typically required. Not anymore.
                With hardsands, you can update all your details yourself, and the next time you tap your NFC business card on any smartphone, your new info will appear.`
              )}
            </Text>
            <HardsandsButton>
              {t("common:buy-now", "Buy Now")}
            </HardsandsButton>
          </Flex>
          <Box width={20} />
          <Box width={350} position="relative" display={['none', 'none', 'block']}>
            <Image
              src="https://res.cloudinary.com/dtumqh3dd/image/upload/v1657229753/samples/people/close-up-portrait-attractive-young-woman-isolated_1_n1hwgo.svg"
              alt="images"
              zIndex={1}
              position="relative"
            />
            <Image
              src="https://res.cloudinary.com/dtumqh3dd/image/upload/v1657229709/samples/people/close_up_downloading_gzekvd.svg"
              alt="images"
              zIndex={0}
              position="absolute"
              bottom={0}
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default GetStartedSection;
