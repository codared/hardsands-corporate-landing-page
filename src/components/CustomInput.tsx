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
  name: any;
  type?: string;
  helperText?: string;
  errorMessage?: string;
  showLabel?: boolean;
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
      type,
      helperText,
      errorMessage,
      showLabel = false,
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
        {showLabel && <FormLabel>{name}</FormLabel>}
        <Input
          {...rest}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          borderWidth={1}
          borderRadius="none"
          isInvalid={isInvalid}
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
