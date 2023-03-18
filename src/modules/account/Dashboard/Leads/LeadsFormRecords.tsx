import {
  Box,
  Checkbox,
  Flex,
  HStack,
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import React from "react";
import NameColumn from "../Members/components/NameColumn";
import RowMenu from "../sharedComponents/RowMenu";
import DataTable from "../sharedComponents/DataTable";
import { BsTelephone } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import { STATUS_BADGE } from "./constants";

export const buildLeadRow = (
  leads: any,
  rowMenuOptionsFunction: any,
  handleCheckBox?: () => void
) => {
  return leads.map(({ id, lead, contact, status, source, owner }: any) => {
    return {
      selector: <Checkbox onChange={handleCheckBox} value={id} />,
      "Lead Name": (
        <NameColumn name={lead.name} subText={lead.createdAt} img={lead.img} />
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
  const columnHeaders = [
    "",
    "Lead Name",
    "Contact",
    "Status",
    "Source",
    "Owner",
    "",
  ];
  const dataStore = [
    {
      id: 1,
      lead: {
        img: "https://bit.ly/sage-adebayo",
        name: "John Doe",
        createdAt: "Today at 2:30pm",
      },
      contact: {
        email: "gab@gmail.com",
        phone: "08012345678",
      },
      source: "External Link",
      owner: {
        name: "Gabriel",
        img: "https://bit.ly/sage-adebayo",
      },
      status: "Emailed",
    },
    {
      id: 2,
      lead: {
        img: "https://bit.ly/sage-adebayo",
        name: "John Doe",
        createdAt: "Today at 2:30pm",
      },
      contact: {
        email: "gab@gmail.com",
        phone: "08012345678",
      },
      source: "External Link",
      owner: {
        name: "Gabriel",
        img: "https://bit.ly/sage-adebayo",
      },
      status: "Emailed",
    },
    {
      id: 3,
      lead: {
        img: "https://bit.ly/sage-adebayo",
        name: "John Doe",
        createdAt: "Today at 2:30pm",
      },
      contact: {
        email: "gab@gmail.com",
        phone: "08012345678",
      },
      source: "External Link",
      owner: {
        name: "Gabriel",
        img: "https://bit.ly/sage-adebayo",
      },
      status: "Emailed",
    },
  ];

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

  const handleCheckBox = () => {
    console.log("checkbox clicked");
  };

  const data = buildLeadRow(dataStore, rowMenuOptions, handleCheckBox);
  return (
    <Box>
      <DataTable
        headers={columnHeaders}
        data={data}
        tableTitle={"Leads Overview"}
      />
    </Box>
  );
};

export default LeadsFormRecords;
