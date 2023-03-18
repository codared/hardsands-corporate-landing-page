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
import { colors } from "styles/theme";
import { importMemberSchema } from "./schema";

const ImportMemberForm = () => {
  const toast = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
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
      memberFile: null,
    },
    importMemberSchema,
    (formData: any) => {
      console.log(
        "🚀 ~ file: index.tsx:16 ~ ImportMemberForm ~ formData",
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
              onDrop={(e) => handleDrop(e, "memberFile")}
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
            name={"memberFile"}
            onChange={handleFileChange}
            ref={fileInputRef}
            type="file"
            display={"none"}
          />
        </VStack>
        {values.memberFile && (
          <HStack
            mt={4}
            p={[2]}
            bg={"gray.100"}
            justifyContent={"space-between"}
          >
            <Flex>
              <AiFillFileText size={24} color={colors.brand["300"]} />
              <Text>{values.memberFile.name}</Text>
            </Flex>
            <IconButton
              aria-label="remove file"
              icon={<CloseIcon />}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                handleRemoveFile(e, "memberFile");
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
      >
        <Text>Add Member</Text>
      </Button>
    </Box>
  );
};

export default ImportMemberForm;
