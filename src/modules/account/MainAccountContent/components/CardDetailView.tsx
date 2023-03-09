import { Box, Text } from "@chakra-ui/react";
import { useTour } from "@reactour/tour";
import QRCodeShareSection from "modules/account/components/QRCodeShareSection";
import { tourActionScreenConfig } from "modules/Tour";
import React, { useEffect } from "react";
import { ONBOARDING_TOUR } from "utils/constants";
import { ActionsType } from "utils/types";
import AddAction from "./AddAction";
import ScreenSelectorTabs from "./ScreenSelectorTabs";

const CardDetailView = ({
  handleSelectedTab,
  actions,
  cardActions,
  currentScreenState,
  selectedCard,
  setSelectedAction,
  setFormStatus,
}: any) => {
  const { setIsOpen: setIsTourOpen, setSteps } = useTour();
  const isOnBoarded = localStorage.getItem(ONBOARDING_TOUR);

  useEffect(() => {
    if (!isOnBoarded || isOnBoarded !== "1") {
      setSteps && setSteps(tourActionScreenConfig);
      setIsTourOpen(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    return () => {
      setIsTourOpen(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentScreenState]);

  return (
    <>
      <ScreenSelectorTabs
        currentScreenState={currentScreenState}
        handleSelectedTab={handleSelectedTab}
      />

      {cardActions && cardActions.length > 0 ? (
        <QRCodeShareSection card={selectedCard} />
      ) : (
        <Box>
          <Text textAlign={"center"} my={10} fontWeight="bolder">
            Make your card active now by adding an action.
          </Text>
          <AddAction
            currentScreenState={currentScreenState}
            actions={actions as ActionsType[]}
            setSelectedAction={setSelectedAction}
            handleSelectedTab={handleSelectedTab}
            setFormStatus={setFormStatus}
            // @ts-ignore
            w={"100%"}
          />
        </Box>
      )}
    </>
  );
};

export default CardDetailView;
