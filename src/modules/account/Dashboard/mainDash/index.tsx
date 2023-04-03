import { useEffect, useState } from "react";
import {
  Box,
  Text,
  BoxProps,
  Avatar,
  Heading,
  HStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { Card } from "components";
import { AppIcons } from "modules/account/constants";
import CompositeBar from "./components/CompositeBar";
import StatsCard from "../sharedComponents/StatsCard";
import { useTypedDispatch, useTypedSelector } from "redux/store";
import { getDashboardDataAction } from "../actions";
import { getCookie } from "modules/shared/cookie";
import { HARDSANDS_CORPERATE_NAME } from "modules/authentication/constants";

const Bar = (props: BoxProps) => {
  return <Box maxW="35px" borderRadius="8px" {...props} />;
};

const Home = () => {
  const dispatch = useTypedDispatch();
  const companyName = getCookie(HARDSANDS_CORPERATE_NAME) || "Company Name";
  //get dashboard from redux
  const { dashboard, loading } = useTypedSelector((state) => state.dashboard) as any;
  const [spreadComponent, setSpreadComponent] = useState(false);

  useEffect(() => {
    dispatch(getDashboardDataAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const monthlyClicks = [
    { month: "Jan", numberOfClicks: "58", bgColor: "#f7f7f7" },
    { month: "Feb", numberOfClicks: "142", bgColor: "#f7f7f7" },
    { month: "Mar", numberOfClicks: "98", bgColor: "#f7f7f7" },
    { month: "Apr", numberOfClicks: "112", bgColor: "#DF9F71" },
    { month: "May", numberOfClicks: "90", bgColor: "#f7f7f7" },
    { month: "Jun", numberOfClicks: "161", bgColor: "#f7f7f7" },
    { month: "Jul", numberOfClicks: "78", bgColor: "#f7f7f7" },
    { month: "Aug", numberOfClicks: "142", bgColor: "#f7f7f7" },
    { month: "Sep", numberOfClicks: "39", bgColor: "#f7f7f7" },
    { month: "Oct", numberOfClicks: "112", bgColor: "#f7f7f7" },
    { month: "Nov", numberOfClicks: "63", bgColor: "#f7f7f7" },
    { month: "Dec", numberOfClicks: "98", bgColor: "#f7f7f7" },
  ];

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
        <StatsCard name="Active Cards" number={dashboard?.activeCards} />
        <StatsCard name="Inactive Cards" number={dashboard?.inactiveCards} />
        <StatsCard
          bgColor="#df9f71"
          color="#fff"
          showMenu={false}
          name="Members"
          number={dashboard?.members}
        />
      </Box>

      <Box mt="8" display={"flex"} justifyContent="stretch" gap={8}>
        <Card bgColor="#fff" w="100%" maxW="720px" p="8">
          <Text fontSize={"14px"}>Total Clicks</Text>
          <Heading fontSize="2xl">{dashboard?.totalClicks}</Heading>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="baseline"
            mt="10"
          >
            {monthlyClicks.map(({ month, numberOfClicks, bgColor }) => (
              <Box key={month}>
                <Bar mb="2" bgColor={bgColor} height={numberOfClicks} />
                <Text color="#B5B7BD" fontSize={"12px"} textAlign="center">
                  {month}
                </Text>
              </Box>
            ))}
          </Box>
        </Card>
        <Card w="100%" maxW="344px">
          <Text>Top Performer</Text>
          <HStack justifyContent="center">
            <Avatar src="" w="45" h="45" />
            <Text>{dashboard?.topPerformer?.lastName}</Text>
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
        {/* <Card w="100%" maxW="720px" maxH={"350px"} p="8">
          <Text fontSize={"14px"}>Clicks this month</Text>
          <Heading fontSize="2xl">300</Heading>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="baseline"
            mt="10"
          >
            {compositeBarData.map(({ id, activity, clicks }) => (
              <Box key={id}>
                <CompositeBar
                  activity={activity}
                  clicks={clicks}
                  w="16px"
                  borderRadius={"16px"}
                />
              </Box>
            ))}
          </Box>
        </Card> */}
        <Card p={8} maxH={"350px"} overflowY={"scroll"}>
          <Heading fontSize={"xl"}>Your Activity</Heading>
          <Box as="ul" mt={6}>
            <Box
              as="li"
              display={"flex"}
              justifyContent="space-between"
              alignItems={"center"}
              my={3}
            >
              <Box display={"flex"} alignItems="center" gap={3}>
                <Image
                  src={AppIcons.DashWhatsAppIcon.src}
                  alt={"whats"}
                  height={50}
                  width={50}
                />
                <Box>
                  <Heading fontSize={18} mb={1}>
                    WhatsApp
                  </Heading>
                  <Text fontSize={14} color="#757575">
                    Kennedy John
                  </Text>
                </Box>
              </Box>
              <Text fontSize={14} color="#757575">
                Today 10:30
              </Text>
            </Box>
            <Box
              as="li"
              display={"flex"}
              justifyContent="space-between"
              alignItems={"center"}
              my={3}
            >
              <Box display={"flex"} alignItems="center" gap={3}>
                <Image
                  src={AppIcons.BankIconSVG.src}
                  alt={"whats"}
                  height={50}
                  width={50}
                />
                <Box>
                  <Heading fontSize={18} mb={1}>
                    Bank Details
                  </Heading>
                  <Text fontSize={14} color="#757575">
                    Kennedy John
                  </Text>
                </Box>
              </Box>
              <Text fontSize={14} color="#757575">
                Today 10:30
              </Text>
            </Box>
            <Box
              as="li"
              display={"flex"}
              justifyContent="space-between"
              alignItems={"center"}
              my={3}
            >
              <Box display={"flex"} alignItems="center" gap={3}>
                <Image
                  src={AppIcons.ContactCardIconSVG.src}
                  alt={"whats"}
                  height={50}
                  width={50}
                />
                <Box>
                  <Heading fontSize={18} mb={1}>
                    Contact Card
                  </Heading>
                  <Text fontSize={14} color="#757575">
                    Kennedy John
                  </Text>
                </Box>
              </Box>
              <Text fontSize={14} color="#757575">
                Today 10:30
              </Text>
            </Box>
          </Box>
        </Card>
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
