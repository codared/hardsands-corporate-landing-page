import { Box, Flex, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const AddMemberButton = ({
  title,
  subtitle,
  onClick = (e: any) => {},
  width = 100 / 3,
}: {
  title: string;
  subtitle: string;
  onClick?: (e: any) => void;
  width?: number;
}) => {
  return (
    <Box
      w={["full", "full", width]}
      p={[6]}
      borderColor={"brand.300"}
      borderWidth={1}
      flexGrow={1}
      onClick={onClick}
      cursor={"pointer"}
    >
      <Flex>
        <HStack bg={"brand.300"} p={4}>
          <AiOutlinePlus size={24} color={"white"} />
        </HStack>
        <Box ml={[4]} my={"auto"}>
          <Text fontWeight={"bold"}>{title}</Text>
          <Text>{subtitle}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default AddMemberButton;
