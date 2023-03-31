import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Tag,
  TagLeftIcon,
  TagLabel,
  Text,
  BoxProps,
  Image,
} from "@chakra-ui/react";
import { AppIcons } from "modules/account/constants";
import React from "react";
import { CiMenuKebab } from "react-icons/ci";

interface StatsCardProps extends BoxProps {
  name: string;
  number: string;
  curves?: string;
  decline?: boolean;
  showMenu?: boolean;
  width?: number;
  bg?: string;
}
const StatsCard = ({
  name,
  number,
  curves,
  bg = "#fff",
  decline,
  showMenu = true,
  width = 100 / 3,  ...rest
}: StatsCardProps) => {
  return (
    <Box
      //   h={"max-content"}
      w={["full", "full", width]}
      p={[6]}
      borderColor={"grey.300"}
      bg={bg}
      borderWidth={1}
      flexGrow={1}
      {...rest}
    >
      <Flex justifyContent={"space-between"}>
        <Box ml={[4]} my={"auto"}>
          <Text fontWeight={"bold"}>{name}</Text>
          <Heading w={"full"} fontSize={30} fontWeight={"bolder"}>
            {number}
          </Heading>
        </Box>
        {!curves && (
          <Box>
            <Image src={AppIcons.ChartIconSVG.src} alt={"chart"} />
          </Box>
        )}
        <Flex direction={"column"} alignItems={"end"}>
          {showMenu && (
            <IconButton
              w={"fit-content"}
              colorScheme="ghost"
              color={"black"}
              aria-label="menu options"
              icon={<CiMenuKebab size={24} />}
              _hover={{
                bg: "transparent",
                color: "brand.300",
              }}
            />
          )}
          {curves && (
            <Tag
              px={[4]}
              py={[1]}
              size={"sm"}
              variant="subtle"
              bg={decline ? "rgba(255, 59, 48, 0.1)" : "rgba(5, 205, 153, 0.1)"}
              rounded={"full"}
            >
              <TagLeftIcon
                color={decline ? "#FF3B30" : "#05CD99"}
                boxSize="12px"
                as={decline ? ArrowDownIcon : ArrowUpIcon}
              />
              <TagLabel color={decline ? "#FF3B30" : "#05CD99"}>
                {curves}
              </TagLabel>
            </Tag>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default StatsCard;
