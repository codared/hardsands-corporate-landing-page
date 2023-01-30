import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import ArticlePost from "./ArticlePost";
import AuthorComponent from "./AuthorComponent";
import PopularPost from "./PopularPost";
import Share from "./Share";
import TrendingPost from "./TrendingPost";
import * as prismicH from "@prismicio/helpers";
import { dateFormatter, findFirstImage, getExcerpt } from "utils/functions";
import { PrismicText } from "@prismicio/react";

function Article({
  article,
  latestArticles,
  settings,
}: {
  settings: any;
  article: any;
  latestArticles: any[];
}) {
  const featuredImage =
    (prismicH.isFilled.image(article.data.featuredImage) &&
      article.data.featuredImage) ||
    findFirstImage(article.data.slices);

  const date = prismicH.asDate(
    article.data.publishDate || article.first_publication_date
  );

  return (
    <Box my={[10]}>
      <Heading textAlign={"center"} color={"brand.300"}>
        <PrismicText field={article.data.title} />
      </Heading>

      <Flex
        direction={["column", "row"]}
        w={["80%", "50%"]}
        mx={"auto"}
        mb={[6, 0]}
        justifyContent={["flex-start", "space-between"]}
      >
        <AuthorComponent
          image={settings.data.profilePicture.url}
          name={settings.data.name[0].text}
          createdAt={dateFormatter.format(date as Date)}
        />
        {typeof window === "object" && (
          <Share
            link={location?.href}
            message={
              "Check out this great article on Hardsands Digital business cards"
            }
          />
        )}
      </Flex>

      <Box mx={"auto"} w={["80%"]}>
        <Image
          w={["full"]}
          src={featuredImage.url}
          alt={article.data.title[0].text}
        />
      </Box>

      <ArticlePost content={article.data.slices} />

      <TrendingPost articles={latestArticles} />

      <PopularPost
        article={latestArticles[0]}
        authorName={settings.data.name[0].text}
      />
    </Box>
  );
}

export default Article;
