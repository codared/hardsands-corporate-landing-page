import WithLayout from "components/WithLayout";
import Articles from "modules/articles";
import { createClient } from "modules/articles/prismicio";
import React from "react";
import { NextPage } from "next";
import { PrismicDocument } from "@prismicio/types";
import * as prismicH from "@prismicio/helpers";
import { findFirstImage } from "utils/functions";

const ArticlesPage: NextPage<{
  articles: PrismicDocument[];
  settings: any;
}> = ({ articles, settings }) => {
  let article = articles[0];
  const featuredImage =
    (prismicH.isFilled.image(article.data.featuredImage) &&
      article.data.featuredImage) ||
    findFirstImage(article.data.slices);

  return (
    <WithLayout
      pageTitle="Blogs - Hardsands Digital Business Cards"
      pageDescription={
        "Get Up to date on latest articles we put out for your enlightenment"
      }
      image_url={featuredImage.url}
    >
      <Articles articles={articles} settings={settings} />
    </WithLayout>
  );
};

export default ArticlesPage;



export async function getStaticProps({ previewData }: any) {
  const client = createClient({ previewData });

  const articles = await client.getAllByType("article", {
    orderings: [
      { field: "my.article.publishDate", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
    fetchLinks: ["author.name", "author.avatar"],
  });
  const settings = await client.getSingle("settings");

  return {
    props: {
      articles,
      settings,
    },
  };
}
