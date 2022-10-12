import {
  Box,
  Circle,
  Flex,
  HStack,
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import { SyntheticEvent, useState } from "react";
import { CUSTOMIZED } from "./type";

const VariantSelector = ({
  selectorType,
  variants,
  onChange,
  activeVariant,
}: {
  selectorType?: string;
  activeVariant?: string | number;
  variants: Array<string>;
  onChange: (val: string) => void;
}) => {
  const [active, setActive] = useState(activeVariant || variants[0]);
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
                cursor="pointer"
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
        <Flex mb={2} cursor="pointer">
          {variants.map((variant) => (
            <Tag
              size={"md"}
              bg="transparent"
              key={variant}
              borderRadius="full"
              borderWidth={1}
              borderColor={active === variant ? "brand.300" : "brand.100"}
              onClick={(e) =>
                variant === CUSTOMIZED ? () => {} : handleClick(e, variant)
              }
              opacity={variant === CUSTOMIZED ? 0.5 : 1}
              cursor={variant === CUSTOMIZED ? "not-allowed" : "pointer"}
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
          {variants.map((variant) => {
            return (
              <HStack
                key={variant}
                borderWidth="1px"
                borderColor={active === variant ? "brand.300" : "brand.200"}
                px={[5, 5, 10]}
                py={[2]}
                mr={[4]}
                onClick={(e) =>
                  variant === CUSTOMIZED ? () => {} : handleClick(e, variant)
                }
                opacity={variant === CUSTOMIZED ? 0.5 : 1}
                cursor={variant === CUSTOMIZED ? "not-allowed" : "pointer"}
                transition={"all ease-in-out 200ms"}
              >
                {!!colorMap[variant] && (
                  <Tag
                    size={"sm"}
                    borderRadius="full"
                    variant="solid"
                    bg={colorMap[variant]}
                  />
                )}
                <Text color="gray.600" userSelect="none">
                  {variant}
                </Text>
              </HStack>
            );
          })}
        </Flex>
      );
  }
};

export default VariantSelector;
