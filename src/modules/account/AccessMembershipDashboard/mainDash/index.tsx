import { useEffect, useState } from "react";
import { Box, Text, BoxProps, Avatar, Heading, HStack } from "@chakra-ui/react";
import Image from "next/image";
import { Card } from "components";
import { AppIcons } from "modules/account/constants";
import CompositeBar from "./components/CompositeBar";
import StatsCard from "../sharedComponents/StatsCard";
import { useTypedDispatch, useTypedSelector } from "redux/store";
import { getDashboardDataAction } from "../actions";
import { getCookie } from "modules/shared/cookie";
import { HARDSANDS_CORPERATE } from "modules/authentication/constants";
import { monthClicks } from "../../functions";
import { FingerprintIcon } from "assets/index";

const Bar = (props: BoxProps) => {
  return <Box maxW="35px" borderRadius="8px" {...props} />;
};

const Home = () => {
  const dispatch = useTypedDispatch();
  const { corpName: companyName } = JSON.parse(
    getCookie(HARDSANDS_CORPERATE) || "{}"
  ) || { corpName: "" };
  //get dashboard from redux
  const { dashboard, loading } = useTypedSelector(
    (state) => state.dashboard
  ) as any;

  console.log(dashboard);

  useEffect(() => {
    dispatch(getDashboardDataAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const compositeBarData = [
    { id: 1, clicks: "88", activity: "152" },
    { id: 2, clicks: "55", activity: "123" },
    { id: 3, clicks: "117", activity: "152" },
    { id: 4, clicks: "158", activity: "187" },
    { id: 5, clicks: "81", activity: "132" },
    { id: 6, clicks: "131", activity: "163" },
  ];

  return (
    <Box>
      <Heading>Welcome {companyName}</Heading>
      <Box
        display="flex"
        flexDir={["column", "row"]}
        justifyContent={["flex-start", "stretch"]}
        gap="8"
        mt="8"
      >
        <StatsCard name="Total Clicks" number={dashboard?.activeCards} />
        <StatsCard
          showMenu={false}
          name="Members"
          number={dashboard?.members}
        />
        <StatsCard
          name="Card Hits"
          bgColor="#df9f71"
          color="#fff"
          number={dashboard?.inactiveCards}
        />
      </Box>

      <Box
        mt="8"
        display={"grid"}
        gridTemplateColumns={["none", "65% 35%"]}
        gap={6}
      >
        <Card bgColor="#fff" p="8">
          <Text fontSize={"14px"}>Monthly Hits</Text>
          <Heading fontSize="2xl">{dashboard?.totalClicks}</Heading>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="baseline"
            mt="10"
          >
            {monthClicks().map(({ month, numberOfClicks, bgColor }) => (
              <Box key={month}>
                <Bar mb="2" bgColor={bgColor} height={numberOfClicks} />
                <Text color="#B5B7BD" fontSize={"12px"} textAlign="center">
                  {month}
                </Text>
              </Box>
            ))}
          </Box>
        </Card>
        <Card w="100%">
          <Text>Top Member</Text>
          <HStack justifyContent="center">
            <Avatar src="" w="45" h="45" />
            <Text>{dashboard?.topPerformer?.fullName}</Text>
          </HStack>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="baseline"
            px="6"
            mt="4"
          >
            {compositeBarData.map(({ id, activity, clicks }) => (
              <Box key={id}>
                <CompositeBar activity={activity} clicks={clicks} />
              </Box>
            ))}
          </Box>
          <Box
            color="#a0a0a0"
            display={"flex"}
            justifyContent="space-around"
            mt="4"
            fontSize={"10px"}
          >
            <Box display={"flex"} alignItems="center" gap={3}>
              <Box borderRadius="50%" w="8px" h="8px" bgColor="#DF9F71" />{" "}
              <Text>Clicks</Text>
            </Box>
            <Box display={"flex"} alignItems="center" gap={3}>
              <Box borderRadius="50%" w="8px" h="8px" bgColor="#d9d9d9" />{" "}
              <Text>Activity</Text>
            </Box>
          </Box>
        </Card>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns={"repeat(3, 1fr)"}
        gap={6}
        mt={6}
        h="350px"
        pos={"relative"}
      >
        <Card p={8} maxH={"350px"} overflowY={"scroll"}>
          <Image src={FingerprintIcon} alt="finger print icon" />
          <Heading fontSize={"xl"}>Control And Manage Your Cards</Heading>
          <Text>Discover our cards benefits, with one tap.</Text>
        </Card>
        <Box>
          <Card>
            <Heading>
              {Math.ceil(
                (dashboard.inactiveCards /
                  (dashboard.inactiveCards + dashboard.activeCards)) *
                  100
              )}
              %
            </Heading>
            <Text>Inactive Cards</Text>
          </Card>
          <Card>
            <Heading>
              {Math.ceil(
                (dashboard.activeCards /
                  (dashboard.inactiveCards + dashboard.activeCards)) *
                  100
              )}
              %
            </Heading>
            <Text>Inactive Cards</Text>
          </Card>
        </Box>
        <Card textAlign={"center"}>
          <Box display={"flex"} justifyContent="center" mb="4">
            <Avatar src="" w="118px" h="118px" />
          </Box>
          <Text color="brand.300" fontSize={"2xl"}>
            {companyName}
          </Text>
          <Text fontSize="14px">Lagos, Nigeria</Text>
          <Box mt="10" display={"flex"} justifyContent="center" gap="6">
            <Box>
              <Text fontSize="12px">Total Cards</Text>
              <Text color="brand.300" fontSize={"2xl"}>
                {dashboard?.totalCards}
              </Text>
            </Box>
            <Box>
              <Text fontSize="12px">Members</Text>
              <Text color="brand.300" fontSize={"2xl"}>
                {dashboard?.members}
              </Text>
            </Box>
            <Box>
              <Text fontSize="12px">Clicks</Text>
              <Text color="brand.300" fontSize={"2xl"}>
                {dashboard?.totalClicks}
              </Text>
            </Box>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default Home;
