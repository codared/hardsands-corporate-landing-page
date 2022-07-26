import { HStack, Tag, Text } from "@chakra-ui/react";

const ChangeColorButton = ({
  name,
  id,
  color,
  activeColor = 1,
  onClick = (val: string | number) => {},
}: {
  name: string;
  id: string | number;
  color: string;
  activeColor: string | number;
  onClick?: (val: string | number) => void;
}) => {
  const handleClick = () => {
    onClick(id);
  };

  return (
    <HStack
      borderWidth="1px"
      borderColor={activeColor === id ? "brand.300" : "brand.200"}
      px={[5, 5, 10]}
      py={[2]}
      mr={[4]}
      onClick={handleClick}
      cursor="pointer"
      transition={"all ease-in-out 200ms"}
    >
      <Tag size={"sm"} borderRadius="full" variant="solid" bg={color} />
      <Text color="gray.600" userSelect="none">
        {name}
      </Text>
    </HStack>
  );
};

export default ChangeColorButton;
