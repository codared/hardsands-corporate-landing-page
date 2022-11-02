import { Box, HStack, Text } from "@chakra-ui/react";
import CustomModal from "components/CustomModal";
import { AiOutlinePlus } from "react-icons/ai";
import { ActionsType } from "utils/types";
import { ACTIONS, AppIcons } from "../constants";

const ActionListModal = ({
  isOpen,
  onClose,
  handleActionSelect,
  actions,
}: {
  isOpen: boolean;
  onClose: () => void;
  actions: ActionsType[];
  handleActionSelect: (action: ActionsType) => void;
}) => {
  return (
    <CustomModal
      size={["full", "md"]}
      title={"Add Action"}
      isOpen={isOpen}
      onClose={onClose}
    >
      <Box mb={8}>
        {actions.map((action: ActionsType) => {
          const Icon = AppIcons[action.fieldTitle];
          return (
            <HStack
              cursor={"pointer"}
              key={action.fieldTitle}
              _hover={{
                borderColor: "brand.300",
              }}
              mb={2}
              bg="brand.10"
              borderWidth="1px"
              borderColor={"transparent"}
              px={[6]}
              py={[2]}
              justify={"space-between"}
              transition="all ease-in-out 200ms"
              onClick={() => handleActionSelect(action)}
            >
              <HStack>
                <Box color="brand.300">
                  <Icon size={24} />
                </Box>
                <Text>{action.fieldTitle}</Text>
              </HStack>
              <Box p={[5]}>
                <AiOutlinePlus />
              </Box>
            </HStack>
          );
        })}
      </Box>
    </CustomModal>
  );
};

export default ActionListModal;
