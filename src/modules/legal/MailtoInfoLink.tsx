import HardsandLink from "components/HardsandsLink";
import React from "react";

export const MailtoInfoLink = () => {
  return (
    <HardsandLink
      href="mailto:info@hardsands.com"
      isInternal={false}
      color="brand.300"
      _hover={{ textDecoration: "underline" }}
    >
      info@hardsands.com
    </HardsandLink>
  );
};
