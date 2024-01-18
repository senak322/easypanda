import "./Currency.css";

function Currency({
  title,
  onCurrencyChange,
  selectedCurrency,
  disabledCurrency,
  sum,
  changeSum,
  banks
}) {
  const allCurrencies = ["RUB", "CNY", "IDR", "GEL"];
  const chooseBanksForCountry = () => {
    if(selectedCurrency === "RUB") {
        return banks.rub
    }
  }

  const correctBanks = chooseBanksForCountry()

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
        <input
          type="number"
          value={sum}
          onChange={(e) => changeSum(e.target.value)}
        />
        <select
        //   value={selectedBank}
        //   onChange={(e) => onBankChange(e.target.value)}
        >
          {correctBanks.map((bank) => (
            <option
              key={bank}
              value={bank}
              
            >
              {bank}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Currency;
