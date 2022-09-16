import {
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Select,
  Tag,
  Textarea,
} from "@chakra-ui/react";
import CustomMenu from "components/CustomMenu";
import React, { FormEventHandler, useState } from "react";
import { getState } from "utils/getCountries";
import { ActionsFormType } from "utils/types";
import { themeColorOptions } from "../constants";

const ActionFormBuilder = ({
  fields,
  onChange,
}: {
  fields: ActionsFormType[];
  onChange: (e: any) => void;
}) => {
  const [selectedColor, setSelectedColor] = useState<string>("brand.300");
  const [stateOptions, setStateOptions] = useState<string[]>([]);

  const handleChange = (e: any) => {
    onChange(e);
  };

  const handleStateSelectChange = () => {};

  const handleCountrySelectChange = (e: any) => {
    e.preventDefault();

    console.log("select option >>>> ", getState(e.target.value));
    setStateOptions(getState(e.target.value));
  };

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  //   console.log("stateOptions >>> ", stateOptions);
  //   console.log("formState >>> ", formState);

  return (
    <Box>
      {fields.map(({ name, type, options, formKey }, index) => {
        switch (type) {
          case "file":
            return (
              <FormControl key={index}>
                <Box mb={4}>
                  <FormLabel>{name}</FormLabel>
                  <Input
                    type={"file"}
                    name={formKey as string}
                    borderRadius={0}
                    borderColor={"black"}
                    onChange={handleChange}
                    placeholder={`Enter ${name}`}
                    _placeholder={{ color: "RGBA(0, 0, 0, 0.80)" }}
                    size="lg"
                  />
                </Box>
              </FormControl>
            );
          case "text":
            return (
              <FormControl key={index}>
                <Box mb={4}>
                  <FormLabel>{name}</FormLabel>
                  <Input
                    type={type}
                    name={formKey as string}
                    borderRadius={0}
                    borderColor={"black"}
                    onChange={handleChange}
                    placeholder={`Enter ${name}`}
                    _placeholder={{ color: "RGBA(0, 0, 0, 0.80)" }}
                    size="lg"
                  />
                  {(name as string).includes("Phone") && (
                    <FormHelperText>
                      Please add country code before number. E.g +1
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
                    placeholder={`Enter ${name}`}
                    _placeholder={{ color: "RGBA(0, 0, 0, 0.80)" }}
                    size="lg"
                  >
                    {options &&
                      // @ts-ignore
                      options?.map((opt: string) => (
                        <option key={opt} value={opt}>
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
                    placeholder={`Enter ${name}`}
                    _placeholder={{ color: "RGBA(0, 0, 0, 0.80)" }}
                    size="lg"
                  >
                    {stateOptions.length ? (
                      // @ts-ignore
                      stateOptions?.map((opt: string) => (
                        <option key={opt} value={opt}>
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
