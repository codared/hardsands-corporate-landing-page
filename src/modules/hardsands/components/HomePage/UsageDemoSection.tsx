import { Flex, VStack, Heading, Box, Image, Text } from "@chakra-ui/react";
import HardsandLink from "components/HardsandsLink";
import NoiseBg from "design/svg/noise_bg.png";
import VideoImage from "design/svg/video.png";
import WordLogo from "design/svg/hardsands_word_logo.svg";
import useBreakpoint from "styles/useBreakpoint";

const UsageDemoSection = () => {
  const { isLargerThan425: isLessThan425 } = useBreakpoint("max-width");

  return (
    <Flex
      w="full"
      h={["fit-content"]}
      p={[5, 5, 20]}
      py={[50]}
      mt={[40, 0]}
      position="relative"
      backgroundImage={NoiseBg.src}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
      backgroundRepeat="no-repeat"
      flexDirection={["column-reverse", "row", "row"]}
      justify="space-between"
      alignItems="center"
    >
      <Image
        ml={[0, 0, 50]}
        my={[10, 20]}
        width={[300, 300, "auto"]}
        height="fit-content"
        src={VideoImage.src}
        alt="share"
        zIndex={1}
      />
      <VStack
        justifyContent="center"
        flexBasis={["100%", "50%"]}
        alignItems="flex-start"
        ml={[0, 0, 40]}
        my={[20]}
        zIndex={1}
      >
        <Heading mb={10}>
          Full & Autonomous Control Over Your{" "}
          <Box as="span" color="brand.300">
            Business Card
          </Box>
        </Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>

        <HardsandLink
          mt="2.5rem !important"
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
            bg: "transparent",
            color: "black",
          }}
          w={["100%", "fit-content"]}
        >
          Design Your Card
        </HardsandLink>
      </VStack>
      {!isLessThan425 && (
        <Image
          src={WordLogo.src}
          alt="backdrop"
          position="absolute"
          bottom={28}
          right="-500px"
          opacity={0.2}
          transform="scale(1.8)"
          zIndex={0}
        />
      )}
    </Flex>
  );
};

export default UsageDemoSection;
