import { Box } from "@chakra-ui/react";
import { trackPageView } from "modules/analytics/functions/track";
import PageHeader from "modules/hardsands/components/PageHeader";
import { blogRoute } from "modules/products/routes";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { slugify } from "utils/string";
import AllPosts from "./components/AllPosts";
import PopularPost from "./components/PopularPost";
import * as prismicH from "@prismicio/helpers";
import { dateFormatter, getExcerpt } from "utils/functions";

function Articles({ articles, settings }: { articles: any; settings: any }) {
  const { t } = useTranslation();

  useEffect(() => {
    trackPageView({
      path: "/articles",
      url: "/articles",
      title: "Blogs - Hardsands Digital Business Cards",
      type: "blogs_page",
    });
  }, []);

  const firstArticle = articles[0];
  const date = prismicH.asDate(
    firstArticle.data.publishDate || firstArticle.first_publication_date
  );
  const excerpt = getExcerpt(firstArticle.data.slices);

  return (
    <Box>
      <PageHeader
        title={t(
          `pages:header:title:${slugify(firstArticle.data.title[0].text)}`,
          firstArticle.data.title[0].text
        )}
        size={"large"}
        showProfile={{
          image: settings.data.profilePicture.url,
          author: settings.data.name[0].text,
          date: dateFormatter.format(date as Date),
        }}
        subTitle={t(
          `pages:header:description:${excerpt}`,
          `${excerpt.slice(0, 350)}`
        )}
        type={"light"}
        bgImage={firstArticle.data.featuredImage.url}
        buttonHref={blogRoute.detail({ slug: firstArticle.uid })}
        buttonText="READ FULL ARTICLE"
      />

      <AllPosts articles={articles} />

      <PopularPost
        article={articles[0]}
        authorName={settings.data.name[0].text}
      />
    </Box>
  );
}

export default Articles;
