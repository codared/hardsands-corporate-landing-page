import { Input, FormLabel, FormControl, InputProps } from "@chakra-ui/react";

interface ActionsInputProps extends InputProps {
  id?: string;
  label?: string;
  type?: string;
  placeholder?: string;

}
const ActionsInput = ({
  id,
  type,
  placeholder,
  label,
  ...rest
}: ActionsInputProps) => {
  return (
    <FormControl>
      {label && <FormLabel htmlFor="phone-number">{label}</FormLabel>}
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        border="1px solid #000 !important"
        borderRadius={0}
        sx={{
          "&::placeholder": {
            color: "#616161 !important",
          },
        }}
        {...rest}
      />
    </FormControl>
  );
};

export default ActionsInput;
