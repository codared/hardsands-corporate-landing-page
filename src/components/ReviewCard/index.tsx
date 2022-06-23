import { Flex, Box, Image, Text } from "@chakra-ui/react";
interface ReviewCardProps {
  name?: string;
  review: string;
  product?: any;
}

export const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <Flex p="20px" gap="20px" maxW="500px" mb={4}>
      <Image
        src="https://res.cloudinary.com/dtumqh3dd/image/upload/v1655428669/hardsands/customer_zvaux7.png"
        mb="20px"
        mx="auto"
        h="74px"
        borderRadius="full"
        alt="customer avatar"
      />
      <Text>{review}</Text>
    </Flex>
  );
};

export const FullReviewCard = ({ name, review }: ReviewCardProps) => {
  return (
    <Box p="25px" border="1px" borderColor="sandTone2" borderRadius="12px">
      <Flex alignItems="center" mb={4}>
        <Image
          src="https://res.cloudinary.com/dtumqh3dd/image/upload/v1655428669/hardsands/customer_zvaux7.png"
          h="70px"
          borderRadius="full"
          alt="customer avatar"
        />
        <Text display="inline" fontSize="2xl" ml={4}>
          {name}
        </Text>
      </Flex>
      <Text mb="20px">{review}</Text>
      <Flex gap="20px" pt="20px" borderTop="1px" borderColor="sandTone1">
        <Image
          src="https://res.cloudinary.com/dtumqh3dd/image/upload/v1655428688/hardsands/item-placeholder_q0ijrk.png"
          w="70px"
          h="70px"
          objectFit="cover"
          alt="product"
        />
        <Box pt="20px">
          <Text textTransform="capitalize">Hardsands metal card</Text>
          <Text fontSize="sm" color="gray.400">
            12 Dec 2021
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};
