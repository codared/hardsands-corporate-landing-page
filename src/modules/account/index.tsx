import {
  useDisclosure,
  Flex,
  Icon,
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  IconButton,
  Avatar,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { FaBell } from "react-icons/fa";
import SidebarContent from "./Sidebar";
import { ReactElement } from "react";

const HardsandsAccountsApp = ({
  children,
  active,
}: {
  active: number;
  children: ReactElement;
}) => {
  const sidebar = useDisclosure();

  return (
    <Box
      as="section"
      //   bg="gray.50"
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
          <IconButton
            aria-label="Menu"
            display={["inline-flex", "none"]}
            pos="relative"
            onClick={sidebar.onOpen}
            icon={<FiMenu />}
            size="sm"
          />
          <Box w={10} />

          <Flex align="center">
            <Icon color="gray.500" as={FaBell} cursor="pointer" />
            <Avatar
              ml="4"
              size="sm"
              name="anubra266"
              src="https://avatars.githubusercontent.com/u/30869823?v=4"
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
