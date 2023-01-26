import { VStack, HStack, Text } from "@chakra-ui/react";
import HardsandLink from "components/HardsandsLink";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FiLink, FiFacebook, FiTwitter } from "react-icons/fi";

function Share({ link }: any) {
  return (
    <VStack
      justifyContent={["flex-start", "center"]}
      alignItems={["flex-start", "center"]}
    >
      <Text>Share This Post</Text>
      <HStack>
        <HardsandLink href={"#"} target={"_blank"}>
          <FiLink size={24} />
        </HardsandLink>
        <HardsandLink href={"#"} target={"_blank"}>
          <FaLinkedinIn size={24} />
        </HardsandLink>
        <HardsandLink href={"#"} target={"_blank"}>
          <FiFacebook size={24} />
        </HardsandLink>
        <HardsandLink href={"#"} target={"_blank"}>
          <FiTwitter size={24} />
        </HardsandLink>
      </HStack>
    </VStack>
  );
}

export default Share;
