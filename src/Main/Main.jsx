import Currency from "../Currency/Currency";
import CurrencyConverter from "../CurrencyConverter/CurrencyConverter";

function Main({
  setCurrencyGive,
  currencyGive,
  currencyReceive,
  sumGive,
  changeGive,
  reverseCurrency,
  setCurrencyReceive,
  sumReceive,
  changeReceive,
}) {
  return (
    <main className="container">
      <h1 className="text-center">Currency exchange</h1>
      <CurrencyConverter>
        <Currency
          title="You give"
          onCurrencyChange={setCurrencyGive}
          selectedCurrency={currencyGive}
          disabledCurrency={currencyReceive}
          sum={sumGive}
          changeSum={changeGive}
        />
        <button onClick={reverseCurrency}>Arrow</button>
        <Currency
          title="You receive"
          onCurrencyChange={setCurrencyReceive}
          selectedCurrency={currencyReceive}
          disabledCurrency={currencyGive}
          sum={sumReceive}
          changeSum={changeReceive}
        />
      </CurrencyConverter>
    </main>
  );
}

export default Main;
