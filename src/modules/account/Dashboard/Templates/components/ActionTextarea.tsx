import {
  Textarea,
  FormLabel,
  FormControl,
  TextareaProps,
} from "@chakra-ui/react";

interface ActionsTextareaProps extends TextareaProps {
  id?: string;
  label?: string;
  type?: string;
  placeholder?: string;
}
const ActionsTextarea = ({
  id,
  type,
  placeholder,
  label,
  ...rest
}: ActionsTextareaProps) => {
  return (
    <FormControl>
      {label && <FormLabel htmlFor="phone-number">{label}</FormLabel>}
      <Textarea
        id={id}
        type={type}
        placeholder={placeholder}
        border="1px solid #000 !important"
        borderRadius={0}
        {...rest}
      />
    </FormControl>
  );
};

export default ActionsTextarea;
