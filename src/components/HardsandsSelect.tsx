import { Box, FormLabel, FormControl } from "@chakra-ui/react";
import { ChakraStylesConfig, Select, SingleValue } from "chakra-react-select";

const HardsandsSelect = () => {
     const chakraStyles: ChakraStylesConfig = {
       dropdownIndicator: (provided, state) => ({
         ...provided,
         background: "brand.100",
         p: 0,
         w: "40px",
       }),
       inputContainer: (provider) => ({
         ...provider,
         minW: "313px",
       }),
     };

  return (
    <FormControl>
      <Box mb={4}>
        <FormLabel>{name}</FormLabel>
        <Select
          instanceId="chakra-react-state-select"
          name={formKey as string}
          onChange={(newValue) =>
            handleOptionSelected(newValue, formKey as string)
          }
          placeholder={`Select ${name}`}
          size="lg"
          value={selectedStateOption}
          selectedOptionStyle="check"
          options={createSelectOptions(stateOptions as any[])}
          chakraStyles={chakraStyles}
        />
      </Box>
    </FormControl>
  );
};

export default HardsandsSelect;