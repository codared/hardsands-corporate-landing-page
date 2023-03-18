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
import RowMenu from "../sharedComponents/RowMenu";
import CreateMemberForm from "./components/CreateMemberForm";
import ImportMemberForm from "./components/ImportMemberForm";

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
  const createDrawer = useDisclosure();
  const [activeMember, setActiveMember] = useState({});
  const [drawerFormState, setDrawerFormState] = useState({
    name: "",
    subTitle: "",
    form: <></>,
  });
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
      <CustomDrawer
        title={drawerFormState.name}
        size={"sm"}
        placement="right"
        isOpen={createDrawer.isOpen}
        onClose={createDrawer.onClose}
      >
        <>
          <Text>{drawerFormState.subTitle}</Text>
          {drawerFormState.form}
        </>
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
          onClick={() => {
            setDrawerFormState({
              name: "Add Manually",
              subTitle: "Add using members credentials",
              form: <CreateMemberForm />,
            });
            createDrawer.onOpen();
          }}
        />
        <AddMemberButton
          title={"Import CSV/Excel"}
          subtitle={"Add by importing member’s file"}
          onClick={() => {
            setDrawerFormState({
              name: "Add Member via Import CSV/Excel",
              subTitle: "Add by importing member’s file",
              form: <ImportMemberForm />,
            });
            createDrawer.onOpen();
          }}
        />
        <StatsCard
          name={"Members"}
          number={"130"}
          curves={"2.45%"}
          decline={true}
        />
      </Flex>

      <DataTable
        headers={columnHeaders}
        data={data}
        tableTitle={"Member Overview"}
      />
    </Box>
  );
};

export default Members;
