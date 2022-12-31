import { Button, HStack, StackProps } from "@chakra-ui/react";
import CustomInput from "components/CustomInput";
import React, { SyntheticEvent, useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { CheckoutContext } from "redux/context";
import { addDiscountCodeCheckoutAction, addDiscountCodeCart } from "./actions";

interface DiscountProps extends StackProps {
  moduleType: string;
  moduleId: string;
};

function Discount({
  moduleType,
  moduleId,
  ...rest
}: DiscountProps) {
  const { dispatch } = useContext(CheckoutContext);
  const { t } = useTranslation();
  const [code, setCode] = useState("");
  const [showErrorMessages, setShowErrorMessages] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState("");

  const handleChange = (e: any) => {
    e.preventDefault();
    setShowErrorMessages(false);

    setCode(e.target.value);
  };

  const handleSubmitDiscountCode = async (code: string) => {
    try {
      setLoading(true);
      const res = await dispatch(
        moduleType === "checkout"
          ? addDiscountCodeCheckoutAction(moduleType, moduleId, code)
          : addDiscountCodeCart(moduleType, moduleId, code)
      );
      if (res?.isError) {
        setShowErrorMessages(res?.isError);
        setErrors(res.message);
      }
      setCode("");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setShowErrorMessages(true);
      setErrors((error as any).message);
      console.log("error >>> ", error);
    }
  };

  return (
    <HStack {...rest}>
      <CustomInput
        placeholder="Discount Code"
        name={"discountCode"}
        value={code}
        onChange={handleChange}
        isRequired
        // isInvalid={!!errors.address1}
        isError={showErrorMessages && !!errors}
        errorMessage={errors}
        bg={"white"}
        mt={"10px"}
      />
      <Button
        fontSize={14}
        fontWeight={500}
        color={"black"}
        bg={"brand.100"}
        fontFamily="MADE Outer sans"
        onClick={() => handleSubmitDiscountCode(code)}
        // p={["24px 16px", "24px 46px"]}
        borderWidth="2px"
        borderColor={"brand.100"}
        borderRadius="0"
        transition="all 200ms ease-in"
        // w="100%"
        textAlign="center"
        _hover={{
          bg: "transparent",
          color: "black",
          borderWidth: "2px",
          borderColor: "brand.100",
        }}
        mb={[6, 4]}
        isDisabled={!code}
        isLoading={loading}
      >
        {t("discount:apply", "Apply")}
      </Button>
    </HStack>
  );
}

export default Discount;
