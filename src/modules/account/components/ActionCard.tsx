import {
  Flex,
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import {
  AiFillStar,
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineStar,
} from "react-icons/ai";
import { FaEllipsisV } from "react-icons/fa";
import { IconType } from "react-icons/lib";

const ActionCard = ({
  title,
  Icon,
  isDefault,
  handleSetDefault,
  handleEdit,
}: {
  title: string;
  Icon: IconType;
  isDefault?: boolean;
  handleSetDefault: () => void;
  handleEdit: () => void;
}) => {
  return (
    <Flex
      textAlign={"center"}
      position="relative"
      boxSize={[150, 200]}
      fontSize={[15, 20]}
      fontWeight="bold"
      borderStyle="solid"
      borderWidth={1}
      flexDir={["column"]}
      justifyContent={"center"}
    >
      <Box position={"absolute"} top="10px" right="10px">
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<FaEllipsisV />}
            variant="ghost"
          />
          <MenuList>
            {!isDefault && (
              <MenuItem
                _hover={{ bg: "unset", color: "brand.300" }}
                icon={<AiOutlineStar size={24} />}
                onClick={handleSetDefault}
              >
                Set as default
              </MenuItem>
            )}
            <MenuItem
              _hover={{ bg: "unset", color: "brand.300" }}
              icon={<AiOutlineEdit size={24} />}
              onClick={handleEdit}
            >
              Edit
            </MenuItem>
            {/* <MenuItem
              _hover={{ bg: "unset", color: "brand.300" }}
              color="red.300"
              icon={<AiOutlineDelete size={24} />}
            >
              Delete
            </MenuItem> */}
          </MenuList>
        </Menu>
      </Box>
      {/* @ts-ignore */}
      <Box mb={8} textAlign={"-webkit-center"}>
        <Icon size={50} />
      </Box>
      {title}
      {isDefault && (
        <Flex justifyContent={"center"}>
          <AiFillStar />
          <Text fontSize={14}>Default</Text>
        </Flex>
      )}
    </Flex>
  );
};

export default ActionCard;
