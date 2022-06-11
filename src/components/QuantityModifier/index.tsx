import { Button, Flex, Image, Text } from "@chakra-ui/react";
import HardsandLink from "components/HardsandsLink";
import MinusIcon from "design/svg/minus_bg.svg";
import PlusIcon from "design/svg/plus_bg.svg";
import { SyntheticEvent } from "react";

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
    quantity = quantity <= 0 ? 0 : quantity;
    onChange(quantity);
  };
  return (
    <Flex>
      <Button
        onClick={(e: SyntheticEvent) => {
          e.preventDefault();
          handleChange("minus");
        }}
        _hover={{ opacity: ".5", bg: "transparent" }}
        bg="transparent"
        _focus={{ bg: "transparent" }}
        px={0}
      >
        <Image boxSize={10} src={MinusIcon.src} alt="minus image" />
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
        _hover={{ opacity: ".5", bg: "transparent" }}
        bg="transparent"
        _focus={{ bg: "transparent" }}
        px={0}
      >
        <Image boxSize={10} src={PlusIcon.src} alt="plus image" />
      </Button>
    </Flex>
  );
};

export default QuantityModifier;
