import { Box, Button, Text } from "@chakra-ui/react";
import CheckAccordion from "components/CheckAccordion";

const PaymentInfo = () => {
  return (
    <>
      <Box mb={10}>
        <Text fontWeight={"bold"}>Payment Method</Text>
        <Box h={2} />
        <CheckAccordion
          options={[
            {
              title: "Credit Card",
              content: (
                <Box>
                  <Text>2464 Royal Ln. Mesa, New Jersey 45463</Text>
                  <Text>(505) 555-0125</Text>
                  <Text>nathan.roberts@example.com</Text>
                </Box>
              ),
            },
            {
              title: "PayPal",
            },
          ]}
        />
      </Box>
      <Button
        fontSize={14}
        fontWeight={500}
        color={"black"}
        bg={"brand.100"}
        fontFamily="MADE Outer sans"
        onClick={() => {}}
        p={["24px 16px", "24px 46px"]}
        borderWidth="2px"
        borderColor={"brand.100"}
        borderRadius="0"
        transition="all 200ms ease-in"
        w="100%"
        textAlign="center"
        _hover={{
          bg: "transparent",
          color: "black",
          borderWidth: "2px",
          borderColor: "brand.100",
        }}
        mb={[6, 0]}
      >
        Complete Checkout
      </Button>
    </>
  );
};

export default PaymentInfo;
