import { useState } from "react";
import { APP_SCREEN } from "./types";

const useScreenNavigation = () => {
  const [screenState, setScreenState] = useState<Array<APP_SCREEN>>([
    APP_SCREEN.HOME,
  ]);
  const [currentScreenState, setCurrentScreenState] = useState(APP_SCREEN.HOME);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  //   const [activeTabState, setActiveTabState] = useState(APP_TAB.ACTIONS);

  const handleSelectedTab = (tab: APP_SCREEN) => {
    // If the last item is whats selected Do nothing.
    if (screenState[screenState.length - 1] === tab) return;
    setScreenState([...screenState, tab]);
    setCurrentScreenState(tab);
    setIsSubmitting(false);
  };

  const handleGoBack = (screen: APP_SCREEN) => {
    if (screenState[screenState.length - 1] === APP_SCREEN.HOME) return;
    screenState.pop();
    setScreenState([...screenState]);
    setCurrentScreenState(screenState[screenState.length - 1]);
  };

  return {
    screenState,
    setScreenState,
    currentScreenState,
    setCurrentScreenState,
    handleSelectedTab,
    handleGoBack,
    isSubmitting,
    setIsSubmitting,
  };
};

export default useScreenNavigation;
