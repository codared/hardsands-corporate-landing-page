import { Box, IconButton } from "@chakra-ui/react";
import CustomInput from "components/CustomInput";
import CustomSelect from "components/CustomSelect";
import { linkTrees } from "modules/account/constants";
import { SaveButton } from "modules/account/MainAccountContent/components/EditFormScreen";
import React, { useState } from "react";
import { AiOutlineMinus } from "react-icons/ai";

const LinkTreeForm = ({ handleChange, formState }: any) => {
  const initialFormState =
    formState?.length > 0
      ? formState
      : [
          {
            linkName: "",
            link: "",
            linkId: "",
          },
        ];

  const [inputFieldsState, setInputFieldsState] = useState(initialFormState);

  const onChange = (id: number, e: any) => {
    e.preventDefault();
    const currentInputFields = [...inputFieldsState][id];
    currentInputFields[e.target.name] =
      e.target.name === "linkId"
        ? parseInt(e.target.value, 10)
        : e.target.value;
    inputFieldsState[id] = currentInputFields;

    setInputFieldsState(inputFieldsState);

    handleChange({
      preventDefault: e.preventDefault,
      target: {
        name: "links",
        value: inputFieldsState,
      },
    });
  };

  return (
    <Box>
      {inputFieldsState.map((input: any, index: number) => {
        const linkIndex = index + 1;
        return (
          <Box mb={4} key={linkIndex} position={"relative"}>
            {linkIndex !== 1 && (
              <Box
                position={"relative"}
                zIndex={"1"}
                onClick={() => {
                  const inputFields = [...inputFieldsState];
                  inputFields.splice(index, 1);
                  setInputFieldsState(inputFields);
                }}
              >
                <IconButton
                  position={"absolute"}
                  top={"-10px"}
                  right={"0"}
                  variant="outline"
                  cursor={"pointer"}
                  colorScheme="none"
                  aria-label="Remove Field"
                  icon={<AiOutlineMinus />}
                />
              </Box>
            )}
            <CustomInput
              label={`Link ${linkIndex}`}
              placeholder="Enter Link Name"
              name={`linkName`}
              type="text"
              defaultValue={input.linkName || ""}
              isRequired
              borderRadius={0}
              borderColor={"black"}
              _placeholder={{ color: "RGBA(0, 0, 0, 0.80)" }}
              onChange={(e: any) => onChange(index, e)}
            />
            <CustomSelect
              placeholder="Enter Text"
              name={`linkId`}
              type="select"
              options={linkTrees}
              _key={"id"}
              _value={"title"}
              value={input.linkId}
              isRequired
              borderRadius={0}
              borderColor={"black"}
              _placeholder={{ color: "RGBA(0, 0, 0, 0.80)" }}
              onChange={(e: any) => onChange(index, e)}
            />
            <CustomInput
              placeholder="Enter URL"
              name={`link`}
              type="text"
              mb={4}
              defaultValue={input.link || ""}
              isRequired
              borderRadius={0}
              borderColor={"black"}
              _placeholder={{ color: "RGBA(0, 0, 0, 0.80)" }}
              onChange={(e: any) => onChange(index, e)}
            />
          </Box>
        );
      })}

      <SaveButton
        text={"Add More Links"}
        handleAction={() => {
          // add another input field
          const inputFields = [...inputFieldsState];
          inputFields.push({
            linkName: "",
            link: "",
            linkId: "",
          });
          setInputFieldsState(inputFields);
        }}
        isSubmitting={false}
      />
    </Box>
  );
};

export default LinkTreeForm;
