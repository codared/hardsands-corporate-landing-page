import { useEffect, useState } from "react";
import {
  Box,
  Text,
  Heading,
  Flex,
  Progress,
  useDisclosure,
  Tag,
  TagLabel,
} from "@chakra-ui/react";
import StatsCard from "../sharedComponents/StatsCard";
import NameColumn from "../Members/components/NameColumn";
import DataTable from "../sharedComponents/DataTable";
import { useTypedDispatch, useTypedSelector } from "redux/store";
import { getReportsAction } from "./actions";
import { Member } from "../reducer";

export const buildMemberRow = (members: any, rowMenuOptions?: any) => {
  return members.map((member: Member) => {
    return {
      name: (
        <NameColumn
          name={member.fullName}
          subText={member.email}
          // img={member.img}
        />
      ),
      usage: (
        <Flex flexDirection={["column", "row"]} alignItems={"center"}>
          <Progress
            rounded={"full"}
            size={"sm"}
            colorScheme={"orange"}
            value={member.cardVisits}
            w={"full"}
            mr={[2]}
          />
          <Text>{member.cardVisits}%</Text>
        </Flex>
      ),
      clicks: member.cardVisits,
      role: member.corporatePosition,
      status: (
        <Flex justifyContent={["none", "space-between"]}>
          <Tag
            px={[4]}
            py={[1]}
            size={"sm"}
            variant="subtle"
            bg={member.isActive ? "green.400" : "gray.300"}
            rounded={"full"}
          >
            <TagLabel color={"white"}>
              {member.isActive ? "Active" : "Inactive"}
            </TagLabel>
          </Tag>
        </Flex>
      ),
    };
  });
};

const Reports = () => {
  // @ts-ignore
  const { reports, loading } = useTypedSelector((state) => state.dashboard);
  const dispatch = useTypedDispatch();
  const memberDrawer = useDisclosure();
  const [activeMember, setActiveMember] = useState({});
  const columnHeaders = ["Name", "Card Usage", "Clicks", "Role", "Status"];

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

  const data = buildMemberRow(reports?.members);

  useEffect(() => {
    dispatch(getReportsAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCheckBox = (row: any) => {
    console.log("checkbox clicked >>> ", row);
  };

  return (
    <Box>
      <Heading>Reports</Heading>
      <Text color="#737373" fontSize="14px">
        Please review the information below to access and download your reports.
      </Text>
      <Box display="flex" flexDir={["column", "row"]} gap="8" mt="8">
        <StatsCard
          showMenu={false}
          name="Total Clicks"
          number={String(reports.totalClicks)}
        />
        <StatsCard
          showMenu={false}
          name="Members"
          number={String(reports.totalMembers)}
        />
        <StatsCard
          showMenu={false}
          name="Total Cards"
          number={String(reports.totalCards)}
          bgColor="#DF9F71"
          color="#fff"
        />
      </Box>
      <DataTable
        checkable
        loading={loading}
        headers={columnHeaders}
        data={data}
        tableTitle={"Reports Overview"}
        onCheck={handleCheckBox}
      />
    </Box>
  );
};

export default Reports;
