import { Flex, Box, Heading, Text, Stack, Avatar } from "@chakra-ui/react";
import HardsandsButton from "components/HardsandsButton";
import Story from "modules/StoryPlayer";
import React, { ReactElement } from "react";
import { useTranslation } from "react-i18next";

function PageHeader({
  title,
  subTitle,
  buttonHref = "/",
  type = "light",
  size = "small",
  showProfile,
  buttonText = "Buy Now",
  bgImage = "https://cdn.shopify.com/s/files/1/0559/0407/5843/files/2Q7A6845_-_low.jpg?v=1670370869",
  showStory = false,
}: {
  title: string;
  size?: string;
  subTitle: string | ReactElement;
  buttonHref: string;
  type: string;
  buttonText: string;
  bgImage: string;
  showProfile?: any;
  showStory?: boolean;
}) {
  const { t } = useTranslation();
  const isLight = type === "light";

  return (
    <>
      {showStory && (
        <Box
          w={["100%"]}
          display={["block", "block", "none"]}
          mr={[10]}
        >
          <Story />
        </Box>
      )}
      <Flex
        py={[120, 40]}
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
        <Flex
          zIndex={1}
          maxW={["full", "60%", size === "small" ? "40%" : "60%"]}
          alignItems={"center"}
        >
          <Box
            w={["100%"]}
            h={"fit-content"}
            color={isLight ? "white" : "inherit"}
          >
            <Heading size={"2xl"}>{title}</Heading>
            {typeof subTitle === "string" ? (
              <Text my={[6]}>{subTitle}</Text>
            ) : (
              title
            )}
            {!!showProfile && (
              <Stack my={6} direction={"row"} spacing={4} align={"center"}>
                <Avatar
                  src={showProfile.image}
                  // @ts-ignore
                  alt={`Author - ${showProfile.author}`}
                />
                <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                  <Text fontWeight={600}>{showProfile.author}</Text>
                  <Text color={"gray.400"}>
                    {showProfile.date} · {showProfile.minRead}
                  </Text>
                </Stack>
              </Stack>
            )}
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
          {showStory && (
            <Box
              position={"absolute"}
              w={["100%", "100%", "50%"]}
              display={["none", "none", "block"]}
              right={0}
              mr={[10]}
            >
              <Story />
            </Box>
          )}
        </Flex>
      </Flex>
    </>
  );
}

export default PageHeader;
