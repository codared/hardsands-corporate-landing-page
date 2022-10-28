import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  Image,
  useColorModeValue,
  Flex,
  IconButton,
  SimpleGrid,
} from "@chakra-ui/react";
import { MdArrowForwardIos } from "react-icons/md";
import { AppIcons } from "../constants";
import OurSiteMarketing from "./OurSiteMarketing";

const socials = [
  {
    name: "Facebook",
    icon: AppIcons.FacebookIcon.src,
  },
  {
    name: "twitter",
    icon: AppIcons.TwitterIcon.src,
  },
  {
    name: "linkedIn",
    icon: AppIcons.LinkedInIcon.src,
  },
  {
    name: "Instagram",
    icon: AppIcons.InstagramIcon.src,
  },
  {
    name: "Tiktok",
    icon: AppIcons.TiktokIcon.src,
  },
  {
    name: "Google Plus",
    icon: AppIcons.TwitchIcon.src,
  },
];

export default function SocialProfile() {
  return (
    <Center>
      <Box
        maxW={"480px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        // boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Box h={"180px"} w={"full"} bg={"brand.100"} />
        <Flex justify={"center"} mt={-28}>
          <Image
            w={"50%"}
            src={
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
            }
            alt={"profile image"}
            css={{
              border: "10px solid white",
            }}
            borderRadius={"25px"}
          />
        </Flex>

        <Flex p={6} direction={"column"}>
          <Stack spacing={0} align={"center"} mb={5}>
            <Heading fontSize={"2xl"} fontWeight={"bolder"} fontFamily={"body"}>
              Samuel Peter
            </Heading>
            <Text color={"gray.500"}>Data Analyst at MMV</Text>
          </Stack>

          {/* <Button
            m={"0 auto"}
            px={14}
            py={6}
            bg={"brand.100"}
            color={"black"}
            rounded={"xl"}
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
          >
            <Box mr={2}>
              <AiOutlineUserAdd size={24} />
            </Box>
            Save My Contact
          </Button> */}
        </Flex>

        <Flex direction={"column"}>
          <OurSiteMarketing />

          {/* social icons */}
          <SimpleGrid columns={3} spacing={10} px={8} mt={6}>
            {socials.map((item: any) => (
              // @ts-ignore
              <Box key={item.name} height="80px" align={"center"}>
                <Image w={"50px"} src={item.icon} alt={`${item.name} icons`} />
                <Text mt={2} textTransform={"capitalize"}>
                  {item.name}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Flex>
      </Box>
    </Center>
  );
}
