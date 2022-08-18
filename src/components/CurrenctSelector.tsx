import { Select, SelectProps } from "@chakra-ui/react";
import { TOP_CURRENCIES } from "utils/currency";

interface CurrenctSelectorProps extends SelectProps {
  onChange: any;
  selectedCurrency?: string;
}

const CurrencySelector = ({
  onChange,
  selectedCurrency,
  ...rest
}: CurrenctSelectorProps) => {
  const handleChange = (e: any) => {
    onChange(e.target.value);
  };

  return (
    <Select
      borderRadius={0}
      borderColor={"black"}
      onChange={handleChange}
      _placeholder={{ color: "RGBA(0, 0, 0, 0.80)" }}
      w={"90px"}
      size="xs"
      {...rest}
    >
      {Object.keys(TOP_CURRENCIES).map((currency) => (
        <option
          key={currency}
          value={currency}
          defaultValue={selectedCurrency}
        >
          {currency}
        </option>
      ))}
    </Select>
  );
};

export default CurrencySelector;
