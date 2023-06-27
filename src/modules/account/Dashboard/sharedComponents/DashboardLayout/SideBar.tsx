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
import { useTypedSelector } from "redux/store";

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

  // @ts-ignore
  const { company, companyLogo } = useTypedSelector((state) => state.dashboard);

  const dashNavItems = getDashBoardModule(props.data);

  const handleSidebarLogout = () => {
    handleLogout();
    Router.push(AUTH_ROUTES.login);
  };

  const { corpName: companyName, profileImage } = JSON.parse(
    getCookie(HARDSANDS_CORPERATE) || "{}"
  ) || { corpName: "" };
  const img =
    companyLogo || profileImage || getCardImageFromSlug("epoxy-tag-black");

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
      borderRightWidth="1px"
      w="80"
      {...props}
      display={"flex"}
      flexDir={"column"}
      justifyContent={"space-between"}
      fontSize="sm"
      color="gray.600"
      aria-label="Main Navigation"
    >
      <Box>
        <Flex px="4" py="5" justifyContent={"center"} alignItems="center">
          <HardsandsAppLogo />
        </Flex>

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
            boxShadow={"md"}
            src={img}
            alt={companyName as string}
          />
          <Box h={4} />
          <Text fontSize={14}>Welcome Back</Text>
          <Text fontSize={20} fontWeight={"bolder"} textAlign={"center"}>
            {company || companyName}
          </Text>
        </Flex>
        <Box mt={[10]}>
          {dashNavItems.map((item: AccountNavItemsType) => {
            return (
              <HardsandLink
                key={item.id}
                href={item.href.replace(routeId, props.routes[0])}
                onClick={() => {
                  setActive(item.title);
                }}
              >
                <NavItem
                  color={active === item.title ? "brand.300" : "inherit"}
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
    </Box>
  );
};

export default DashSidebarContent;
