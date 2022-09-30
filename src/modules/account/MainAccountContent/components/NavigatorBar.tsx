import { Flex, Box } from "@chakra-ui/react";
import { ACTION_FORM_STATUS } from "modules/account/constants";
import { MdArrowBackIos } from "react-icons/md";
import { ActionsType } from "utils/types";
import { APP_SCREEN } from "../../types";
import AddAction from "./AddAction";

const NavigationBar = ({
  text = "Back",
  currentScreenState,
  screenState,
  handleScreenChange,
  handleSelectedTab,
  setSelectedAction,
  actions,
  setFormStatus,
}: {
  text?: string;
  actions: ActionsType[];
  currentScreenState: APP_SCREEN;
  screenState: Array<APP_SCREEN>;
  handleScreenChange: (screen: APP_SCREEN) => void;
  handleSelectedTab: (tab: APP_SCREEN) => void;
  setSelectedAction: (action: ActionsType) => void;
  setFormStatus: (status: ACTION_FORM_STATUS) => void;
}) => {
  return (
    <Flex h={"40px"} mb={6} justifyContent={"space-between"}>
      {screenState[screenState.length - 1] !== APP_SCREEN.HOME ? (
        <Flex
          color="brand.300"
          fontWeight={"bolder"}
          alignSelf={"center"}
          cursor="pointer"
          onClick={() =>
            handleScreenChange(screenState[screenState.length - 1])
          }
        >
          <Box ml={3} alignSelf={"center"}>
            <MdArrowBackIos size={20} />
          </Box>
          {text}
        </Flex>
      ) : (
        <Box>Home</Box>
      )}
      <Flex>
        {screenState[screenState.length - 1] === APP_SCREEN.ACTIONS &&
          currentScreenState === APP_SCREEN.ACTIONS && (
            <AddAction
              actions={actions}
              setSelectedAction={setSelectedAction}
              handleSelectedTab={handleSelectedTab}
              setFormStatus={setFormStatus}
            />
          )}
      </Flex>
    </Flex>
  );
};

export default NavigationBar;
