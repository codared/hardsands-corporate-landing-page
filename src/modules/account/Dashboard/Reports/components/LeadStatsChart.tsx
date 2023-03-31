import { Box, Heading, Text } from "@chakra-ui/react";

interface BarProps {
  title: string;
  width: string;
  amount: number | string;
}

const Bar = ({ title, width, amount }: BarProps) => {
  return (
    <Box
      display={"flex"}
      alignItems="center"
      gap="0.5rem"
      mb={5}
      color="#616161"
    >
      <Text width={"120px"} textAlign="right">
        {title}
      </Text>
      <Box
        bg={`${
          title.toLowerCase() === "responses" || title.toLowerCase() === "hits"
            ? "#DF9F71"
            : "#D9D9D9"
        }`}
        borderRadius="4px"
        height="35px"
        w={width}
      />
      <Text>{amount}%</Text>
    </Box>
  );
};

const LeadStartsChart = () => {
  const leadStats = [
    { id: 1, title: "Responses", number: 22 },
    { id: 2, title: "Completion", number: 14 },
    { id: 3, title: "Conversion", number: 5 },
    { id: 4, title: "Hits", number: 13 },
  ];

  return (
    <Box bg="#f9f9f9" px={3} pt={3} fontSize="0.75rem" >
      <Heading fontSize="1.125rem" ml="125px">
        Lead Stats
      </Heading>
      <Box mt={4}>
        {/* {leadStats.map(({ id, title, number }) => (
          <Bar key={id} title={title} width={`${(number / 25) * 100}%`} />
        ))} */}
        {leadStats.map(({ id, number, title }) => (
          <Bar key={id} title={title} amount={number} width={`${(number / 25) * 80}%`} />
        ))}
      </Box>
    </Box>
  );
};

export default LeadStartsChart;
