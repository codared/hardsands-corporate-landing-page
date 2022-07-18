import { Box, Flex, Icon, Collapse, useDisclosure } from "@chakra-ui/react";
import HardsandLink from "components/HardsandsLink";
import HardsandsAppLogo from "components/Logo";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { ACCOUNT_NAV_ITEMS } from "./constants";
import NavItem from "./Navitems";
import { Key, useState } from "react";

const SidebarContent = (props: any) => {
  const integrations = useDisclosure();
  const [active, setActive] = useState(props.active);

  return (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg="white"
      _dark={{
        bg: "gray.800",
      }}
      border
      color="inherit"
      borderRightWidth="1px"
      w="60"
      {...props}
    >
      <Flex px="4" py="5" align="center">
        <HardsandsAppLogo />
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
        justify={"space-between"}
        h="95%"
      >
        <Box>
          {ACCOUNT_NAV_ITEMS.map((item: { title: Key | null | undefined; href: string; id: any; icon: any; children: any[]; }) => {
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
                      {item.children.map((childItem: { title: any; }) => (
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
          <NavItem color="red.300" icon={IoLogOutOutline}>
            Logout
          </NavItem>
        </Box>
      </Flex>
    </Box>
  );
};

export default SidebarContent;
