import {
  Box,
  useColorModeValue,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { BsHandbag } from "react-icons/bs";
import HardsandsButton from "components/HardsandsButton";
import HardsandLink from "components/HardsandsLink";
import { BlogCardProps } from "./type";
import { blogRoute } from "modules/products/routes";
import * as prismicH from "@prismicio/helpers";
import { dateFormatter, findFirstImage, getExcerpt } from "utils/functions";
import { PrismicText } from "@prismicio/react";

const BlogCard = ({ article, t }: BlogCardProps) => {
  const featuredImage =
    (prismicH.isFilled.image(article.data.featuredImage) &&
      article.data.featuredImage) ||
    findFirstImage(article.data.slices);

  const date = prismicH.asDate(
    article.data.publishDate || article.first_publication_date
  );
  const excerpt = getExcerpt(article.data.slices);

  return (
    <HardsandLink
      href={blogRoute.detail({ slug: article.uid })}
      outline="none"
      _hover={{ color: "unset" }}
      _focus={{
        outline: "none !important",
      }}
      w={["full", "fit-content"]}
    >
      <Box position="relative" mb={[0]} mx={["0", "auto"]}>
        <Box w={"100%"}>
          <Image
            w={"100%"}
            src={featuredImage.url}
            alt={`Picture of `}
            objectFit="cover"
          />
        </Box>

        <Box py={[2, 6]}>
          <Text
            mb={2}
            fontSize={[12, 14]}
            fontWeight={"bolder"}
            noOfLines={[3, 3, 4]}
          >
            {dateFormatter.format(date as Date)}
          </Text>
          <Flex justify="space-between" alignItems="flex-end" mb={4}>
            <Heading
              fontWeight="bolder"
              textTransform="capitalize"
              fontSize="xl"
            >
              <PrismicText field={article.data.title} />
            </Heading>
          </Flex>

          <Text mb={4} fontSize={[12, 14]} noOfLines={[3, 3, 4]}>
            {excerpt}
          </Text>
          <Flex justify={"space-between"} direction="row">
            <HardsandsButton
              // @ts-ignore
              borderWidth="1px"
              href={blogRoute.detail({ slug: article.uid })}
              borderStyle="solid"
              borderColor="brand.100"
              fontSize={"xs"}
              bg={"brand.100"}
              color="black"
              // w="100%"
              p={["12px 16px"]}
              textAlign="center"
              _hover={{
                bg: "transparent",
                color: "black",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "brand.200",
              }}
              iconMargin="20px"
              Icon={BsHandbag}
            >
              {t("common:read-post", "READ POST")}
            </HardsandsButton>
          </Flex>
        </Box>
      </Box>
    </HardsandLink>
  );
};

export default BlogCard;
