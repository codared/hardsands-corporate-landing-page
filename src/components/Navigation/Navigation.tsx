import {
  Box,
  Flex,
  IconButton,
  Stack,
  Collapse,
  useColorModeValue,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import HardsandLink from "components/HardsandsLink";
import HardsandLogo from "design/svg/hardsands_word_logo.svg";
import HardsandIconLogo from "design/svg/hardsands_icon_logo.svg";
import CartBag from "design/svg/Bag.svg";
import Heart from "design/svg/Heart.svg";
import Hamburger from "design/svg/hamburger.svg";
import LoginIcon from "design/svg/Login.svg";
import CloseIcon from "design/svg/fi_x.svg";

const minifyNotificationCount = (count: string) => {
  return count.length > 2 ? "9+" : count;
};

export default function Navigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        minH={"70px"}
        py={[2]}
        px={[4]}
        // borderBottom={1}
        // borderStyle={"solid"}
        // borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        justifyContent={"space-between"}
      >
        <Flex justify={["start"]} mr={['unset', 'unset', 10]}>
          <Image
            w="176px"
            objectFit="cover"
            src={HardsandLogo.src}
            alt="hardsands logo"
            display={["none", "none", "flex"]}
          />
          <Image
            w="55px"
            objectFit="cover"
            src={HardsandIconLogo.src}
            alt="hardsands Icon logo"
            display={["flex", "flex", "none"]}
          />
        </Flex>

        <Flex display={["none", "flex"]}>
          <DesktopNav />
        </Flex>

        <Stack
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
          alignItems="center"
          ml={["50px", "unset"]}
        >
          <HardsandLink href="#" display="flex">
            <Image boxSize="26px" src={CartBag.src} alt="hardsands cart icon" />
            <Box
              borderRadius="100%"
              bg="black"
              color="white"
              textAlign="center"
              w="23px"
              h="23px"
            >
              {minifyNotificationCount("9")}
            </Box>
          </HardsandLink>
          <HardsandLink href="#" display="flex">
            <Image boxSize="26px" src={Heart.src} alt="hardsands heart icon" />
          </HardsandLink>

          <HardsandLink href="#">
            <Image
              boxSize="26px"
              src={LoginIcon.src}
              alt="hardsands login icon"
            />
          </HardsandLink>
          <HardsandLink
            fontSize={"sm"}
            fontWeight={500}
            color={"white"}
            bg={"black"}
            href={"#"}
            p={["none", "12px 16px", "12px 46px"]}
            border="1px solid black"
            borderRadius="8px"
            transition="all 200ms ease-in"
            _hover={{
              bg: "white",
              color: "black",
            }}
            display={["none", "flex"]}
          >
            Buy Your Card
          </HardsandLink>
        </Stack>

        <Flex ml={[-2]} display={["flex", "none", "none"]} justifyContent="end">
          <HardsandLink
            onClick={onToggle}
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
            href={"#"}
          >
            {!isOpen && <Image src={Hamburger.src} alt="hamburger icon" />}
            {isOpen && <Image src={CloseIcon.src} alt="close icon" />}
          </HardsandLink>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}
