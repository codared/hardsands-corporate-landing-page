import { Box, Text, Heading } from "@chakra-ui/react";
import StatsCard from "../sharedComponents/StatsCard";
import { useEffect } from "react";
import { getCorpCardsAction } from "../Devices/actions";
import { useTypedDispatch, useTypedSelector } from "redux/store";
import Loader from "modules/account/components/Loader";
import TemplateCard from "./components/TemplateCard";
import { CorpCard, DashboardReducerState } from "../types";

const Templates = () => {
  const dispatch = useTypedDispatch();
  const { corpCards, loading } = useTypedSelector(
    (state) => state.dashboard
  ) as DashboardReducerState;

  const tempCards = [
    { id: 1, cardName: "Social Card" },
    { id: 2, cardName: "Social Card" },
    { id: 3, cardName: "Social Card" },
    { id: 4, cardName: "Social Card" },
    { id: 5, cardName: "Social Card" },
    { id: 6, cardName: "Social Card" },
    { id: 7, cardName: "Social Card" },
    { id: 8, cardName: "Social Card" },
    { id: 9, cardName: "Social Card" },
  ];

  useEffect(() => {
    dispatch(getCorpCardsAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <Box>
      <Heading>Templates</Heading>{" "}
      <Text color="#737373" fontSize="14px">
        Please select one of the template to assign and modify any card action
        to any member of your team
      </Text>
      <Box mt={6} bg="#fff" py={10} px={5}>
        <Heading fontSize={"1.5rem"}>Modify Templates</Heading>
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
            mt={8}
          >
            {tempCards?.length > 0 ? (
              tempCards.map(({id, cardName}) => (
                <TemplateCard key={id} cardName={cardName} />
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

export default Templates;
