import { FormControl, FormLabel, Input, InputProps } from "@chakra-ui/react";

interface CustomProps extends InputProps {
  label?: string;
  labelBottom?: boolean;
  readOnly?: boolean;
}

const FormInput = ({
  id,
  placeholder,
  value,
  label,
  labelBottom,
  onChange,
  readOnly
}: CustomProps) => {
  return (
    <FormControl mb={8}>
      {label && !labelBottom && (
        <FormLabel htmlFor={id} fontSize={"0.875rem"} fontWeight={"bold"}>
          {label}
        </FormLabel>
      )}
      <Input
        id={id}
        sx={{
          background: "#F6F6F6",
          border: "1px solid #D9D9D9",
          height: "48px",
          borderRadius: 0
        }}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
      />{" "}
      {label && labelBottom && (
        <FormLabel mt={2} htmlFor={id} fontSize={"11px"} color="#8a8a8a">
          {label}
        </FormLabel>
      )}
    </FormControl>
  );
};

export default FormInput;
