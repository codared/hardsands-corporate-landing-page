import { Box, Button, FormLabel, Text, useToast } from "@chakra-ui/react";
import { ChakraStylesConfig, Select } from "chakra-react-select";
import CustomInput from "components/CustomInput";
import { useForm } from "modules/account/Dashboard/hooks";
import React, { useEffect } from "react";
import { useTypedDispatch, useTypedSelector } from "redux/store";
import {
  addMembersAction,
  editMembersAction,
  getMembersAction,
} from "../../actions";
import { createMemberSchema } from "./schema";

const CreateMemberForm = ({
  editMode = false,
  defaultValues,
  handleSubmitComplete,
}: any) => {
  const dispatch = useTypedDispatch();
  const toast = useToast();
  // @ts-ignore
  const { error } = useTypedSelector((state) => state.dashboard);
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
      fullname: defaultValues?.fullName || "",
      email: defaultValues?.email || "",
      phone: defaultValues?.phone || "",
      tag: defaultValues?.tag || "",
      membershipDueDate: defaultValues?.membershipDueDate || "",
    },
    createMemberSchema,
    async (formData: any) => {
      let res;
      formData.membershipDueDate = new Date(
        formData.membershipDueDate
      ).toISOString();

      if (editMode) {
        res = await dispatch(editMembersAction(formData, defaultValues?.id));
      } else {
        res = await dispatch(addMembersAction(formData));
      }

      if (res?.message || res?.length) {
        setSuccessMessage(
          editMode
            ? "Member update successfully"
            : !res?.message
            ? res?.message
            : "Member added successfully"
        );
        dispatch(getMembersAction());
      }
      handleSubmitComplete && handleSubmitComplete();
    }
  );

  useEffect(() => {
    if (error.message || errorMessage) {
      toast({
        position: "top-right",
        title: error.message || errorMessage,
        status: "error",
        duration: 9000,
        isClosable: true,
        onCloseComplete: () => {
          setErrorMessage("");
          dispatch({ type: "DASHBOARD_APP_ERROR", payload: {} });
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, errorMessage]);

  useEffect(() => {
    if (successMessage) {
      toast({
        position: "top-right",
        title: successMessage,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [successMessage]);

  const chakraStyles: ChakraStylesConfig = {
    dropdownIndicator: (provided, state) => ({
      ...provided,
      background: "brand.100",
      p: 0,
      w: "40px",
    }),
    inputContainer: (provider) => ({
      ...provider,
      minW: "313px",
    }),
  };

  return (
    <Box>
      <form>
        <CustomInput
          label="Full Name"
          placeholder="Full Name"
          name="fullname"
          type="text"
          value={values.fullname}
          isRequired
          onChange={handleChange}
        />
        <CustomInput
          label="Email"
          placeholder="Email"
          name="email"
          type="email"
          value={values.email}
          isRequired
          onChange={handleChange}
          isDisabled={editMode}
        />
        <CustomInput
          label="Phone"
          placeholder="Phone"
          name="phone"
          type="text"
          maxLength={11}
          value={values.phone.trim()}
          isRequired
          onChange={handleChange}
          onKeyDown={(e: any) => {
            if (
              e.key === " " ||
              (!Number(e.key) &&
                e.key !== "Backspace" &&
                e.key !== "ArrowLeft" &&
                e.key !== "ArrowRight")
            ) {
              e.preventDefault();
            }
          }}
        />
        <Box mb={4}>
          <FormLabel>Select Membership Tag</FormLabel>
          <Select
            instanceId="chakra-react-state-select"
            name={"tag"}
            onChange={(newValue: any) => {
              handleChange({
                // @ts-ignore
                target: {
                  name: "tag",
                  value: newValue.value,
                },
              });
            }}
            placeholder={`Select Membership Tag`}
            size="lg"
            defaultValue={{
              value: values.tag,
              label: values.tag.charAt(0).toUpperCase() + values.tag.slice(1),
            }}
            selectedOptionStyle="check"
            options={[
              { value: "silver", label: "Silver" },
              { value: "gold", label: "Gold" },
            ]}
            chakraStyles={chakraStyles}
          />
        </Box>
        <CustomInput
          label="Membership Due Date"
          placeholder="Membership Due Date"
          name="membershipDueDate"
          type="date"
          value={values.membershipDueDate.split("T")[0]}
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
        isLoading={loading}
        loadingText={"Adding Member"}
      >
        {editMode ? <Text>Update Member</Text> : <Text>Add Member</Text>}
      </Button>
    </Box>
  );
};

export default CreateMemberForm;
