import { Container, Flex, Box } from "@chakra-ui/react";
import CustomizationCanvas from "./CustomizationCanvas";
import CustomizationConfig from "./CustomizationConfig";

const Customization = () => {
  return (
    <>
      <Container maxWidth={["lg", "7xl"]}>
        <Flex
          as="section"
          p={["4rem 1rem"]}
          direction={"column"}
          justify={"space-between"}
        >
          <Flex
            w="100%"
            mx={["unset", 18]}
            maxW={["100%"]}
            px={[0, 2]}
            pb={[0, null, 20]}
            direction={["column", null, "row"]}
            align={["center"]}
          >
            {/* Customization Canvas */}
            <CustomizationCanvas />
            {/* Customization Canvas */}

            <Box w={20} />

            {/* Product Description Section */}
            <CustomizationConfig />
            {/* End Product Description Section */}
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default Customization;
