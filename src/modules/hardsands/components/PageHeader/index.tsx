import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import HardsandsButton from "components/HardsandsButton";
import productRoutes from "modules/products/routes";
import React from "react";
import { useTranslation } from "react-i18next";

function PageHeader({
  title,
  subTitle,
  buttonHref = "/",
  type = "light",
  buttonText = "Buy Now",
  bgImage = "https://cdn.shopify.com/s/files/1/0559/0407/5843/files/2Q7A6845_-_low.jpg?v=1670370869",
}: {
  title: string;
  subTitle: string;
  buttonHref: string;
  type: string;
  buttonText: string;
  bgImage: string;
}) {
  const { t } = useTranslation();
  const isLight = type === "light";

  return (
    <Flex
      py={[10, 20]}
      px={[4, 10, 48]}
      // h={'100vh'}
      direction={["column", "row"]}
      bgImage={`url(${bgImage})`}
      bgRepeat={"no-repeat"}
      bgSize={["cover"]}
      bgPosition={["inherit", "center"]}
      position={"relative"}
    >
      {isLight && (
        <Box
          position={"absolute"}
          top={0}
          bottom={0}
          left={0}
          right={0}
          bg={isLight ? "rgba(0, 0, 0, 0.5)" : ""}
          zIndex={0}
        />
      )}
      <Flex zIndex={1} maxW={["full", "40%", "40%"]} alignItems={"center"}>
        <Box
          w={["100%"]}
          h={"fit-content"}
          color={isLight ? "white" : "inherit"}
        >
          <Heading size={"2xl"}>{title}</Heading>
          <Text my={[10]}>{subTitle}</Text>
          {isLight ? (
            <HardsandsButton
              // @ts-ignore
              w={"full"}
              href={buttonHref}
            >
              {buttonText}
            </HardsandsButton>
          ) : (
            <HardsandsButton
              // @ts-ignore
              w={"full"}
              href={buttonHref}
              // @ts-ignore
              bg={"black"}
              color={"brand.300"}
              _hover={{
                bg: "transparent",
                color: "black",
                borderColor: "black",
              }}
            >
              {buttonText}
            </HardsandsButton>
          )}
        </Box>
      </Flex>
    </Flex>
  );
}

export default PageHeader;
