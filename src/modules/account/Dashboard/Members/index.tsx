import {
  Avatar,
  Box,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  HStack,
  IconButton,
  Progress,
  Tag,
  TagLabel,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import DataTable from "../sharedComponents/DataTable";
import CustomDrawer from "components/CustomDrawer";
import StatsCard from "../sharedComponents/StatsCard";
import AddMemberButton from "./components/AddMemberButton";
import MemberProfile from "./components/MemberProfile";
import NameColumn from "./components/NameColumn";
import RowMenu from "./components/RowMenu";

export const buildMemberRow = (members: any, rowMenuOptions: any) => {
  return members.map((member: any) => {
    return {
      name: (
        <NameColumn
          name={member.name}
          subText={member.email}
          img={member.img}
        />
      ),
      usage: (
        <Flex flexDirection={["column", "row"]} alignItems={"center"}>
          <Progress
            rounded={"full"}
            size={"sm"}
            colorScheme={"orange"}
            value={80}
            w={"full"}
            mr={[2]}
          />
          <Text>{member.usage}%</Text>
        </Flex>
      ),
      clicks: member.clicks,
      role: member.role,
      status: (
        <Flex justifyContent={["none", "space-between"]}>
          <Tag
            px={[4]}
            py={[1]}
            size={"sm"}
            variant="subtle"
            bg={member.active ? "green.400" : "gray.300"}
            rounded={"full"}
          >
            <TagLabel color={"white"}>
              {member.active ? "Active" : "Inactive"}
            </TagLabel>
          </Tag>
          <RowMenu menuOption={rowMenuOptions(member)} />
        </Flex>
      ),
    };
  });
};

const Members = () => {
  const memberDrawer = useDisclosure();
  const [activeMember, setActiveMember] = useState({});
  const columnHeaders = ["Name", "Card Usage", "Clicks", "Role", "Status"];
  const dataStore = [
    {
      img: "https://bit.ly/sage-adebayo",
      name: "John Doe",
      email: "gab@hardsands.com",
      usage: 80,
      clicks: 200,
      role: "Developer",
      status: "Active",
    },
    {
      img: "https://bit.ly/sage-adebayo",
      name: "John Doe",
      email: "gab@hardsands.com",
      usage: 100,
      clicks: 200,
      role: "Developer",
      status: "Active",
    },
    {
      img: "https://bit.ly/sage-adebayo",
      name: "John Doe",
      email: "gab@hardsands.com",
      usage: 10,
      clicks: 200,
      role: "Developer",
      status: "Active",
    },
  ];

  const rowMenuOptions = (member: any) => {
    return [
      {
        id: 1,
        title: "Edit Member",
        onClick: () => {
          setActiveMember(member);
          memberDrawer.onOpen();
        },
      },
      {
        id: 2,
        title: "Set Permissions",
        onClick: () => {},
      },
      {
        id: 3,
        title: "Lock Profile",
        onClick: () => {},
      },
      {
        id: 4,
        title: "View Report",
        onClick: () => {},
      },
      {
        id: 5,
        title: "Remove Member",
        onClick: () => {},
      },
    ];
  };

  const data = buildMemberRow(dataStore, rowMenuOptions);

  return (
    <Box>
      <CustomDrawer
        title={"Edit Member"}
        size={"sm"}
        placement="right"
        isOpen={memberDrawer.isOpen}
        onClose={memberDrawer.onClose}
      >
        <MemberProfile member={activeMember} />
      </CustomDrawer>

      <Box>
        <Text color="#737373" fontSize="14px">
          Add a member by using any of the options below
        </Text>
        <Heading>Team Members</Heading>
      </Box>

      <Flex mt="8" flexDirection={["column", "column", "row"]} gap="8">
        <AddMemberButton
          title={"Add Manually"}
          subtitle={"Add using members credentials"}
          onClick={memberDrawer.onOpen}
        />
        <AddMemberButton
          title={"Import CSV/Excel"}
          subtitle={"Add by importing member’s file"}
        />
        <StatsCard
          name={"Members"}
          number={"130"}
          curves={"2.45%"}
          decline={true}
        />
      </Flex>

      {/* <Flex gap={4} width={"100%"} transition={"all ease-in-out 200ms"}> */}
      <DataTable
        headers={columnHeaders}
        data={data}
        tableTitle={"Member Overview"}
        //   w={`${100 / 1.5}%`}
      />
      {/* <Flex
          direction={"column"}
          justifyContent={"start"}
          my={[10]}
          bg={"white"}
          p={[6]}
          w={`${100 / 3}%`}
        >
          <Text fontWeight={"bold"}>Recent Activity</Text>
        </Flex> */}
      {/* </Flex> */}
    </Box>
  );
};

export default Members;
