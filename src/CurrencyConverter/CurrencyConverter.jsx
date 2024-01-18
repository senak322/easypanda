import "./CurrencyConverter.css";

function CurrencyConverter({ children }) {
  return <form className="converter justify-content-between">{children}</form>;
}

export default CurrencyConverter;
