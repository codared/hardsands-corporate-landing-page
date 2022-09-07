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
      py={[20, 0]}
    >
      <Container maxWidth={"7xl"}>
        <Flex justifyContent={"center"}>
          <Flex justifyContent="center" flexDirection={"column"}>
            <Heading color="brand.300" mb={10}>
              {t(
                "common:call-to-action:improve-your-networking",
                "Improve your networking"
              )}
              <br />
              {t(
                "common:call-to-action:with-hardsands.",
                "With Hardsands."
              )}
            </Heading>
            <Text width={350} fontSize={20} mb={10}>
              {t(
                "common:call-to-action:traditional-printed-business-cards-have-served-networking",
                `Traditional printed business cards have served networking over the years, but now it's time for digital to take over.
                Start with one of our NFC business cards to instantly improve your networking and stand out from the crowd.`
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
