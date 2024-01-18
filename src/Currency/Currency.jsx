import "./Currency.css";

function Currency({
  title,
  onCurrencyChange,
  selectedCurrency,
  disabledCurrency,
  sum,
  changeSum,
}) {
  const allCurrencies = ["RUB", "CNY", "IDR", "GEL"];

  return (
    <div className="currency">
      <div className="d-flex">
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
      <div>
        <input type="number" value={sum} onChange={(e) => changeSum(e.target.value)} />
      </div>
    </div>
  );
}

export default Currency;
