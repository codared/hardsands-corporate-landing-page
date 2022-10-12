import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputProps,
} from "@chakra-ui/react";
import { ChangeEvent, forwardRef } from "react";

interface CustomInputProps extends InputProps {
  placeholder?: string;
  onChange?: (e: ChangeEvent<any>) => void;
  value?: string;
  name: string;
  label?: string;
  type?: string;
  helperText?: string;
  errorMessage?: string;
  isError?: boolean;
  isRequired?: boolean;
  isInvalid?: boolean;
  isDisabled?: boolean;
}

const CustomInput = forwardRef(
  (
    {
      placeholder = "Input",
      onChange,
      value,
      name,
      label,
      type,
      helperText,
      errorMessage,
      isError = false,
      isRequired = false,
      isInvalid = false,
      isDisabled = false,
      ...rest
    }: CustomInputProps,
    ref
  ) => {
    return (
      <FormControl isRequired={isRequired} isInvalid={isError}>
        {label && <FormLabel>{label}</FormLabel>}
        <Input
          {...rest}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          borderWidth={1}
          borderRadius="none"
          isInvalid={isError}
          type={type}
        />

        {!isError ? (
          <FormHelperText>{helperText}</FormHelperText>
        ) : (
          <FormErrorMessage>{errorMessage}</FormErrorMessage>
        )}
      </FormControl>
    );
  }
);

CustomInput.displayName = "CustomInput";

export default CustomInput;
