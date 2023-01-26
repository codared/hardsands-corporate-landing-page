import WithLayout from "components/WithLayout";
import Article from "modules/articles/components/Article";
import { NextPage } from "next";
import React from "react";

const ArticlePage: NextPage = () => {
  return (
    <WithLayout pageTitle={`Article - Hardsands Digital Business Cards`}>
      <Article
        blog={{
          title: "Tips to network with ease",
          author: {
            name: "Achim Rolle",
            image: "https://avatars0.githubusercontent.com/u/1164541?v=4",
          },
          minRead: "6min read",
          createdAt: "Feb 08, 2021",
        }}
      />
    </WithLayout>
  );
};

export default ArticlePage;
