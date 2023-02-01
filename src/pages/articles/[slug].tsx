import WithLayout from "components/WithLayout";
import Article from "modules/articles/components/Article";
import { createClient } from "modules/articles/prismicio";
import { NextPage } from "next";
import * as prismicH from "@prismicio/helpers";
import React from "react";
import { findFirstImage, getExcerpt } from "utils/functions";

const ArticlePage = ({ article, latestArticles, settings }: any) => {
  const featuredImage =
    (prismicH.isFilled.image(article.data.featuredImage) &&
      article.data.featuredImage) ||
    findFirstImage(article.data.slices);
  const excerpt = getExcerpt(article.data.slices);

  return (
    <WithLayout
      pageTitle={`${article.data.title[0].text} - Hardsands Digital Business Cards`}
      pageDescription={excerpt.slice(0, 200)}
      image_url={featuredImage.url}
    >
      <Article
        settings={settings}
        article={article}
        latestArticles={latestArticles}
      />
    </WithLayout>
  );
};

export default ArticlePage;

export async function getStaticProps({ params, previewData }: any) {
  const client = createClient({ previewData });

  const article = await client.getByUID("article", params.slug);
  let latestArticles = await client.getAllByType("article", {
    limit: 3,
    orderings: [
      { field: "my.article.publishDate", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });
  const settings = await client.getSingle("settings");

  latestArticles = latestArticles.filter(
    (article) => article.uid !== params.slug
  );

  return {
    props: {
      article,
      latestArticles,
      settings,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const articles = await client.getAllByType("article");
  const paths = articles.map((article) => ({
    params: { slug: article.uid },
  }));

  return {
    paths,
    fallback: false,
  };
}
