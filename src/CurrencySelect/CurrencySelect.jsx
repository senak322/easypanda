import "./CurrencySelect.css";
import { Select } from "antd";

function CurrencySelect({
  selectedCurrency,
  onCurrencyChange,
  allCurrencies,
  disabledCurrency,
}) {
  return (
    <Select
      className="mx-3"
      value={selectedCurrency}
      onChange={onCurrencyChange}
      options={allCurrencies.map((currency) => ({
        disabled: currency === disabledCurrency,
        key: currency,
        label: currency,
        value: currency,
      }))}
    ></Select>
  );
}

export default CurrencySelect;
