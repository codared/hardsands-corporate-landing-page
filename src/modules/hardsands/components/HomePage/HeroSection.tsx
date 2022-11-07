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
      <Flex
        direction="column"
        alignItems={["center", "unset"]}
        justifyContent={["center", "start"]}
        px={[18]}
      >
        <Heading
          maxW={["100%", 600]}
          fontSize={["6xl", "7xl"]}
          my={["40px", "20px"]}
          textAlign={["center", "unset"]}
        >
          {t(
            "home:hero:share-your-info-with-a-single-tap",
            "Share your Info with a single tap"
          )}
        </Heading>
        <Text fontSize={24} maxW={500} textAlign={["center", "unset"]}>
          {t(
            "home:hero:the-only-business-card-youll-need-to-improve-your-networking",
            "The only business card you'll need to improve your networking"
          )}
        </Text>
        <HStack w={["100%"]} py={5} mt={["50px", 0]}>
          <HardsandsButton>Buy Now</HardsandsButton>
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
      <Flex margin={["0 auto", "unset"]} boxSize={['100%', 450, 650]}>
        <Image
          objectFit={"cover"}
          w={["100%"]}
          src="https://cdn.shopify.com/s/files/1/0559/0407/5843/files/instruct.gif?v=1667851702"
          alt="hero image hardsands"
        />
        {/* <Image
          objectFit={"cover"}
          w={["100%"]}
          src="https://cdn.shopify.com/s/files/1/0559/0407/5843/files/instruct_1.gif?v=1667851818"
          alt="hero image hardsands"
        /> */}
      </Flex>
    </Flex>
  );
};

export default HeroSection;
