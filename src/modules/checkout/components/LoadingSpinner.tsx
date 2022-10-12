import { Flex, Spinner, Box, Text } from "@chakra-ui/react";
import React from "react";
import { TFunction } from "react-i18next";

const LoadingSpinner = ({ text }: { text: string }) => {
  return (
    <Flex
      p={[20, 40]}
      flex={1}
      justifyContent={"center"}
      direction={"column"}
      alignItems={"center"}
      bg="rgba(255, 255, 255, .7)"
    >
      <Spinner size="xl" />
      <Box h={8} />
      <Text>{text}</Text>
    </Flex>
  );
};

export default LoadingSpinner;
