import {
  Flex,
  VStack,
  Heading,
  Box,
  Image,
  Text,
  Container,
  Button,
} from "@chakra-ui/react";
import useBreakpoint from "styles/useBreakpoint";

// Translation
import { useTranslation } from "react-i18next";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import HardsandsButton from "components/HardsandsButton";
import { BsHandbag } from "react-icons/bs";

const PreviousDesignedCardSection = () => {
  const { t } = useTranslation();
  const { isLargerThan425: isLessThan425 } = useBreakpoint("max-width");

  return (
    <Box bgColor="brand.10">
      <Container maxWidth={"7xl"}>
        <Flex flexDirection={"column"} py={[12]}>
          <Box textAlign={"center"}>
            <Heading
              mb={[2]}
              color={"brand.300"}
              textTransform={"uppercase"}
              fontSize={32}
            >
              {t(
                "common:check-some-of-our-clients-design",
                "Check some of our Client’s Design"
              )}
            </Heading>
            <Text>
              {t(
                "common:examples-of-previously-designed-cards",
                "Here are examples of previously designed cards on our platform."
              )}
            </Text>
          </Box>
          <Flex justifyContent={"center"} mt={14}>
            <VStack>
              <Flex>
                <Flex alignItems={"center"}>
                  <Button
                    variant={"ghost"}
                    _hover={{ color: "brand.300", bgColor: "unset" }}
                  >
                    <BsArrowLeft size={34} />
                  </Button>
                </Flex>
                <Image
                  src={
                    "https://res.cloudinary.com/dtumqh3dd/image/upload/v1657205110/hardsands/Rectangle_213_epjh2x.svg"
                  }
                  alt={`Picture of previous designed card`}
                  objectFit="cover"
                />
                <Flex alignItems={"center"}>
                  <Button
                    variant={"ghost"}
                    _hover={{ color: "brand.300", bgColor: "unset" }}
                  >
                    <BsArrowRight size={34} />
                  </Button>
                </Flex>
              </Flex>
              <Flex justify={"space-between"} direction="row" w="75%">
                <HardsandsButton
                  // @ts-ignore
                  border="none"
                  fontSize={"xs"}
                  bg={"black"}
                  color="brand.300"
                  w="100%"
                  p={["12px 16px"]}
                  textAlign="center"
                  _hover={{
                    bg: "black",
                    color: "brand.300",
                  }}
                  iconMargin="20px"
                  Icon={null}
                >
                  {t("common:flip", "Flip")}
                </HardsandsButton>
                <Box height={3} width={3} />
                <HardsandsButton
                  // @ts-ignore
                  border="1px solid black"
                  fontSize={"xs"}
                  bg={"transparent"}
                  color="brand.300"
                  w="100%"
                  p={["12px 16px"]}
                  textAlign="center"
                  _hover={{
                    bg: "black",
                    color: "brand.300",
                  }}
                  iconMargin="20px"
                >
                  {t("common:customize-yours", "Customize yours")}
                </HardsandsButton>
              </Flex>
            </VStack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default PreviousDesignedCardSection;
