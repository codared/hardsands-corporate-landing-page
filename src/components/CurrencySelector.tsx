import { Select, SelectProps } from "@chakra-ui/react";
import { CURRENCY_CODES, TOP_CURRENCIES } from "utils/currency";

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
      defaultValue={selectedCurrency || ""}
    >
      {Object.keys({ ...TOP_CURRENCIES }).map((currency) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
      {/* <option>-----------------</option>
      {Object.keys({ ...CURRENCY_CODES }).map((currency) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))} */}
    </Select>
  );
};

export default CurrencySelector;
