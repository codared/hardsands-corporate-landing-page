import { CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Text,
  useToast,
  Image,
  Input,
  VStack,
  HStack,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import { AppIcons } from "modules/account/constants";
import { useForm } from "modules/account/Dashboard/hooks";
import React, { useEffect, useRef } from "react";
import { AiFillFileText } from "react-icons/ai";
import { useTypedDispatch, useTypedSelector } from "redux/store";
import { colors } from "styles/theme";
import { addMembersAction, getMembersAction } from "../../actions";
import { importMemberSchema } from "./schema";

const ImportMemberForm = () => {
  const dispatch = useTypedDispatch();
  const toast = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  // @ts-ignore
  const { error } = useTypedSelector((state) => state.dashboard);

  const {
    formData: values,
    handleChange,
    handleDrag,
    dragActive,
    handleSubmit,
    handleFileChange,
    handleDrop,
    handleRemoveFile,
    errorMessage,
    successMessage,
    setErrorMessage,
    setSuccessMessage,
    loading,
  } = useForm(
    {
      file: null,
    },
    importMemberSchema,
    async (formData: any) => {
      console.log("🚀 ~ file: index.tsx:50 ~ formData", formData);

      // const form = new FormData();
      // form.append(
      //   "file",
      //   new File([new Blob([formData.file])], formData.file.name)
      // );
      const form = new FormData();
      const reader = new FileReader();
      let read;

      if (formData.file) {
        reader.readAsDataURL(formData.file);
      }

      reader.onload = (readerEvent) => {
        // @ts-ignore
        console.log("🚀 ~ file: index.tsx:50 ~ result", readerEvent.target.result);
        // @ts-ignore
        form.append("file", readerEvent.target.result);
      };

      const res = await dispatch(addMembersAction(form, "import"));
      if (res?.message) {
        setSuccessMessage(res?.message);
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
    <Box mt={4}>
      <form>
        <VStack
          p={[4]}
          borderWidth={1}
          borderColor={"brand.300"}
          bg={"brand.50"}
          cursor={"pointer"}
          aria-label={"import"}
          draggable
          onDragEnter={handleDrag}
        >
          {dragActive ? (
            <VStack
              id="drag-file-element"
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={(e) => handleDrop(e, "file")}
            >
              <Image
                boxSize={70}
                src={AppIcons.ImportIconSVG.src}
                alt={"import"}
              />
              <Text>Drop your file here</Text>
            </VStack>
          ) : (
            <>
              <Image
                boxSize={70}
                src={AppIcons.ImportIconSVG.src}
                alt={"import"}
              />
              <Text>Drag your file here, file size less than 5mb</Text>
            </>
          )}
          <Button
            color="white"
            bg={"brand.300"}
            _hover={{ textColor: "black", bg: "brand.200" }}
            borderRadius={"none"}
            py={[6]}
            my={[6]}
            onClick={() => {
              fileInputRef.current?.click();
            }}
          >
            <Text>Browse File</Text>
          </Button>
          <Input
            name={"file"}
            onChange={handleFileChange}
            ref={fileInputRef}
            type="file"
            display={"none"}
          />
        </VStack>
        {values.file && (
          <HStack
            mt={4}
            p={[2]}
            bg={"gray.100"}
            justifyContent={"space-between"}
          >
            <Flex>
              <AiFillFileText size={24} color={colors.brand["300"]} />
              <Text>{values.file.name}</Text>
            </Flex>
            <IconButton
              aria-label="remove file"
              icon={<CloseIcon />}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                handleRemoveFile(e, "file");
              }}
            />
          </HStack>
        )}
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
        <Text>Add Member</Text>
      </Button>
    </Box>
  );
};

export default ImportMemberForm;
