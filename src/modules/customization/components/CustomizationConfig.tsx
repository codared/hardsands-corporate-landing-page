import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tag,
  Text,
} from "@chakra-ui/react";
import CustomMenu from "components/CustomMenu";
import { useTranslation } from "react-i18next";
import { BsImageFill } from "react-icons/bs";
import { FaFileUpload } from "react-icons/fa";
import { MdCloudUpload } from "react-icons/md";

const CustomizationConfig = () => {
  const fontStyleOption = [
    { title: "Download" },
    { title: "Create a Copy" },
    { title: "Create a Copy" },
    { title: "Create a Copy" },
  ];

  const sizeOptions = [
    { title: "25" },
    { title: "26" },
    { title: "27" },
    { title: "28" },
  ];

  const colorOptions = [
    {
      title: "Plain",
      color: "brand.300",
    },
    {
      title: "Standard",
      color: "brand.200",
    },
    {
      title: "Customs",
      color: "gray.300",
    },
    {
      title: "black",
      color: "black",
    },
  ];

  const { t } = useTranslation();
  const handleChange = () => {};

  const hoverStyle = {
    borderColor: "brand.300",
  };

  const handleSaveCustomization = () => {};

  return (
    <Box w={["100%", "100%", "50%"]}>
      <Heading fontSize={28}>
        {t("product-customization:title", "Design Your Card")}
      </Heading>
      <Box h={8} />
      <Box>
        <Text fontFamily="MADE Outer sans">Card Text</Text>
        <Box h={2} />
        <Input
          borderRadius={0}
          borderColor={"black"}
          onChange={handleChange}
          placeholder="large size"
          _placeholder={{ color: "RGBA(0, 0, 0, 0.80)" }}
          size="lg"
        />
      </Box>
      <Box h={8} />
      <Box>
        <Text fontFamily="MADE Outer sans">Typography</Text>
        <Box h={2} />
        <Flex>
          <CustomMenu
            w={["50%"]}
            menuTitle={"Font Type"}
            options={fontStyleOption}
          />
          <Box w={6} />
          <CustomMenu w={["25%"]} menuTitle={"24"} options={sizeOptions} />
          <Box w={6} />
          <CustomMenu
            w={["25%"]}
            menuTitle={
              <Tag
                bgColor={"brand.300"}
                size={"sm"}
                borderRadius="full"
                variant="solid"
              />
            }
            isColorOptions
            options={colorOptions}
          />
        </Flex>
      </Box>
      <Box h={8} />
      <Box>
        <Text fontFamily="MADE Outer sans">Images</Text>
        <Box h={2} />
        <Flex>
          <Flex
            direction="column"
            bg={"transparent"}
            borderWidth={1}
            borderRadius={0}
            borderStyle="dashed"
            borderColor={"black"}
            cursor="pointer"
            py={[6]}
            px={[6]}
            alignItems={"center"}
            justify={"center"}
            textAlign={"center"}
            w={["33.3333%"]}
            transition="auto ease-in-out 200ms"
            _hover={hoverStyle}
          >
            <MdCloudUpload size={24} />
            <Text w={"full"}>Logo Upload</Text>
          </Flex>
          <Box w={6} />
          <Flex
            direction="column"
            bg={"transparent"}
            borderWidth={1}
            borderRadius={0}
            borderStyle="dashed"
            borderColor={"black"}
            cursor="pointer"
            py={[6]}
            px={[6]}
            alignItems={"center"}
            justify={"center"}
            textAlign={"center"}
            w={["33.3333%"]}
            transition="auto ease-in-out 200ms"
            _hover={hoverStyle}
          >
            <BsImageFill size={24} />
            <Text w={"full"}>Background Image</Text>
          </Flex>
          <Box w={6} />
          <Flex
            direction="column"
            bg={"transparent"}
            borderWidth={1}
            borderRadius={0}
            borderStyle="dashed"
            borderColor={"black"}
            cursor="pointer"
            py={[6]}
            px={[6]}
            alignItems={"center"}
            justify={"center"}
            textAlign={"center"}
            w={["33.3333%"]}
            transition="auto ease-in-out 200ms"
            _hover={hoverStyle}
          >
            <FaFileUpload size={24} />
            <Text w={"full"}>Saved Design</Text>
          </Flex>
        </Flex>
      </Box>

      <Box h={8} />
      <Box>
        <HStack
          px={[2]}
          py={[4]}
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
          onClick={handleSaveCustomization}
          userSelect="none"
        >
          <Text>Save</Text>
        </HStack>
      </Box>
    </Box>
  );
};

export default CustomizationConfig;
