import { Box, Text, Heading, Flex, VStack, Tooltip } from "@chakra-ui/react";
import StatsCard from "../sharedComponents/StatsCard";
import { useEffect, useState } from "react";
import { getCorpCardsAction } from "./actions";
import { useTypedDispatch, useTypedSelector } from "redux/store";
import Loader from "modules/account/components/Loader";
import DeviceCard from "./components/DeviceCard";
import { CorpCard, AccessDashboardReducerState } from "../types";
import AddMemberButton from "../Members/components/AddMemberButton";
import { registerDevice } from "./services";
import { AiOutlineUndo } from "react-icons/ai";

const Devices = ({ routes }: { routes: string[] }) => {
  const dispatch = useTypedDispatch();
  const [loadingTappingDevice, setLoadingTappingDevice] = useState(false);
  const [showMessage, setShowMessage] = useState("");
  const { corpCards, loading } = useTypedSelector(
    (state) => state.dashboard
  ) as AccessDashboardReducerState;

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

  const handleRegisterTappingDevice = async () => {
    try {
      setLoadingTappingDevice(true);
      const res = await registerDevice();
      setLoadingTappingDevice(false);
      if (!res.isError) {
        setShowMessage(res.result.pin);
      }
    } catch (error) {
      setLoadingTappingDevice(false);
    }
  };

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
      <Box
        display="flex"
        flexDir={["column", "row"]}
        justifyContent={[""]}
        gap="8"
        mt={6}
      >
        <AddMemberButton
          title={"Register Tapping Device"}
          subtitle={"Input the pin number to register"}
          loading={loadingTappingDevice}
          onClick={handleRegisterTappingDevice}
        />
        {showMessage && (
          <Box
            w={["full", "full", "50%"]}
            p={[6]}
            borderColor={"brand.300"}
            borderWidth={1}
          >
            {!loadingTappingDevice && (
              <VStack h={"100%"} alignItems={"flex-start"}>
                <Text>
                  Navigate to{" "}
                  <Box as={"span"} fontWeight={"extrabold"}>
                    www.hardsands.com/activate-device
                  </Box>{" "}
                  on the tapping device and enter this pin to register it.
                </Text>
                <Flex justify={"space-between"}>
                  <Heading fontSize={30} fontWeight={"bolder"}>
                    {showMessage}
                  </Heading>
                </Flex>
              </VStack>
            )}
            {loadingTappingDevice && <Loader showText={false} h={"100%"} />}
          </Box>
        )}
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
