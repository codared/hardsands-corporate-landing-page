import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import BlogCard from "components/ProductCard/BlogCard";
import React from "react";
import { useTranslation } from "react-i18next";

function AllPosts({ articles }: { articles?: any }) {
  const { t } = useTranslation();

  return (
    <Box w={["100%", "100%", "80%"]} py={[10]} px={[6, 0]} mx={["auto"]}>
      <SimpleGrid columns={[1, 2, 3]} spacing="40px">
        {articles.map((article: any, index: React.Key | null | undefined) => (
          <BlogCard key={index} article={article} t={t} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default AllPosts;
