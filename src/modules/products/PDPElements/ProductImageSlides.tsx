import { Box, Flex } from "@chakra-ui/react";
import Carousel from "components/Carousel";
import { useRTL } from "modules/i18n/hooks";
import { ProductColors } from "modules/shared/constants";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ProductDetails } from "utils/types";

interface ProductImageSlideProps {
  productDetails: ProductDetails;
  selectedColor?: ProductColors;
  discountPercent?: number;
  imgAlt: string;
}

const ProductImageSlide = ({
  productDetails,
  selectedColor,
  discountPercent,
  imgAlt,
}: ProductImageSlideProps) => {
  const { t } = useTranslation();
  const { isRTL } = useRTL();
  const [carouselImages, setCarouselImages] = useState<string[]>(
    productDetails.otherImageUrls
  );

  useEffect(() => {
    setCarouselImages(productDetails.otherImageUrls);
  }, [productDetails.otherImageUrls]);

  return (
    <Box width={["100%", null, "50%"]} position={["unset"]} top="10px">
      <Flex align="center" justify="center" position="relative">
        <Carousel
          showArrows={carouselImages.length > 1}
          showDots
          h="100%"
          fullWidth
          imagePaths={carouselImages}
          imgAlt={imgAlt}
          dotPosition="bottom"
          isGallery
          galleryWidth={["unset", "45px", "45px", "80px"]}
          galleryHeight={["unset", "58px", "58px", "100px"]}
          roundDots={false}
          startingIndex={0}
          thresholdX={0}
          enableScroll={false}
          showControlsAbove={false}
          showProgress={false}
        >
          {carouselImages.map((src, i) => (
            <Box
              as="img"
              key={i}
              src={src}
              objectFit="contain"
              alignSelf="flex-start"
              mx="auto"
              minW={["300px", "500px"]}
              minH={["300px", "500px"]}
              alt={imgAlt}
            />
          ))}
        </Carousel>
        {/* {getBadge(productDetails, isRTL, t, discountPercent)} */}
      </Flex>
    </Box>
  );
};

//This could be used afterwards

// const getBadge = (
//     productDetails: ProductDetails,
//     isRTL: boolean,
//     t: TFunction,
//     discountPercent?: number
//   ) => {
//     const isOfferBadge =
//       productDetails.plusFreeGift && productDetails.limitedTimePackage
//     const isDiscountBadge = productDetails.isLimitedEdition && discountPercent
//     if (!(productDetails.limitedTimePackage || isOfferBadge || isDiscountBadge)) {
//       return null
//     }
//     return (
//       <LimitedTimeBadge
//         top={5}
//         right={isRTL ? 'unset' : 5}
//         left={isRTL ? 5 : 'unset'}
//         type={isOfferBadge ? 'Offer' : undefined}
//         percentValue={
//           isDiscountBadge
//             ? t(`common:${discountPercent}`, `${discountPercent}`)
//             : undefined
//         }
//       />
//     )
//   }

export default ProductImageSlide;
