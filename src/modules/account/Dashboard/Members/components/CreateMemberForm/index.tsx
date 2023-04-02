import { Box, Button, Text, useToast } from "@chakra-ui/react";
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

const CreateMemberForm = ({ editMode = false, defaultValues }: any) => {
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
      position: defaultValues?.corporatePosition || "",
    },
    createMemberSchema,
    async (formData: any) => {
      let res;
      if (editMode) {
        res = await dispatch(editMembersAction(formData, defaultValues?.id));
      } else {
        res = await dispatch(addMembersAction(formData));
      }

      if (res?.length) {
        setSuccessMessage(
          editMode ? "Member update successfully" : "Member added successfully"
        );
        dispatch(getMembersAction());
      }
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

  return (
    <Box>
      <form>
        <CustomInput
          label="Name"
          placeholder="Name"
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
          label="Position"
          placeholder="Position"
          name="position"
          type="text"
          value={values.position}
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
