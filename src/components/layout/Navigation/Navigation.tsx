import {
  Box,
  Flex,
  Stack,
  Collapse,
  useDisclosure,
  Image,
  Button,
  Text,
} from "@chakra-ui/react";
import { BsHandbag } from 'react-icons/bs';
import { HiMenuAlt3 } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import HardsandLink from "components/HardsandsLink";
import LoginIcon from "design/svg/Login.svg";
import React, { useState } from "react";
import Cart from "modules/Cart";
import { useOffsetScroll } from "components/Navigation/hooks";
import HardsandsAppLogo from "components/Logo";

const minifyNotificationCount = (count: string) => {
  return count.length > 1 ? "9+" : count;
};

export default function Navigation() {
  const { isOpen, onToggle } = useDisclosure();
  const [isCartOpen, setCartOpen] = useState(false);
  const { offset } = useOffsetScroll();
  const cartBtnRef = React.useRef(null);

  return (
    <Box as="nav" w="100%" position="sticky" zIndex="sticky" bg="black" top={0}>
      <Cart
        isOpen={isCartOpen}
        onClose={() => setCartOpen(!isCartOpen)}
        ref={cartBtnRef}
      />
      <Flex
        minH={"70px"}
        py={[2]}
        px={[4, 36]}
        align={"center"}
        justifyContent={"space-between"}
      >
        <HardsandsAppLogo />

        <Flex display={["none", "flex"]} color="white">
          <DesktopNav />
        </Flex>

        <Stack
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
          alignItems="center"
          ml={["50px", "unset"]}
        >
          <Button
            bg="transparent"
            _focus={{ bg: "transparent" }}
            _hover={{ bg: "transparent" }}
            onClick={() => {
              const portal: any = document.querySelector(
                "#cart__drawer_overlay"
              ) as HTMLElement;
              if (portal?.parentNode) portal.parentNode.style.display = "flex";
              setCartOpen(!isCartOpen);
            }}
            display="flex"
            px={0}
            // @ts-ignore
            ref={cartBtnRef}
          >
            <BsHandbag color="white" size={24} />
            <Box
              display="flex"
              borderRadius="100%"
              bg="black"
              color="white"
              w="23px"
              h="23px"
              alignSelf="flex-start"
            >
              <Text alignSelf="flex-end">{minifyNotificationCount("10")}</Text>
            </Box>
          </Button>

          <Button
            bg="transparent"
            _focus={{ bg: "transparent" }}
            _hover={{ bg: "transparent" }}
            px={0}
          >
            <Image
              boxSize="26px"
              src={LoginIcon.src}
              alt="hardsands login icon"
            />
          </Button>

        <Flex ml={[-2]} display={["flex", "none", "none"]} justifyContent="end">
          <HardsandLink
            onClick={onToggle}
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
            href={"#"}
          >
            {!isOpen ? (
              <HiMenuAlt3 color="white" size={30} />
            ) : (
              <MdClose color="white" size={30} />
            )}
          </HardsandLink>
        </Flex>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}
