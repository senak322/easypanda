function Currency({ title, onCurrencyChange, selectedCurrency, disabledCurrency }) {
  const allCurrencies = ["RUB", "CNY", "IDR", "GEL"];

  return (
    <div>
      <div>
        <h3>{title}</h3>
        {allCurrencies.map((currency) => (
          <label key={currency}>
            <input
              type="radio"
              value={currency}
              checked={selectedCurrency === currency}
              onChange={() => onCurrencyChange(currency)}
              disabled={disabledCurrency.includes(currency)}
            />
            {currency}
          </label>
        ))}
      </div>
    </div>
  );
}

export default Currency;
