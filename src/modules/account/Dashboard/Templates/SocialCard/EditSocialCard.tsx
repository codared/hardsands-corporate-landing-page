import { Box, Text, Heading, Button, Image } from "@chakra-ui/react";
import { useEffect } from "react";
import { getCorpCardsAction } from "../../Devices/actions";
import { useTypedDispatch, useTypedSelector } from "redux/store";
import Loader from "modules/account/components/Loader";
import { DashboardReducerState } from "../../types";
import {
  FacebookIcon,
  GoogleIcon,
  InstagramIcon,
  LinkedInIcon,
  UserAvatar,
  PortfolioAppIcon,
  MailBlockIcon,
  TwitterCircleIcon,
  PinterestSquareIcon,
  MobilePhoneIcon,
  EditTextIcon,
} from "assets/index";

const EditSocialCard = () => {
  const dispatch = useTypedDispatch();
  const { loading } = useTypedSelector(
    (state) => state.dashboard
  ) as DashboardReducerState;

  useEffect(() => {
    dispatch(getCorpCardsAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const socialMediaApps = [
    { name: "Mobile", icon: MobilePhoneIcon },
    { name: "LinkedIn", icon: LinkedInIcon },
    { name: "Twitter", icon: TwitterCircleIcon },
    { name: "Mail", icon: MailBlockIcon },
    { name: "Instagram", icon: InstagramIcon },
    { name: "Portfolio", icon: PortfolioAppIcon },
    { name: "Google", icon: GoogleIcon },
    { name: "Facebook", icon: FacebookIcon },
    { name: "Pinterest", icon: PinterestSquareIcon },
  ];

  return (
    <Box>
      <Heading>Templates</Heading>{" "}
      <Text color="#737373" fontSize="14px">
        Please select one of the template to assign and modify any card action
        to any member of your team
      </Text>
      <Box mt={16}>
        <Heading fontSize={"1.25rem"} color={"#DF9F71"}>
          Social Card
        </Heading>
        <Box bg="#fff" minH="75vh" mt={8} p={3}>
          <Box maxW="300px" m="auto">
            <Box bg="brand.100" pos="relative" h="155px" zIndex={5} />
            <Box pos="relative" zIndex={10} marginTop="-100px">
              <Image
                src={UserAvatar.src}
                alt="user avatar"
                borderRadius={"20px"}
                border="10px solid #fff"
                background={"#e9e7e9"}
                display={"block"}
                margin="0 auto 1rem"
              />
              <Box display="flex" justifyContent="center" gap="0.75rem" mb={1}>
                <Text fontSize={"1.25rem"} fontWeight={"700"}>
                  Input Name
                </Text>
                <Image src={EditTextIcon.src} alt="edit" />
              </Box>
              <Box display="flex" justifyContent="center" gap="0.75rem">
                <Text color="#616161">Data Analyst at MMV</Text>{" "}
                <Image src={EditTextIcon.src} alt="edit" />
              </Box>
            </Box>

            <Box mt={8}>
              <Text fontWeight={"700"}>Social</Text>
              <Text color="#616161">Click an icon to add your username </Text>
              <Box
                display="grid"
                gridTemplateColumns={"repeat(3, 1fr)"}
                columnGap={20}
                mt={6}
                alignContent={"space-between"}
              >
                {socialMediaApps.map(({ name, icon }, i) => (
                  <Box key={i} mb={10}>
                    <Image
                      src={icon.src}
                      alt={name}
                      width={30}
                      mb={6}
                      display="block"
                      mx="auto"
                    />
                    <Text textAlign={"center"} fontSize={"10px"}>
                      {name}
                    </Text>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>

          <Button bg="brand.100" width={"100%"} mt={18}>
            Save and Assign
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default EditSocialCard;
