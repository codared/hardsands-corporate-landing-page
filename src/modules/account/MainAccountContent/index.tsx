import { Box, Flex, useDisclosure, useToast, Text } from "@chakra-ui/react";
import CustomDrawer from "components/CustomDrawer";
import React, { useEffect, useState } from "react";
import { AiOutlineEdit, AiOutlineStar } from "react-icons/ai";
import { useTypedDispatch, useTypedSelector } from "redux/store";
import { EMAIL_REGEX } from "utils/constants";
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
  getUserDetailsAction,
} from "../actions";
import Loader from "../components/Loader";
import NoCardMessage from "../components/NoCardMessage";
import { ACTION_FORM_STATUS, AppIcons } from "../constants";
import { NotFoundErrorMessage } from "../functions";
import useScreenNavigation from "../hooks";
import { uploadImageData } from "../services";
import { APP_SCREEN, UserCardType } from "../types";
import ActionCards from "./components/ActionCards";
import ActionItem from "./components/ActionItem";
import AddAction from "./components/AddAction";
import CardDetailView from "./components/CardDetailView";
import CardLists from "./components/CardLists";
import EditFormScreen from "./components/EditFormScreen";
import MenuItem from "./components/MenuItem";
import NavigationBar from "./components/NavigatorBar";
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
  const [selectedCard, setSelectedCard] = useState<UserCardType>(
    {} as UserCardType
  );
  const {
    screenState,
    currentScreenState,
    handleSelectedTab,
    handleGoBack,
    setIsSubmitting,
    isSubmitting,
  } = useScreenNavigation();
  const [selectedAction, setSelectedAction] = useState<ActionsType | null>(
    null
  );
  const {
    isOpen: isActionCardDrawerOpen,
    onOpen: onActionCardDrawerOpen,
    onClose: onActionCardDrawerClose,
  } = useDisclosure();
  const [formStatus, setFormStatus] = useState<string>(ACTION_FORM_STATUS.ADD);
  const [imageUploadData, setImageUploadData] = useState<{
    name: string;
    url: string;
  }>();

  const handleActionSelect = (action: ActionsType) => {
    setSelectedAction(action);
  };

  // Make all the API calls on mount of the component and
  // update the redux store with the data received from the API calls
  useEffect(() => {
    reduxDispatch(getUserDetailsAction());
    reduxDispatch(getAllActionsActions());
    reduxDispatch(getUserCardsAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (selectedCard.cardSerial) {
      reduxDispatch(getUserCardActionsActions(selectedCard.cardSerial));
      reduxDispatch(getCardStatisticsAction(selectedCard.cardSerial));
    }
  }, [reduxDispatch, selectedCard]);

  const handleImageUpload = async (data: string) => {
    try {
      if (!imageUploadData?.url) {
        return;
      }
      return await uploadImageData(imageUploadData.url, data);
    } catch (error) {
      setIsSubmitting(false);
      console.log(error);
      return;
    }
  };

  const handleActionSubmit = async (formData: any) => {
    setIsSubmitting(true);
    if (!!formData.profileImage) {
      if (formData.profileImage.size > 2097152) {
        reduxDispatch({
          type: "APP_ERROR",
          payload: {
            isError: true,
            name: "Profile Image",
            message: "Image file is too large, should be less than 2MB",
          } as any,
        });
        setIsSubmitting(false);
        return;
      }
      const res = await handleImageUpload(formData.profileImage);
      formData.profileImage = imageUploadData?.name;
    }

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
    if (
      (formData.id === 1 && !formData.name) ||
      (formData.id === 1 && !formData.title)
    ) {
      setIsSubmitting(false);
      reduxDispatch({
        type: "APP_ERROR",
        payload: {
          isError: true,
          name: "Missing fields",
          message: "Name or Title is required",
        } as any,
      });
      return;
    }

    // We might not need this
    if (formData.startDate && formData.time) {
      formData.time = `${formData.startDate}`;
    }

    const emailField =
      formData["workEmail"] ?? formData["personalEmail"] ?? formData["email"];
    if (emailField && !EMAIL_REGEX.test(emailField)) {
      setIsSubmitting(false);
      reduxDispatch({
        type: "APP_ERROR",
        payload: {
          isError: true,
          name: "Email",
          message: "Email must be valid",
        } as any,
      });
      return;
    }

    formData = {
      ...formData,
      cardSerialId: selectedCard.cardSerial,
      actionId: formData.id,
    };
    let {
      fields,
      fieldTitle,
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
        if (!res?.isError) {
          toast({
            position: "bottom",
            title: "Success",
            description: "Action Added Successfully",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
          handleGoBack(screenState[screenState.length - 1]);
        }
      });
    }
    if (formStatus === ACTION_FORM_STATUS.EDIT) {
      reduxDispatch(updateUserCardsAction(rest)).then((res) => {
        setIsSubmitting(false);
        if (!res?.isError) {
          toast({
            position: "bottom",
            title: "Success",
            description: "Updated Successfully",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
          handleGoBack(screenState[screenState.length - 1]);
        }
      });
    }
  };

  const handleSetDefault = (id: number) => {
    onActionCardDrawerClose();
    reduxDispatch(setUserCardsActionDefaultAction(selectedCard.cardSerial, id));
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
    if (appError?.isError) {
      toast({
        position: "top-right",
        title: NotFoundErrorMessage(appError.name),
        description: appError.message || "Please try again, or contact support.",
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
        card={selectedCard}
      />
      {!cards || !cards.length ? (
        <NoCardMessage />
      ) : (
        <Box as={"main"} transition={"all 200ms ease-in-out"}>
          <>
            {currentScreenState === APP_SCREEN.CARD && (
              <CardDetailView
                currentScreenState={currentScreenState}
                handleSelectedTab={handleSelectedTab}
                cardActions={cardActions}
                selectedCard={selectedCard}
                actions={actions}
                setSelectedAction={setSelectedAction}
                setFormStatus={setFormStatus}
              />
            )}
            {currentScreenState === APP_SCREEN.HOME && (
              <>
                {/* Cards list screen  */}
                <CardLists
                  cards={cards}
                  currentScreenState={currentScreenState}
                  handleCardSelect={(card: UserCardType) => {
                    setSelectedCard(card);
                    handleSelectedTab(APP_SCREEN.CARD);
                  }}
                />
              </>
            )}

            {currentScreenState === APP_SCREEN.ACTIONS && (
              <>
                {cardActions && cardActions.length > 0 ? (
                  <ActionCards
                    handleSelectedTab={handleSelectedTab}
                    setSelectedAction={setSelectedAction}
                    cardActions={cardActions as ActionsType[]}
                    onOpen={onActionCardDrawerOpen}
                  />
                ) : (
                  <Flex
                    w={"100%"}
                    h={"100%"}
                    justifyContent="center"
                    alignItems={"center"}
                  >
                    <Text textAlign={"center"}>
                      {"No Card Action has been set"}
                    </Text>
                  </Flex>
                )}
                <AddAction
                  actions={actions as ActionsType[]}
                  setSelectedAction={setSelectedAction}
                  handleSelectedTab={handleSelectedTab}
                  setFormStatus={setFormStatus}
                  currentScreenState={currentScreenState}
                  // @ts-ignore
                  w={"100%"}
                  mt={20}
                />
              </>
            )}
            {currentScreenState === APP_SCREEN.STATS && (
              <StatisticsScreen cardStatistics={cardStatistics} />
            )}
            {!!selectedAction && currentScreenState === APP_SCREEN.EDIT && (
              <EditFormScreen
                formStatus={formStatus}
                isSubmitting={isSubmitting}
                selectedAction={selectedAction}
                setSelectedAction={setSelectedAction}
                handleActionSubmit={handleActionSubmit}
                setImageUploadData={setImageUploadData}
              />
            )}

            {!!selectedAction && isActionCardDrawerOpen && (
              <CustomDrawer
                onClose={onActionCardDrawerClose}
                isOpen={isActionCardDrawerOpen}
              >
                <>
                  <ActionItem
                    Icon={
                      AppIcons[
                        selectedAction?.title || selectedAction?.fieldTitle
                      ]
                    }
                    title={selectedAction?.title || selectedAction?.fieldTitle}
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
