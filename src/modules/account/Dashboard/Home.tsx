import { Box, Text, BoxProps, Avatar } from "@chakra-ui/react";
import { Card } from "components/index";

const Bar = (props: BoxProps) => {
  return <Box maxW="35px" borderRadius="8px" {...props} />;
};

interface CompositeBarProps extends BoxProps {
  clicks?: string | number;
  activity?: string | number;
}

const CompositeBar = (props: CompositeBarProps) => {
  return (
    <Box
      borderRadius="4px"
      display="block"
      w="18px"
      pos={"relative"}
      {...props}
      bgColor="#f7f7f7"
      h={props.activity}
    >
      <Box
        borderRadius="4px"
        w="100%"
        bgColor="#DF9F71"
        pos={"absolute"}
        bottom={0}
        h={props.clicks}
        {...props}
      />
    </Box>
  );
};

const Home = () => {
  const monthlyClicks = [
    { month: "Jan", numberOfClicks: "58", bgColor: "#f7f7f7" },
    { month: "Feb", numberOfClicks: "142", bgColor: "#f7f7f7" },
    { month: "Mar", numberOfClicks: "98", bgColor: "#f7f7f7" },
    { month: "Apr", numberOfClicks: "112", bgColor: "#f7f7f7" },
    { month: "May", numberOfClicks: "90", bgColor: "#f7f7f7" },
    { month: "Jun", numberOfClicks: "161", bgColor: "#DF9F71" },
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
      <Text color="#737373" fontSize="14px">
        Hi Andrei,
      </Text>
      <Text fontWeight="700" fontSize="4xl">
        Welcome Greens Limited
      </Text>
      <Box
        display="flex"
        flexDir={["column", "row"]}
        justifyContent={["flex-start", "stretch"]}
        gap="8"
        mt="8"
      >
        <Card bgColor="#fff" width="100%">
          <Text> Clicks This Month</Text>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="baseline"
          >
            <Text sx={{ fontWeight: "bold" }} fontSize="2xl">
              630
            </Text>
            <Box
              px="3"
              py="1"
              borderRadius="2rem"
              fontWeight="bold"
              bgColor="#e7faf5"
              color="#05CD99"
              w="fit-content"
              h="fit-content"
              fontSize="12px"
            >
              2.45%
            </Box>
          </Box>
        </Card>
        <Card bgColor="#fff" width="100%">
          <Text> Clicks This Month</Text>
          <Text fontSize="2xl">630</Text>
        </Card>
        <Card bgColor="#df9f71" width="100%" color="#fff">
          <Text> Clicks This Month</Text>
          <Text fontSize="2xl">630</Text>
        </Card>
      </Box>

      <Box mt="8" display={"flex"} justifyContent="stretch" gap={8}>
        <Card bgColor="#fff" w="100%" maxW="720px" p="8">
          <Text fontSize={"14px"}>Total Clicks</Text>
          <Text fontSize="2xl">5127</Text>
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
        <Card bgColor={"#fff"} w="100%" maxW="344px">
          <Text>Top Performer</Text>
          <Box display={"flex"} justifyContent="center">
            <Avatar src="" w="45" h="45" mx="auto" />
          </Box>
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
    </Box>
  );
};

export default Home;
