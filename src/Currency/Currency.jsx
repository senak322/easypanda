import { useCallback, useEffect, useState } from "react";
import "./Currency.css";

function Currency({
  title,
  onCurrencyChange,
  selectedCurrency,
  disabledCurrency,
  sum,
  changeSum,
  banks,
  onBankChange
}) {
  const [correctBanks, setCorrectBanks] = useState([]);
  const allCurrencies = ["RUB", "CNY", "IDR", "GEL"];

  const chooseBanksForCountry = useCallback(() => {
    if (selectedCurrency === "RUB") {
      return banks.rub;
    }
    if (selectedCurrency === "CNY") {
      return banks.cny;
    }
    if (selectedCurrency === "IDR") {
        return banks.idr;
      }
      if (selectedCurrency === "GEL") {
        return banks.gel;
      }
  }, [selectedCurrency, banks]);

  useEffect(() => {
    const banks = chooseBanksForCountry();
    setCorrectBanks(banks);
  }, [chooseBanksForCountry]);

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
        //   value={bank}
          onChange={(e) => onBankChange(e.target.value)}
        >
          {correctBanks.map((bank) => (
            <option key={bank} value={bank}>
              {bank}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Currency;
