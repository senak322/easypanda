import Currency from "../Currency/Currency";
import CurrencyConverter from "../CurrencyConverter/CurrencyConverter"

function Main() {
    return (
        <main className="container">
            <h1 className="text-center">
            Currency exchange
            </h1>
            <CurrencyConverter>
                <Currency title={"You give"} name={"countrygive"}/>
                <p>Стрелочка</p>
                <Currency title={"You receive"} name={"countryrec"}/>
            </CurrencyConverter>
        </main>
    )
}

export default Main;