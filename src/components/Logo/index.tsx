import { Flex, Image } from "@chakra-ui/react";
import HardsandLink from "components/HardsandsLink";

// Image
import HardsandLogo from "design/svg/hardsands_word_logo.svg";
import HardsandIconLogo from "design/svg/hardsands_icon_logo.svg";

const HardsandsAppLogo = () => {
  return (
    <Flex justify={["start"]}>
      <HardsandLink href="/">
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
      </HardsandLink>
    </Flex>
  );
};

export default HardsandsAppLogo;
