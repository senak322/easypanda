import "./Header.css";
import logo from "../images/panda.png";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="easypandamoney logo" />

      <ul className="header__container">
        <li className="header__contact">E-mail</li>
        <li className="header__contact">Telegram</li>
        <select>
          <option value="someOption">RU</option>
          <option value="otherOption">ENG</option>
        </select>
      </ul>
    </header>
  );
}

export default Header;
