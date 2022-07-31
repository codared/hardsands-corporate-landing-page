import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import HardsandsButton from "components/HardsandsButton";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { ActionsType } from "utils/types";
import AccountCardPreview from "../components/AccountCardPreview";
import ActionFormModal from "../components/ActionFormModal";
import ActionListModal from "../components/ActionListModal";
import QRCodeShareSection from "../components/QRCodeShareSection";
import AccountTabView from "./TabView";

const MainAccountContent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isActionFormModalOpen,
    onOpen: onActionFormModalOpen,
    onClose: onActionFormModalClose,
  } = useDisclosure();
  const [selectedAction, setSelectedAction] = useState<ActionsType | null>(
    null
  );

  const handleOpenActionModal = () => {
    onOpen();
  };

  const handleActionSelect = (action: ActionsType) => {
    console.log("action >>>> ", action);
    setSelectedAction(action);
    onClose();
    onActionFormModalOpen();
  };

  const handleActionSubmit = (formData: any) => {
    console.log("submit action >>>> ", formData);
    onClose();
    onActionFormModalClose();
  };

  return (
    <Box rounded="md">
      <Flex
        justifyContent={"center"}
        flexDir={["column-reverse", "column", "row"]}
      >
        <Flex flexDir={["column-reverse", "column"]}>
          <AccountCardPreview />

          {/* QR code share section */}
          <QRCodeShareSection />
          {/* End QR code share section */}
        </Flex>

        <Box w={100} />

        <Flex flexDir={"column"}>
          <AccountTabView />
          <HardsandsButton
            // @ts-ignore
            mt={10}
            Icon={FiPlus}
            href={"#"}
            onClick={handleOpenActionModal}
          >
            Add Action
          </HardsandsButton>
        </Flex>

        {isOpen && (
          <ActionListModal
            isOpen={isOpen}
            onClose={onClose}
            handleActionSelect={handleActionSelect}
          />
        )}

        {!!selectedAction && isActionFormModalOpen && (
          <ActionFormModal
            isOpen={isActionFormModalOpen}
            onClose={onActionFormModalClose}
            selectedAction={selectedAction}
            handleActionSubmit={handleActionSubmit}
          />
        )}
      </Flex>
    </Box>
  );
};

export default MainAccountContent;
