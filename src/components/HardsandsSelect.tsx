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
  w?: string;
  options: string[];
}

const HardsandsSelect = ({
  w,
  label,
  id,
  onChange,
  options,
  selectedValue,
  ...rest
}: HardsandsSelectProps) => {
  return (
    <FormControl w={w ? w : "full"}>
      {label && <FormLabel>{label}</FormLabel>}
      <Select
        icon={<Image src={SelectDropdownIcon.src} alt={label} />}
        borderRadius={0}
        borderColor={"black"}
        onChange={onChange}
        _placeholder={{ color: "RGBA(0, 0, 0, 0.80)" }}
        w={"full"}
        size="xs"
        {...rest}
        defaultValue={selectedValue || ""}
        height="40px"
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
