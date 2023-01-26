import {
  Box,
  useColorModeValue,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { BsHandbag } from "react-icons/bs";
import HardsandsButton from "components/HardsandsButton";
import HardsandLink from "components/HardsandsLink";
import { BlogCardProps } from "./type";
import productRoutes, { blogRoute } from "modules/products/routes";

const BlogCard = ({
  title,
  slug,
  dateCreated,
  img = "",
  description,
  t,
}: BlogCardProps) => (
  <HardsandLink
    href={blogRoute.detail({ slug })}
    outline="none"
    _hover={{ color: "unset" }}
    _focus={{
      outline: "none !important",
    }}
    w={["full", "fit-content"]}
  >
    <Box
      //   bg={useColorModeValue("brand.10", "brand.10")}
      position="relative"
      mb={[0]}
      mx={["0", "auto"]}
    >
      <Box w={"100%"}>
        <Image
          w={"100%"}
          src={img}
          alt={`Picture of ${title}`}
          objectFit="cover"
        />
      </Box>

      <Box py={[2, 6]}>
        <Text
          mb={2}
          fontSize={[12, 14]}
          fontWeight={"bolder"}
          noOfLines={[3, 3, 4]}
        >
          {dateCreated}
        </Text>
        <Flex justify="space-between" alignItems="flex-end" mb={4}>
          <Heading fontWeight="bolder" textTransform="uppercase" fontSize="xl">
            {title}
          </Heading>
          {/* <Text fontWeight="bolder">{price}</Text> */}
        </Flex>

        <Text mb={4} fontSize={[12, 14]} noOfLines={[3, 3, 4]}>
          {description}
        </Text>
        <Flex justify={"space-between"} direction="row">
          <HardsandsButton
            // @ts-ignore
            borderWidth="1px"
            href={blogRoute.detail({ slug })}
            borderStyle="solid"
            borderColor="brand.100"
            fontSize={"xs"}
            bg={"brand.100"}
            color="black"
            // w="100%"
            p={["12px 16px"]}
            textAlign="center"
            _hover={{
              bg: "transparent",
              color: "black",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "brand.200",
            }}
            iconMargin="20px"
            Icon={BsHandbag}
          >
            {t("common:read-post", "READ POST")}
          </HardsandsButton>
        </Flex>
      </Box>
    </Box>
  </HardsandLink>
);

export default BlogCard;
