import { Flex, Icon, useColorModeValue, Image } from "@chakra-ui/react";

const NavItem = (props: any) => {
  const { icon, children, isImg, ...rest } = props;
  const color = useColorModeValue("brand.300", "brand.300");

  const renderIcon = () => {
    switch (isImg) {
      case true:
        return <Image src={icon.src} mx={2} alt={"sidebar icon"} />;
      default:
        return (
          <Icon
            mx="2"
            boxSize={5}
            _groupHover={{
              color: color,
            }}
            as={icon}
          />
        );
    }
  };

  return (
    <Flex
      align="center"
      px="4"
      pl="4"
      py="3"
      cursor="pointer"
      color="inherit"
      _dark={{
        color: "gray.400",
      }}
      _hover={{
        color: "brand.300",
      }}
      role="group"
      fontWeight="semibold"
      transition=".15s ease"
      {...rest}
    >
      {renderIcon()}
      {children}
    </Flex>
  );
};

export default NavItem;
