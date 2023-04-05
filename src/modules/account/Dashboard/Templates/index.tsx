import { Box, Text, Heading } from "@chakra-ui/react";
import { AppIcons } from "modules/account/constants";
import { useEffect } from "react";
import { getCorpCardsAction } from "../Devices/actions";
import { useTypedDispatch, useTypedSelector } from "redux/store";
import Loader from "modules/account/components/Loader";
import TemplateCard from "./components/TemplateCard";
import { DashboardReducerState } from "../types";

const Templates = () => {
  const dispatch = useTypedDispatch();
  const { loading } = useTypedSelector(
    (state) => state.dashboard
  ) as DashboardReducerState;

  const tempCards = [
    { id: 1, cardName: "Social Card", icon: AppIcons.SocialCardIcon },
    { id: 2, cardName: "Whatsapp", icon: AppIcons.WhatsappOutline },
    { id: 3, cardName: "SMS", icon: AppIcons.SmsOutlineIcon },
    { id: 4, cardName: "Email", icon: AppIcons.MessageIconOutline },
    { id: 5, cardName: "Events", icon: AppIcons.CalendarOutlineIcon },
    { id: 6, cardName: "Leads", icon: AppIcons.LeadsOutlineIcon },
    { id: 7, cardName: "Bank Account", icon: AppIcons.BankOutlineIcon },
    { id: 8, cardName: "Contact Card", icon: AppIcons.ContactCardOutlineIcon },
    { id: 9, cardName: "Call", icon: AppIcons.CallOutlineIcon },
    { id: 10, cardName: "URL", icon: AppIcons.LinkOutlineIcon },
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
      <Box mt={16} bg="#fff" py={8} px={10}>
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
            gap={12}
            mt={8}
          >
            {tempCards?.length > 0 ? (
              tempCards.map(({ id, cardName, icon }) => (
                <TemplateCard key={id} cardName={cardName} icon={icon} />
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
