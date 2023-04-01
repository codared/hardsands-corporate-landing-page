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
import React, { useEffect, useState } from "react";
import DataTable from "../sharedComponents/DataTable";
import CustomDrawer from "components/CustomDrawer";
import StatsCard from "../sharedComponents/StatsCard";
import AddMemberButton from "./components/AddMemberButton";
import MemberProfile from "./components/MemberProfile";
import NameColumn from "./components/NameColumn";
import RowMenu from "../sharedComponents/RowMenu";
import CreateMemberForm from "./components/CreateMemberForm";
import ImportMemberForm from "./components/ImportMemberForm";
import { editMembersAction, getMembersAction } from "./actions";
import { useTypedDispatch, useTypedSelector } from "redux/store";
import { DashboardReducerState, Member } from "../reducer";

export const buildMemberRow = (members: any, rowMenuOptions: any) => {
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
          <RowMenu menuOption={rowMenuOptions(member)} />
        </Flex>
      ),
    };
  });
};

const Members = () => {
  const dispatch = useTypedDispatch();
  const { members, loading } = useTypedSelector(
    (state) => state.dashboard
  ) as DashboardReducerState;
  const memberDrawer = useDisclosure();
  const createDrawer = useDisclosure();
  const [activeMember, setActiveMember] = useState({});
  const [drawerFormState, setDrawerFormState] = useState({
    name: "",
    subTitle: "",
    form: <></>,
  });
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
      // {
      //   id: 2,
      //   title: "Set Permissions",
      //   onClick: () => {},
      // },
      {
        id: 3,
        title: member.isActive ? "Lock Profile" : "Unlock Profile",
        onClick: () => {
          dispatch(
            editMembersAction({ isActive: !member.isActive }, member.id)
          );
        },
      },
      // {
      //   id: 4,
      //   title: "View Report",
      //   onClick: () => {},
      // },
      // {
      //   id: 5,
      //   title: "Remove Member",
      //   onClick: () => {},
      // },
    ];
  };

  const data = buildMemberRow(members, rowMenuOptions);

  useEffect(() => {
    dispatch(getMembersAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          number={String(members.length)}
          // curves={"2.45%"}
          // decline={true}
        />
      </Flex>

      <DataTable
        loading={loading}
        headers={columnHeaders}
        data={data}
        tableTitle={"Member Overview"}
      />
    </Box>
  );
};

export default Members;
