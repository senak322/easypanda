function Currency({
  title,
  onCurrencyChange,
  selectedCurrency,
  disabledCurrency,
}) {
  const allCurrencies = ["RUB", "CNY", "IDR", "GEL"];

  return (
    <div>
      <div>
        <h3>{title}</h3>
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
      </div>
    </div>
  );
}

export default Currency;
