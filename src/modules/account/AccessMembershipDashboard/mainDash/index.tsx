import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  Box,
  Text,
  BoxProps,
  Avatar,
  Heading,
  Button,
  Image,
  Flex,
} from "@chakra-ui/react";
import { Card } from "components";
import CompositeBar from "./components/CompositeBar";
import StatsCard from "../sharedComponents/StatsCard";
import { useTypedDispatch, useTypedSelector } from "redux/store";
import { getDashboardDataAction } from "../actions";
import { getCookie } from "modules/shared/cookie";
import { HARDSANDS_CORPERATE } from "modules/authentication/constants";
import { monthClicks } from "../../functions";
import { DASH_ROOT, routeId } from "modules/account/constants";
import {
  ActiveCardIcon,
  FingerprintIcon,
  InactiveCardIcon,
} from "assets/index";

const Bar = (props: BoxProps) => {
  return <Box w={["18px", "26px", "35px"]} borderRadius="8px" {...props} />;
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


  const { query } = useRouter();

  const corpName = (query.corpName as string[]) || [];

  const baseUrl = DASH_ROOT.replace(routeId, corpName[0]);

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
        gridTemplateColumns={["none", "65% 32.7%"]}
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
        <Card
          display="flex"
          flexDir={"column"}
          justifyContent={"space-between"}
        >
          <Text>Top Member</Text>
          <Box>
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
        <Card p={8} maxH={"350px"}>
          <Image src={FingerprintIcon.src} alt="finger print icon" mb={3} />
          <Heading fontSize={"xl"} lineHeight={"2rem"} mb={4}>
            Control And Manage Your Cards
          </Heading>
          <Text mb={6}>Discover our cards benefits, with one tap.</Text>
          <Link href={`${baseUrl}/devices`}>
            <Button borderRadius={"none"} bg="brand.300" color="#fff" w="full">
              Cards
            </Button>
          </Link>
        </Card>
        <Box
          display={"flex"}
          flexDir={"column"}
          gap={4}
          justifyContent={"center"}
        >
          <Card py={8}>
            <Flex gap={6}>
              <Image src={InactiveCardIcon.src} alt="inactive cards" />
              <Box>
                <Heading>
                  {Math.ceil(
                    (dashboard.inactiveCards /
                      (dashboard.inactiveCards + dashboard.activeCards)) *
                      100
                  ) || "--"}
                  %
                </Heading>{" "}
                <Text fontSize={"14px"} color="#5c5c5c">
                  Inactive Cards
                </Text>
              </Box>
            </Flex>
          </Card>
          <Card py={8}>
            <Flex gap={6}>
              <Image src={ActiveCardIcon.src} alt="active cards" />
              <Box>
                <Heading>
                  {Math.ceil(
                    (dashboard.activeCards /
                      (dashboard.inactiveCards + dashboard.activeCards)) *
                      100
                  ) || "--"}
                  %
                </Heading>{" "}
                <Text fontSize={"14px"} color="#5c5c5c">
                  Active Cards
                </Text>
              </Box>
            </Flex>
          </Card>
        </Box>
        <Card textAlign={"center"}>
          <Box display={"flex"} justifyContent="center" mb={8} mt={3}>
            <Avatar src="" w="118px" h="118px" />
          </Box>
          <Heading color="brand.300" fontSize={"2xl"}>
            {companyName}
          </Heading>
          <Box mt="10" display={"flex"} justifyContent="center" gap="6">
            <Box>
              <Text fontSize="12px">Members</Text>
              <Heading color="brand.300" fontSize={"2xl"}>
                {dashboard?.members}
              </Heading>
            </Box>
            <Box>
              <Text fontSize="12px">Clicks</Text>
              <Heading color="brand.300" fontSize={"2xl"}>
                {dashboard?.totalClicks}
              </Heading>
            </Box>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default Home;
