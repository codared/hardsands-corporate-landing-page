import {
  Container,
  Box,
  Image,
  Flex,
  Text,
  Heading,
  Grid,
  VStack,
  HStack,
  Center,
} from "@chakra-ui/react";
import DesktopNav from "components/layout/Navigation/DesktopNav";
import { hardsandsIconLogo, hardsandsTextLogo } from "design";
import HardsandLogo from "design/svg/hardsands_word_logo.svg";
import HardsandLink from "components/HardsandsLink";
import HardsandsButton from "components/HardsandsButton";
import productRoutes from "modules/products/routes";
import { HappyConfidentProfessionalTeam } from "assets/index";
import HardsandIconLogo from "design/svg/hardsands_icon_logo.svg";
import { Span } from "@sentry/tracing";

const Corporate = () => {
  return (
    <Box overflow="hidden">
      {/* //  width="1508px" height="887px" ml="20px"> */}
      <HStack>
        <Box width="226px" height="49px" mt={6} ml={49} mr={221}>
          <HardsandLink href="/">
            <Flex align="center">
              <Image
                w="46px"
                h="46px"
                src={hardsandsIconLogo.src}
                alt="hardsands Icon logo"
                display={["none", "none", "flex"]}
              />
              <Image
                w="168px"
                h="15px"
                ml="11px"
                src={HardsandLogo.src}
                alt="hardsands Icon logo"
                display={["none", "none", "flex"]}
              />
            </Flex>
          </HardsandLink>
        </Box>
        <Box>
          <Flex color="black" marginTop="38px">
            <DesktopNav />
          </Flex>
        </Box>
      </HStack>

      <Box
        w="1055px"
        h="678px"
        bg="#FEF8F3"
        mt="128px"
        ml="19px"
        border="1px"
        borderColor="#FEF8F3"
        position="absolute"
        zIndex={-400}
      />
      <Box
        display="flex"
        alignItems="center"
        w="100%"
        ml="125px"
        mt="20px"
        // zIndex={400}
      >
        <Box w="530px" h="635px" pt="45px">
          <Image
            src={HappyConfidentProfessionalTeam.src}
            alt={"happyconfidentprofessionalimage"}
            bg=""
          />
        </Box>
        <Box ml="90px">
          <Box w="668px" h="184px" mt="172px">
            <Text
              w="668px"
              fontSize="45px"
              fontWeight="500"
              lineHeight="60px"
              textTransform="capitalize"
            >
              <Text
                as="span"
                color="#DF9F71"
                fontWeight="500px"
                fontFamily={"MADE Outer sans Light"}
              >
                {" "}
                Empower your team to connect with
              </Text>
              <Text
                as="span"
                color="#160A01"
                fontWeight="500px"
                fontFamily={"MADE Outer sans Light"}
              >
                {" "}
                Our
                <br /> cutting-edge solution{" "}
              </Text>
            </Text>
          </Box>
          <Box w="697px" h="99px" mt="18px">
            <Text
              fontSize="20px"
              fontWeight="300"
              lineHeight="34px"
              textTransform="capitalize"
              fontFamily={"Campton"}
              color="#000"
            >
              Transform your team's communication game with our innovative
              platform. Amplify their outreach, foster stronger relationships,
              and realize newfound success.
            </Text>
          </Box>
          <Box w="258px" h="40px" mt="33px">
            <HardsandsButton
              // @ts-ignore
              textTransform={"uppercase"}
              href={productRoutes.products()}
              text={"START NOW"}
              w={"full"}
              fontFamily={"MADE Outer sans Light"}
              fontSize="16px"
              fontWeight="300"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Corporate;
