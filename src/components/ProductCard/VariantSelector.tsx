import { Box, Circle, Flex, Tag, TagLabel } from "@chakra-ui/react";
import { SyntheticEvent, useState } from "react";

const VariantSelector = ({
  selectorType,
  variants,
  onChange,
}: {
  selectorType?: string;
  variants: Array<string>;
  onChange: (val: string) => void;
}) => {
  const [active, setActive] = useState(variants[0]);
  const colorMap = {
    Black: "black",
    Sandtone: "brand.200",
  };

  const handleClick = (e: SyntheticEvent, variant: string) => {
    e.preventDefault();
    setActive(variant);
    onChange(variant);
  };

  switch (selectorType) {
    case "Color":
      return (
        <Flex mb={2}>
          {variants.map((variant: string) => {
            return (
              <Box
                key={variant}
                borderWidth={1}
                borderColor={active === variant ? "brand.300" : "brand.100"}
                p={0.5}
                borderRadius="full"
                mr={2}
                onClick={(e) => handleClick(e, variant)}
              >
                <Circle size="23px" bg={colorMap[variant]} />
              </Box>
            );
          })}
        </Flex>
      );
    case "Style":
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
    default:
      return (
        <Flex mb={2}>
          <Tag
            size={"md"}
            bg="gray.100"
            borderRadius="full"
            borderWidth={1}
            borderColor={"gray.100"}
            onClick={(e) => {}}
            mr={2}
          >
            {/* <TagLabel>{variant}</TagLabel> */}
          </Tag>
        </Flex>
      );
  }
};

export default VariantSelector;
