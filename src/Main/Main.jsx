import Currency from "../Currency/Currency";
import CurrencyConverter from "../CurrencyConverter/CurrencyConverter";

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
  onBankChange
}) {
  return (
    <main className="container">
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
          onBankChange={onBankChange}
        />
        <button onClick={reverseCurrency}>Arrow</button>
        <Currency
          title="You receive"
          onCurrencyChange={onCurrencyChangeReceive}
          selectedCurrency={currencyReceive}
          disabledCurrency={currencyGive}
          sum={sumReceive}
          changeSum={changeReceive}
          banks={banks}
          onBankChange={onBankChange}
        />
      </CurrencyConverter>
    </main>
  );
}

export default Main;
