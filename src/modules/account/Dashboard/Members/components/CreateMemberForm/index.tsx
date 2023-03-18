import { Box, Button, Text, useToast } from "@chakra-ui/react";
import CustomInput from "components/CustomInput";
import { useForm } from "modules/account/Dashboard/hooks";
import React, { useEffect } from "react";
import { createMemberSchema } from "./schema";

const CreateMemberForm = () => {
  const toast = useToast();
  const {
    formData: values,
    handleChange,
    handleSubmit,
    errorMessage,
    successMessage,
    setErrorMessage,
    setSuccessMessage,
    loading,
  } = useForm(
    {
      name: "",
      email: "",
      position: "",
    },
    createMemberSchema,
    (formData: any) => {
      console.log(
        "🚀 ~ file: index.tsx:16 ~ CreateMemberForm ~ formData",
        formData
      );
    }
  );

  useEffect(() => {
    if (errorMessage) {
      toast({
        position: "top-right",
        title: errorMessage,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errorMessage]);

  return (
    <Box>
      <form>
        <CustomInput
          label="Name"
          placeholder="Name"
          name="name"
          type="text"
          isRequired
          onChange={handleChange}
        />
        <CustomInput
          label="Email"
          placeholder="Email"
          name="email"
          type="email"
          isRequired
          onChange={handleChange}
        />
        <CustomInput
          label="Position"
          placeholder="Position"
          name="position"
          type="text"
          isRequired
          onChange={handleChange}
        />
      </form>
      <Button
        w={"full"}
        color="white"
        bg={"brand.300"}
        _hover={{ textColor: "black", bg: "brand.200" }}
        borderRadius={"none"}
        py={[6]}
        my={[6]}
        onClick={handleSubmit}
      >
        <Text>Add Member</Text>
      </Button>
    </Box>
  );
};

export default CreateMemberForm;
