import {
  useDisclosure,
  Flex,
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  Avatar,
  Container,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { ReactElement, useEffect, useState } from "react";
import { useTypedDispatch, useTypedSelector } from "redux/store";
import HardsandLink from "components/HardsandsLink";
import { HiMenuAlt3 } from "react-icons/hi";
import { getUserCountry } from "modules/account/actions";
import DashSidebarContent from "./SideBar";

const HardsandsCorperateDash = ({
  children,
  active,
  routes,
}: {
  active: number;
  children: ReactElement;
  routes: string[];
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
      <DashSidebarContent
        routes={routes}
        display={["none", "unset", "block"]}
        active={active}
      />
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DashSidebarContent w="full" borderRight="none" active={active} />
        </DrawerContent>
      </Drawer>
      <Box ml={[0, 80]} transition=".3s ease">
        {/* <Flex
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
        </Flex> */}

        <Box as="main" p={4} bgColor="#f9f9f9">
          <Container
            maxW={["full", "80%", "full"]}
            mx={["0", "10px", "auto"]}
          >
            {children}
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default HardsandsCorperateDash;
