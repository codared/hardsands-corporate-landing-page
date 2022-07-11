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
      px={20}
      mt={10}
			py={[20, 10]}
    >
      <Container maxWidth={"7xl"}>
        <Flex justifyContent={"center"}>
          <Flex justifyContent="center" flexDirection={"column"}>
            <Heading color="brand.300" mb={10}>
              {t(
                "call-to-action:ready-to-get-started",
                "Ready to get started?"
              )}
              <br />
              {t(
                "call-to-action:click-here-to-get-your-card",
                "Click here to get your card"
              )}
            </Heading>
            <Text width={350} fontSize={20} mb={10}>
              {t(
                "call-to-action:design-your-card-the-way-you-want",
                "Design your card the way you want. Tap, share and connect."
              )}
            </Text>
            <HardsandsButton>
              {t("common:design-your-card", "Design Your Card")}
            </HardsandsButton>
          </Flex>
          <Box width={20} />
          <Box width={350} position="relative">
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
