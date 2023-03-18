import { Text, Box, Avatar, Tag, HStack } from "@chakra-ui/react";
import { MdOutlineTimer } from "react-icons/md";

const NameColumn = ({
  name,
  img,
  subText,
  isActive,
  timer,
}: {
  name: string;
  img?: string;
  subText?: string;
  isActive?: boolean;
  timer?: boolean;
}) => {
  return (
    <HStack>
      {img && (
        <Box mr={[4]}>
          <Avatar name={name} src={img} />
        </Box>
      )}
      <Box>
        <Text fontWeight={"bolder"} fontSize={20}>
          {name}
        </Text>
        {subText && (
          <HStack>
            {timer && <MdOutlineTimer color={"grey"} />}
            <Text>{subText}</Text>
          </HStack>
        )}
        {isActive && <Tag>Active</Tag>}
      </Box>
    </HStack>
  );
};

export default NameColumn;
