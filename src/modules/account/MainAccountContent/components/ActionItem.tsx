import { HStack, Box, Text, IconButton, Image } from "@chakra-ui/react";
import { AppIcons } from "modules/account/constants";
import { useState } from "react";
import { IconType } from "react-icons";
import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";

const ActionItem = ({
  title,
  Icon,
  iconColor = "brand.300",
  withIcon = true,
  remove = false,
  handleActionSelect,
  isActive = false,
}: {
  title: string;
  iconColor?: string;
  Icon: IconType | { src: string };
  withIcon?: boolean;
  remove?: boolean;
  isActive?: boolean;
  handleActionSelect?: (loadingFunc?: any) => void;
}) => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    if (handleActionSelect) {
      handleActionSelect(setLoading);
    }
  };

  const renderIcon = () => {
    if (typeof Icon === "object" && Icon.src) {
      return <Image src={Icon.src} alt={"action icon"} />;
    } else {
      Icon = Icon as IconType;
      return <Icon size={24} />;
    }
  };

  return (
    <HStack
      id="tour-select-action"
      cursor={"pointer"}
      _hover={{
        borderColor: "brand.300",
      }}
      mb={2}
      bg="brand.10"
      borderWidth="1px"
      borderColor={isActive ? "brand.300" : "transparent"}
      px={[5]}
      py={[2]}
      justify={"space-between"}
      transition="all ease-in-out 200ms"
      onClick={handleClick}
    >
      <HStack>
        <Box color={iconColor}>{renderIcon()}</Box>
        <Text>{title}</Text>
      </HStack>
      {withIcon && (
        <Box>
          <AiOutlinePlus />
        </Box>
      )}
      {remove && (
        <Box>
          <IconButton
            variant="outline"
            colorScheme="none"
            aria-label="Remove action"
            isLoading={loading}
            icon={<AiOutlineDelete />}
          />
        </Box>
      )}
    </HStack>
  );
};

export default ActionItem;
