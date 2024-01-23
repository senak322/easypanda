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
  onReceiveBankChange
}) {
  return (
    <main className="main">
      <h1 className="text-center">Currency exchange</h1>
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
          onBankChange={onGiveBankChange}
        />
        <button onClick={reverseCurrency} className="main__arrow-btn"><SwapOutlined/></button>
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
        />
      </CurrencyConverter>
    </main>
  );
}

export default Main;
