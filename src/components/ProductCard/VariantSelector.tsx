import { Box, Circle, Flex, Tag, TagLabel } from "@chakra-ui/react";
import { SyntheticEvent, useState } from "react";

const VariantSelector = ({
  selectorType,
  variants,
}: {
  selectorType: "color" | "style";
  variants: Array<string>;
}) => {
  const [active, setActive] = useState(variants[0]);

  const handleClick = (e: SyntheticEvent, variant: string) => {
    e.preventDefault();
    setActive(variant);
  };

  switch (selectorType) {
    case "color":
      return (
        <Flex mb={2}>
          {variants.map((variant) => (
            <Box
              key={variant}
              borderWidth={1}
              borderColor={active === variant ? "brand.300" : "brand.100"}
              p={0.5}
              borderRadius="full"
              mr={2}
              onClick={(e) => handleClick(e, variant)}
            >
              <Circle size="23px" bg={variant} />
            </Box>
          ))}
        </Flex>
      );
    case "style":
      return (
        <Flex mb={2}>
          {variants.map((variant) => (
            <Tag
              size={"md"}
              bg="transparent"
              key={variant}
              borderRadius="full"
              borderWidth={1}
              borderColor={active === variant ? "brand.300" : "brand.100"}
              onClick={(e) => handleClick(e, variant)}
              mr={2}
            >
              <TagLabel>{variant}</TagLabel>
            </Tag>
          ))}
        </Flex>
      );
  }
};

export default VariantSelector;
