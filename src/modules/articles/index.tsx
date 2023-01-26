import { Box } from "@chakra-ui/react";
import { trackPageView } from "modules/analytics/functions/track";
import PageHeader from "modules/hardsands/components/PageHeader";
import { blogRoute } from "modules/products/routes";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import PopularPost from "./components/PopularPost";
import TrendingPost from "./components/TrendingPost";

function Articles() {
  const { t } = useTranslation();

  useEffect(() => {
    trackPageView({
      path: "/articles",
      url: "/articles",
      title: "Blogs - Hardsands Digital Business Cards",
      type: "blogs_page",
    });
  }, []);

  return (
    <Box>
      <PageHeader
        title={t(
          "pages:header:title:no-paper-no-fuss-just-better-networks-made-straight-away",
          "No paper no fuss, just better networks made straight away"
        )}
        size={"large"}
        showProfile={{
          image: "https://avatars0.githubusercontent.com/u/1164541?v=4",
          author: "Achim Rolle",
          date: "Feb 08, 2021",
          minRead: "6min read",
        }}
        subTitle={t(
          "pages:header:description:connect-wherever-you-go",
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, "
        )}
        type={"light"}
        bgImage={
          "https://cdn.shopify.com/s/files/1/0559/0407/5843/files/Rectangle_331.png?v=1674726801"
        }
        buttonHref={blogRoute.blogs()}
        buttonText="READ FULL ARTICLE"
      />

      <TrendingPost />

      <PopularPost />
    </Box>
  );
}

export default Articles;
