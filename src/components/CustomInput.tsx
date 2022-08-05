import { Input } from "@chakra-ui/react";

const CustomInput = ({
  placeholder = "Input",
  onChange,
  value,
  name,
  type
}: {
  placeholder?: string;
  onChange?: () => void;
  value?: string;
  name: any;
  type?: string;
}) => {
  return (
    <Input
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
