import "./CurrencySelect.css";

function CurrencySelect({selectedCurrency, onCurrencyChange, allCurrencies, disabledCurrency}) {
  return (
    <select
      value={selectedCurrency}
      onChange={(e) => onCurrencyChange(e.target.value)}
    >
      {allCurrencies.map((currency) => (
        <option
          key={currency}
          value={currency}
          disabled={disabledCurrency.includes(currency)}
        >
          {currency}
        </option>
      ))}
    </select>
  );
}

export default CurrencySelect;
