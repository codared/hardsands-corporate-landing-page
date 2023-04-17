import { Box, Flex, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import Loader from "modules/account/components/Loader";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const AddMemberButton = ({
  title,
  subtitle,
  onClick = (e: any) => {},
  width = 100 / 3,
  loading = false,
}: {
  title: string;
  subtitle: string;
  onClick?: (e: any) => void;
  width?: number;
  loading?: boolean;
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
      display={"flex"}
      alignItems={"center"}
    >
      {!loading && (
        <Flex>
          <HStack bg={"brand.300"} p={4}>
            <AiOutlinePlus size={24} color={"white"} />
          </HStack>
          <Box ml={[4]} my={"auto"}>
            <Text fontWeight={"bold"}>{title}</Text>
            <Text>{subtitle}</Text>
          </Box>
        </Flex>
      )}
      {loading && <Loader showText={false} h={"100%"} />}
    </Box>
  );
};

export default AddMemberButton;
