import {
  Box,
  Flex,
  Icon,
  Collapse,
  useDisclosure,
  Avatar,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import HardsandLink from "components/HardsandsLink";
import HardsandsAppLogo from "components/Logo";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { DASH_NAV_ITEMS } from "../../constants";
import NavItem from "../Navitems";
import { useState } from "react";
import { AccountNavItemsType } from "utils/types";
import { removeCookie } from "modules/shared/cookie";
import {
  AUTH_ROUTES,
  HARDSANDS_LOGIN_COOKIE,
} from "modules/authentication/constants";
import Router from "next/router";
import { hardsandsIconLogo } from "design";

const DashSidebarContent = (props: any) => {
  const integrations = useDisclosure();
  const [active, setActive] = useState(props.active);

  const handleLogout = () => {
    removeCookie(HARDSANDS_LOGIN_COOKIE);
    Router.push(AUTH_ROUTES.login);
  };

  return (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      overflowX="hidden"
      overflowY="auto"
      bg="white"
      _dark={{
        bg: "gray.800",
      }}
      border
      color="inherit"
      borderRightWidth="1px"
      {...props}
    >
      <Flex
        px="6"
        pt="10"
        pb="6"
        display="flex"
        gap="1rem"
        align="center"
        borderBottom="1px solid #f4f7fe"
      >
        <Image src={hardsandsIconLogo.src} width={45} height={45} />
        <HardsandsAppLogo />
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
        gap={"3rem"}
        p="4"
      >
        <Box display="flex" flexDir="column" alignItems="center">
          <Avatar src="../" width={98} height={98} />
          <Text textAlign="center" fontSize="11px">
            {" "}
            Welcome Back
          </Text>
          <Text textAlign="center"> Greens Limited</Text>
        </Box>
        <Box>
          {DASH_NAV_ITEMS.map((item: AccountNavItemsType) => {
            return (
              <HardsandLink
                key={item.title}
                href={item.href}
                onClick={() => setActive(item.id)}
              >
                <NavItem
                  color={active === item.id ? "brand.300" : "inherit"}
                  icon={item.icon}
                >
                  {item.title}
                </NavItem>
                {item.children?.length && (
                  <>
                    <NavItem icon={item.icon} onClick={integrations.onToggle}>
                      {item.title}
                      <Icon
                        as={MdKeyboardArrowRight}
                        ml="auto"
                        // @ts-ignore
                        transform={integrations.isOpen && "rotate(90deg)"}
                      />
                    </NavItem>
                    <Collapse in={integrations.isOpen}>
                      {item.children.map((childItem: { title: any }) => (
                        <NavItem key={childItem.title} pl="12" py="2">
                          {childItem.title}
                        </NavItem>
                      ))}
                    </Collapse>
                  </>
                )}
              </HardsandLink>
            );
          })}
        </Box>
        <Box>
          <NavItem
            onClick={handleLogout}
            color="red.300"
            icon={IoLogOutOutline}
          >
            Logout
          </NavItem>
        </Box>
      </Flex>
    </Box>
  );
};

export default DashSidebarContent;
