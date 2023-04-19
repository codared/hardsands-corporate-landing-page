import { Box, Text, Heading } from "@chakra-ui/react";
import { AppIcons } from "modules/account/constants";
import TemplateCard from "./components/TemplateCard";
import { APP_ROUTE } from "modules/authentication/constants";

const Templates = () => {

  const tempCards = [
    {
      id: 1,
      cardName: "Social Card",
      icon: AppIcons.SocialCardIcon,
      editLink: `${APP_ROUTE.dashboard}/templates/social-card-edit`,
      assignLink: `${APP_ROUTE.dashboard}/templates`,
    },
    {
      id: 2,
      cardName: "Whatsapp",
      icon: AppIcons.WhatsappOutline,
      editLink: `${APP_ROUTE.dashboard}/templates/whatsapp-edit`,
      assignLink: `${APP_ROUTE.dashboard}/templates`,
    },
    {
      id: 3,
      cardName: "SMS",
      icon: AppIcons.SmsOutlineIcon,
      editLink: `${APP_ROUTE.dashboard}/templates/sms-edit`,
      assignLink: `${APP_ROUTE.dashboard}/templates`,
    },
    {
      id: 4,
      cardName: "Email",
      icon: AppIcons.MessageIconOutline,
      editLink: `${APP_ROUTE.dashboard}/templates/email-edit`,
      assignLink: `${APP_ROUTE.dashboard}/templates`,
    },
    {
      id: 5,
      cardName: "Events",
      icon: AppIcons.CalendarOutlineIcon,
      editLink: `${APP_ROUTE.dashboard}/templates/events-edit`,
      assignLink: `${APP_ROUTE.dashboard}/templates`,
    },
    {
      id: 6,
      cardName: "Leads",
      icon: AppIcons.LeadsOutlineIcon,
      editLink: `${APP_ROUTE.dashboard}/templates/leads-edit`,
      assignLink: `${APP_ROUTE.dashboard}/templates`,
    },
    {
      id: 7,
      cardName: "Bank Account",
      icon: AppIcons.BankOutlineIcon,
      editLink: `${APP_ROUTE.dashboard}/templates/bank-account-edit`,
      assignLink: `${APP_ROUTE.dashboard}/templates`,
    },
    {
      id: 8,
      cardName: "Contact Card",
      icon: AppIcons.ContactCardOutlineIcon,
      editLink: `${APP_ROUTE.dashboard}/templates/contact-card-edit`,
      assignLink: `${APP_ROUTE.dashboard}/templates`,
    },
    {
      id: 9,
      cardName: "Call",
      icon: AppIcons.CallOutlineIcon,
      editLink: `${APP_ROUTE.dashboard}/templates/call-edit`,
      assignLink: `${APP_ROUTE.dashboard}/templates`,
    },
    {
      id: 10,
      cardName: "URL",
      icon: AppIcons.LinkOutlineIcon,
      editLink: `${APP_ROUTE.dashboard}/templates/url-edit`,
      assignLink: `${APP_ROUTE.dashboard}/assign-url`,
    },
  ];

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
