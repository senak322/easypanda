import "./Header.css";
import logo from "../images/panda.png";
import { Select } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { useWindowWidth } from "../hooks/useWindowWidth";
import tg from "../images/tg.svg"

function Header() {
  const windowWidth = useWindowWidth();

  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <img className="header__logo" src={logo} alt="easypandamoney logo" />
          <h2 className="header__title">Easy Panda Money</h2>
        </div>
        <div className="header__container">
          <ul className="header__list">
            {windowWidth <= 700 ? (
              <li className="header__contact">
                <MailOutlined className="header__contact_tg-img"/>
              </li>
            ) : (
              <li className="header__contact">email@email.com</li>
            )}
            {windowWidth <= 700 ? (
              <li className="header__contact">
                <img className="header__contact_tg-img" src={tg} alt="Написать в Telegram"/>
              </li>
            ) : (
              <li className="header__contact">Написать в Telegram</li>
            )}
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
