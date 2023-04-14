import { Box, Text, Heading } from "@chakra-ui/react";
import StatsCard from "../sharedComponents/StatsCard";
import { useEffect } from "react";
import { getCorpCardsAction } from "./actions";
import { useTypedDispatch, useTypedSelector } from "redux/store";
import Loader from "modules/account/components/Loader";
import DeviceCard from "./components/DeviceCard";
import { CorpCard, DashboardReducerState } from "../types";

const Devices = ({ routes }: { routes: string[] }) => {
  const dispatch = useTypedDispatch();
  const { corpCards, loading } = useTypedSelector(
    (state) => state.dashboard
  ) as DashboardReducerState;

  useEffect(() => {
    dispatch(getCorpCardsAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const totalNumberOfclicks = corpCards?.reduce(
    (acc: any, curr: { hits: any }) => {
      return acc + curr.hits;
    },
    0
  );

  // get number of active devices that has the proper user and not null
  const activeDevices = corpCards?.filter((card: CorpCard) => {
    return card.user && card.user !== null;
  });

  return (
    <Box>
      <Heading>Devices</Heading>{" "}
      <Text color="#737373" fontSize="14px">
        Please review the information below to access and download your reports.
      </Text>
      <Box
        display="flex"
        flexDir={["column", "row"]}
        justifyContent={[""]}
        gap="8"
        mt="8"
      >
        <StatsCard
          name="Total Clicks"
          number={totalNumberOfclicks}
          // curves="2.45%"
        />
        <StatsCard name="Total Devices" number={String(corpCards.length)} />
        <StatsCard
          bgColor="#df9f71"
          color="#fff"
          showMenu={false}
          name="Devices Activated"
          number={String(activeDevices?.length)}
        />
      </Box>
      <Box mt={6} bg="#fff" py={10} px={5}>
        {loading ? (
          <Loader h={"30vh"} />
        ) : (
          <Box
            display="grid"
            gridTemplateColumns={[
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
            ]}
            gap={8}
          >
            {corpCards?.length > 0 ? (
              corpCards.map((device: CorpCard) => (
                <DeviceCard
                  routes={routes}
                  key={device.cardSerial}
                  device={device}
                />
              ))
            ) : (
              <Text>No Device available</Text>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Devices;
