import { Box, Button, Text } from "@chakra-ui/react";
import CheckAccordion from "components/CheckAccordion";
import { useState } from "react";

const ShippingInfo = () => {
  const [shippingMethod, setShippingMethod] = useState(1);

  return (
    <>
      <Box mb={10}>
        <Text fontWeight={"bold"}>Ship to</Text>
        <Box h={2} />
        <CheckAccordion
          options={[
            {
              title: "Jadon Sancho",
              content: (
                <Box>
                  <Text>2464 Royal Ln. Mesa, New Jersey 45463</Text>
                  <Text>(505) 555-0125</Text>
                  <Text>nathan.roberts@example.com</Text>
                </Box>
              ),
            },
            {
              title: "Bruno Fernandes",
              content: (
                <Box>
                  <Text>2464 Royal Ln. Mesa, New Jersey 45463</Text>
                  <Text>(505) 555-0125</Text>
                  <Text>nathan.roberts@example.com</Text>
                </Box>
              ),
            },
            {
              title: "Erik Ten Haag",
              content: (
                <Box>
                  <Text>2464 Royal Ln. Mesa, New Jersey 45463</Text>
                  <Text>(505) 555-0125</Text>
                  <Text>nathan.roberts@example.com</Text>
                </Box>
              ),
            },
          ]}
        />
      </Box>
      <Box>
        <Text fontWeight={"bold"}>Shipping Method</Text>
        <Box h={2} />
        <CheckAccordion
          onChange={(val: string | number) => setShippingMethod(val as number)}
          options={[
            {
              title: "Express Shipping (2 - 4 days)",
              subTitle: "free",
              value: 0,
              isChecked: false,
            },
            {
              title: "Standard Shipping (3 - 7 days)",
              subTitle: "N4,500",
              value: 1,
              isChecked: false,
            },
          ]}
        />
        <Box h={4} />
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
        Proceed to Payment
      </Button>
    </>
  );
};

export default ShippingInfo;
