import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  ButtonProps,
  Tag,
  Box,
} from "@chakra-ui/react";
import { ReactElement } from "react";

interface CustomMenuProps extends ButtonProps {
  menuTitle?: string | ReactElement;
  options: any[];
  isColorOptions?: boolean;
}

const CustomMenu = ({
  options,
  menuTitle,
  isColorOptions,
  ...rest
}: CustomMenuProps) => {
  return (
    <Menu>
      <MenuButton
        bg={"transparent"}
        borderWidth={1}
        borderRadius={0}
        borderColor={"black"}
        _active={{ bg: "transparent" }}
        _hover={{
          color: "black",
          bg: "transparent",
        }}
        py={[6]}
        px={[10]}
        justify={"space-between"}
        _focus={{ bg: "transparent" }}
        as={Button}
        rightIcon={<ChevronDownIcon />}
        {...rest}
      >
        {menuTitle}
      </MenuButton>
      <MenuList>
        {options &&
          options.map((option) => (
            <MenuItem
              key={option.title}
              _hover={{ color: "brand.300", bg: "brand.10" }}
            >
              {isColorOptions && (
                <Tag
                  bgColor={option.color}
                  size={"sm"}
                  borderRadius="full"
                  variant="solid"
                />
              )}
              <Box w={6} />
              {option.title}
            </MenuItem>
          ))}
      </MenuList>
    </Menu>
  );
};

export default CustomMenu;
