import { HStack, Text, Tag, Box } from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const QuantitySelector = ({
  quantity,
  onChange,
}: {
  quantity: number;
  onChange: (val: number) => void;
}) => {
  const [quantityState, setQuantityState] = useState<number>(quantity || 0);

  const handleDecrease = () => {
    setQuantityState(quantityState === 0 ? quantityState : quantityState - 1);
    onChange(quantityState);
  };
  const handleIncrease = () => {
    setQuantityState(quantityState + 1);
    onChange(quantityState);
  };

  return (
    <HStack
      borderWidth="1px"
      borderColor={"black"}
      px={[2]}
      py={[2]}
      mr={[4]}
      maxW={"fit-content"}
      minW={"139px"}
      justify={"space-between"}
      transition={"all ease-in-out 200ms"}
    >
      <Tag
        size={"md"}
        variant="solid"
        cursor={"pointer"}
        bg={"transparent"}
        color={"black"}
        p={2}
        onClick={handleDecrease}
      >
        <AiOutlineMinus />
      </Tag>
      <Box as={"span"} color="gray.600" userSelect="none">
        {quantityState}
      </Box>
      <Tag
        size={"md"}
        variant="solid"
        cursor={"pointer"}
        bg={"transparent"}
        color={"black"}
        p={2}
        onClick={handleIncrease}
      >
        <AiOutlinePlus />
      </Tag>
    </HStack>
  );
};

export default QuantitySelector;
