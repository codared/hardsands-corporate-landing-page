import {
  Box,
  Flex,
  Heading,
  useColorModeValue,
  Text,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import HardsandsButton from "components/HardsandsButton";
import { UserCardType } from "modules/account/types";
import { getCardImageFromSlug } from "modules/products/functions";
import productRoutes from "modules/products/routes";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { colors } from "styles/theme";
import { slugify } from "utils/string";

const CardLists = ({
  cards,
  handleCardSelect,
}: {
  cards: UserCardType[];
  handleCardSelect: (card: UserCardType) => void;
}) => {
  return (
    <Box>
      <SimpleGrid columns={[2, 3]} gap={4}>
        {cards.length > 0 &&
          cards.map((card: UserCardType) => (
            <CardBox
              handleCardSelect={() => handleCardSelect(card)}
              card={card}
              key={card.cardSerial}
            />
          ))}
        <AddCardBox />
      </SimpleGrid>
    </Box>
  );
};

const CardBox = ({
  card,
  handleCardSelect,
}: {
  card: UserCardType;
  handleCardSelect: () => void;
}) => {
  const cardTitle = slugify(card.cardTitle);

  return (
    <Box>
      <Flex
        direction={["column"]}
        bg={"brand.10"}
        position="relative"
        mb={[0]}
        mx={["0", "auto"]}
        alignContent="center"
        cursor={"pointer"}
        onClick={handleCardSelect}
      >
        <Box>
          <Image
            src={getCardImageFromSlug(cardTitle)}
            alt={card.cardTitle}
            objectFit="cover"
          />
        </Box>

        <Box px={[2, 6]} pb={[0]}>
          <Flex justify="space-between" alignItems="flex-end" mb={4}>
            <Heading
              fontWeight="bolder"
              textTransform="uppercase"
              fontSize={14}
            >
              {card.cardTitle}
            </Heading>
            {/* <Text fontWeight="bolder">{price}</Text> */}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

const AddCardBox = () => {
  return (
    <Flex
      direction={["column"]}
      bg={"brand.10"}
      position="relative"
      mb={[0]}
      mx={["0", "auto"]}
      justifyContent="center"
      alignItems="center"
      cursor={"pointer"}
      p={[4, 8]}
      w="100%"
    >
      <Flex
        h={"100%"}
        direction={"column"}
        justifyContent="space-between"
        alignItems="center"
      >
        <AiOutlineShoppingCart color={colors.brand["300"]} size={64} />
        <Heading
          textAlign={"center"}
          fontWeight="bolder"
          textTransform="uppercase"
          fontSize="lg"
        >
          Buy Another Card
        </Heading>
        <Text
          fontSize={14}
          fontWeight="bolder"
          textAlign={"center"}
          color={"gray.400"}
        >
          Buy another card to see them here
        </Text>
        <HardsandsButton
          // @ts-ignore
          borderWidth="1px"
          href={productRoutes.products()}
          borderStyle="solid"
          borderColor="brand.100"
          fontSize={"xs"}
          bg={"brand.100"}
          color="black"
          w="100%"
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
          {"Buy Now"}
        </HardsandsButton>
      </Flex>
    </Flex>
  );
};

export default CardLists;
