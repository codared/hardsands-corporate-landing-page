import {
  Flex,
  VStack,
  Heading,
  HStack,
  SimpleGrid,
  Box,
  Text,
} from "@chakra-ui/react";
import { Parallax } from "react-scroll-parallax";
import useBreakpoint from "styles/useBreakpoint";
import { SIMPLE_STEPS } from "./constants";
import BackdropImage from "design/svg/backdrop.png";
import Vectorbg from "design/svg/vector_bg.svg";

const TakeControlSection = () => {
  const { isLargerThan425: isLessThan425 } = useBreakpoint("max-width");

  return (
    <Flex
      w="full"
      h={["fit-content", "fit-content", "92vh"]}
      p={[0, 20]}
      position="relative"
      backgroundImage={BackdropImage.src}
      backgroundSize={"contain"}
      backgroundPosition={"center center"}
      backgroundRepeat="no-repeat"
      flexDir="column"
    >
      <Parallax speed={isLessThan425 ? 0 : -5}>
        <VStack justifyContent="center">
          <Heading fontSize={[38, 48]}>Take Control</Heading>
          <Text>In just 3 simple steps</Text>
        </VStack>
        <HStack justifyContent="center" my={26}>
          <SimpleGrid columns={[1, 2, 3]} spacing={[1, 1, 3]}>
            {SIMPLE_STEPS.map((item) => (
              <Box
                key={item.title}
                w={[400, 300, 400]}
                height={[400, 300, 400]}
                backgroundImage={Vectorbg.src}
                backgroundSize={"contain"}
                backgroundPosition={"center center"}
                backgroundRepeat="no-repeat"
              >
                <VStack
                  h="100%"
                  color="white"
                  justifyContent="center"
                  alignItems="center"
                  textAlign="center"
                >
                  <Box
                    p={2}
                    borderRadius="50px"
                    bg="rgba(255, 255, 255, 0.5)"
                    transform={["scale(1)", "scale(1.5)", "scale(2)"]}
                  >
                    <item.icon color="white" />
                  </Box>
                  <Heading
                    mt={[
                      "50px !important",
                      "30px !important",
                      "50px !important",
                    ]}
                    mb="10px !important"
                  >
                    {item.title}
                  </Heading>
                  <Text mx="40px !important">{item.subTitle}</Text>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </HStack>
      </Parallax>
    </Flex>
  );
};

export default TakeControlSection;
