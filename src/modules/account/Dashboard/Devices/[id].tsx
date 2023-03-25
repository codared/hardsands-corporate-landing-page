import { useState } from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import StatsCard from "../sharedComponents/StatsCard";

const DeviceWithId = () => {
  const deviceCards = [
    {
      id: 1,
      img: "https://cdn.shopify.com/s/files/1/0559/0407/5843/files/14_1.jpg?v=1665057392",
      name: "Black Matte PVC Card",
      number: "10",
    },
    {
      id: 2,
      img: "https://cdn.shopify.com/s/files/1/0559/0407/5843/files/12a_1.jpg?v=1665057392",
      name: "Bamboo Wood Card",
      number: "10",
    },
    {
      id: 3,
      img: "https://cdn.shopify.com/s/files/1/0559/0407/5843/files/14_1.jpg?v=1665057392",
      name: "Black Matte Metal Card",
      number: "10",
    },
    {
      id: 4,
      img: "https://cdn.shopify.com/s/files/1/0559/0407/5843/files/14_1.jpg?v=1665057392",
      name: "Sapele Card",
      number: "10",
    },
    {
      id: 5,
      img: "https://cdn.shopify.com/s/files/1/0559/0407/5843/files/14_1.jpg?v=1665057392",
      name: "Epoxy PVC",
      number: "10",
    },
  ];

  return (
    <Box>
      <Heading>Device</Heading>{" "}
      <Text color="#737373" fontSize="14px">
        Please find below a list of members who have been assigned cards
      </Text>
      <Box
        display="flex"
        flexDir={["column", "row"]}
        justifyContent={[""]}
        gap="8"
        mt="8"
      >
        <StatsCard
          name="Card Monthly Activity"
          number="130"
          bgColor="#fef8f3"
        />
        <StatsCard name="Total Cards" number="11" />
        <StatsCard showMenu={false} name="Unassigned Cards" number="6" />
      </Box>
      <Box mt={6} bg="#fff" py={10} px={5}>
        <Box
          display="grid"
       
          gap={8}
        >
          <Heading fontSize={"1.25rem"}>Card Holders</Heading>
          
        </Box>
      </Box>
    </Box>
  );
};

export default DeviceWithId;
