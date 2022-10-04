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
  slug,
  img = "",
  description,
  price,
  t,
}: HomeProductCardProps) => (
  <HardsandLink
    href={productRoutes.detail({ slug })}
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
          <Heading fontWeight="bolder" textTransform="uppercase" fontSize="lg">
            {name}
          </Heading>
          <Text fontWeight="bolder">{price}</Text>
        </Flex>

        <Text mb={8}>{description}</Text>
        <Flex justify={"space-between"} direction="row">
          <HardsandsButton
            // @ts-ignore
            borderWidth="1px"
            href={productRoutes.detail({ slug })}
            borderStyle="solid"
            borderColor="brand.100"
            fontSize={"xs"}
            bg={"brand.100"}
            color="black"
            w="100%"
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
            {t("common:shop-now", "Shop Now")}
          </HardsandsButton>
          <Box height={3} width={3} />
        </Flex>
      </Box>
    </Box>
  </HardsandLink>
);

export default HomeProductCard;
