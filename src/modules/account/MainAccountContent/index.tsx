import { Box, Flex, useDisclosure, useToast, Text } from "@chakra-ui/react";
import HardsandsButton from "components/HardsandsButton";
import HardsandLink from "components/HardsandsLink";
import productRoutes from "modules/products/routes";
import { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { useTypedDispatch, useTypedSelector } from "redux/store";
import { mergeActionFields } from "utils/functions";
import { ActionsType } from "utils/types";
import {
  addUserCardsAction,
  getAllActionsActions,
  getCardStatisticsAction,
  getUserCardActionsActions,
  getUserCardsAction,
  setUserCardsActionDefaultAction,
  updateUserCardsAction,
} from "../actions";
import AccountCardPreview from "../components/AccountCardPreview";
import ActionFormModal from "../components/ActionFormModal";
import ActionListModal from "../components/ActionListModal";
import Loader from "../components/Loader";
import QRCodeShareSection from "../components/QRCodeShareSection";
import { ACTION_FORM_STATUS } from "../constants";
import { UserCardType } from "../types";
import AccountTabView from "./TabView";

const MainAccountContent = () => {
  const reduxDispatch = useTypedDispatch();
  const appError = useTypedSelector((state) => state.app?.error);
  const loading = useTypedSelector((state) => state.app?.loading);
  const cardActions = useTypedSelector((state) => state.app?.cardActions);
  const actions = useTypedSelector((state) => state.app?.allActions);
  const cardStatistics = useTypedSelector((state) => state.app?.cardStatistics);
  const cards = useTypedSelector((state) => state.app?.cards as UserCardType[]);
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
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formStatus, setFormStatus] = useState<string>(ACTION_FORM_STATUS.ADD);

  const handleOpenActionModal = () => {
    setFormStatus(ACTION_FORM_STATUS.ADD);
    onOpen();
  };

  const handleActionSelect = (action: ActionsType) => {
    setSelectedAction(action);
    onClose();
    onActionFormModalOpen();
  };

  const handleActionSubmit = (formData: any) => {
    setIsSubmitting(true);
    if (formData.phone && !formData.phoneCode) {
      setIsSubmitting(false);
      reduxDispatch({
        type: "APP_ERROR",
        payload: {
          isError: true,
          name: "Phone Code",
          message: "Phone code is required",
        } as any,
      });
      return;
    }
    if (
      (formData.phone && isNaN(formData.phone)) ||
      (formData.phone && !(formData.phone.match(/\d/g).length <= 11))
    ) {
      setIsSubmitting(false);
      reduxDispatch({
        type: "APP_ERROR",
        payload: {
          isError: true,
          name: "Phone",
          message: "Phone Number must be a valid phone number",
        } as any,
      });
      return;
    }
    formData = {
      ...formData,
      cardSerialId: cards[0].cardSerial,
      actionId: formData.id,
    };
    let {
      fields,
      title,
      isDefault,
      id,
      action,
      type,
      requiresCountryCode,
      ...rest
    } = formData;

    if (formStatus === ACTION_FORM_STATUS.ADD) {
      reduxDispatch(addUserCardsAction(rest)).then((res) => {
        setIsSubmitting(false);
        onClose();
        onActionFormModalClose();
      });
    }
    if (formStatus === ACTION_FORM_STATUS.EDIT) {
      reduxDispatch(updateUserCardsAction(rest)).then((res) => {
        setIsSubmitting(false);
        onClose();
        onActionFormModalClose();
      });
    }
  };

  const handleSetDefault = (id: number) => {
    reduxDispatch(setUserCardsActionDefaultAction(cards[0].cardSerial, id));
  };

  const handleEdit = (id: number) => {
    setFormStatus(ACTION_FORM_STATUS.EDIT);
    // The cardActions fields dont have the required properties to
    // render the form so we have use the ACTIONS constants
    const mergedActions = mergeActionFields(cardActions as ActionsType[], id);
    handleActionSelect(mergedActions);
  };

  useEffect(() => {
    reduxDispatch(getAllActionsActions());
    reduxDispatch(getUserCardsAction()).then((cards) => {
      if (cards && cards.length) {
        reduxDispatch(getUserCardActionsActions(cards[0].cardSerial));
        reduxDispatch(getCardStatisticsAction(cards[0].cardSerial));
      }
    });
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
  }, [appError, toast]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Box rounded="md">
      {!cards || !cards.length ? (
        <Flex
          w={"full"}
          h={"100vh"}
          justifyContent="center"
          alignItems={"center"}
          direction="column"
        >
          <Text>You dont have any cards, please order one now</Text>
          <HardsandLink
            fontSize={"sm"}
            fontWeight={500}
            color={"black"}
            bg={"brand.100"}
            fontFamily="MADE Outer sans"
            py={[6]}
            borderWidth="2px"
            borderColor={"brand.100"}
            borderRadius="0"
            transition="all 200ms ease-in"
            w="30%"
            textAlign="center"
            _hover={{
              bg: "transparent",
              color: "black",
              borderWidth: "2px",
              borderColor: "brand.100",
            }}
            mt={[6, 10]}
            mb={[6, 0]}
            href={productRoutes.products()}
          >
            Buy Now
          </HardsandLink>
        </Flex>
      ) : (
        <Flex
          justifyContent={"center"}
          flexDir={["column-reverse", "column", "row"]}
        >
          <Flex flexDir={["column-reverse", "column"]}>
            <AccountCardPreview
              cardStatistics={cardStatistics}
              card={cards[0]}
            />

            {/* QR code share section */}
            <QRCodeShareSection card={cards[0]} />
            {/* End QR code share section */}
          </Flex>

          <Box w={100} />

          <Flex flexDir={"column"}>
            <AccountTabView
              cardStatistics={cardStatistics}
              handleSetDefault={handleSetDefault}
              handleEdit={handleEdit}
              cardActions={cardActions as ActionsType[]}
            />

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
              actions={actions as ActionsType[]}
              handleActionSelect={handleActionSelect}
            />
          )}

          {!!selectedAction && isActionFormModalOpen && (
            <ActionFormModal
              isSubmitting={isSubmitting}
              isOpen={isActionFormModalOpen}
              onClose={onActionFormModalClose}
              selectedAction={selectedAction}
              handleActionSubmit={handleActionSubmit}
            />
          )}
        </Flex>
      )}
    </Box>
  );
};

export default MainAccountContent;
