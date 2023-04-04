import { Box, Flex, HStack, Tag, TagLabel, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import NameColumn from "../Members/components/NameColumn";
import RowMenu from "../sharedComponents/RowMenu";
import DataTable from "../sharedComponents/DataTable";
import { BsTelephone } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import { STATUS_BADGE } from "./constants";
import { useTypedDispatch, useTypedSelector } from "redux/store";
import { getLeadsResponseAction } from "./actions";
import { buildLeadsDownloadableData } from "../sharedComponents/DataTable/functions";

export const buildLeadRow = (leads: any, rowMenuOptionsFunction: any) => {
  return leads.map(({ lead, contact, status, source, owner }: any) => {
    return {
      "Lead Name": (
        <NameColumn
          name={lead.name}
          subText={lead.createdAt}
          timer
          img={lead.img}
        />
      ),
      Contact: (
        <Flex flexDirection={["column"]} alignItems={"flex-start"}>
          <HStack>
            <IoMailOutline />
            <Text fontSize={14}>{contact.email}</Text>
          </HStack>
          <HStack>
            <BsTelephone />
            <Text fontSize={14}>{contact.phone}</Text>
          </HStack>
        </Flex>
      ),
      status: (
        <Flex justifyContent={["none", "space-between"]}>
          <Tag
            px={[4]}
            py={[1]}
            size={"sm"}
            variant="subtle"
            bg={STATUS_BADGE[status]}
            rounded={"full"}
          >
            <TagLabel color={"white"}>{status}</TagLabel>
          </Tag>
        </Flex>
      ),
      source: source,
      owner: <NameColumn name={owner.name} img={owner.img} />,
      actions: <RowMenu menuOption={rowMenuOptionsFunction(lead)} />,
    };
  });
};

const LeadsFormRecords = ({ selectForm }: any) => {
  const dispatch = useTypedDispatch();
  const { leads, loading } = useTypedSelector(
    (state) => state.dashboard
  ) as any;

  useEffect(() => {
    dispatch(getLeadsResponseAction("ALL"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const rowMenuOptions = (member: any) => {
    return [
      {
        id: 1,
        title: "Edit Lead",
        onClick: () => {
          //   setActiveMember(member);
          //   memberDrawer.onOpen();
        },
      },
      {
        id: 2,
        title: "Update Status",
        onClick: () => {},
      },
    ];
  };

  const columnHeaders =
    leads?.length > 0
      ? Object.keys(leads[0])
      : ["Lead Name", "Contact", "Status", "Source", "Owner", ""];

  const handleCheckBox = (row: any) => {
    // console.log("checkbox clicked >>> ", row);
  };

  return (
    <Box>
      <DataTable
        checkable
        loading={loading}
        headers={columnHeaders}
        data={leads}
        tableTitle={"Leads Overview"}
        onCheck={handleCheckBox}
        excludeProps={["id", "cardSerialId", "userCardActionId"]}
        downloadableData={{
          data: leads,
          buildMethod: buildLeadsDownloadableData,
        }}
      />
    </Box>
  );
};

export default LeadsFormRecords;
