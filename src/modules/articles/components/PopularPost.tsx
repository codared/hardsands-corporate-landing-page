import { Box, Flex, Heading, Text, Image, Stack } from "@chakra-ui/react";
import HardsandsButton from "components/HardsandsButton";
import { blogRoute } from "modules/products/routes";
import React from "react";
import { dateFormatter, findFirstImage, getExcerpt } from "utils/functions";
import * as prismicH from "@prismicio/helpers";
import { PrismicText } from "@prismicio/react";

function PopularPost({
  article,
  authorName,
}: {
  article?: any;
  authorName: string;
}) {
  const featuredImage =
    (prismicH.isFilled.image(article.data.featuredImage) &&
      article.data.featuredImage) ||
    findFirstImage(article.data.slices);

  const date = prismicH.asDate(
    article.data.publishDate || article.first_publication_date
  );
  const excerpt = getExcerpt(article.data.slices);

  return (
    <Box mb={[10]} w={["100%", "100%", "80%"]} py={[10]} mx={["auto"]}>
      <Flex px={[6, 40]} direction={["column", "row"]}>
        <Box mb={[6, 0]} w={["100%", "50%"]}>
          <Heading
            color={"brand.300"}
            fontSize={"lg"}
            borderBottom={"1px solid black"}
            pb={2}
          >
            Popular Post
          </Heading>
          <Image
            mt={[6]}
            display={["block", "none"]}
            mx={"auto"}
            src={featuredImage.url}
            alt="blog image"
          />
          <Box w={["100%"]}>
            <Heading py={6}>
              <PrismicText field={article.data.title} />
            </Heading>
            <Text py={[6]}>{excerpt}</Text>
            <HardsandsButton
              // @ts-ignore
              w={["12rem"]}
              href={blogRoute.detail({ slug: article.uid })}
              // @ts-ignore
              _hover={{
                bg: "transparent",
                color: "black",
                borderColor: "black",
              }}
            >
              Read Post
            </HardsandsButton>

            <Text
              fontSize={"lg"}
              borderBottom={"1px solid black"}
              pb={2}
              mt={10}
            >
              Posted: {dateFormatter.format(date as Date)} by {authorName}
            </Text>
          </Box>
        </Box>
        <Box w={[0, 10]} />
        <Stack justifyContent={"center"} w={["100%", "50%"]}>
          <Image
            display={["none", "block"]}
            src={featuredImage.url}
            alt="blog image"
          />
        </Stack>
      </Flex>
    </Box>
  );
}

export default PopularPost;
