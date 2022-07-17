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

const HardsandsAccountsApp = () => {
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
      <SidebarContent display={["none", "unset", "block"]} />
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w="full" borderRight="none" />
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
          {/* <InputGroup
            w="96"
            display={["none", "flex"]}
          >
            <InputLeftElement color="gray.500">
              <FiSearch />
            </InputLeftElement>
            <Input placeholder="Search for articles..." />
          </InputGroup> */}

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
          <Box borderWidth="4px" borderStyle="dashed" rounded="md" h="96" />
        </Box>
      </Box>
    </Box>
  );
};

export default HardsandsAccountsApp;
