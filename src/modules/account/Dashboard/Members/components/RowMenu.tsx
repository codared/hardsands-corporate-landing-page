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

const RowMenu = ({ menuOption }: any) => {
  const menuHover = { color: "black", bg: "blackAlpha.100" };
  if (!menuOption) return null;

  const handleClick = (onClick: any) => {
    console.log("clicked");
    onClick();
  };

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
        {menuOption.map((item: any, index: number) => (
          <MenuItem onClick={item.onClick} key={index} _hover={menuHover}>
            {item.title}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default RowMenu;
