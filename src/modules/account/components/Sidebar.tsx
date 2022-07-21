import { Box, Flex, Icon, Collapse, useDisclosure } from "@chakra-ui/react";
import HardsandsAppLogo from "components/Logo";
import { MdKeyboardArrowRight } from "react-icons/md";
import { ACCOUNT_NAV_ITEMS } from "../constants";
import NavItem from "./Navitems";
import { AccountNavItemsType } from "../types";

const SidebarContent = (props: any) => {
  const integrations = useDisclosure();

  return (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg="white"
      _dark={{
        bg: "gray.800",
      }}
      border
      color="inherit"
      borderRightWidth="1px"
      w="60"
      {...props}
    >
      <Flex px="4" py="5" align="center">
        <HardsandsAppLogo />
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
      >
        {ACCOUNT_NAV_ITEMS.map((item: AccountNavItemsType) => {
          return (
            <Box key={item.title}>
              <NavItem icon={item.icon}>{item.title}</NavItem>
              {item.children?.length && (
                <>
                  <NavItem icon={item.icon} onClick={integrations.onToggle}>
                    {item.title}
                    <Icon
                      as={MdKeyboardArrowRight}
                      ml="auto"
                      // @ts-ignore
                      transform={integrations.isOpen && "rotate(90deg)"}
                    />
                  </NavItem>
                  <Collapse in={integrations.isOpen}>
                    {item.children.map((childItem: AccountNavItemsType) => (
                      <NavItem key={childItem.title} pl="12" py="2">
                        {childItem.title}
                      </NavItem>
                    ))}
                  </Collapse>
                </>
              )}
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};

export default SidebarContent;
