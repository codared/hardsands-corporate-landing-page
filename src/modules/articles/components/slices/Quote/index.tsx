import { Box } from "@chakra-ui/react";
import * as prismicH from "@prismicio/helpers";
import { PrismicText } from "@prismicio/react";
import { Bounded } from "../../Bounded";

const Quote = ({ slice }: any) => {
  return (
    <Bounded as="section" size="wide">
      {prismicH.isFilled.richText(slice.primary.quote) && (
        <Box
          fontFamily={"serif"}
          fontSize={"3xl"}
          fontStyle={"italic"}
          className="font-serif text-3xl italic leading-relaxed"
        >
          &ldquo;
          <PrismicText field={slice.primary.quote} />
          &rdquo;
          {prismicH.isFilled.keyText(slice.primary.source) && (
            <> &mdash; {slice.primary.source}</>
          )}
        </Box>
      )}
    </Bounded>
  );
};

export default Quote;
