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
import React from "react";
import { CiMenuKebab } from "react-icons/ci";
import DataTable from "../sharedComponents/DataTable";
import StatsCard from "../sharedComponents/StatsCard";
import AddMemberButton from "./components/AddMemberButton";
import NameColumn from "./components/NameColumn";
import RowMenu from "./components/RowMenu";

export const buildMemberRow = (members: any) => {
  return members.map((member: any) => {
    return {
      name: (
        <NameColumn name={member.name} email={member.email} img={member.img} />
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
          <RowMenu />
        </Flex>
      ),
    };
  });
};

const Members = () => {
  const memberDrawer = useDisclosure();
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

  const data = buildMemberRow(dataStore);

  return (
    <Box>
      <Drawer
        isOpen={memberDrawer.isOpen}
        onClose={memberDrawer.onClose}
        placement="right"
        size={"md"}
      >
        {/* <DrawerOverlay /> */}
        <DrawerContent>
          <DrawerCloseButton />
          <>Hello</>
        </DrawerContent>
      </Drawer>

      <Box py={[8]}>
        <Heading>Team Members</Heading>
        <Text>Add a member by using any of the options below</Text>
      </Box>

      <Flex flexDirection={["column", "column", "row"]} gap={4}>
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

      <DataTable
        headers={columnHeaders}
        data={data}
        tableTitle={"Member Overview"}
      />
    </Box>
  );
};

export default Members;
