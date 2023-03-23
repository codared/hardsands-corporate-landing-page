import { useState } from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import StatsCard from "../sharedComponents/StatsCard";
import {
  BambooWoodCardImg,
  BlackMatteMetalCardImg,
  BlackMattePcvCardImg,
  EpoxyPvcCardImg,
  PersonalCardIcon,
  SapeleCardImg,
} from "assets/index";
import Image from "next/image";

const Home = () => {
  const deviceCards = [
    {
      id: 1,
      img: BlackMattePcvCardImg,
      name: "Black Matte PVC Card",
      number: "10",
    },
    {
      id: 2,
      img: BambooWoodCardImg,
      name: "Bamboo Wood Card",
      number: "10",
    },
    {
      id: 3,
      img: BlackMatteMetalCardImg,
      name: "Black Matte Metal Card",
      number: "10",
    },
    { id: 4, img: SapeleCardImg, name: "Sapele Card", number: "10" },
    { id: 5, img: EpoxyPvcCardImg, name: "Epoxy PVC", number: "10" },
  ];

  return (
    <Box>
      <Heading>Reports</Heading>{" "}
      <Text color="#737373" fontSize="14px">
        Please review the information below to access and download your reports.
      </Text>
      <Box
        display="flex"
        flexDir={["column", "row"]}
        justifyContent={[ ""]}
        gap="8"
        mt="8"
      >
        <StatsCard name="Total Clicks" number="130" curves="2.45%" />
        <StatsCard name="Member" number="130" curves="2.45%" />
        <StatsCard
          bgColor="#df9f71"
          color="#fff"
          showMenu={false}
          name="Activity"
          number="130"
        />
      </Box>
      <Box mt={6} bg="#fff" py={10} px={5}>
        <Box
          display="grid"
          gridTemplateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
          ]}
          gap={8}
        >
          {deviceCards.map(({ id, img, name, number }) => (
            <Box key={id} pos="relative" borderRadius="15px">
              <Heading as="h4" fontSize={"18px"} mb={4}>
                {name}
              </Heading>
              <Box
                pos="relative"
                sx={{
                  "& img": {
                    width: "100%",
                  },
                }}
              >
                <img src={img.src} alt={name} />
                <Box
                  bg="rgba(0, 0, 0, 0.54)"
                  color="#fff"
                  borderRadius={"0px 0px 15px 15px"}
                  p="1rem"
                  pos="absolute"
                  bottom="0"
                  w="100%"
                  fontSize={"0.875rem"}
                  fontWeight="500"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  gap={2}
                >
                  <Image
                    src={PersonalCardIcon}
                    alt="personal card"
                    width={20}
                    height={20}
                  />
                  {number} cards
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
