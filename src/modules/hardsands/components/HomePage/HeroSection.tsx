import { Flex, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import HardsandsButton from "components/HardsandsButton";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <Flex
      w="full"
      h={["fit-content", "fit-content"]}
      // p={[0, 20]}
      px={[0, 20, 40]}
      py={[10, 20, 20]}
      position="relative"
      justify={"center"}
      bgColor="black"
      color="white"
      backgroundImage={
        "https://res.cloudinary.com/dtumqh3dd/image/upload/v1657261446/hardsands/background_vector_dq6aud.svg"
      }
      backgroundRepeat="no-repeat"
      backgroundSize={["cover"]}
      flexDirection={["column-reverse", "row"]}
    >
      <Flex direction="column" justifyContent={"start"} px={[18]}>
        <Heading maxW={600} fontSize={["5xl", "7xl"]} my={["40px", "20px"]}>
          {t(
            "home:hero:all-in-one-business",
            "All in One Business Card Powered By Technology"
          )}
        </Heading>
        <Text fontSize={24} maxW={500}>
          {t(
            "home:hero:go-cardless-with-hardsands",
            "Go cardless with hardsands NFC cards! Share your contact without limit"
          )}
        </Text>
        <HStack justifyContent={["center", "unset"]} py={5} mt={["50px", 0]}>
          <HardsandsButton>Get Started</HardsandsButton>
        </HStack>

        <Image
          mt={[10, 20]}
          opacity={0.8}
          objectFit={"cover"}
          w={["20%"]}
          src="https://res.cloudinary.com/dtumqh3dd/image/upload/v1657201644/hardsands/Group_1-svg_vxsefu.svg"
          alt="hero badge hardsands"
        />
      </Flex>
      <Flex boxSize={[350, 450, 650]}>
        <Image
          objectFit={"cover"}
          w={["100%"]}
          src="https://res.cloudinary.com/dtumqh3dd/image/upload/v1657202063/hardsands/4_tqi6h3.png"
          alt="hero image hardsands"
        />
      </Flex>
    </Flex>
  );
};

export default HeroSection;
