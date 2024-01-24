import { useState, useCallback } from "react";
import "./App.css";
import Header from "./Header/Header";
import Main from "./Main/Main";

function App() {
  const [currencyGive, setCurrencyGive] = useState("RUB");
  const [currencyReceive, setCurrencyReceive] = useState("CNY");
  const [sumGive, setSumGive] = useState(0);
  const [sumReceive, setSumReceive] = useState(0);
  const [bankGive, setBankGive] = useState("");
  const [bankReceive, setBankReceive] = useState("");

  const banks = {
    rub: ["sber", "sbp", "raif"],
    cny: ["wechat", "cash"],
    gel: ["bog"],
    idr: ["mega"],
  };

  const reverseCurrency = useCallback(() => {
    setCurrencyGive(currencyReceive);
    setCurrencyReceive(currencyGive);
    setSumGive(0);
    setSumReceive(0);
  }, [currencyReceive, currencyGive]);

  const getExchangeRate = useCallback((currencyFrom, currencyTo) => {
    // Здесь должна быть реализована логика получения обменного курса
    // Например, 1 RUB = 0,082011 CNY
    if (currencyFrom === "RUB" && currencyTo === "CNY") {
      return 0.082011;
    }
    // Обратный курс
    if (currencyFrom === "CNY" && currencyTo === "RUB") {
      return 12.19;
    }
    return 1;
  }, []);

  const changeGive = useCallback(
    (value) => {
      setSumGive(value);
      const rate = getExchangeRate(currencyGive, currencyReceive);
      setSumReceive(value * 1.15 * rate);
    },
    [currencyGive, currencyReceive, getExchangeRate]
  );

  const changeReceive = useCallback(
    (value) => {
      setSumReceive(value);
      const rate = getExchangeRate(currencyReceive, currencyGive);
      setSumGive(value * 1.15 * rate);
    },
    [currencyGive, currencyReceive, getExchangeRate]
  );

  const onCurrencyChangeGive = useCallback((value) => {
    setSumGive(0);
    setSumReceive(0);
    setCurrencyGive(value);
  }, []);

  const onCurrencyChangeReceive = useCallback((value) => {
    setCurrencyReceive(value);
  }, []);

  const onGiveBankChange = useCallback((value) => {
    console.log(value);
    setBankGive(value);
  }, []);

  const onReceiveBankChange = useCallback((value) => {
    console.log(value);
    setBankReceive(value);
  }, []);

  return (
    <div className="App">
      <Header />
      <Main
        setCurrencyGive={setCurrencyGive}
        currencyGive={currencyGive}
        currencyReceive={currencyReceive}
        sumGive={sumGive}
        sumReceive={sumReceive}
        changeGive={changeGive}
        changeReceive={changeReceive}
        reverseCurrency={reverseCurrency}
        setCurrencyReceive={setCurrencyReceive}
        onCurrencyChangeGive={onCurrencyChangeGive}
        onCurrencyChangeReceive={onCurrencyChangeReceive}
        banks={banks}
        bankGive={bankGive}
        bankReceive={bankReceive}
        onGiveBankChange={onGiveBankChange}
        onReceiveBankChange={onReceiveBankChange}
      />
    </div>
  );
}

export default App;
