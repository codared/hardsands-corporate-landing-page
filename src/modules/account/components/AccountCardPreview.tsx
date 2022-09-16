import { Flex, Button, Box, Image } from "@chakra-ui/react";
import { AiOutlineEye } from "react-icons/ai";

const AccountCardPreview = () => {
  return (
    <>
      <Image
        src="https://res.cloudinary.com/dtumqh3dd/image/upload/v1657205110/hardsands/Rectangle_213_epjh2x.svg"
        alt="your card"
      />

      <Flex justifyContent={"center"} w={"full"}>
        <Button
          bg="red.300"
          color={"white"}
          _hover={{ textColor: "white" }}
          borderRadius="0"
          py={5}
          px={[10, 16]}
          disabled
        >
          Deactivate
        </Button>
        <Box w={50} />
        <Flex
          // py={1.5}
          // px={[10, 16]}
          color="brand.300"
          fontWeight={"bolder"}
          alignSelf={"center"}
          // borderWidth="1px"
          // borderStyle="solid"
        >
          0 Taps
          <Box ml={3} alignSelf={"center"}>
            <AiOutlineEye size={20} />
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default AccountCardPreview;
