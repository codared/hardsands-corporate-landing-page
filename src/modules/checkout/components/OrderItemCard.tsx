import { Flex, Box, Text, Image } from "@chakra-ui/react";
import { getProductImageFromSlug } from "modules/products/functions";
import { formatCurrencyInteger } from "utils/currency";
import { OrderItem } from "../types";

const OrderItemCard = ({
  p = [2, 5],
  titleFontSize = [14, 20],
  subTitleFontSize = [12, 18],
  item,
}: {
  item: OrderItem;
  p?: string | number | Array<string | number>;
  titleFontSize?: string | number | Array<string | number>;
  subTitleFontSize?: string | number | Array<string | number>;
}) => {
  return (
    <Flex p={p} bg={"brand.10"}>
      <Flex direction={"row"} justifyContent={"start"}>
        <Image
          boxSize={20}
          objectFit="contain"
          src={getProductImageFromSlug(
            item.product.slug,
            item.productVariantKey
          )}
          alt={`${item.product.title} cart item product image`}
        />
      </Flex>
      <Box w={5} />
      <Flex
        w={"100%"}
        direction={["column", "row"]}
        justifyContent={["space-around", "space-between"]}
      >
        <Flex
          textAlign={"start"}
          direction={"column"}
          justifyContent={"center"}
        >
          <Text fontWeight={"bolder"} fontSize={titleFontSize}>
            {`${item.quantity}x`} {item.product.title}
          </Text>
          <Text fontSize={subTitleFontSize}>{item.productVariantKey}</Text>
        </Flex>
        <Text
          alignSelf={["flex-start", "center"]}
          color={"brand.300"}
          fontWeight="bolder"
          fontSize={titleFontSize}
          ml={[0, 2]}
        >
          {formatCurrencyInteger(item.total, item.currency)}
        </Text>
      </Flex>
    </Flex>
  );
};

// country: null
// currency: "EUR"
// id: 12
// parent_id: null
// price: 5864
// product:
// description: "This is  Bamboo Wood"
// id: 1
// slug: "bamboo-wood"
// title: "Bamboo Wood"
// productVariantKey: "Customized"
// quantity: 1
// retailPrice: 5864
// total: 5864
// type: "NORMAL"

export default OrderItemCard;
