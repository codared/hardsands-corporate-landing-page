import {
  Flex,
  Heading,
  Box,
  Text,
  Container,
  Image,
  Spacer,
  Button,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import useBreakpoint from "styles/useBreakpoint";

const ReviewSection = () => {
  const { t } = useTranslation();
  const { isLargerThan425: isLessThan425 } = useBreakpoint("max-width");

  return (
    <Container maxWidth={"7xl"}>
      <Flex flexDirection={"column"} py={[10]} overflowX="hidden">
        <Box textAlign={"center"}>
          <Heading
            mb={[2]}
            color={"brand.300"}
            textTransform={"uppercase"}
            fontSize={32}
          >
            {t(
              "common:what-people-are-saying-about-us",
              "what people are saying about us"
            )}
          </Heading>
          <Text>
            {t(
              "common:join-the-growing-number-of-people-using-hardsands",
              "Join the growing number of people using Hardsands to experience modern networking."
            )}
          </Text>
        </Box>
        <Flex mt={10} flexDirection="column">
          <Flex justifyContent={"flex-end"} mb={5}>
            <Button
              variant={"ghost"}
              _hover={{ color: "brand.300", bgColor: "unset" }}
            >
              <BsArrowLeft size={34} />
            </Button>
            <Button
              variant={"ghost"}
              _hover={{ color: "brand.300", bgColor: "unset" }}
            >
              <BsArrowRight size={34} />
            </Button>
          </Flex>
          <Flex justifyContent={"center"}>
            <Box
              backgroundImage={
                "https://res.cloudinary.com/dtumqh3dd/image/upload/v1657221490/hardsands/Rectangle_215_jiq6vr.svg"
              }
              // backgroundAttachment="fixed"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              width={["100%", "70%"]}
              height={380}
              p={20}
              pb={0}
            >
              <Flex flexDirection={"row"}>
                <Box
                  minWidth={300}
                  w={300}
                  height={300}
                  backgroundImage={
                    "https://res.cloudinary.com/dtumqh3dd/image/upload/v1655392773/samples/people/boy-snow-hoodie.jpg"
                  }
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  borderTopRightRadius="50%"
                  borderTopLeftRadius="50%"
                ></Box>
                <Flex flexDirection={"column"} ml={20} mt={10}>
                  <Text mb={5}>
                    {t(
                      "review:customer-review",
                      "“One of the very best platforms I have ever used. The delivery was super fast and the card was everything I wanted and more.”"
                    )}
                  </Text>
                  <Box mb={5}>
                    <Image
                      src="https://res.cloudinary.com/dtumqh3dd/image/upload/v1657235282/samples/people/Frame_137_jbhct0.svg"
                      alt="ratings stars"
                    />
                  </Box>
                  <Text fontWeight="bolder">
                    {t("review:customer-name", "MARCUS RASHFORD")}
                  </Text>
                </Flex>
              </Flex>
            </Box>
            <Box width={20} />
            <Box
              backgroundImage={
                "https://res.cloudinary.com/dtumqh3dd/image/upload/v1657221490/hardsands/Rectangle_215_jiq6vr.svg"
              }
              // backgroundAttachment="fixed"
              width={["100%", "20%"]}
              height={380}
              p={10}
              pb={0}
              position="relative"
            >
              <Flex flexDirection={"row"} position="absolute" bottom={0}>
                <Box
                  minWidth={170}
                  w={170}
                  height={170}
                  backgroundImage={
                    "https://res.cloudinary.com/dtumqh3dd/image/upload/v1655392773/samples/people/boy-snow-hoodie.jpg"
                  }
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  borderTopRightRadius="50%"
                  borderTopLeftRadius="50%"
                ></Box>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default ReviewSection;
