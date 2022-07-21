import { Text, Image, Box, LinkProps } from "@chakra-ui/react";
import HardsandLink from "components/HardsandsLink";
import { rightArrow } from "design";
import { IconType } from "react-icons";

export type HardsandButtonProps = Omit<LinkProps, any> & {
  text?: string;
  href?: string;
  iconMargin?: string | number | Array<string | number>;
  Icon?: IconType | null;
  children?: string;
  iconSize?: string | number;
};

const HardsandsButton = ({
  text = "Design Your Card",
  href = "/shop",
  children,
  iconMargin = "2rem",
  Icon,
  iconSize = 24,
  ...rest
}: HardsandButtonProps) => (
  <HardsandLink
    fontSize={"sm"}
    fontWeight="bold"
    color={"black"}
    bg={"brand.200"}
    href={href}
    p={["12px 16px", "12px 46px"]}
    w="fit-content"
    display="flex"
    alignItems="center"
    justifyContent={'center'}
    transition="all 200ms ease-in"
    border="1px solid #F5D7BB"
    _hover={{
      bg: "black",
      color: "brand.300",
      border: "1px solid #DF9F71",
    }}
    fontFamily="Made Outer Sans Regular"
    {...rest}
  >
    <Text as="span">{children || text}</Text>
    {Icon ? (
      <Box ml={iconMargin}>
        <Icon size={iconSize} />
      </Box>
    ) : Icon === null ? null : (
      <Image src={rightArrow.src} alt={text} ml={iconMargin} />
    )}
  </HardsandLink>
);

export default HardsandsButton;
