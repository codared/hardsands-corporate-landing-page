import { Stack, StackProps } from "@chakra-ui/react";
import { ChakraStylesConfig, Select } from "chakra-react-select";
import { useState } from "react";
import { CURRENCY_CODES, TOP_CURRENCIES } from "utils/currency";
import { createSelectOptions } from "utils/functions";
import { OptionType } from "utils/types";

interface CurrenctSelectorProps extends StackProps {
  onChange: any;
  selectedCurrency?: string;
}

const CurrencySelector = ({
  onChange,
  selectedCurrency,
  ...rest
}: CurrenctSelectorProps) => {
  const [selectedOption, setSelectedOption] = useState<OptionType>(null);

  const handleChange = (newValue: OptionType) => {
    setSelectedOption(newValue);
    // @ts-ignore
    onChange(newValue?.value);
  };

  const options = createSelectOptions(
    Object.keys({ ...TOP_CURRENCIES, ...CURRENCY_CODES })
  );

  const chakraStyles: ChakraStylesConfig = {
    dropdownIndicator: (provided, state) => ({
      ...provided,
      background: "brand.100",
      p: 0,
      w: "20px",
    }),
  };

  return (
    <Stack minWidth={"90px"} {...rest}>
      <Select
        instanceId="chakra-react-currency-select"
        name={"currencySelector"}
        borderRadius={0}
        // @ts-ignore
        onChange={handleChange}
        color="RGB(255, 255, 255)"
        placeholder={selectedCurrency || "Select Currency"}
        // @ts-ignore
        size="xs"
        defaultValue={selectedOption || ""}
        // @ts-ignore
        options={options}
        chakraStyles={chakraStyles}
      />
    </Stack>
  );
};

export default CurrencySelector;
