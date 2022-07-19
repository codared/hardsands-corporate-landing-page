import { Flex, Image, Text } from "@chakra-ui/react";
import { globeIcon, androidSlashIcon, editIcon } from "design";

const MiniSteps = () => (
  <Flex
    bg="brand.50"
    fontSize="small"
    textTransform="uppercase"
    fontWeight="bold"
    justify="space-around"
    px={["1rem", "6rem", "9rem"]}
    py={[10]}
    flexDir={["column", "row"]}
    alignItems="center"
    fontFamily="Made Outer Sans Regular"
  >
    <Flex mb={[4, 0]}>
      <Image src={globeIcon.src} alt="globe icon" display="inline" />
      <Text ml={["1rem", "1.5rem", "2.5rem"]}>purchase your card</Text>
    </Flex>
    <Flex mb={[4, 0]}>
      <Image src={androidSlashIcon.src} alt="globe icon" display="inline" />
      <Text ml={["1rem", "1.5rem", "2.5rem"]}>create your profile</Text>
    </Flex>
    <Flex mb={[4, 0]}>
      <Image src={editIcon.src} alt="globe icon" display="inline" />
      <Text ml={["1rem", "1.5rem", "2.5rem"]}>tap share connect </Text>
    </Flex>
  </Flex>
);

export default MiniSteps;
