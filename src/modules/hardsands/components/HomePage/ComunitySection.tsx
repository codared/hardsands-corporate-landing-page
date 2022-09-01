import { Box, Text, Grid, Flex, FlexProps } from "@chakra-ui/react";
import HardsandLink from "components/HardsandsLink";
import { CommunityImage } from "modules/shared/constants";
import React from "react";
import { useTranslation } from "react-i18next";

interface ComunitySectionProps extends FlexProps {
  images: CommunityImage[];
}

const ComunitySection: React.FC<ComunitySectionProps> = ({
  images,
  ...flexProps
}) => {
  const { t } = useTranslation();

  return (
    <Flex
      justify="center"
      align="center"
      direction="column"
      pb={12}
      px={3}
      {...flexProps}
    >
      <Text
        size="md"
        textTransform="uppercase"
        fontWeight="bold"
        letterSpacing="0.087rem"
        mb={10}
      >
        {t("common:community", "Hardsands Community")}
      </Text>

      <Grid
        gridTemplateColumns={["repeat(2, 1fr)", "repeat(5, 1fr)"]}
        gridGap="3"
      >
        {images.map((image, i) => (
          <HardsandLink
            key={i}
            isExternal={true}
            href={image.instagramLink}
            display={image.displayInMobile ? "block" : ["none", "block"]}
          >
            <Box
              as="img"
              src={image.src}
              alt={image.imgAlt || "Visit our Instagram Page"}
              loading="lazy"
            />
          </HardsandLink>
        ))}
      </Grid>
    </Flex>
  );
};

export default ComunitySection;
