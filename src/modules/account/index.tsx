import {
  useDisclosure,
  Flex,
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  Avatar,
} from "@chakra-ui/react";
import SidebarContent from "./components/Sidebar";
import { ReactElement, useEffect, useState } from "react";
import { useTypedDispatch, useTypedSelector } from "redux/store";
import HardsandLink from "components/HardsandsLink";
import { HiMenuAlt3 } from "react-icons/hi";
import { getUserCountry } from "./actions";

const HardsandsAccountsApp = ({
  children,
  active,
}: {
  active: number;
  children: ReactElement;
}) => {
  const reduxDispatch = useTypedDispatch();
  const sidebar = useDisclosure();
  const user = useTypedSelector((state) => state.app?.user);

  useEffect(() => {
    if (!user?.country) {
      reduxDispatch(getUserCountry());
    }
  }, [reduxDispatch, user]);

  return (
    <Box
      as="section"
      _dark={{
        bg: "gray.700",
      }}
      minH="100vh"
    >
      <SidebarContent display={["none", "unset", "block"]} active={active} />
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w="full" borderRight="none" active={active} />
        </DrawerContent>
      </Drawer>
      <Box ml={[0, 60]} transition=".3s ease">
        <Flex
          as="header"
          align="center"
          justify="space-between"
          w="full"
          px="4"
          bg="white"
          _dark={{
            bg: "gray.800",
          }}
          borderBottomWidth="1px"
          color="inherit"
          h="14"
        >
          <HardsandLink
            onClick={sidebar.onOpen}
            variant={"ghost"}
            aria-label={"App Menu"}
            href={"#"}
            display={["initial", "none"]}
          >
            <HiMenuAlt3 color="black" size={30} />
          </HardsandLink>
          <Box w={10} />

          <Flex align="center">
            <Avatar
              ml="4"
              size="sm"
              name={`${user?.firstName} ${user?.lastName}`}
              src=""
              cursor="pointer"
            />
          </Flex>
        </Flex>

        <Box as="main" p="4">
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default HardsandsAccountsApp;
