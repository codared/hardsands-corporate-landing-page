import { Box, Button, Text, useDisclosure } from "@chakra-ui/react";
import CustomDrawer from "components/CustomDrawer";
import { ACTION_FORM_STATUS, AppIcons } from "modules/account/constants";
import { APP_SCREEN } from "modules/account/types";
import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";
import { ActionsType } from "utils/types";
import ActionItem from "./ActionItem";

const AddAction = ({
  handleSelectedTab,
  setSelectedAction,
  actions,
  setFormStatus,
}: {
  actions: ActionsType[];
  setFormStatus: (status: ACTION_FORM_STATUS) => void;
  setSelectedAction: (action: ActionsType) => void;
  handleSelectedTab: (tab: APP_SCREEN) => void;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleEditScreen = (selectedAction: ActionsType) => {
    setFormStatus(ACTION_FORM_STATUS.ADD);
    handleSelectedTab(APP_SCREEN.EDIT);
    setSelectedAction(selectedAction);
    onClose();
  };

  return (
    <Box>
      <Button
        borderWidth={1}
        borderColor={"brand.100"}
        borderRadius={0}
        bg={"brand.100"}
        onClick={onOpen}
      >
        <Box mr={3} alignSelf={"center"}>
          <FiPlus size={20} />
        </Box>
        <Text>Add Action</Text>
      </Button>
      {isOpen && (
        <CustomDrawer onClose={onClose} isOpen={isOpen} title={"Add Actions"}>
          <>
            {actions.map((action: ActionsType) => {
              return (
                <ActionItem
                  key={action.title}
                  title={action.title}
                  Icon={AppIcons[action.title]}
                  handleActionSelect={() => handleEditScreen(action)}
                />
              );
            })}
          </>
        </CustomDrawer>
      )}
    </Box>
  );
};

export default AddAction;
