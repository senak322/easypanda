import { useCallback, useEffect, useState } from "react";
import "./Currency.css";
import CurrencyTitle from "../CurrencyTitle/CurrencyTitle";
import CurrencySelect from "../CurrencySelect/CurrencySelect";

function Currency({
  title,
  onCurrencyChange,
  selectedCurrency,
  disabledCurrency,
  sum,
  changeSum,
  banks,
  selectedBank,
  onBankChange,
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
      <div className="d-flex justify-content-between mb-3">
        {title === "You give" ? (
          <>
            <CurrencyTitle title={title} />
            <CurrencySelect
              selectedCurrency={selectedCurrency}
              onCurrencyChange={onCurrencyChange}
              allCurrencies={allCurrencies}
              disabledCurrency={disabledCurrency}
            />
          </>
        ) : (
          <>
            <CurrencySelect
              selectedCurrency={selectedCurrency}
              onCurrencyChange={onCurrencyChange}
              allCurrencies={allCurrencies}
              disabledCurrency={disabledCurrency}
            />
            <CurrencyTitle title={title} />
          </>
        )}
      </div>
      <div className="d-flex justify-content-between">
        <input
          type="number"
          value={sum}
          onChange={(e) => changeSum(e.target.value)}
        />
        <select
          value={selectedBank}
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
