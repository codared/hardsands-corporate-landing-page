import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { MdUndo, MdRedo } from "react-icons/md";
import { BiRefresh } from "react-icons/bi";

const CustomizationCanvas = () => {
  const correctionButtonHoverStyle = {
    bg: "transparent",
    borderWidth: "1px",
    borderColor: "brand.300",
    color: "brand.300",
  };

  return (
    <Box
      width={["100%", null, "50%"]}
      position={["sticky", "unset"]}
      mb={["71px", "unset"]}
      top="10px"
      zIndex={1}
      bg={["white"]}
    >
      <Flex
        direction={"column"}
        align="center"
        justify="center"
        position="relative"
      >
        <Image
          src="https://res.cloudinary.com/dtumqh3dd/image/upload/v1657205110/hardsands/Rectangle_213_epjh2x.svg"
          alt={"image customization canvas"}
        />
        <Flex w="80%" justify={"space-between"}>
          <Button
            _hover={correctionButtonHoverStyle}
            borderWidth={"1px"}
            borderColor={"transparent"}
            variant={"ghost"}
            bg={"transparent"}
            color={"brand.300"}
          >
            <MdUndo size={24} />
            <Text ml={2}>Undo</Text>
          </Button>
          <Button
            _hover={correctionButtonHoverStyle}
            borderWidth={"1px"}
            borderColor={"transparent"}
            variant={"ghost"}
            bg={"transparent"}
            color={"brand.300"}
          >
            <BiRefresh size={24} />
            <Text ml={2}>Reset</Text>
          </Button>
          <Button
            _hover={correctionButtonHoverStyle}
            borderWidth={"1px"}
            borderColor={"transparent"}
            variant={"ghost"}
            bg={"transparent"}
            color={"brand.300"}
          >
            <MdRedo size={24} />
            <Text ml={2}>Redo</Text>
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default CustomizationCanvas;
