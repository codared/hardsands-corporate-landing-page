import { Box, Heading } from "@chakra-ui/react";
import { PrismicLink } from "@prismicio/react";
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

export const richTextComponents = {
  heading1: ({ children }: any) => (
    <Heading as="h2" size="3xl" className="mb-7 mt-12 first:mt-0 last:mb-0">
      {children}
    </Heading>
  ),
  heading2: ({ children }: any) => (
    <Heading as="h3" size="2xl" className="mb-7 last:mb-0">
      {children}
    </Heading>
  ),
  heading3: ({ children }: any) => (
    <Heading as="h4" size="xl" className="mb-7 last:mb-0">
      {children}
    </Heading>
  ),
  paragraph: ({ children }: any) => (
    <p className="mb-7 last:mb-0">{children}</p>
  ),
  oList: ({ children }: any) => (
    <ol className="mb-7 pl-4 last:mb-0 md:pl-6">{children}</ol>
  ),
  oListItem: ({ children }: any) => (
    <li className="mb-1 list-decimal pl-1 last:mb-0 md:pl-2">{children}</li>
  ),
  list: ({ children }: any) => (
    <ul className="mb-7 pl-4 last:mb-0 md:pl-6">{children}</ul>
  ),
  listItem: ({ children }: any) => (
    <li className="mb-1 list-disc pl-1 last:mb-0 md:pl-2">{children}</li>
  ),
  preformatted: ({ children }: any) => (
    <pre className="mb-7 rounded bg-slate-100 p-4 text-sm last:mb-0 md:p-8 md:text-lg">
      <code>{children}</code>
    </pre>
  ),
  strong: ({ children }: any) => (
    <strong className="font-semibold">{children}</strong>
  ),
  hyperlink: ({ children, node }: any) => (
    <PrismicLink
      field={node.data}
      className="underline decoration-1 underline-offset-2"
    >
      {children}
    </PrismicLink>
  ),
};

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
