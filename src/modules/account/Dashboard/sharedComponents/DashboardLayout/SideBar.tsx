import {
  Box,
  Flex,
  Icon,
  Collapse,
  useDisclosure,
  Text,
  Image,
} from "@chakra-ui/react";
import HardsandLink from "components/HardsandsLink";
import HardsandsAppLogo from "components/Logo";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { AccountNavItemsType } from "utils/types";
import { getCookie } from "modules/shared/cookie";
import {
  AUTH_ROUTES,
  HARDSANDS_CORPERATE,
  UserModuleTypes,
} from "modules/authentication/constants";
import Router from "next/router";
import NavItem from "modules/account/components/Navitems";
import {
  DASH_NAV_ITEMS,
  ACCESS_DASH_NAV_ITEMS,
  routeId,
} from "modules/account/constants";
import { useActiveSidebarItem } from "../../hooks";
import { getCardImageFromSlug } from "modules/products/functions";
import { handleLogout } from "utils/functions";

const getDashBoardModule = (data: any) => {
  if (data.module === UserModuleTypes.CORPORATE) {
    return DASH_NAV_ITEMS;
  } else if (data.module === UserModuleTypes.ACCESS) {
    return ACCESS_DASH_NAV_ITEMS;
  } else {
    return [];
  }
};

const DashSidebarContent = (props: any) => {
  const integrations = useDisclosure();
  const { active, setActive } = useActiveSidebarItem(
    DASH_NAV_ITEMS,
    props.routes[1]
  );

  const dashNavItems = getDashBoardModule(props.data);

  const handleSidebarLogout = () => {
    handleLogout();
    Router.push(AUTH_ROUTES.login);
  };

  const img = getCardImageFromSlug("epoxy-tag-black");
  const { corpName: companyName } = JSON.parse(
    getCookie(HARDSANDS_CORPERATE) || "{}"
  ) || { corpName: "" };

  return (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      px={[10]}
      overflowX="hidden"
      overflowY="auto"
      bg="white"
      _dark={{
        bg: "gray.800",
      }}
      border
      color="inherit"
      borderRightWidth="1px"
      w="80"
      {...props}
    >
      <Flex px="4" py="5" justifyContent={"center"} alignItems="center">
        <HardsandsAppLogo />
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
        h="95%"
      >
        <Flex
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image
            rounded={"full"}
            width={"150px"}
            h={"150px"}
            objectFit={"cover"}
            src={img}
            alt={companyName as string}
          />
          <Box h={4} />
          <Text fontSize={14}>Welcome Back</Text>
          <Text fontSize={20} fontWeight={"bolder"} textAlign={"center"}>
            {companyName}
          </Text>
        </Flex>
        <Box mt={[10]}>
          {dashNavItems.map((item: AccountNavItemsType) => {
            return (
              <HardsandLink
                key={item.title}
                href={item.href.replace(routeId, props.routes[0])}
                onClick={() => setActive(item.id)}
              >
                <NavItem
                  color={active === item.id ? "brand.300" : "inherit"}
                  icon={item.icon}
                  isImg={item.isImg}
                >
                  {item.title}
                </NavItem>
                {item.children?.length && (
                  <>
                    <NavItem
                      icon={item.icon}
                      isImg={item.isImg}
                      onClick={integrations.onToggle}
                    >
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
                        <NavItem
                          isImg={item.isImg}
                          key={childItem.title}
                          pl="12"
                          py="2"
                        >
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
            onClick={handleSidebarLogout}
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
