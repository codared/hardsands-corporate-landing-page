import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import HardsandsButton from "components/HardsandsButton";
import PageHeader from "modules/hardsands/components/PageHeader";
import { blogRoute } from "modules/products/routes";
import React from "react";
import { useTranslation } from "react-i18next";
import TrendingPost from "./components/TrendingPost";

function Articles() {
  const { t } = useTranslation();

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

      <Box mb={[10]}>
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
            <Box w={["100%"]}>
              <Heading py={6}>
                Menstrual Leaves; should every work place adopt the menstrual
                leave policy
              </Heading>
              <Text py={[6]}>
                Lorem Ipsum is simply dummy text of the printing
              </Text>
              <HardsandsButton
                href={blogRoute.detail({ slug: "mentrual-reviews" })}
                // @ts-ignore
                // bg={"black"}
                // color={"black"}
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
                Posted: Jan 5, 2021 by kennedy sM
              </Text>
            </Box>
          </Box>
          <Box w={["100%", "50%"]}>
            <Image
              mx={"auto"}
              src="https://cdn.shopify.com/s/files/1/0559/0407/5843/files/Group_948.png?v=1674729819"
              alt="blog image"
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Articles;
