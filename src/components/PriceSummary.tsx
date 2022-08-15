import { Box, Flex, Divider, Text } from "@chakra-ui/react";

const PriceSummary = ({ fontSize = 20 }: { fontSize?: number }) => {
  return (
    <Box>
      <Flex mb={[6]} w="100%" display="flex" justifyContent="space-between">
        <Text fontSize={[fontSize - 4, fontSize - 2]}>Subtotal:</Text>
        <Text fontSize={[fontSize - 4, fontSize - 2]}>₦78,800.00</Text>
      </Flex>
      <Flex mb={[6]} w="100%" display="flex" justifyContent="space-between">
        <Text fontSize={[fontSize - 4, fontSize - 2]}>Shipping:</Text>
        <Text fontSize={[fontSize - 4, fontSize - 2]}>₦8,800.00</Text>
      </Flex>
      <Flex mb={[6]} w="100%" display="flex" justifyContent="space-between">
        <Text fontSize={[fontSize - 4, fontSize - 2]}>Tax:</Text>
        <Text fontSize={[fontSize - 4, fontSize - 2]}>To be calculated next step</Text>
      </Flex>
      <Divider my={5} />
      <Flex mb={[6]} w="100%" display="flex" justifyContent="space-between">
        <Text fontSize={[fontSize - 4, fontSize]} fontWeight="bolder">
          Total:
        </Text>
        <Text fontSize={[fontSize - 4, fontSize]} fontWeight="bolder">
          ₦78,800.00
        </Text>
      </Flex>
    </Box>
  );
};

export default PriceSummary;
