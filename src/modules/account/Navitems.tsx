import { Flex, Icon, useColorModeValue } from "@chakra-ui/react";

const NavItem = (props: any) => {
  const { icon, children, ...rest } = props;
  const color = useColorModeValue("brand.300", "brand.300");

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
      {icon && (
        <Icon
          mx="2"
          boxSize={5}
          _groupHover={{
            color: color,
          }}
          as={icon}
        />
      )}
      {children}
    </Flex>
  );
};

export default NavItem;
