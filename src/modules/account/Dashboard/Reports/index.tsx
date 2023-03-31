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
  Button,
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
        // <Flex justifyContent={["none", "space-between"]}>
        //   <Tag
        //     px={[4]}
        //     py={[1]}
        //     size={"sm"}
        //     variant="subtle"
        //     bg={member.active ? "green.400" : "gray.300"}
        //     rounded={"full"}
        //   >
        //     <TagLabel color={"white"}>
        //       {member.active ? "Active" : "Inactive"}
        //     </TagLabel>
        //   </Tag>
        //   <RowMenu menuOption={rowMenuOptions(member)} />
        // </Flex>
        <Button bg="#48BB78" color="#fff">
          Download
        </Button>
      ),
    };
  });
};

const Reports = () => {
  const memberDrawer = useDisclosure();
  const createDrawer = useDisclosure();
  const [activeMember, setActiveMember] = useState({});
  const [drawerFormState, setDrawerFormState] = useState({
    name: "",
    subTitle: "",
    form: <></>,
  });
  const columnHeaders = ["Name", "Card Usage", "Clicks", "Role", "Reports"];
  const dataStore = [
    {
      id: 1,
      img: "https://bit.ly/sage-adebayo",
      name: "John Doe",
      email: "gab@hardsands.com",
      usage: 80,
      clicks: 200,
      role: "Developer",
      status: "Active",
    },
    {
      id: 2,
      img: "https://bit.ly/sage-adebayo",
      name: "John Doe",
      email: "gab@hardsands.com",
      usage: 100,
      clicks: 200,
      role: "Developer",
      status: "Active",
    },
    {
      id: 3,
      img: "https://bit.ly/sage-adebayo",
      name: "John Doe",
      email: "gab@hardsands.com",
      usage: 10,
      clicks: 200,
      role: "Developer",
      status: "Active",
    },
    {
      id: 4,
      img: "https://bit.ly/sage-adebayo",
      name: "John Doe",
      email: "gab@hardsands.com",
      usage: 10,
      clicks: 200,
      role: "Developer",
      status: "Active",
    },
    {
      id: 5,
      img: "https://bit.ly/sage-adebayo",
      name: "John Doe",
      email: "gab@hardsands.com",
      usage: 10,
      clicks: 200,
      role: "Developer",
      status: "Active",
    },
    {
      id: 6,
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
      <Heading>Reports</Heading>
      <Text color="#737373" fontSize="14px">
        Please review the information below to access and download your reports.
      </Text>
      <Box
        display="flex"
        flexDir={["column", "row"]}
        justifyContent={[""]}
        gap="8"
        mt="8"
      >
        <StatsCard name="Total Clicks" number="630" curves="2.45%" />
        <StatsCard name="Members" number="130" curves="2.45%" />
        <StatsCard
          showMenu={false}
          name="Activity"
          number="60%"
          bgColor="#DF9F71"
          color="#fff"
        />
      </Box>
      <DataTable
        headers={columnHeaders}
        data={data}
        tableTitle={"Member Overview"}
      />
    </Box>
  );
};

export default Reports;
