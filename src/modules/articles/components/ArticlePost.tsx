import { Box } from "@chakra-ui/react";
import { SliceZone } from "@prismicio/react";
import React from "react";
import { components } from "./slices";

function ArticlePost({ content }: { content: any }) {
  return (
    <Box as={'article'} w={["100%", "80%"]} mx={[0, "auto"]} py={[10, 20]} px={[6, 24]}>
      <SliceZone slices={content} components={components} />
    </Box>
  );
}

export default ArticlePost;
