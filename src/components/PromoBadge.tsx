import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const PromoBadge = ({ text }: { text: string }) => {
  return (
    <Flex
      bgColor={"orange.500"}
      textTransform={"uppercase"}
      color={"white"}
      w={100}
      h={100}
      zIndex={1}
      // rounded="full"
      roundedBottom="full"
      justifyContent={"center"}
      alignItems={"center"}
      position={"absolute"}
      top={0}
      left={0}
    >
      <Text>{text}</Text>
    </Flex>
  );
};

export default PromoBadge;
