import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const PromoBadge = ({ text }: { text: string }) => {
  return (
    <Flex
      bgColor={"orange.500"}
      textTransform={"uppercase"}
      color={"white"}
      w={82}
      h={82}
      zIndex={1}
      roundedBottom="full"
      justifyContent={"center"}
      alignItems={"center"}
      position={"absolute"}
      top={0}
      left={0}
    >
      <Text fontSize={12}>{text}</Text>
    </Flex>
  );
};

export default PromoBadge;
