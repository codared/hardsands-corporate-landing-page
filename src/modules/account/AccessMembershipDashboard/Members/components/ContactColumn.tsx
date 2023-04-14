import { Flex, HStack, Text } from "@chakra-ui/react";
import contact from "pages/contact";
import React from "react";
import { BsTelephone } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";

const ContactColumn = ({ email, phone }: { email: string; phone: string }) => {
  return (
    <Flex flexDirection={["column"]} alignItems={"flex-start"}>
      <HStack>
        <IoMailOutline />
        <Text fontSize={14}>{email}</Text>
      </HStack>
      <HStack>
        <BsTelephone />
        <Text fontSize={14}>{phone}</Text>
      </HStack>
    </Flex>
  );
};

export default ContactColumn;
