import { Link as ChakraLink, LinkProps } from "@chakra-ui/layout";
import Link from "next/link";
import React, { SyntheticEvent, forwardRef } from "react";

export type HardsandLinkProps = Omit<LinkProps, "as"> & {
  href: string;
  as?: string;
  isInternal?: boolean;
  onClick?: (e: SyntheticEvent) => void;
  hardRefresh?: boolean;
};

const HardsandLink: React.FC<HardsandLinkProps> = forwardRef(
  (
    {
      href,
      isInternal = true,
      onClick = (e: SyntheticEvent) => {},
      as,
      children,
      hardRefresh = false,
      ...rest
    },
    ref
  ) => {
    const hoverStyle = {
      color: "brand.300",
    };

    if (isInternal) {
      return hardRefresh ? (
        <ChakraLink href={href} onClick={onClick} _hover={hoverStyle} {...rest}>
          {children}
        </ChakraLink>
      ) : (
        <Link href={href} as={as} passHref>
          <ChakraLink onClick={onClick} _hover={hoverStyle} {...rest}>
            {children}
          </ChakraLink>
        </Link>
      );
    }

    let finalHref: string;
    const pathToUrl = as ?? href;
    if (/^(https|http|mailto)/.test(pathToUrl)) {
      finalHref = pathToUrl;
    } else {
      finalHref = `${pathToUrl}`;
    }

    return (
      <ChakraLink
        href={finalHref}
        _hover={hoverStyle}
        onClick={onClick}
        {...rest}
      >
        {children}
      </ChakraLink>
    );
  }
);

HardsandLink.displayName = "HardsandLink";

export default HardsandLink;
