import {
  Box,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Select,
  Tag,
  Textarea,
  Image,
  Spinner,
} from "@chakra-ui/react";
import CustomMenu from "components/CustomMenu";
import CustomSelect from "components/CustomSelect";
import React, { FormEventHandler, useState } from "react";
import { getCountryPhoneCode, getState } from "utils/getCountries";
import { ActionsFormType } from "utils/types";
import { themeColorOptions } from "../constants";
import { BankObjectType } from "../types";

const ActionFormBuilder = ({
  fields,
  formState,
  onChange,
  imageLoading,
  selectedImageUrl,
  banks,
}: {
  formState?: any;
  imageLoading?: boolean;
  selectedImageUrl?: string;
  fields: ActionsFormType[];
  banks?: BankObjectType[];
  onChange: (e: any) => void;
}) => {
  const [selectedColor, setSelectedColor] = useState<string>("brand.300");
  const [stateOptions, setStateOptions] = useState<string[]>([]);

  const handleChange = async (e: any) => {
    onChange(e);
  };

  const handleStateSelectChange = () => {};

  const handleCountrySelectChange = (e: any) => {
    e.preventDefault();

    setStateOptions(getState(e.target.value));
  };

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <Box>
      {fields.map(({ name, type, options, formKey }, index) => {
        switch (type) {
          case "file":
            return (
              <FormControl key={index}>
                <Flex mb={4} borderRadius={0} borderColor={"black"}>
                  <FormLabel>{name}</FormLabel>
                  <Box maxW={"230px"}>
                    {imageLoading ? (
                      <Spinner size="md" />
                    ) : selectedImageUrl ? (
                      <Image src={selectedImageUrl} alt="image preview" />
                    ) : null}
                  </Box>
                  <Input
                    type={"file"}
                    borderRadius={0}
                    accept="image/png, image/jpeg"
                    name={formKey as string}
                    onChange={handleChange}
                    placeholder={`Enter ${name}`}
                    _placeholder={{ color: "RGBA(0, 0, 0, 0.80)" }}
                    size="lg"
                    defaultValue={formState[formKey as string]}
                  />
                </Flex>
              </FormControl>
            );
          case "text":
            return (
              <FormControl key={index}>
                <Box mb={4}>
                  <FormLabel>{name}</FormLabel>
                  <Flex>
                    {formKey === "phoneCode" ? (
                      <CustomSelect
                        _key={"value"}
                        _value={"title"}
                        size="lg"
                        placeholder="Phone Code"
                        options={getCountryPhoneCode()}
                        name={formKey}
                        onChange={handleChange}
                        isRequired
                        defaultValue={formState[formKey as string]}
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
                    type={"date"}
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
                    name={formKey as string}
                    borderRadius={0}
                    borderColor={"black"}
                    onChange={handleCountrySelectChange}
                    placeholder={`Select ${name}`}
                    _placeholder={{ color: "RGBA(0, 0, 0, 0.80)" }}
                    size="lg"
                    defaultValue={formState[formKey as string]}
                  >
                    {options &&
                      // @ts-ignore
                      options?.map((opt: string, optIndex: number) => (
                        <option key={`${opt}_${optIndex}`} value={opt}>
                          {opt}
                        </option>
                      ))}
                  </Select>
                </Box>
              </FormControl>
            );
          case "state-select":
            return (
              <FormControl key={index}>
                <Box mb={4}>
                  <FormLabel>{name}</FormLabel>
                  <Select
                    name={formKey as string}
                    borderRadius={0}
                    borderColor={"black"}
                    onChange={handleStateSelectChange}
                    placeholder={`Select ${name}`}
                    _placeholder={{ color: "RGBA(0, 0, 0, 0.80)" }}
                    size="lg"
                    defaultValue={formState[formKey as string]}
                  >
                    {stateOptions.length ? (
                      // @ts-ignore
                      stateOptions?.map((opt: string, optIndex: number) => (
                        <option key={`${opt}_${optIndex}`} value={opt}>
                          {opt}
                        </option>
                      ))
                    ) : (
                      <option>--Select Country first --</option>
                    )}
                  </Select>
                </Box>
              </FormControl>
            );
          case "bank-select":
            return (
              <FormControl key={index}>
                <Box mb={4}>
                  <FormLabel>{name}</FormLabel>
                  <Select
                    name={formKey as string}
                    borderRadius={0}
                    borderColor={"black"}
                    onChange={handleChange}
                    placeholder={`Select ${name}`}
                    _placeholder={{ color: "RGBA(0, 0, 0, 0.80)" }}
                    size="lg"
                    value={formState[formKey as string]}
                  >
                    {banks && banks?.length > 0
                      ? // @ts-ignore
                        banks?.map((opt: BankObjectType, optIndex: number) => (
                          <option
                            key={`${opt.value}_${optIndex}`}
                            value={opt.value}
                          >
                            {opt.value}
                          </option>
                        ))
                      : null}
                  </Select>
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
