import { Box, Button, Text, useDisclosure } from "@chakra-ui/react";
import { useTour } from "@reactour/tour";
import CustomDrawer from "components/CustomDrawer";
import { ACTION_FORM_STATUS, AppIcons } from "modules/account/constants";
import { APP_SCREEN } from "modules/account/types";
import { tourActionConfig } from "modules/Tour";
import React, { useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import { ONBOARDING_TOUR } from "utils/constants";
import { ActionsType } from "utils/types";
import ActionItem from "./ActionItem";

const AddAction = ({
  handleSelectedTab,
  setSelectedAction,
  actions,
  setFormStatus,
  currentScreenState,
  ...rest
}: {
  currentScreenState?: string;
  actions: ActionsType[];
  setFormStatus: (status: ACTION_FORM_STATUS) => void;
  setSelectedAction: (action: ActionsType) => void;
  handleSelectedTab: (tab: APP_SCREEN) => void;
}) => {
  const { setIsOpen: setIsTourOpen, setSteps } = useTour();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isOnBoarded = localStorage.getItem(ONBOARDING_TOUR);

  useEffect(() => {
    if (!isOnBoarded || isOnBoarded !== "1") {
      setSteps && setSteps(tourActionConfig);
      setIsTourOpen(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isOpen) {
      setIsTourOpen(false);
      if (currentScreenState === APP_SCREEN.ACTIONS) {
        localStorage.setItem(ONBOARDING_TOUR, "1");
      }
    }
    return () => {
      setIsTourOpen(false);
      if (currentScreenState === APP_SCREEN.ACTIONS) {
        localStorage.setItem(ONBOARDING_TOUR, "1");
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const handleEditScreen = (selectedAction: ActionsType) => {
    setFormStatus(ACTION_FORM_STATUS.ADD);
    handleSelectedTab(APP_SCREEN.EDIT);
    setSelectedAction(selectedAction);
    onClose();
  };

  return (
    <Box>
      <Button
        id={"add-action-button"}
        borderWidth={1}
        borderColor={"brand.100"}
        borderRadius={0}
        bg={"brand.100"}
        onClick={onOpen}
        {...rest}
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
                  key={action.fieldTitle}
                  title={action.fieldTitle}
                  Icon={AppIcons[action.fieldTitle]}
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
