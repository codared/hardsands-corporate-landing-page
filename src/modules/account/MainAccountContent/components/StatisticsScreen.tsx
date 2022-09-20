import { Grid } from "@chakra-ui/react";
import React from "react";
import StatisticsCard from "./StatisticsCard";

const StatisticsScreen = ({ cardStatistics }: { cardStatistics: any }) => {
  return (
    <Grid
      templateColumns={["repeat(2, 1fr)"]}
      gap={["1rem", "2rem"]}
      overflow="hidden"
    >
      {Object.keys(cardStatistics).map((stat) => (
        <StatisticsCard key={stat} value={cardStatistics[stat]} title={stat} />
      ))}
    </Grid>
  );
};

export default StatisticsScreen;
