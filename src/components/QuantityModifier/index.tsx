import { Button, Flex, Image, Text } from "@chakra-ui/react";
import HardsandLink from "components/HardsandsLink";
import MinusIcon from "design/svg/minus_bg.svg";
import PlusIcon from "design/svg/plus_bg.svg";
import { SyntheticEvent } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const QuantityModifier = ({
  quantity,
  onChange,
}: {
  quantity: number;
  onChange: (val: number) => void;
}) => {
  const handleChange = (which: string) => {
    if (which === "plus") {
      quantity = quantity + 1;
    }
    if (which === "minus") {
      quantity = quantity - 1;
    }
    quantity = quantity === 1 ? 1 : quantity;
    onChange(quantity);
  };
  return (
    <Flex border={"1px solid black"}>
      <Button
        onClick={(e: SyntheticEvent) => {
          e.preventDefault();
          handleChange("minus");
        }}
        _hover={{ bg: "transparent", color: "black" }}
        bg="transparent"
        _focus={{ bg: "transparent" }}
        px={0}
        disabled={quantity === 1}
      >
        <AiOutlineMinus />
      </Button>
      <Text
        display="flex"
        justifyContent="center"
        w="28px"
        alignSelf="center"
        mx={2}
      >
        {quantity}
      </Text>
      <Button
        onClick={(e: SyntheticEvent) => {
          e.preventDefault();
          handleChange("plus");
        }}
        _hover={{ bg: "transparent", color: "black" }}
        bg="transparent"
        _focus={{ bg: "transparent" }}
        p={0}
      >
        <AiOutlinePlus />
      </Button>
    </Flex>
  );
};

export default QuantityModifier;
