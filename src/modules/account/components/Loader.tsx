import { Flex, Spinner, Text } from "@chakra-ui/react";
import React from "react";

function Loader({
  h = "100vh",
  showText = true,
}: {
  h?: string;
  showText?: boolean;
}) {
  return (
    <Flex
      w={"full"}
      h={h}
      justifyContent="center"
      alignItems={"center"}
      direction="column"
    >
      <Spinner size="xl" />
      {showText && <Text>loading...</Text>}
    </Flex>
  );
}

export default Loader;
