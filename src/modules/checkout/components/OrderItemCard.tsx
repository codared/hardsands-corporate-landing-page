import { Flex, Box, Text, Image } from "@chakra-ui/react";

const OrderItemCard = ({
  p = [2, 5],
  titleFontSize = [14, 20],
  subTitleFontSize = [12, 18],
}: {
  p?: string | number | Array<string | number>;
  titleFontSize?: string | number | Array<string | number>;
  subTitleFontSize?: string | number | Array<string | number>;
}) => {
  return (
    <Flex p={p} justify={"space-between"} bg={"brand.10"}>
      <Flex direction={"row"} justifyContent={"start"}>
        <Image
          boxSize={20}
          objectFit="contain"
          src={
            "https://res.cloudinary.com/dtumqh3dd/image/upload/v1657205110/hardsands/Rectangle_213_epjh2x.svg"
          }
          alt="cart product image"
        />
        <Box w={5} />
        <Flex
          textAlign={"start"}
          direction={"column"}
          justifyContent={"center"}
        >
          <Text fontWeight={"bolder"} fontSize={titleFontSize}>
            2x Personal virtual Card
          </Text>
          <Text fontSize={subTitleFontSize}>Customized</Text>
        </Flex>
      </Flex>
      <Text
        alignSelf={"center"}
        color={"brand.300"}
        fontWeight="bolder"
        fontSize={titleFontSize}
        ml={2}
      >
        N30,000
      </Text>
    </Flex>
  );
};

export default OrderItemCard;
