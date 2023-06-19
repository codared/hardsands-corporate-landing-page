import {
  Box,
  Heading,
  Flex,
  Button,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import CustomDrawer from "components/CustomDrawer";
import { AppIcons } from "modules/account/constants";
import { getOnlyActions, slugify } from "modules/account/functions";
import ActionItem from "modules/account/MainAccountContent/components/ActionItem";
import { getCardImageFromSlug } from "modules/products/functions";
import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import { useTypedDispatch, useTypedSelector } from "redux/store";
import { ActionsType } from "utils/types";
import { Member } from "../../Members/types";
import {
  addActionToMembersAction,
  removeActionToMembersAction,
} from "../actions";
import NameColumn from "./NameColumn";

const excludeActions = ["Consultation Form", "Coming soon Form"];

const ActionsPermissions = ({ member }: { member: Member }) => {
  const actionDrawer = useDisclosure();

  const [actionsToUpdate, setActionsToUpdate] = useState(member.actions);
  const [addingAction, setAddingAction] = useState(false);
  const actions = useTypedSelector((state) => state.app?.allActions);
  const dispatch = useTypedDispatch();
  const [selectedActions, setSelectedActions] = useState<number[]>([]);

  // filter the ACTION array to remove the actions that are already in the actions array
  const filteredActions =
    !!actions && actions.length > 0
      ? actions.filter((action: ActionsType) => {
          // Take out coming soon and Consultation Form from add action
          if (excludeActions.includes(action.fieldTitle)) {
            return;
          }
          // Select only the actions that are not in the member actions
          return !actionsToUpdate?.some((act: any) => {
            return act.action === action.fieldTitle;
          });
        })
      : [];

  // select multiple actions and add them to the member
  const handleAddActions = async () => {
    const payload = {
      actionId: selectedActions,
    };
    setAddingAction(true);
    try {
      const res = await dispatch(addActionToMembersAction(payload, member.id));

      if (res.length) {
        setAddingAction(false);
        setSelectedActions([]);
        setActionsToUpdate(getOnlyActions(res));
        actionDrawer.onClose();
      }
    } catch (error) {
      setAddingAction(false);
    }
  };

  // on select action push it to state
  const onSelect = (id: number) => {
    setSelectedActions([...selectedActions, id]);
  };

  let img;
  if (member?.cards && member?.cards.length > 0) {
    img = getCardImageFromSlug(slugify(member?.cards[0].variant));
  }

  return (
    <Box position={"relative"}>
      <CustomDrawer
        title={"Add Actions"}
        size={"xs"}
        placement="right"
        isOpen={actionDrawer.isOpen}
        onClose={actionDrawer.onClose}
      >
        <>
          <Flex direction={"column"} py={[6]}>
            {filteredActions &&
              filteredActions?.length > 0 &&
              filteredActions.map((action: ActionsType) => {
                return (
                  <ActionItem
                    // @ts-ignore
                    isActive={selectedActions.includes(action?.id)}
                    key={action.fieldTitle}
                    title={action.fieldTitle}
                    Icon={AppIcons[action.fieldTitle]}
                    handleActionSelect={() => {
                      action?.id && onSelect(action.id);
                    }}
                  />
                );
              })}
          </Flex>
          <Button
            w={"full"}
            color="white"
            bg={"brand.300"}
            _hover={{ textColor: "black", bg: "brand.200" }}
            borderRadius={"none"}
            py={[6]}
            onClick={handleAddActions}
            isLoading={addingAction}
            loadingText={"Adding..."}
          >
            <MdAdd size={24} />
            <Text>Add Action</Text>
          </Button>
        </>
      </CustomDrawer>

      <Box>
        <Image
          rounded={"lg"}
          src={img || "https://via.placeholder.com/150x150?text=No+Image"}
          alt={member.fullName}
        />
        <Box py={[6]}>
          <NameColumn
            name={member.fullName}
            subText={member.email}
            // img={member.img}
            isActive={member.isActive}
          />
        </Box>
      </Box>

      <Box>
        <Heading size={"md"}>Active Actions</Heading>
        <Flex direction={"column"} py={[6]}>
          {actionsToUpdate && actionsToUpdate?.length > 0 ? (
            actionsToUpdate.map((action) => (
              <ActionItem
                key={action.id}
                title={action.action}
                Icon={AppIcons[action.action]}
                handleActionSelect={async (setLoading?: any) => {
                  setLoading(true);
                  const payload = {
                    actionId: [action.id],
                  };
                  try {
                    const res = await dispatch(
                      removeActionToMembersAction(payload, member.id)
                    );
                    setLoading(false);

                    setActionsToUpdate(getOnlyActions(res));
                  } catch (error) {
                    setLoading(false);
                  }
                }}
                iconColor={"black"}
                withIcon={false}
                remove
              />
            ))
          ) : (
            <Text>No Actions</Text>
          )}
        </Flex>
        <Button
          w={"full"}
          color="white"
          bg={"brand.300"}
          _hover={{ textColor: "black", bg: "brand.200" }}
          borderRadius={"none"}
          py={[6]}
          onClick={actionDrawer.onOpen}
        >
          <MdAdd size={24} />
          <Text>Add Action</Text>
        </Button>
      </Box>
    </Box>
  );
};

export default ActionsPermissions;
