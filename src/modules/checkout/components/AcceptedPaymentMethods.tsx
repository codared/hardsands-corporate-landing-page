import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { TFunction } from "react-i18next";
import { FaCcMastercard, FaCcPaypal, FaCcStripe } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";

function AcceptedPaymentMethods({ t }: { t: TFunction }) {
  return (
    <Box px={6} py={2} border="1px solid" borderColor={"brand.100"} mt={4}>
      <Heading size={"sm"}>
        {t("checkout:accepted-payments", "Accepted Payment Methods")}
      </Heading>
      <Flex mt={4}>
        <Box mr={4}>
          <RiVisaLine size={50} />
        </Box>
        <Box mr={4}>
          <FaCcPaypal size={50} />
        </Box>
        <Box mr={4}>
          <FaCcMastercard size={50} />
        </Box>
        {/* <Box mr={4}>
          <FaCcStripe size={50} />
        </Box> */}
      </Flex>
    </Box>
  );
}

export default AcceptedPaymentMethods;
