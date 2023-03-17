import { HamburgerIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { CiMenuKebab } from "react-icons/ci";

const RowMenu = () => {
  const menuHover = { color: "black", bg: "blackAlpha.100" };
  return (
    <Menu>
      <MenuButton
        w={"fit-content"}
        as={IconButton}
        color={"black"}
        aria-label="row menu options"
        icon={<CiMenuKebab size={24} />}
        colorScheme="ghost"
        _hover={{
          bg: "transparent",
          color: "brand.300",
        }}
      />
      <MenuList>
        <MenuItem _hover={menuHover}>Download</MenuItem>
        <MenuItem _hover={menuHover}>Create a Copy</MenuItem>
        <MenuItem _hover={menuHover}>Mark as Draft</MenuItem>
        <MenuItem _hover={menuHover}>Delete</MenuItem>
        <MenuItem _hover={menuHover}>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default RowMenu;
