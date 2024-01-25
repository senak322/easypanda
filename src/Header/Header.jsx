import "./Header.css";
import logo from "../images/panda.png";
import { Select } from "antd";

function Header() {
  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <img className="header__logo" src={logo} alt="easypandamoney logo" />
          <h2 className="header__title">Easy Panda Money</h2>
        </div>
        <div className="header__container">
          <ul className="header__list">
            <li className="header__contact">email@email.com</li>
            <li className="header__contact">Написать в Telegram</li>
          </ul>
          <Select
            defaultValue={"ru"}
            options={[
              { value: "ru", label: "RU" },
              { value: "eng", label: "ENG" },
            ]}
          ></Select>
        </div>
      </header>
    </>
  );
}

export default Header;
