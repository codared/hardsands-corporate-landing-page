import { Flex, Box, IconButton, Image, Text } from "@chakra-ui/react";
import HardsandLink from "components/HardsandsLink";
import productRoutes from "modules/products/routes";
import { MdArrowForwardIos } from "react-icons/md";
import LogoIcon from "../../../assets/logo-icon.svg";

const OurSiteMarketing = () => {
  return (
    <HardsandLink href={productRoutes.products()}>
      <Flex
        m={"0 auto"}
        p={6}
        bg={"brand.10"}
        color={"black"}
      >
        <Image src={LogoIcon.src} alt={""} mr={4} />
        <Box>
          <Text fontSize={14} fontWeight={"bolder"}>
            Need a page like this?
          </Text>
          <Text fontSize={14}>
            Buy a card and create cool social profile pages for your
            business!
          </Text>
        </Box>
        <IconButton
          m={"auto 0"}
          variant="outline"
          colorScheme="brand.100"
          aria-label="our link"
          rounded={"full"}
          borderColor={"brand.100"}
          icon={<MdArrowForwardIos />}
        />
      </Flex>
    </HardsandLink>
  );
};

export default OurSiteMarketing;
