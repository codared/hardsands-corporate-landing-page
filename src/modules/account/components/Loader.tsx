import { Flex, Spinner, Text } from "@chakra-ui/react";
import React from "react";

function Loader() {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      justifyContent="center"
      alignItems={"center"}
      direction="column"
    >
      <Spinner size="xl" />
      <Text>loading...</Text>
    </Flex>
  );
}

export default Loader;
