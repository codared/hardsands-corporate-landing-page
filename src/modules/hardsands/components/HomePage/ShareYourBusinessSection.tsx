import { Flex, VStack, Heading, Box, Image, Text } from "@chakra-ui/react";
import HardsandLink from "components/HardsandsLink";
import { Parallax } from "react-scroll-parallax";
import useBreakpoint from "styles/useBreakpoint";

// Images
import ShareImage from "design/svg/share_links.png";

const ShareYourBusinessSection = () => {
  const { isLargerThan425: isLessThan425 } = useBreakpoint("max-width");

  return (
    <Flex
      w="full"
      h={["fit-content"]}
      p={[5, 20]}
      position="relative"
      direction={["column", "column", "row"]}
      mt={[40, 0]}
    >
      <Parallax speed={isLessThan425 ? 0 : -5}>
        <Image src={ShareImage.src} alt="share" />
      </Parallax>

      <VStack
        justifyContent="center"
        flexBasis={["100%", "50%"]}
        alignItems="flex-start"
        ml={[0, 0, 40]}
        my={[20]}
        zIndex="1"
      >
        <Heading mb={10}>
          Share your business information with{" "}
          <Box as="span" color="brand.300">
            SWAG
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
            bg: "white",
            color: "black",
          }}
          w={["100%", "fit-content"]}
        >
          Buy Your Card
        </HardsandLink>
      </VStack>
    </Flex>
  );
};

export default ShareYourBusinessSection;
