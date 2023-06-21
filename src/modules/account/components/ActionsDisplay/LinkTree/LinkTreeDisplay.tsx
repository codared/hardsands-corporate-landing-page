import {
  Center,
  Box,
  useColorModeValue,
  Flex,
  Image,
  Heading,
  Text,
} from "@chakra-ui/react";
import HardsandLink from "components/HardsandsLink";
import { linkTrees } from "modules/account/constants";
import React from "react";
import { IconType } from "react-icons";

const LinkTreeDisplay = ({ data }: any) => {
  return (
    <Center>
      <Box
        maxW={"480px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Box h={"180px"} w={"full"} />
        <Flex direction={"column"} justify={"center"} alignItems={"center"}>
          <Box w={"50%"} mt={-24} position={"relative"}>
            <Image
              w={"auto"}
              m="0 auto"
              objectFit={"cover"}
              src={
                "https://cdn.shopify.com/s/files/1/0559/0407/5843/files/Group_1248.png?v=1687263171"
              }
              alt={"hardsands link tree image"}
            />
          </Box>

          <Box w={"50%"} mt={6}>
            <Heading fontSize={"xl"} p={4}>
              MY LINK-TREE
            </Heading>
          </Box>

          <Box mt={6} w={"100%"} px={4}>
            {data.map((tree: any) => {
              const Icon = linkTrees.find(
                (linkTree: any) => linkTree.id === tree?.linkId
              )?.icon as IconType;

              return (
                <HardsandLink
                  key={tree?.linkId}
                  target={"_blank"}
                  href={tree?.link}
                >
                  <Flex
                    justifyContent={"center"}
                    alignItems={"center"}
                    py={4}
                    px={10}
                    mt={4}
                    bg={"brand.10"}
                  >
                    <Icon size={26} />
                    <Text ml={4} fontSize={"xl"}>
                      {tree?.linkName}
                    </Text>
                  </Flex>
                </HardsandLink>
              );
            })}
          </Box>
        </Flex>
      </Box>
    </Center>
  );
};

export default LinkTreeDisplay;
