import { Box, HStack, Text } from "@chakra-ui/react";
import CustomModal from "components/CustomModal";
import { AiOutlinePlus } from "react-icons/ai";
import { ActionsType } from "utils/types";
import { ACTIONS, AppIcons } from "../constants";

const ActionListModal = ({
  isOpen,
  onClose,
  handleActionSelect,
}: {
  isOpen: boolean;
  onClose: () => void;
  handleActionSelect: (action: ActionsType) => void;
}) => {
  if (isOpen) {
    return (
      <CustomModal title={"Add Action"} isOpen={isOpen} onClose={onClose}>
        <Box mb={8}>
          {ACTIONS.map((action: ActionsType) => {
            const Icon = AppIcons[action.title];
            return (
              <HStack
                cursor={"pointer"}
                key={action.id}
                _hover={{
                  borderColor: "brand.300",
                }}
                mb={2}
                borderWidth="1px"
                borderColor={"transparent"}
                px={[6]}
                py={[2]}
                justify={"space-between"}
                transition="all ease-in-out 200ms"
                onClick={() => handleActionSelect(action)}
              >
                <HStack>
                  <Icon size={24} />
                  <Text>{action.title}</Text>
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
  }
  return null;
};

export default ActionListModal;
