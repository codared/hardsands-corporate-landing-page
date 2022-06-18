import { Flex, Heading, HStack, Image, Text } from "@chakra-ui/react";
import HardsandLink from "components/HardsandsLink";
import { Parallax } from "react-scroll-parallax";
import HeroImage from "design/svg/vector_backdrop_noise_bg.png";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <Flex
      w="full"
      h={["fit-content", "fit-content", "92vh"]}
      p={[0, 20]}
      position="relative"
    >
      <Flex direction="column">
        <Image
          position="absolute"
          top={-20}
          left={0}
          zIndex="-5"
          src={HeroImage.src}
          alt="hero image hardsands"
        />
        <Image
          position="absolute"
          bottom={[-32, 0]}
          right={[0, 0, -20]}
          w={["100%", 950]}
          zIndex="-5"
          src="https://res.cloudinary.com/dcbqn1c10/image/upload/v1654987898/4_xfmdkj.png"
          alt="hero image hardsands"
        />
        <Parallax speed={-10} style={{ padding: "20px" }}>
          <Heading fontSize={["5xl", "6xl"]} my={["40px", "90px"]}>
            {t("home:hero:all-in-one-business", "All in One Business")}
            <br />
            <Text fontSize={["3rem", "4rem"]} color={["white"]}>
              {t("home:hero:cards", "Cards")}
            </Text>
            {t("home:hero:powered-by-technology", "Powered By Technology")}
          </Heading>
        </Parallax>
        <HStack p={5} mt={["50px", 0]}>
          <HardsandLink
            fontSize={"lg"}
            fontWeight={500}
            color={"white"}
            bg={"black"}
            href={"#"}
            p={["12px 16px", "12px 46px"]}
            border="1px solid black"
            borderRadius="8px"
            textAlign="center"
            transition="all 200ms ease-in"
            _hover={{
              bg: "white",
              color: "black",
            }}
            w={["100%", "fit-content"]}
          >
            Design Your Card
          </HardsandLink>
          <HardsandLink
            fontSize={"lg"}
            fontWeight={500}
            color={"black"}
            bg={"white"}
            href={"#"}
            p={["12px 16px", "12px 46px"]}
            border="1px solid black"
            borderRadius="8px"
            textAlign="center"
            transition="all 200ms ease-in"
            _hover={{
              color: "black",
            }}
            w={["100%", "fit-content"]}
          >
            Learn More
          </HardsandLink>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default HeroSection;
