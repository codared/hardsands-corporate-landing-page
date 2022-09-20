import { HStack, Box, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { AiOutlinePlus } from "react-icons/ai";
import { ActionsType } from "utils/types";

const ActionItem = ({
  title,
  Icon,
  withIcon = true,
  handleActionSelect,
}: {
  title: string;
  Icon: IconType;
  withIcon?: boolean;
  handleActionSelect?: () => void;
}) => {
  return (
    <HStack
      cursor={"pointer"}
      _hover={{
        borderColor: "brand.300",
      }}
      mb={2}
      bg="brand.10"
      borderWidth="1px"
      borderColor={"transparent"}
      px={[5]}
      py={[2]}
      justify={"space-between"}
      transition="all ease-in-out 200ms"
      onClick={() =>
        handleActionSelect ? handleActionSelect() : null
      }
    >
      <HStack>
        <Box color="brand.300">
          <Icon size={24} />
        </Box>
        <Text>{title}</Text>
      </HStack>
      {withIcon && (
        <Box>
          <AiOutlinePlus />
        </Box>
      )}
    </HStack>
  );
};

export default ActionItem;
