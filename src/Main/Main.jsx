import "./Main.css"
import Currency from "../Currency/Currency";
import CurrencyConverter from "../CurrencyConverter/CurrencyConverter";
import { SwapOutlined } from "@ant-design/icons";

function Main({
  currencyGive,
  currencyReceive,
  sumGive,
  changeGive,
  reverseCurrency,
  sumReceive,
  changeReceive,
  onCurrencyChangeGive,
  onCurrencyChangeReceive,
  banks,
  bankGive,
  bankReceive,
  onGiveBankChange,
  onReceiveBankChange,
  setBankGive,
  setBankReceive
}) {
  return (
    <main className="main">
      <h1 className="main__header">Currency exchange</h1>
      <CurrencyConverter>
        <Currency
          title="You give"
          onCurrencyChange={onCurrencyChangeGive}
          selectedCurrency={currencyGive}
          disabledCurrency={currencyReceive}
          sum={sumGive}
          changeSum={changeGive}
          banks={banks}
          selectedBank={bankGive}
          onBankChange={onGiveBankChange}setBank={setBankGive}
          
        />
        <button onClick={reverseCurrency} className="main__arrow-btn" type="button"><SwapOutlined/></button>
        <Currency
          title="You receive"
          onCurrencyChange={onCurrencyChangeReceive}
          selectedCurrency={currencyReceive}
          disabledCurrency={currencyGive}
          sum={sumReceive}
          changeSum={changeReceive}
          banks={banks}
          selectedBank={bankReceive}
          onBankChange={onReceiveBankChange}
          setBank={setBankReceive}
        />
      </CurrencyConverter>
    </main>
  );
}

export default Main;
