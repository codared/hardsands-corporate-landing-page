import {
  Box,
  Flex,
  Heading,
  Tag,
  TagLabel,
  Text,
  useDisclosure,
  Image,
  Tooltip,
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
import {
  editMembersAction,
  getMembersAction,
  removeMemberAction,
} from "./actions";
import { useTypedDispatch, useTypedSelector } from "redux/store";
import { AccessDashboardReducerState } from "../types";
import { getAllActionsActions } from "modules/account/actions";
import { Member } from "./types";
import { GoldMembershipIcon, SilverMembershipIcon } from "assets";
import ContactColumn from "./components/ContactColumn";
import moment from "moment";

export const buildMemberRow = (members: any, rowMenuOptions: any) => {
  return members.map((member: Member) => {
    return {
      name: <NameColumn name={member.fullName} />,
      clicks: member.totalCardHits,
      contact: <ContactColumn email={member.email} phone={member.phone} />,
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
      membershipDueDate: (
        <Text
          color={
            moment().isAfter(moment(member.membershipDueDate))
              ? "red"
              : "inherit"
          }
        >
          {moment(member.membershipDueDate).format("DD MMM YYYY")}{" "}
          {moment().isAfter(moment(member.membershipDueDate)) && "❗"}
        </Text>
      ),
      tag: (
        <Flex justifyContent={["none", "space-between"]}>
          <Tooltip
            hasArrow
            label={`${member.tag} membership tag`}
            fontSize="md"
          >
            <Box py={[1]}>
              {member.tag === "gold" && (
                <Image src={GoldMembershipIcon.src} alt="Gold Membership" />
              )}
              {member.tag === "silver" && (
                <Image src={SilverMembershipIcon.src} alt="Silver Membership" />
              )}
              {!member.tag && <Text>-</Text>}
            </Box>
          </Tooltip>
        </Flex>
      ),
      actions: <RowMenu menuOption={rowMenuOptions(member)} />,
    };
  });
};

const Members = () => {
  const dispatch = useTypedDispatch();
  const { members, loading } = useTypedSelector(
    (state) => state.dashboard
  ) as AccessDashboardReducerState;

  const createDrawer = useDisclosure();
  const [drawerFormState, setDrawerFormState] = useState({
    name: "",
    subTitle: "",
    form: <></>,
  });
  const columnHeaders = [
    "Name",
    "Membership usage",
    "Contacts",
    "Card Status",
    "Membership  Due Date",
    "Tag",
    ""
  ];

  const rowMenuOptions = (member: any) => {
    return [
      {
        id: 1,
        title: "Edit Member",
        onClick: () => {
          setDrawerFormState({
            name: "Edit Member",
            subTitle: "Update Member details",
            form: (
              <MemberProfile
                showActions={false}
                member={member}
                handleSubmitComplete={handleSubmitComplete}
              />
            ),
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
      {
        id: 5,
        title: "Remove Member",
        onClick: async () => {
          await dispatch(removeMemberAction(member.id));
          dispatch(getMembersAction());
        },
      },
    ];
  };

  const data = buildMemberRow(members, rowMenuOptions);

  useEffect(() => {
    dispatch(getMembersAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmitComplete = () => {
    createDrawer.onClose();
  };

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
        <Text color="#737373" fontSize="14px">
          Add a member by using any of the options below
        </Text>
        <Heading>Team Members</Heading>
      </Box>

      <Flex mt="8" flexDirection={["column", "column", "row"]} gap="8">
        <AddMemberButton
          title={"Add Manually"}
          subtitle={"Enter Member Details"}
          onClick={() => {
            setDrawerFormState({
              name: "Add Manually",
              subTitle: "Enter Member Details",
              form: (
                <CreateMemberForm handleSubmitComplete={handleSubmitComplete} />
              ),
            });
            createDrawer.onOpen();
          }}
        />
        <AddMemberButton
          title={"Import CSV/Excel"}
          subtitle={"Import your member sheet"}
          onClick={() => {
            setDrawerFormState({
              name: "Add Member via Import CSV/Excel",
              subTitle: "Import your member sheet",
              form: <ImportMemberForm />,
            });
            createDrawer.onOpen();
          }}
        />
        <StatsCard name={"Members"} number={String(members.length)} />
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
