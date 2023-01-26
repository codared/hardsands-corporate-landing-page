import WithLayout from "components/WithLayout";
import Articles from "modules/articles";
import React from "react";

function ArticlePage() {
  return (
    <WithLayout pageTitle="Blogs - Hardsands Digital Business Cards">
      <Articles />
    </WithLayout>
  );
}

export default ArticlePage;
