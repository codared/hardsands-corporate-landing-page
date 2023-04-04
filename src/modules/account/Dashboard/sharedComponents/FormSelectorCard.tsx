import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { AiFillFileText } from "react-icons/ai";

const FormSelectorCard = ({ form, active, onClick }: any) => {
  const handleClick = () => {
    onClick(form);
  };

  return (
    <HStack
      cursor={"pointer"}
      borderWidth={1}
      borderColor={active ? "brand.300" : "gray.300"}
      p={[4]}
      bg={active ? "brand.100" : "blackAlpha.10"}
      onClick={handleClick}
      width={["100%"]}
    >
      <Box bg={"brand.300"} p={[2]} rounded={"lg"}>
        <AiFillFileText color="white" size={24} />
      </Box>
      <Text>{form.name}</Text>
    </HStack>
  );
};

export default FormSelectorCard;
