import { Box, Flex } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { APP_SCREEN } from "../../types";

const Tab = ({
  title,
  Icon,
  tabId,
  active,
  disabled,
  handleSelectedTab,
}: {
  title: string;
  disabled?: boolean;
  Icon: IconType;
  tabId: APP_SCREEN;
  active: APP_SCREEN;
  handleSelectedTab: (tab: APP_SCREEN) => void;
}) => {
  return (
    <Box
      textAlign={"center"}
      position="relative"
      py={[4]}
      cursor="pointer"
      fontSize={[15, 20]}
      fontWeight="bold"
      borderStyle="solid"
      borderWidth={1}
      borderColor={active === tabId ? "brand.300" : "inherit"}
      justifyContent={"center"}
      alignContent={"center"}
      transition={"all 200ms ease-in-out"}
      onClick={() => (disabled ? null : handleSelectedTab(tabId))}
      opacity={disabled ? "0.5" : "1"}
    >
      <Flex color="brand.300" justifyContent={"center"} alignContent={"center"}>
        <Icon size={50} />
      </Flex>
      {title}
    </Box>
  );
};

export default Tab;
