import {
  useColorModeValue,
  Stack,
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@chakra-ui/react";
import HardsandLink from "components/HardsandsLink";
import { NAV_ITEMS, NavItem } from "./constants";
import DesktopSubNav from "./DesktopSubNav";

const DesktopNav = () => {
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem: NavItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <HardsandLink
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={"black"}
                _hover={{
                  textDecoration: "none",
                  color: "brand.300",
                }}
                _focus={{
                  color: "brand.300",
                }}
              >
                {navItem.label}
              </HardsandLink>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

export default DesktopNav;
