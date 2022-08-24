import { Box, Button, Text } from "@chakra-ui/react";
import CheckAccordion from "components/CheckAccordion";
import { TFunction } from "react-i18next";
import { useState } from "react";
import { Order } from "../types";

const ShippingInfo = ({
  order: { shippingDetails, shippingMethods },
  handleSubmitShippingMethod,
  t,
}: {
  order: Order;
  t: TFunction;
  handleSubmitShippingMethod: (shippingMethodId: number) => void;
}) => {
  const [shippingMethod, setShippingMethod] = useState(0);

  const buildShippingMethodsArray = () => {
    return shippingMethods.map((method) => ({
      title: `${method.title} (${method.minDuration} - ${method.maxDuration} days)`,
      subTitle: method.title.includes("Free") ? "free" : null,
      value: method.id,
      isChecked: false,
    }));
  };

  return (
    <>
      <Box mb={10}>
        <Text fontWeight={"bold"}>{t("checkout:ship-to", "Ship to")}</Text>
        <Box h={2} />
        <CheckAccordion
          // onChange={(val: string | number) => setShippingAddress(val)}
          options={[
            {
              title: shippingDetails.address1,
              isChecked: true,
              content: (
                <Box>
                  <Text>{shippingDetails.address1}</Text>
                  <Text>{`${shippingDetails.phoneCode} ${shippingDetails.phone}`}</Text>
                  {/* <Text>nathan.roberts@example.com</Text> */}
                </Box>
              ),
            },
          ]}
        />
      </Box>
      <Box>
        <Text fontWeight={"bold"}>
          {t("checkout:shipping-method", "Shipping Method")}
        </Text>
        <Box h={2} />
        <CheckAccordion
          onChange={(val: string | number) => setShippingMethod(val as number)}
          options={buildShippingMethodsArray()}
        />
        <Box h={4} />
      </Box>
      <Button
        fontSize={14}
        fontWeight={500}
        color={"black"}
        bg={"brand.100"}
        fontFamily="MADE Outer sans"
        onClick={() => handleSubmitShippingMethod(shippingMethod)}
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
        isDisabled={!shippingMethod}
      >
        {t("checkout:proceed-to-payment", "Proceed to Payment")}
      </Button>
    </>
  );
};

export default ShippingInfo;
