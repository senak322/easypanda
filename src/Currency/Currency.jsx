import { useCallback, useEffect, useState } from "react";
import "./Currency.css";
import CurrencyTitle from "../CurrencyTitle/CurrencyTitle";
import CurrencySelect from "../CurrencySelect/CurrencySelect";
import { Select, Input } from "antd";
import { useWindowWidth } from "../hooks/useWindowWidth";

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
  setBank,
}) {
  const [correctBanks, setCorrectBanks] = useState([]);
  const allCurrencies = ["RUB", "CNY", "IDR", "GEL"];
  const windowWidth = useWindowWidth();

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

  const makeDefaultBank = useCallback(() => {
    if (selectedCurrency === "RUB") {
      return "sber";
    } else if (selectedCurrency === "CNY") {
      return "wechat";
    } else if (selectedCurrency === "IDR") {
      return "mega";
    } else if (selectedCurrency === "GEL") {
      return "bog";
    }
  }, [selectedCurrency]);

  useEffect(() => {
    const banks = chooseBanksForCountry();
    setCorrectBanks(banks);
  }, [chooseBanksForCountry, makeDefaultBank]);

  useEffect(() => {
    const defaultBankForState = makeDefaultBank();
    setBank(defaultBankForState);
  }, [selectedCurrency, makeDefaultBank, setBank]);

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
        ) : windowWidth <= 700 ? (
          <>
            <CurrencySelect
              selectedCurrency={selectedCurrency}
              onCurrencyChange={onCurrencyChange}
              allCurrencies={allCurrencies}
              disabledCurrency={disabledCurrency}
            />
            <CurrencyTitle title={title} />
          </>
        ) : (
          <>
            <CurrencyTitle title={title} />
            <CurrencySelect
              selectedCurrency={selectedCurrency}
              onCurrencyChange={onCurrencyChange}
              allCurrencies={allCurrencies}
              disabledCurrency={disabledCurrency}
            />
          </>
        )}
      </div>
      <div className="d-flex justify-content-between p-3 currency__container">
        <Input
          type="number"
          value={sum}
          onChange={(e) => changeSum(e.target.value)}
          prefix={
            selectedCurrency === "RUB"
              ? "₽"
              : selectedCurrency === "CNY"
              ? "¥"
              : selectedCurrency === "IDR"
              ? "Rp"
              : selectedCurrency === "GEL"
              ? "₾"
              : ""
          }
        />
        <Select
          value={selectedBank}
          onChange={onBankChange}
          options={correctBanks.map((bank) => ({
            key: bank,
            value: bank,
            label: bank,
          }))}
        ></Select>
      </div>
    </div>
  );
}

export default Currency;
