import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Box,
  Flex,
  Checkbox,
  Text,
} from "@chakra-ui/react";
import HardsandsButton from "components/HardsandsButton";
import React from "react";

function VariantSelectionModal({
  buttonText,
  variantOptions,
  isVariantSelectionOpen,
  onCloseVariantSelection,
  onSubmit,
}: any) {
  const [selectedVariant, setSelectedVariant] = React.useState(
    variantOptions[0]
  );
  const handleVariantModalClose = () => {
    return onCloseVariantSelection();
  };

  const handleSubmit = () => {
    onSubmit(selectedVariant);
  };


//   console.log("slug >>>> ", slug); // hardsands-epoxy-pvc
//   const { product, productDetails } = useProduct(
//     initialProduct,
//     slug as string
//   );
  //   const productVariants = getProductOptions(product.options);
  //   const [quantity, setQuantity] = useState(1);
  //   const { isCartOpen, setIsCartOpen, isLoading, handleAddtoCart } =
  //     useAddtoCart({ productDetails, activeVariant, quantity });

  //   const price = formatCurrencyInteger(
  //     productDetails.variants[activeVariant].price,
  //     currency
  //   );

  return (
    <Modal
      onClose={handleVariantModalClose}
      isOpen={isVariantSelectionOpen}
      scrollBehavior={"inside"}
    >
      <ModalOverlay />
      <ModalContent mx={4} my={"auto"} maxH={"100%"}>
        <ModalBody p={0} position={"relative"} overflow={"visible"}>
          <Text
            fontSize={24}
            fontWeight={"bolder"}
            textAlign={"center"}
            color="white"
            position={"absolute"}
            top={-10}
          >
            Choose A Variant
          </Text>
          <Box py={[6]} px={[4]}>
            <Flex direction={"column"}>
              {variantOptions.length > 0 &&
                variantOptions.map((variant: any) => (
                  <Flex
                    key={variant.name}
                    borderWidth={2}
                    borderColor={
                      selectedVariant.name === variant.name
                        ? "brand.300"
                        : "gray.300"
                    }
                    bg={
                      selectedVariant.name === variant.name
                        ? "brand.100"
                        : "gray.100"
                    }
                    color={"black"}
                    p={[4]}
                    justifyContent={"space-between"}
                    mb={[4]}
                    _last={{ mb: 0 }}
                    role="button"
                    onClick={() => setSelectedVariant(variant)}
                  >
                    <Flex justifyContent={"center"} mr={[4]}>
                      {/* <Checkbox /> */}
                      <Text>{variant.name}</Text>
                    </Flex>
                    <Text>{variant.price}</Text>
                  </Flex>
                ))}
            </Flex>
          </Box>
          <HardsandsButton
            // @ts-ignore
            w={"full"}
            href={"#"}
            onClick={() => {}}
            _hover={{ color: "white" }}
            position={"absolute"}
            bottom={-100}
          >
            {buttonText}
          </HardsandsButton>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default VariantSelectionModal;
