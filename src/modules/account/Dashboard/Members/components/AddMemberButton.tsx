import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const AddMemberButton = ({
  title,
  subtitle,
  onClick = (e: any) => {},
}: {
  title: string;
  subtitle: string;
  onClick?: (e: any) => void;
}) => {
  const memberStatWidth = 100 / 3;
  const memberMdStatWidth = 100 / 2;
  return (
    <Box
      //   h={"max-content"}
      w={["full", "full", memberStatWidth]}
      p={[6]}
      borderColor={"brand.300"}
      borderWidth={1}
      flexGrow={1}
      onClick={onClick}
      cursor={"pointer"}
    >
      <Flex>
        <Box bg={"brand.300"} p={4}>
          <AiOutlinePlus size={24} color={"white"} />
        </Box>
        <Box ml={[4]} my={"auto"}>
          <Text fontWeight={"bold"}>{title}</Text>
          <Text>{subtitle}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default AddMemberButton;