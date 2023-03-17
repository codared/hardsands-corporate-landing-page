import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

const NameColumn = ({
  name,
  img,
  email,
}: {
  name: string;
  img?: string;
  email?: string;
}) => {
  return (
    <Flex>
      {img && (
        <Box mr={[4]}>
          <Avatar name={name} src={img} />
        </Box>
      )}
      <Box>
        <Text fontWeight={"bolder"} fontSize={20}>
          {name}
        </Text>
        {email && <Text>{email}</Text>}
      </Box>
    </Flex>
  );
};

export default NameColumn;
