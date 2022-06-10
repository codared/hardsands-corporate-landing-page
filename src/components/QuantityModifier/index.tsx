import { Flex, Image, Text } from "@chakra-ui/react";
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
      <HardsandLink
        onClick={(e: SyntheticEvent) => {
          e.preventDefault();
          handleChange("minus");
        }}
        href={"#"}
        _hover={{ opacity: ".5" }}
      >
        <Image boxSize={10} src={MinusIcon.src} alt="minus image" />
      </HardsandLink>
      <Text
        display="flex"
        justifyContent="center"
        w="28px"
        alignSelf="center"
        mx={2}
      >
        {quantity}
      </Text>
      <HardsandLink
        onClick={(e: SyntheticEvent) => {
          e.preventDefault();
          handleChange("plus");
        }}
        href={"#"}
        _hover={{ opacity: ".5" }}
      >
        <Image boxSize={10} src={PlusIcon.src} alt="plus image" />
      </HardsandLink>
    </Flex>
  );
};

export default QuantityModifier;
