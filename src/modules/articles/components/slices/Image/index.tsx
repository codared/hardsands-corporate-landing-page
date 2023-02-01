import * as prismicH from "@prismicio/helpers";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import { Bounded } from "../../Bounded";
import { Box } from "@chakra-ui/react";

const Image = ({ slice }: any) => {
  const image = slice.primary.image;

  return (
    <Bounded as="section" size={slice.variation === "wide" ? "widest" : "base"}>
      <Box
        as={"figure"}
        display={"grid"}
        gridColumn={1}
        gridGap={4}
        mb={10}
        className="grid grid-cols-1 gap-4"
      >
        {prismicH.isFilled.image(image) && (
          <Box bg={"gray.100"}>
            <PrismicNextImage field={image} sizes="100vw" className="w-full" />
          </Box>
        )}
        {prismicH.isFilled.richText(slice.primary.caption) && (
          <Box
            as={"figcaption"}
            textAlign={"center"}
            // fontFamily={"serif"}
            fontStyle={"italic"}
            color={"slategray"}
          >
            <PrismicRichText field={slice.primary.caption} />
          </Box>
        )}
      </Box>
    </Bounded>
  );
};

export default Image;
