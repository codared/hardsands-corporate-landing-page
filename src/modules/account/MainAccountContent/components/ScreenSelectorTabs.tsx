import { Grid } from "@chakra-ui/react";
import { APP_SCREEN } from "modules/account/types";
import { FiLink2, FiTrendingUp } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import Tab from "./Tab";

const ScreenSelectorTabs = ({
  currentScreenState,
  handleSelectedTab,
}: {
  currentScreenState: APP_SCREEN;
  handleSelectedTab: (tab: APP_SCREEN) => void;
}) => {
  return (
    <Grid
      templateColumns={["repeat(2, 1fr)"]}
      gap={["1rem", "2rem"]}
      overflow="hidden"
    >
      <Tab
        tabId={APP_SCREEN.ACTIONS}
        title="View Card Actions"
        active={currentScreenState}
        Icon={FiLink2}
        handleSelectedTab={handleSelectedTab}
      />
      <Tab
        tabId={APP_SCREEN.STATS}
        title="View Statistics"
        active={currentScreenState}
        Icon={FiTrendingUp}
        handleSelectedTab={handleSelectedTab}
      />
      {/* <Tab
        tabId={APP_SCREEN.SETTINGS}
        title="Settings"
        disabled
        active={currentScreenState}
        Icon={IoSettingsOutline}
        handleSelectedTab={handleSelectedTab}
      /> */}
    </Grid>
  );
};

export default ScreenSelectorTabs;
