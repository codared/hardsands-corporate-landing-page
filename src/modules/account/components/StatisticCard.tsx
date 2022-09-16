import { Flex, Text } from "@chakra-ui/react";

const StatisticCard = ({ title, value }: { title: string; value: string }) => {
  return (
    <Flex
      textAlign={"center"}
      position="relative"
      boxSize={[150, 200]}
      borderStyle="solid"
      borderWidth={1}
      flexDir={["column"]}
      justifyContent={"center"}
    >
      <Text>{title} hits</Text>
      <Text fontSize={[15, 60]} fontWeight="light">
        {value}
      </Text>
    </Flex>
  );
};

export default StatisticCard;
