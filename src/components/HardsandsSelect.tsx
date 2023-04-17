import { Box, FormLabel, FormControl, SelectProps } from "@chakra-ui/react";
import { ChakraStylesConfig, Select, SingleValue } from "chakra-react-select";
import { ChangeEventHandler } from "react";

interface HardsandsSelectProps extends SelectProps {
  id?: string;
  name?: string;
  placeholder?: string;
  label?: string;
  onChange?: any;
  value?: string | number;
  options?: any[];
}
const HardsandsSelect = ({id, label, placeholder, onChange, value, options}: HardsandsSelectProps) => {
  return (
    <FormControl>
        <FormLabel htmlFor={id}>{label}</FormLabel>
        <Select
          id={id}
          name={id}
          onChange={onChange}
          placeholder={`Select ${label}`}
          size="lg"
          value={value}
          selectedOptionStyle="check"
          options={options}
        />
    </FormControl>
  );
};

export default HardsandsSelect;