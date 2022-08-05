import { Input, InputProps } from "@chakra-ui/react";

interface CustomInputProps extends InputProps {
  placeholder?: string;
  onChange?: () => void;
  value?: string;
  name: any;
  type?: string;
}

const CustomInput = ({
  placeholder = "Input",
  onChange,
  value,
  name,
  type,
  ...rest
}: CustomInputProps) => {
  return (
    <Input
      {...rest}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      borderWidth={1}
      borderRadius="none"
      type={type}
    />
  );
};

export default CustomInput;
