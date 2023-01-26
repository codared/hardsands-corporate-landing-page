import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import BlogCard from "components/ProductCard/BlogCard";
import React from "react";
import { useTranslation } from "react-i18next";

function TrendingPost() {
  const { t } = useTranslation();

  return (
    <Box w={["100%", "100%", "80%"]} py={[10]} px={[6, 0]} mx={["auto"]}>
      <Box mb={[10]}>
        <Heading color={"brand.300"}>Trending Posts</Heading>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum{" "}
        </Text>
      </Box>

      <SimpleGrid columns={[1, 2, 3]} spacing="40px">
        <BlogCard
          title={"Menstrual Leaves"}
          slug={"menstrual-leaves"}
          dateCreated={"Feb 08, 2021"}
          img={
            "https://cdn.shopify.com/s/files/1/0559/0407/5843/files/Rectangle_307.png?v=1674728285"
          }
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's "
          }
          t={t}
        />
        <BlogCard
          title={"Menstrual Leaves"}
          slug={"menstrual-leaves"}
          dateCreated={"Feb 08, 2021"}
          img={
            "https://cdn.shopify.com/s/files/1/0559/0407/5843/files/Rectangle_307.png?v=1674728285"
          }
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's "
          }
          t={t}
        />
        <BlogCard
          title={"Menstrual Leaves"}
          slug={"menstrual-leaves"}
          dateCreated={"Feb 08, 2021"}
          img={
            "https://cdn.shopify.com/s/files/1/0559/0407/5843/files/Rectangle_307.png?v=1674728285"
          }
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's "
          }
          t={t}
        />
      </SimpleGrid>
    </Box>
  );
}

export default TrendingPost;
