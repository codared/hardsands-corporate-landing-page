import { VStack, HStack, Text, useToast } from "@chakra-ui/react";
import HardsandLink from "components/HardsandsLink";
import React, { useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FiLink, FiFacebook, FiTwitter } from "react-icons/fi";

function Share({ link }: any) {
  const toast = useToast();

  return (
    <VStack
      justifyContent={["flex-start", "center"]}
      alignItems={["flex-start", "center"]}
    >
      <Text>Share This Post</Text>
      <HStack>
        <HardsandLink
          href={"#"}
          onClick={() =>
            navigator.clipboard.writeText(link).then(() =>
              toast({
                title: "Link Copied!",
                status: "success",
                duration: 5000,
                isClosable: true,
              })
            )
          }
        >
          <FiLink size={24} />
        </HardsandLink>
        <HardsandLink
          href={`https://www.linkedin.com/shareArticle?mini=true&url=http://developer.linkedin.com&source=Hardsands
          `}
          target={"_blank"}
        >
          <FaLinkedinIn size={24} />
        </HardsandLink>
        <HardsandLink
          href={`https://www.facebook.com/sharer/sharer.php?u=${link}`}
          target={"_blank"}
        >
          <FiFacebook size={24} />
        </HardsandLink>
        <HardsandLink
          href={"http://www.twitter.com/share?url=http://www.google.com/"}
          target={"_blank"}
        >
          <FiTwitter size={24} />
        </HardsandLink>
      </HStack>
    </VStack>
  );
}

export default Share;
