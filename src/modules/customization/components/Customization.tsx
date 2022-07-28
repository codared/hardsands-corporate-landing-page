import {
  Container,
  Flex,
  Box,
  useDisclosure,
  Heading,
  Text,
  HStack,
  VStack,
  Image,
} from "@chakra-ui/react";
import CustomModal from "components/CustomModal";
import { MdFileDownload } from "react-icons/md";
import CustomizationCanvas from "./CustomizationCanvas";
import CustomizationConfig from "./CustomizationConfig";

const Customization = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDownload = () => {};

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
            <CustomizationConfig onComplete={onOpen} />
            {/* End Product Description Section */}
          </Flex>
        </Flex>
      </Container>
      <CustomModal size={["full", "xl"]} isOpen={isOpen} onClose={onClose}>
        <VStack
          textAlign={"center"}
          justify={"center"}
          alignItems={"center"}
          py={[10, 20]}
          px={[6, 20]}
        >
          <Image
            boxSize={300}
            src="https://res.cloudinary.com/dtumqh3dd/image/upload/v1657205110/hardsands/Rectangle_213_epjh2x.svg"
            alt="customization preview"
          />
          <Heading fontSize={24}>Congratulations your card design is complete!</Heading>
          <Box h={8} />
          <Text>
            Here’s the mockup of your card design. Complete your order by
            clicking on place order or make adjustments as deemed fit.
          </Text>
          <Box h={10} />
          <HStack
            px={[2]}
            py={[2]}
            mr={[4]}
            cursor="pointer"
            w={"100%"}
            justify={"center"}
            transition={"all ease-in-out 200ms"}
            bg="brand.200"
            color={"black"}
            _hover={{
              bg: "black",
              color: "brand.200",
            }}
            fontFamily={"MADE Outer sans"}
            onClick={handleDownload}
            userSelect="none"
          >
            <Text>Download</Text>
            <Box w={2} />
            <MdFileDownload />
          </HStack>
        </VStack>
      </CustomModal>
    </>
  );
};

export default Customization;
