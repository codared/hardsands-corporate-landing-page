import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import BlogCard from "components/ProductCard/BlogCard";
import React from "react";
import { useTranslation } from "react-i18next";

function TrendingPost({ articles }: { articles?: any }) {
  const { t } = useTranslation();

  return (
    <Box w={["100%", "100%", "80%"]} py={[10]} px={[6, 0]} mx={["auto"]}>
      <Box mb={[10]}>
        <Heading color={"brand.300"}>Trending Posts</Heading>
        <Text>
          Articles that are a most Read{" "}
        </Text>
      </Box>

      <SimpleGrid columns={[1, 2, 3]} spacing="40px">
        {articles
          .slice(0, 3)
          .map((article: any, index: React.Key | null | undefined) => (
            <BlogCard key={index} article={article} t={t} />
          ))}
      </SimpleGrid>
    </Box>
  );
}

export default TrendingPost;
