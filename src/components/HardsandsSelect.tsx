import {
  FormControl,
  FormLabel,
  Select,
  SelectProps,
  Image,
} from "@chakra-ui/react";
import { SelectDropdownIcon } from "assets/index";
interface HardsandsSelectProps extends SelectProps {
  onChange?: any;
  selectedValue?: string;
  label?: string;
  id?: string;
  options: string[];
}

const HardsandsSelect = ({
  label,
  id,
  onChange,
  options,
  selectedValue,
  ...rest
}: HardsandsSelectProps) => {
  return (
    <FormControl>
      {label && <FormLabel>{label}</FormLabel>}
      <Select
        icon={<Image src={SelectDropdownIcon.src} alt={label} />}
        borderRadius={0}
        borderColor={"black"}
        onChange={onChange}
        sx={{
          "&:placeholder": {
            color: "#616161 !important",
          },
        }}
        w={"full"}
        size="md"
        {...rest}
        defaultValue={selectedValue || ""}
        height="54px"
      >
        {options &&
          options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
      </Select>
    </FormControl>
  );
};

export default HardsandsSelect;
