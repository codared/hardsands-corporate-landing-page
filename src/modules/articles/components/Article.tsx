import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import ArticlePost from "./ArticlePost";
import AuthorComponent from "./AuthorComponent";
import PopularPost from "./PopularPost";
import Share from "./Share";
import TrendingPost from "./TrendingPost";

function Article({ blog }: { blog: any }) {
  return (
    <Box my={[10]}>
      <Heading textAlign={"center"} color={"brand.300"}>
        {blog.title}
      </Heading>

      <Flex
        direction={["column", "row"]}
        w={["80%", "50%"]}
        mx={"auto"}
        mb={[6, 0]}
        justifyContent={["flex-start", "space-between"]}
      >
        <AuthorComponent
          image={blog.author.image}
          name={blog.author.name}
          minRead={blog.minRead}
          createdAt={blog.createdAt}
        />
        <Share link={""} />
      </Flex>

      <Box mx={"auto"} w={["80%"]}>
        <Image
          w={["full"]}
          src={
            "https://cdn.shopify.com/s/files/1/0559/0407/5843/files/Rectangle_331.png?v=1674726801"
          }
          alt={"article post image"}
        />
      </Box>

      <ArticlePost />

      <TrendingPost />

      <PopularPost />
    </Box>
  );
}

export default Article;
