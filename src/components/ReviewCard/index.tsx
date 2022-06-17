import { Flex, Box, Image, Text } from "@chakra-ui/react";
interface ReviewCardProps {
  name: string;
  review: string;
  product?: any;
}

export const ReviewCard = ({ name, review }: ReviewCardProps) => {
  return (
    <Box bgColor="whiteAlpha.200" p="40px" borderRadius="20px" maxW="465px">
      <Image
        src="https://res.cloudinary.com/dtumqh3dd/image/upload/v1655428669/hardsands/customer_zvaux7.png"
        mb="20px"
        mx="auto"
        h="111px"
        borderRadius="full"
      />
      <Text fontSize="2xl" textAlign="center" mb="20px">
        {name}
      </Text>
      <Text>{review}</Text>
    </Box>
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
