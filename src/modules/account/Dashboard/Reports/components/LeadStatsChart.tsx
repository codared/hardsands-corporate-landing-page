import { Box, Heading, Text } from "@chakra-ui/react";

interface BarProps {
  title: string;
  width: string;
}

const Bar = ({ title, width }: BarProps) => {
  return (
    <Box display={"flex"} alignItems="center" gap="0.5rem">
      <Text width={"120px"} textAlign="right">
        {title}
      </Text>
      <Box bg="#D9D9D9" borderRadius="4px" height="35px" w={width} />{" "}
    </Box>
  );
};

const LeadStartsChart = () => {
  const leadStats = [{ id: 1, title: "Responses", number: 23 }];

  console.log;
  return (
    <Box bg="#f9f9f9" px={3} pt={3}>
      <Heading fontSize="1.125rem" ml="200px">
        Lead Stats
      </Heading>
      <Box mt={4}>
        {leadStats.map(({ id, title, number }) => (
          <Bar key={id} title={title} width={`${(number / 25) * 100}%`} />
        ))}
      </Box>
    </Box>
  );
};

export default LeadStartsChart;
