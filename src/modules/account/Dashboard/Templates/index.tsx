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
      editLink: `${APP_ROUTE.dashboard}/edit-social-card`,
      assignLink: `${APP_ROUTE.dashboard}/assign-event`,
    },
    {
      id: 2,
      cardName: "Whatsapp",
      icon: AppIcons.WhatsappOutline,
      editLink: `${APP_ROUTE.dashboard}/edit-whatsapp`,
      assignLink: `${APP_ROUTE.dashboard}/assign-event`,
    },
    {
      id: 3,
      cardName: "SMS",
      icon: AppIcons.SmsOutlineIcon,
      editLink: `${APP_ROUTE.dashboard}/edit-sms`,
      assignLink: `${APP_ROUTE.dashboard}/assign-event`,
    },
    {
      id: 4,
      cardName: "Email",
      icon: AppIcons.MessageIconOutline,
      editLink: `${APP_ROUTE.dashboard}/edit-email`,
      assignLink: `${APP_ROUTE.dashboard}/assign-event`,
    },
    {
      id: 5,
      cardName: "Events",
      icon: AppIcons.CalendarOutlineIcon,
      editLink: `${APP_ROUTE.dashboard}/edit-events`,
      assignLink: `${APP_ROUTE.dashboard}/assign-event`,
    },
    {
      id: 6,
      cardName: "Leads",
      icon: AppIcons.LeadsOutlineIcon,
      editLink: `${APP_ROUTE.dashboard}/edit-lead`,
      assignLink: `${APP_ROUTE.dashboard}/assign-event`,
    },
    {
      id: 7,
      cardName: "Bank Account",
      icon: AppIcons.BankOutlineIcon,
      editLink: `${APP_ROUTE.dashboard}/edit-bank-account`,
      assignLink: `${APP_ROUTE.dashboard}/assign-event`,
    },
    {
      id: 8,
      cardName: "Contact Card",
      icon: AppIcons.ContactCardOutlineIcon,
      editLink: `${APP_ROUTE.dashboard}/edit-contact-card`,
      assignLink: `${APP_ROUTE.dashboard}/assign-contact-card`,
    },
    {
      id: 9,
      cardName: "Call",
      icon: AppIcons.CallOutlineIcon,
      editLink: `${APP_ROUTE.dashboard}/edit-call`,
      assignLink: `${APP_ROUTE.dashboard}/assign-call`,
    },
    {
      id: 10,
      cardName: "URL",
      icon: AppIcons.LinkOutlineIcon,
      editLink: `${APP_ROUTE.dashboard}/edit-url`,
      assignLink: `${APP_ROUTE.dashboard}/assign-url`,
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
  
          <Box
            display="grid"
            gridTemplateColumns={[
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
            ]}
            gap={12}
            mt={8}
            width={["full", "full", "90%"]}
          >
            {tempCards?.length > 0 ? (
              tempCards.map(({ id, cardName, icon, editLink, assignLink }) => (
                <TemplateCard
                  key={id}
                  cardName={cardName}
                  icon={icon}
                  editLink={editLink}
                  assignLink={assignLink}
                />
              ))
            ) : (
              <Text>No Device available</Text>
            )}
          </Box>
      </Box>
    </Box>
  );
};

export default Templates;
