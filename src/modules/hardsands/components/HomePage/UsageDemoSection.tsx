import {
  Flex,
  VStack,
  Heading,
  Box,
  Image,
  Text,
  Container,
} from "@chakra-ui/react";
import useBreakpoint from "styles/useBreakpoint";
import HardsandsButton from "components/HardsandsButton";
import { useTranslation } from "react-i18next";
import { getSteps } from "./constants";

const UsageDemoSection = () => {
  const { t } = useTranslation();
  const { isLargerThan425: isLessThan425 } = useBreakpoint("max-width");
  const STEPS = getSteps(t);

  return (
    <Container maxWidth={"7xl"}>
      <Flex
        flexDirection={"column"}
        py={[10]}
        backgroundImage={
          "https://res.cloudinary.com/dtumqh3dd/image/upload/v1657261446/hardsands/background_vector_dq6aud.svg"
        }
        backgroundRepeat="no-repeat"
        backgroundSize={"contain"}
      >
        <Box textAlign={"center"}>
          <Heading
            mb={[2]}
            color={"brand.300"}
            textTransform={"uppercase"}
            fontSize={32}
          >
            {t("common:how-it-works", "How it works")}
          </Heading>
          <Text>
            {t(
              "common:going-contactless",
              "Going contactless is as easy as this!"
            )}
          </Text>
        </Box>
        <Flex flexDirection={["column", "row"]}>
          <Image
            width={[300, 300, "auto"]}
            alignSelf={["center", "unset"]}
            height="fit-content"
            src={
              "https://res.cloudinary.com/dtumqh3dd/image/upload/v1657211480/hardsands/Rectangle_214_j9mzoe.svg"
            }
            alt="how to images"
            zIndex={1}
          />
          <VStack
            justifyContent="center"
            flexBasis={["100%", "50%"]}
            alignItems="flex-start"
            zIndex={1}
          >
            {STEPS.map(({ step, title, instruction }) => (
              <Box mb={"2.5rem !important"} key={title}>
                <Text fontWeight={"bolder"} fontSize={20}>
                  {step} {title}
                </Text>
                <Text fontSize={16}>{instruction}</Text>
              </Box>
            ))}
            {/* @ts-ignore */}
            <HardsandsButton alignSelf={["center", "unset"]}>
              {t("common:get-started", "Get Started")}
            </HardsandsButton>
          </VStack>
        </Flex>
      </Flex>
    </Container>
  );
};

export default UsageDemoSection;
