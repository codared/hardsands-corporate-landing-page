import { Box, Flex, useDisclosure, useToast } from "@chakra-ui/react";
import HardsandsButton from "components/HardsandsButton";
import { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { useTypedDispatch, useTypedSelector } from "redux/store";
import { ActionsType } from "utils/types";
import { getUserCardActionsActions } from "../actions";
import AccountCardPreview from "../components/AccountCardPreview";
import ActionFormModal from "../components/ActionFormModal";
import ActionListModal from "../components/ActionListModal";
import Loader from "../components/Loader";
import QRCodeShareSection from "../components/QRCodeShareSection";
import AccountTabView from "./TabView";

const MainAccountContent = () => {
  const reduxDispatch = useTypedDispatch();
  const appError = useTypedSelector((state) => state.app?.error);
  const loading = useTypedSelector((state) => state.app?.loading);
  const cardActions = useTypedSelector((state) => state.app?.cardActions);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
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

  useEffect(() => {
    reduxDispatch(getUserCardActionsActions("oFg2sT8"));
  }, []);

  useEffect(() => {
    if (appError.isError) {
      toast({
        position: "top-right",
        title: appError.name,
        description: appError.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  }, []);

  if (loading) {
    return <Loader />;
  }

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
          <AccountTabView cardActions={cardActions as ActionsType[]} />

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
