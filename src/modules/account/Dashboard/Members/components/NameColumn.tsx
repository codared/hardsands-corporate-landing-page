import { Text, Box, Avatar, Tag, HStack } from "@chakra-ui/react";

const NameColumn = ({
  name,
  img,
  subText,
  isActive,
}: {
  name: string;
  img?: string;
  subText?: string;
  isActive?: boolean;
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
        {subText && <Text>{subText}</Text>}
        {isActive && <Tag>Active</Tag>}
      </Box>
    </HStack>
  );
};

export default NameColumn;
