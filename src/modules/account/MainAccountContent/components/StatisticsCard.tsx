import { Box, Flex, Text } from "@chakra-ui/react";
import { title } from "process";
import React from "react";
import { FiLink2 } from "react-icons/fi";

const StatisticsCard = ({ title, value }: { title: string; value: string }) => {
  return (
    <Box
      textAlign={"center"}
      position="relative"
      py={[6]}
      px={[6]}
      fontWeight="bold"
      borderStyle="solid"
      borderWidth={1}
      borderColor={"brand.300"}
      justifyContent={"center"}
      alignContent={"center"}
      transition={"all 200ms ease-in-out"}
    >
      <Text>{title} hits</Text>
      <Flex justifyContent={"center"} alignContent={"center"}>
        <Text fontSize={50}>{value}</Text>
      </Flex>
    </Box>
  );
};

export default StatisticsCard;
