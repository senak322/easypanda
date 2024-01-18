import { useState } from "react";
import "./CurrencyConverter.css";
import Currency from "../Currency/Currency";

function CurrencyConverter() {
  const [currencyGive, setCurrencyGive] = useState("RUB");
  const [currencyReceive, setCurrencyReceive] = useState("CNY");

  function reverseCurrency() {
    setCurrencyGive(currencyReceive);
    setCurrencyReceive(currencyGive);
  }

  return (
    <form>
      <Currency
        onCurrencyChange={setCurrencyGive}
        selectedCurrency={currencyGive}
        disabledCurrency={currencyReceive}
      />
      <button onClick={reverseCurrency}>Arrow</button>
      <Currency
        onCurrencyChange={setCurrencyReceive}
        selectedCurrency={currencyReceive}
        disabledCurrency={currencyGive}
      />
    </form>
  );
}

export default CurrencyConverter;
