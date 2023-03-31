import { Flex, Spinner, Text } from "@chakra-ui/react";
import React from "react";

function Loader({ h = "100vh" }) {
  return (
    <Flex
      w={"full"}
      h={h}
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
