import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Select,
  SelectProps,
} from "@chakra-ui/react";
import { ChangeEvent } from "react";

interface CustomSelectProps extends SelectProps {
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
  inputType?: string;
  options?: Array<any>;
}

const CustomSelect = ({
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
  inputType = "text",
  options = [],
  ...rest
}: CustomSelectProps) => {
  return (
    <FormControl isRequired={isRequired} isInvalid={isError}>
      {showLabel && <FormLabel>{name}</FormLabel>}
      <Select
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        borderWidth={1}
        borderRadius="none"
        isDisabled={isDisabled}
        {...rest}
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </Select>

      {!isError ? (
        <FormHelperText>{helperText}</FormHelperText>
      ) : (
        <FormErrorMessage>{errorMessage}</FormErrorMessage>
      )}
    </FormControl>
  );
};

export default CustomSelect;
