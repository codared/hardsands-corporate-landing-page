import { Box, Text, Heading } from "@chakra-ui/react";
import { AppIcons } from "modules/account/constants";
import { useEffect } from "react";
import { getCorpCardsAction } from "../Devices/actions";
import { useTypedDispatch, useTypedSelector } from "redux/store";
import Loader from "modules/account/components/Loader";
import TemplateCard from "./components/TemplateCard";
import { DashboardReducerState } from "../types";
import { APP_ROUTE } from "modules/authentication/constants";

const Templates = ({ routes }: { routes: string[] }) => {
  const dispatch = useTypedDispatch();
  const { loading } = useTypedSelector(
    (state) => state.dashboard
  ) as DashboardReducerState;

  const tempCards = [
    {
      id: 1,
      cardName: "Social Card",
      icon: AppIcons.SocialCardIcon,
      actionsLink: `${APP_ROUTE.dashboard}/edit-event`,
    },
    {
      id: 2,
      cardName: "Whatsapp",
      icon: AppIcons.WhatsappOutline,
      actionsLink: `${APP_ROUTE.dashboard}/templates/social-card/actions`,
    },
    {
      id: 3,
      cardName: "SMS",
      icon: AppIcons.SmsOutlineIcon,
      actionsLink: `${APP_ROUTE.dashboard}/templates/social-card/actions`,
    },
    {
      id: 4,
      cardName: "Email",
      icon: AppIcons.MessageIconOutline,
      actionsLink: `${APP_ROUTE.dashboard}/templates/social-card/actions`,
    },
    {
      id: 5,
      cardName: "Events",
      icon: AppIcons.CalendarOutlineIcon,
      actionsLink: `${APP_ROUTE.dashboard}/edit-events`,
    },
    {
      id: 6,
      cardName: "Leads",
      icon: AppIcons.LeadsOutlineIcon,
      actionsLink: `${APP_ROUTE.dashboard}/templates/social-card/actions`,
    },
    {
      id: 7,
      cardName: "Bank Account",
      icon: AppIcons.BankOutlineIcon,
      actionsLink: `${APP_ROUTE.dashboard}/templates/social-card/actions`,
    },
    {
      id: 8,
      cardName: "Contact Card",
      icon: AppIcons.ContactCardOutlineIcon,
      actionsLink: `${APP_ROUTE.dashboard}/templates/social-card/actions`,
    },
    {
      id: 9,
      cardName: "Call",
      icon: AppIcons.CallOutlineIcon,
      actionsLink: `${APP_ROUTE.dashboard}/templates/social-card/actions`,
    },
    {
      id: 10,
      cardName: "URL",
      icon: AppIcons.LinkOutlineIcon,
      actionsLink: `${APP_ROUTE.dashboard}/templates/social-card/actions`,
    },
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
              tempCards.map(({ id, cardName, icon, actionsLink }) => (
                <TemplateCard
                  key={id}
                  cardName={cardName}
                  icon={icon}
                  actionsLink={actionsLink}
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

export default Templates;
