import { Box } from "@chakra-ui/react";
import * as prismicH from "@prismicio/helpers";
import { PrismicRichText } from "@prismicio/react";
import { Bounded } from "../../Bounded";

const Text = ({ slice }: any) => {
  return (
    <Bounded as="section">
      {prismicH.isFilled.richText(slice.primary.text) && (
        <Box
          // fontFamily={"serif"}
          fontSize={["xl"]}
          className="font-serif leading-relaxed md:text-xl md:leading-relaxed"
        >
          <PrismicRichText field={slice.primary.text} />
        </Box>
      )}
    </Bounded>
  );
};

export default Text;
