import { Box } from "@chakra-ui/react";
import React from "react";

function ArticlePost({ content }: { content: any }) {
  return (
    <Box w={["100%", "80%"]} mx={"auto"} py={[10, 20]} px={[10, 24]}>
      {content}
    </Box>
  );
}

export default ArticlePost;
