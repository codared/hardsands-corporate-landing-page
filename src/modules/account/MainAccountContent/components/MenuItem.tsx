import { HStack, Box, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

const MenuItem = ({
  title,
  Icon,
  onClick,
}: {
  title: string;
  Icon: IconType;
  withIcon?: boolean;
  onClick?: () => void;
}) => {
  return (
    <HStack
      cursor={"pointer"}
      //   key={action.title}
      mb={2}
      px={[5]}
      py={[2]}
      justify={"space-between"}
      transition="all ease-in-out 200ms"
      onClick={() => (onClick ? onClick() : null)}
    >
      <HStack>
        <Box color="black">
          <Icon size={24} />
        </Box>
        <Text>{title}</Text>
      </HStack>
    </HStack>
  );
};

export default MenuItem;
