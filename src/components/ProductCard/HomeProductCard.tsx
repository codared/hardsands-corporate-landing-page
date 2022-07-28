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
import { HomeProductCardProps } from "./type";
import productRoutes from "modules/products/routes";

const HomeProductCard = ({
  name,
  img = "",
  description,
  price,
  t,
}: HomeProductCardProps) => (
  <HardsandLink
    href={productRoutes.products()}
    outline="none"
    _hover={{ color: "unset" }}
    _focus={{
      outline: "none !important",
    }}
    w={["full", "fit-content"]}
  >
    <Box
      bg={useColorModeValue("brand.10", "brand.10")}
      position="relative"
      mb={[0]}
      mx={["0", "auto"]}
    >
      <Box>
        <Image src={img} alt={`Picture of ${name}`} objectFit="cover" />
      </Box>

      <Box px={[2, 6]} pb={[2, 6]}>
        <Flex justify="space-between" alignItems="flex-end" mb={4}>
          <Heading fontWeight="bolder" textTransform="uppercase" fontSize="xl">
            {name}
          </Heading>
          <Text fontWeight="bolder">₦{price}</Text>
        </Flex>

        <Text mb={8}>{description}</Text>
        <Flex justify={"space-between"} direction="row">
          <HardsandsButton
            // @ts-ignore
            border="none"
            fontSize={"xs"}
            bg={"black"}
            color="brand.300"
            w="100%"
            p={["12px 16px"]}
            textAlign="center"
            _hover={{
              bg: "black",
              color: "brand.300",
            }}
            iconMargin="20px"
            Icon={BsHandbag}
          >
            {t("common:shop-now", "Shop Now")}
          </HardsandsButton>
          <Box height={3} width={3} />
          <HardsandsButton
            // @ts-ignore
            border="1px solid black"
            fontSize={"xs"}
            bg={"transparent"}
            color="brand.300"
            w="100%"
            p={["12px 16px"]}
            textAlign="center"
            _hover={{
              bg: "black",
              color: "brand.300",
            }}
            iconMargin="20px"
          >
            {t("common:customize", "Customize")}
          </HardsandsButton>
        </Flex>
      </Box>
    </Box>
  </HardsandLink>
);

export default HomeProductCard;
