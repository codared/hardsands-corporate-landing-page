import {
  Box,
  Flex,
  Heading,
  Progress,
  Tag,
  TagLabel,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import DataTable from "../../sharedComponents/DataTable";
import CustomDrawer from "components/CustomDrawer";
import StatsCard from "../../sharedComponents/StatsCard";
import AddMemberButton from "../../Members/components/AddMemberButton";
import MemberProfile from "../../Members/components/MemberProfile";
import NameColumn from "../../Members/components/NameColumn";
import RowMenu from "../../sharedComponents/RowMenu";
import CreateMemberForm from "../../Members/components/CreateMemberForm";
import ImportMemberForm from "../../Members/components/ImportMemberForm";
import { editMembersAction, getMembersAction } from "../../Members/actions";
import { useTypedDispatch, useTypedSelector } from "redux/store";
import { DashboardReducerState } from "../../types";
import { getAllActionsActions } from "modules/account/actions";
import { Member } from "../../Members/types";

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
            value={member.totalCardVisits}
            w={"full"}
            mr={[2]}
          />
          <Text>{member.totalCardVisits}%</Text>
        </Flex>
      ),
      clicks: member.totalCardVisits,
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

const AssignEvent = () => {
  const dispatch = useTypedDispatch();
  const { members, loading } = useTypedSelector(
    (state) => state.dashboard
  ) as DashboardReducerState;
  const createDrawer = useDisclosure();
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
          setDrawerFormState({
            name: "Edit Member",
            subTitle: "Update Member details",
            form: <MemberProfile showActions={false} member={member} />,
          });
          createDrawer.onOpen();
        },
      },
      {
        id: 2,
        title: "Set Permissions",
        onClick: () => {
          setDrawerFormState({
            name: "Set permissions",
            subTitle: "Add and update member card actions",
            form: <MemberProfile showForm={false} member={member} />,
          });
          createDrawer.onOpen();
        },
      },
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
    dispatch(getAllActionsActions());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box>
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
        <Heading>Templates</Heading>
        <Text color="#737373" fontSize="14px">
          Please select one of the template to assign and modify any card action
          to any member of your team
        </Text>
      </Box>

      <DataTable
        loading={loading}
        headers={columnHeaders}
        data={data}
        tableTitle={"Member Overview"}
        checkable
      />
    </Box>
  );
};

export default AssignEvent;
