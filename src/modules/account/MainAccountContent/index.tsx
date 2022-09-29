import { Box, useDisclosure, useToast } from "@chakra-ui/react";
import CustomDrawer from "components/CustomDrawer";
import React, { useEffect, useState } from "react";
import { AiOutlineEdit, AiOutlineStar } from "react-icons/ai";
import { useTypedDispatch, useTypedSelector } from "redux/store";
import { mergeActionFields } from "utils/functions";
import { ActionsType } from "utils/types";
import {
  getAllActionsActions,
  getUserCardsAction,
  getUserCardActionsActions,
  getCardStatisticsAction,
  setUserCardsActionDefaultAction,
  addUserCardsAction,
  updateUserCardsAction,
} from "../actions";
import Loader from "../components/Loader";
import NoCardMessage from "../components/NoCardMessage";
import QRCodeShareSection from "../components/QRCodeShareSection";
import { ACTION_FORM_STATUS, AppIcons } from "../constants";
import useScreenNavigation from "../hooks";
import { APP_SCREEN, UserCardType } from "../types";
import ActionCards from "./components/ActionCards";
import ActionItem from "./components/ActionItem";
import EditFormScreen from "./components/EditFormScreen";
import MenuItem from "./components/MenuItem";
import NavigationBar from "./components/NavigatorBar";
import ScreenSelectorTabs from "./components/ScreenSelectorTabs";
import StatisticsScreen from "./components/StatisticsScreen";

function MainIndex() {
  const toast = useToast();
  const reduxDispatch = useTypedDispatch();
  const appError = useTypedSelector((state) => state.app?.error);
  const loading = useTypedSelector((state) => state.app?.loading);
  const cardActions = useTypedSelector((state) => state.app?.cardActions);
  const actions = useTypedSelector((state) => state.app?.allActions);
  const cardStatistics = useTypedSelector((state) => state.app?.cardStatistics);
  const cards = useTypedSelector((state) => state.app?.cards as UserCardType[]);
  const { screenState, currentScreenState, handleSelectedTab, handleGoBack } =
    useScreenNavigation();
  const [selectedAction, setSelectedAction] = useState<ActionsType | null>(
    null
  );
  const {
    isOpen: isActionCardDrawerOpen,
    onOpen: onActionCardDrawerOpen,
    onClose: onActionCardDrawerClose,
  } = useDisclosure();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formStatus, setFormStatus] = useState<string>(ACTION_FORM_STATUS.ADD);

  const handleActionSelect = (action: ActionsType) => {
    setSelectedAction(action);
  };

  useEffect(() => {
    reduxDispatch(getAllActionsActions());
    reduxDispatch(getUserCardsAction()).then((cards) => {
      if (cards && cards.length) {
        reduxDispatch(getUserCardActionsActions(cards[0].cardSerial));
        reduxDispatch(getCardStatisticsAction(cards[0].cardSerial));
      }
    });
  }, []);

  const handleActionSubmit = (formData: any) => {
    setIsSubmitting(true);
    if (formData.phone && !formData.phoneCode) {
      setIsSubmitting(false);
      reduxDispatch({
        type: "APP_ERROR",
        payload: {
          isError: true,
          name: "Phone Code",
          message: "Phone code is required",
        } as any,
      });
      return;
    }
    if (
      (formData.phone && isNaN(formData.phone)) ||
      (formData.phone && !(formData.phone.match(/\d/g).length <= 11))
    ) {
      setIsSubmitting(false);
      reduxDispatch({
        type: "APP_ERROR",
        payload: {
          isError: true,
          name: "Phone",
          message: "Phone Number must be a valid phone number",
        } as any,
      });
      return;
    }
    formData = {
      ...formData,
      cardSerialId: cards[0].cardSerial,
      actionId: formData.id,
    };
    let {
      fields,
      title,
      isDefault,
      id,
      action,
      type,
      requiresCountryCode,
      ...rest
    } = formData;

    if (formStatus === ACTION_FORM_STATUS.ADD) {
      reduxDispatch(addUserCardsAction(rest)).then((res) => {
        setIsSubmitting(false);
        toast({
          position: "bottom",
          title: "Success",
          description: "Action Added Successfully",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        handleGoBack(screenState[screenState.length - 1]);
      });
    }
    if (formStatus === ACTION_FORM_STATUS.EDIT) {
      reduxDispatch(updateUserCardsAction(rest)).then((res) => {
        setIsSubmitting(false);
        toast({
          position: "bottom",
          title: "Success",
          description: "Updated Successfully",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        handleGoBack(screenState[screenState.length - 1]);
      });
    }
  };

  const handleSetDefault = (id: number) => {
    onActionCardDrawerClose();
    reduxDispatch(setUserCardsActionDefaultAction(cards[0].cardSerial, id));
  };

  const handleEdit = (id: number) => {
    setFormStatus(ACTION_FORM_STATUS.EDIT);
    handleSelectedTab(APP_SCREEN.EDIT);
    onActionCardDrawerClose();
    // The cardActions fields dont have the required properties to
    // render the form so we have use the ACTIONS constants
    const mergedActions = mergeActionFields(cardActions as ActionsType[], id);
    handleActionSelect(mergedActions);
  };

  useEffect(() => {
    if (appError.isError) {
      toast({
        position: "top-right",
        title: appError.name,
        description: appError.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  }, [appError, toast]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Box>
      <NavigationBar
        screenState={screenState}
        currentScreenState={currentScreenState}
        handleScreenChange={handleGoBack}
        handleSelectedTab={handleSelectedTab}
        actions={actions as ActionsType[]}
        setSelectedAction={setSelectedAction}
        setFormStatus={setFormStatus}
      />
      {!cards || !cards.length ? (
        <NoCardMessage />
      ) : (
        <Box as={"main"} transition={"all 200ms ease-in-out"}>
          <>
            {currentScreenState === APP_SCREEN.HOME && (
              <>
                <ScreenSelectorTabs
                  currentScreenState={currentScreenState}
                  handleSelectedTab={handleSelectedTab}
                />

                {/* QR code share section */}
                <QRCodeShareSection card={cards[0]} />
                {/* End QR code share section */}
              </>
            )}

            {currentScreenState === APP_SCREEN.ACTIONS && (
              <ActionCards
                handleSelectedTab={handleSelectedTab}
                setSelectedAction={setSelectedAction}
                cardActions={cardActions as ActionsType[]}
                onOpen={onActionCardDrawerOpen}
              />
            )}
            {currentScreenState === APP_SCREEN.STATS && (
              <StatisticsScreen cardStatistics={cardStatistics} />
            )}
            {!!selectedAction && currentScreenState === APP_SCREEN.EDIT && (
              <EditFormScreen
                isSubmitting={isSubmitting}
                selectedAction={selectedAction}
                handleActionSubmit={handleActionSubmit}
              />
            )}

            {!!selectedAction && isActionCardDrawerOpen && (
              <CustomDrawer
                onClose={onActionCardDrawerClose}
                isOpen={isActionCardDrawerOpen}
              >
                <>
                  <ActionItem
                    Icon={AppIcons[selectedAction?.title]}
                    title={selectedAction?.title}
                    withIcon={false}
                  />
                  {!selectedAction.isDefault && (
                    <MenuItem
                      title="Set as default"
                      Icon={AiOutlineStar}
                      onClick={() => {
                        handleSetDefault(selectedAction?.id as number);
                      }}
                    />
                  )}
                  <MenuItem
                    title="Edit"
                    Icon={AiOutlineEdit}
                    onClick={() => {
                      console.log(selectedAction);
                      handleEdit(selectedAction?.id as number);
                    }}
                  />
                </>
              </CustomDrawer>
            )}
          </>
        </Box>
      )}
    </Box>
  );
}

export default MainIndex;
