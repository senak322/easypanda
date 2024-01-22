import "./Header.css";
import logo from "../images/panda.png";

function Header() {
  return (
    <>
      <header className="header">
        <h2>Easy Panda Money</h2>
        <img className="header__logo" src={logo} alt="easypandamoney logo" />
        <div className="header__container">
          <ul className="header__list">
            <li className="header__contact fw-normal">email@email.com</li>
            <li className="header__contact fw-normal">Написать в Telegram</li>
          </ul>
          <select className="form-select" aria-label="Default select example">
            <option value={"ru"}>RU</option>
            <option value={"eng"}>ENG</option>
          </select>
        </div>
      </header>
      
    </>
  );
}

export default Header;
