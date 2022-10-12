import { Flex, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FiCreditCard } from "react-icons/fi";
import { MdOutlineSpeakerPhone } from "react-icons/md";

const MiniSteps = () => {
  const { t } = useTranslation();

  return (
    <Flex
      bg="brand.50"
      fontSize="small"
      textTransform="uppercase"
      fontWeight="bold"
      justify="space-around"
      px={["1rem", "6rem", "9rem"]}
      py={[10]}
      flexDir={["column", "row"]}
      alignItems="center"
      fontFamily="Made Outer Sans Regular"
    >
      <Flex mb={[4, 0]}>
        <FiCreditCard size={24} />
        <Text ml={["1rem", "1.5rem", "2.5rem"]}>
          {t("common:purchase-your-card", "purchase your card")}
        </Text>
      </Flex>
      <Flex mb={[4, 0]}>
        <AiOutlineUserAdd size={24} />
        <Text ml={["1rem", "1.5rem", "2.5rem"]}>
          {t("common:create-your-profile", "create your profile")}
        </Text>
      </Flex>
      <Flex mb={[4, 0]}>
        <MdOutlineSpeakerPhone size={26} />
        <Text ml={["1rem", "1.5rem", "2.5rem"]}>
          {t("common:tap-share-connect", "Tap. Share. Connect")}
        </Text>
      </Flex>
    </Flex>
  );
};

export default MiniSteps;
