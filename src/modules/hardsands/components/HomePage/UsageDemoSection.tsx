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

const UsageDemoSection = ({ horizontal }: { horizontal?: boolean }) => {
  const { t } = useTranslation();
  const { isLargerThan425: isLessThan425 } = useBreakpoint("max-width");
  const STEPS = getSteps(t);

  return (
    <Box
      bg={horizontal ? "black" : "unset"}
      py={[10, 20]}
      backgroundImage={
        "https://res.cloudinary.com/dtumqh3dd/image/upload/v1657261446/hardsands/background_vector_dq6aud.svg"
      }
      backgroundRepeat="no-repeat"
      backgroundSize={"cover"}
      color={horizontal ? "white" : "black"}
    >
      <Container maxWidth={"7xl"}>
        <Flex flexDirection={"column"} py={[10]}>
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
          <Flex
            my={14}
            flexDirection={horizontal ? ["column"] : ["column", "row"]}
          >
            {!horizontal && (
              <Image
                width={["100%", "50%", "50%"]}
                alignSelf={["center", "unset"]}
                height="fit-content"
                src={
                  "https://cdn.shopify.com/s/files/1/0559/0407/5843/files/instruct.gif?v=1667851702"
                }
                alt="how to images"
                zIndex={1}
                mb={10}
                mr={[0, 10]}
              />
            )}
            <Flex
              justifyContent="center"
              flexBasis={horizontal ? ["100%"] : ["100%", "50%"]}
              alignItems="flex-start"
              zIndex={1}
              flexDirection={horizontal ? ["column", "row"] : ["column"]}
            >
              {STEPS.map(({ step, title, instruction }) => (
                <Box
                  mb={horizontal ? [10, "unset"] : "2.5rem !important"}
                  key={title}
                  mx={2}
                  textAlign={horizontal ? "center" : "start"}
                  maxW={horizontal ? ["100%", 250] : "unset"}
                >
                  <Text fontWeight={"bolder"} fontSize={20} mb={4}>
                    {step} {title}
                  </Text>
                  <Text fontSize={16}>{instruction}</Text>
                </Box>
              ))}
              <HardsandsButton
                // @ts-ignore
                alignSelf={["center", "unset"]}
                display={horizontal ? "none" : "flex"}
                border="1px solid brand.100"
                bg={"brand.100"}
                color="black"
                _hover={{
                  bg: "transparent",
                  color: "black",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: "brand.200",
                }}
              >
                {t("common:buy-now", "Buy Now")}
              </HardsandsButton>
            </Flex>
          </Flex>
          <HardsandsButton
            // @ts-ignore
            alignSelf={["center"]}
            display={horizontal ? "flex" : "none"}
            borderWidth="1px"
            borderStyle="solid"
            borderColor="brand.100"
            bg={"brand.100"}
            color="black"
            _hover={{
              bg: "transparent",
              color: "black",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "brand.200",
            }}
          >
            {t("common:buy-now", "Buy Now")}
          </HardsandsButton>
        </Flex>
      </Container>
    </Box>
  );
};

export default UsageDemoSection;
