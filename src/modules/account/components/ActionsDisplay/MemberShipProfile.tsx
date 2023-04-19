import {
  Box,
  Center,
  Flex,
  useColorModeValue,
  Image,
  Heading,
  Stack,
  HStack,
  Text,
  VStack,
  Avatar,
} from "@chakra-ui/react";
import { GoldMembershipIcon, SilverMembershipIcon } from "assets";
import { MembershipType } from "modules/account/types";
import moment from "moment";
import React from "react";
import { BsTelephone } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import { TbUser } from "react-icons/tb";

const MemberShipProfile = ({ fields }: { fields?: MembershipType }) => {
  // @ts-ignore
  const isExpired = fields?.membershipStatus === "Expired";

  return (
    <Center>
      <Box
        maxW={"580px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Box h={"180px"} w={"full"} bg={"brand.100"} />
        <Flex justify={"center"}>
          <Box display={"flex"} w={"50%"} mt={-24} position={"relative"}>
            <Avatar
              w={196}
              h={196}
              m="0 auto"
              objectFit={"cover"}
              src={fields?.accessCorpImage}
              bgColor={"gray.100"}
              color={"black"}
              size={"2xl"}
              name={fields?.accessCorpName}
              css={{
                border: "10px solid white",
              }}
              borderRadius={"25px"}
            />
          </Box>
        </Flex>

        <Flex p={6} direction={"column"} position={"relative"}>
          <Stack spacing={0} align={"center"} mb={5}>
            <Heading
              my={4}
              fontSize={"2xl"}
              fontWeight={"extrabold"}
              fontFamily={"body"}
            >
              {fields?.accessCorpName}
            </Heading>
          </Stack>

          <Stack>
            <Stack
              align={"center"}
              p={[6]}
              bg={"brand.10"}
              color={"black"}
              flex={1}
            >
              {fields?.tag === "gold" && (
                <Image src={GoldMembershipIcon.src} alt="Gold Membership" />
              )}
              {fields?.tag === "silver" || fields?.tag === null && (
                <Image src={SilverMembershipIcon.src} alt="Silver Membership" />
              )}
              <Text textTransform={"capitalize"}>{fields?.tag} Member</Text>
            </Stack>
            <HStack>
              <Stack
                align={"center"}
                px={[6]}
                py={[4]}
                bg={"brand.10"}
                color={"black"}
                w={"50%"}
                flex={1}
              >
                <Text fontSize={24} color={"brand.300"} fontWeight={"bold"}>
                  {fields?.hits}
                </Text>
                <Text>Card Hits</Text>
              </Stack>
              <Stack
                align={"center"}
                px={[6]}
                py={[4]}
                bg={"brand.10"}
                color={"black"}
                w={"50%"}
                flex={1}
              >
                {isExpired && (
                  <Text
                    fontSize={24}
                    color={"red.500"}
                    fontWeight={"bold"}
                    textTransform={"uppercase"}
                  >
                    Expired
                  </Text>
                )}
                {!isExpired && (
                  <Text
                    fontSize={24}
                    color={"green.500"}
                    fontWeight={"bold"}
                    textTransform={"uppercase"}
                  >
                    {moment(fields?.membershipDueDate).format("DD MMM YYYY")}
                  </Text>
                )}
                <Text>Membership Due Date</Text>
              </Stack>
            </HStack>
          </Stack>

          <Stack mt={10}>
            <Heading size={"sm"} color={"brand.300"}>
              Member Info
            </Heading>

            <VStack>
              <HStack
                px={[6]}
                py={[4]}
                bg={"brand.10"}
                color={"black"}
                w={"100%"}
                flex={1}
              >
                <TbUser size={24} />
                <Text>{fields?.userName}</Text>
              </HStack>
              <HStack
                px={[6]}
                py={[4]}
                bg={"brand.10"}
                color={"black"}
                w={"100%"}
                flex={1}
              >
                <BsTelephone size={24} />
                <Text>{fields?.userPhone}</Text>
              </HStack>
              <HStack
                px={[6]}
                py={[4]}
                bg={"brand.10"}
                color={"black"}
                w={"100%"}
                flex={1}
              >
                <IoMailOutline size={24} />
                <Text>{fields?.userEmail}</Text>
              </HStack>
            </VStack>
          </Stack>
        </Flex>
        <Box h={"180px"} w={"full"} />
      </Box>
    </Center>
  );
};

export default MemberShipProfile;
