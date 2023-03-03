import {
  Box,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Tag,
  Text,
  Textarea,
  Image,
  Spinner,
} from "@chakra-ui/react";
import CustomMenu from "components/CustomMenu";
import React, { FormEventHandler, useEffect, useState } from "react";
import {
  getCountryByName,
  getCountryPhoneCode,
  getStatesList,
} from "utils/getCountries";
import { ActionsFormType } from "utils/types";
import { themeColorOptions } from "../constants";
import { BankObjectType } from "../types";
import { ChakraStylesConfig, Select, SingleValue } from "chakra-react-select";
import { createSelectOptions } from "utils/functions";
import { css } from "@emotion/react";

const ActionFormBuilder = ({
  fields,
  formState,
  onChange,
  imageLoading,
  selectedImageUrl,
  selectedImageData,
  banks,
}: {
  formState?: any;
  imageLoading?: boolean;
  selectedImageUrl?: string;
  selectedImageData?: {
    name: string;
    size: number;
  };
  fields: ActionsFormType[];
  banks?: BankObjectType[];
  onChange: (e: any) => void;
}) => {
  const [selectedColor, setSelectedColor] = useState<string>("brand.300");
  const [stateOptions, setStateOptions] = useState<any[]>([]);
  const [selectedCountryOption, setSelectedCountryOption] = useState<any>({
    value: formState["countryId"] || formState["homeCountryId"],
    label: formState["countryId"] || formState["homeCountryId"],
  });
  const [selectedStateOption, setSelectedStateOption] = useState<any>({
    value: formState["provinceId"] || formState["homeStateId"],
    label: formState["provinceId"] || formState["homeStateId"],
  });
  const [selectedPhoneCodeOption, setSelectedPhoneCodeOption] = useState<any>(
    formState["phoneCode"]
      ? {
          value: formState["phoneCode"],
          label: formState["phoneCode"],
        }
      : getCountryPhoneCode()[0]
  );

  const handleChange = async (e: any) => {
    onChange(e);
  };

  const handleOptionSelected = (
    newValue: SingleValue<{ value: any; label: any }>,
    name: string
  ) => {
    let e = {
      preventDefault: () => {},
      // @ts-ignore
      target: { value: newValue?.value, name },
    };

    if (name === "homeCountryId" || name === "countryId") {
      setSelectedCountryOption(newValue);
      setStateOptions(getStatesList(e.target.value));
    }

    if (name === "homeStateId" || name === "provinceId") {
      setSelectedStateOption(newValue);
    }

    if (name === "phoneCode") {
      setSelectedPhoneCodeOption(newValue);
    }

    onChange(e);
  };

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  useEffect(() => {
    if (
      selectedCountryOption.label ||
      formState["countryId"] ||
      formState["homeCountryId"]
    ) {
      setStateOptions(
        getStatesList(
          getCountryByName(
            selectedCountryOption.label ||
              formState["countryId"] ||
              formState["homeCountryId"]
          )?.id as string
        )
      );
    }
  }, []);

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
    <Box
      css={css`
        .css-uz7ias {
          border-color: black;
          border-radius: 0;
        }
      `}
    >
      {fields.map(({ name, type, options, formKey }, index) => {
        switch (type) {
          case "file":
            return (
              <FormControl key={index}>
                <Box mb={4} borderRadius={0} borderColor={"black"}>
                  <FormLabel>{name}</FormLabel>
                  <Input
                    type={"file"}
                    borderRadius={0}
                    accept="image/png, image/jpeg"
                    name={formKey as string}
                    onChange={handleChange}
                    placeholder={`Enter ${name}`}
                    _placeholder={{ color: "RGBA(0, 0, 0, 0.80)" }}
                    size="lg"
                  />
                  {imageLoading ||
                    (selectedImageUrl && (
                      <Flex
                        borderWidth={1}
                        mt={4}
                        borderColor={"gray.300"}
                        p={2}
                        maxW={"full"}
                      >
                        <Box maxH={"80px"}>
                          {imageLoading ? (
                            <Spinner size="md" />
                          ) : selectedImageUrl ? (
                            <Flex h={"full"}>
                              <Image
                                src={selectedImageUrl}
                                objectFit={"cover"}
                                alt="image preview"
                              />
                              {selectedImageData && (
                                <Box ml={2}>
                                  <Text>{selectedImageData?.name}</Text>
                                  <Text>{selectedImageData?.size / 1000} KB</Text>
                                </Box>
                              )}
                            </Flex>
                          ) : null}
                        </Box>
                      </Flex>
                    ))}
                </Box>
              </FormControl>
            );
          case "text":
            return (
              <FormControl key={index}>
                <Box mb={4}>
                  <FormLabel>{name}</FormLabel>
                  <Flex minW={"100%"}>
                    {formKey === "phoneCode" ? (
                      <Select
                        size="lg"
                        placeholder="Phone Code"
                        options={getCountryPhoneCode()}
                        name={formKey}
                        onChange={(newValue) =>
                          handleOptionSelected(newValue, formKey as string)
                        }
                        isRequired
                        value={selectedPhoneCodeOption}
                        chakraStyles={chakraStyles}
                      />
                    ) : (
                      <Input
                        type={type}
                        name={formKey as string}
                        borderRadius={0}
                        borderColor={"black"}
                        onChange={handleChange}
                        placeholder={`Enter ${name}`}
                        _placeholder={{ color: "RGBA(0, 0, 0, 0.80)" }}
                        size="lg"
                        value={formState[formKey as string] || ""}
                      />
                    )}
                  </Flex>
                  {(formKey as string) === "phone" && (
                    <FormHelperText>
                      Please select phone code before number. E.g +1
                    </FormHelperText>
                  )}
                </Box>
              </FormControl>
            );
          case "email":
            return (
              <FormControl key={index}>
                <Box mb={4}>
                  <FormLabel>{name}</FormLabel>
                  <Input
                    type={"email"}
                    name={formKey as string}
                    borderRadius={0}
                    borderColor={"black"}
                    onChange={handleChange}
                    placeholder={`Enter ${name}`}
                    _placeholder={{ color: "RGBA(0, 0, 0, 0.80)" }}
                    size="lg"
                    defaultValue={formState[formKey as string]}
                  />
                </Box>
              </FormControl>
            );
          case "date":
            return (
              <FormControl key={index}>
                <Box mb={4}>
                  <FormLabel>{name}</FormLabel>
                  <Input
                    type={"datetime-local"}
                    name={formKey as string}
                    borderRadius={0}
                    borderColor={"black"}
                    onChange={handleChange}
                    placeholder={`Enter ${name}`}
                    _placeholder={{ color: "RGBA(0, 0, 0, 0.80)" }}
                    size="lg"
                    value={formState[formKey as string]?.replace(
                      ":00.000Z",
                      ""
                    )}
                  />
                </Box>
              </FormControl>
            );
          case "time":
            return (
              <FormControl key={index}>
                <Box mb={4}>
                  <FormLabel>{name}</FormLabel>
                  <Input
                    type={"time"}
                    name={formKey as string}
                    borderRadius={0}
                    borderColor={"black"}
                    onChange={handleChange}
                    placeholder={`Enter ${name}`}
                    _placeholder={{ color: "RGBA(0, 0, 0, 0.80)" }}
                    size="lg"
                    defaultValue={formState[formKey as string]}
                  />
                </Box>
              </FormControl>
            );
          case "country-select":
            return (
              <FormControl key={index}>
                <Box mb={4}>
                  <FormLabel>{name}</FormLabel>
                  <Select
                    instanceId="chakra-react-country-select"
                    name={formKey as string}
                    onChange={(newValue) =>
                      handleOptionSelected(newValue, formKey as string)
                    }
                    placeholder={`Select ${name}`}
                    size="lg"
                    value={selectedCountryOption}
                    selectedOptionStyle="check"
                    options={options as any[]}
                    chakraStyles={chakraStyles}
                  />
                </Box>
              </FormControl>
            );
          case "state-select":
            return (
              <FormControl key={index}>
                <Box mb={4}>
                  <FormLabel>{name}</FormLabel>
                  <Select
                    instanceId="chakra-react-state-select"
                    name={formKey as string}
                    onChange={(newValue) =>
                      handleOptionSelected(newValue, formKey as string)
                    }
                    placeholder={`Select ${name}`}
                    size="lg"
                    value={selectedStateOption}
                    selectedOptionStyle="check"
                    options={createSelectOptions(stateOptions as any[])}
                    chakraStyles={chakraStyles}
                  />
                </Box>
              </FormControl>
            );
          case "bank-select":
            return (
              <FormControl key={index}>
                <Box mb={4}>
                  <FormLabel>{name}</FormLabel>
                  <Select
                    id={"bank-select"}
                    instanceId="chakra-react-bank-select"
                    name={formKey as string}
                    onChange={(newValue) =>
                      // @ts-ignore
                      handleOptionSelected(newValue, formKey as string)
                    }
                    placeholder={`Select ${name}`}
                    size="lg"
                    value={{
                      value: formState[formKey as string],
                      label: formState[formKey as string],
                    }}
                    selectedOptionStyle="check"
                    options={createSelectOptions(banks as any[])}
                    chakraStyles={chakraStyles}
                  />
                </Box>
              </FormControl>
            );
          case "color":
            return (
              <FormControl key={index}>
                <Box mb={4}>
                  <FormLabel>{name}</FormLabel>
                  <CustomMenu
                    w={["25%"]}
                    menuTitle={
                      <>
                        <Tag
                          bgColor={selectedColor}
                          size={"sm"}
                          borderRadius="full"
                          variant="solid"
                        />
                      </>
                    }
                    isColorOptions
                    onChange={
                      handleColorChange as unknown as FormEventHandler<HTMLButtonElement>
                    }
                    options={themeColorOptions}
                  />
                </Box>
              </FormControl>
            );
          case "url":
            return (
              <FormControl key={index}>
                <Box mb={4}>
                  <FormLabel>{name}</FormLabel>
                  <Input
                    type={"url"}
                    name={formKey as string}
                    borderRadius={0}
                    borderColor={"black"}
                    onChange={handleChange}
                    placeholder={`Enter ${name}`}
                    _placeholder={{ color: "RGBA(0, 0, 0, 0.80)" }}
                    size="lg"
                    defaultValue={formState[formKey as string]}
                  />
                </Box>
              </FormControl>
            );
          case "long-text":
            return (
              <FormControl key={index}>
                <Box mb={4}>
                  <FormLabel>{name}</FormLabel>
                  <Textarea
                    name={formKey as string}
                    borderRadius={0}
                    borderColor={"black"}
                    onChange={handleChange}
                    placeholder={`Enter ${name}`}
                    _placeholder={{ color: "RGBA(0, 0, 0, 0.80)" }}
                    size="lg"
                    defaultValue={formState[formKey as string]}
                  />
                </Box>
              </FormControl>
            );
          default:
            return;
        }
      })}
    </Box>
  );
};

export default ActionFormBuilder;
