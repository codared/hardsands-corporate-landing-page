import { useState } from "react";
import {
  Box,
  Text,
  Heading,
  Flex,
  Progress,
  Tag,
  TagLabel,
  useDisclosure,
} from "@chakra-ui/react";
import StatsCard from "../sharedComponents/StatsCard";
import NameColumn from "../Members/components/NameColumn";
import RowMenu from "../sharedComponents/RowMenu";
import DataTable from "../sharedComponents/DataTable";

const buildMemberRow = (members: any, rowMenuOptions: any) => {
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

const DeviceWithId = () => {
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
    {
      img: "https://bit.ly/sage-adebayo",
      name: "John Doe",
      email: "gab@hardsands.com",
      usage: 10,
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
      <Heading>Device</Heading>{" "}
      <Text color="#737373" fontSize="14px">
        Please find below a list of members who have been assigned cards
      </Text>
      <Box
        display="flex"
        flexDir={["column", "row"]}
        justifyContent={[""]}
        gap="8"
        mt="8"
      >
        <StatsCard
          name="Card Monthly Activity"
          number="130"
          bgColor="#fef8f3"
        />
        <StatsCard name="Total Cards" number="11" />
        <StatsCard showMenu={false} name="Unassigned Cards" number="6" />
      </Box>
      <DataTable
        headers={columnHeaders}
        data={data}
        tableTitle={"Card Holders"}
      />
    </Box>
  );
};

export default DeviceWithId;
