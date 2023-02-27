import HeaderNav from "../HeaderNav/HeaderNav";
import Backdrop from "../UI/Backdrop/Backdrop";
import "./Header.css";
import { useState } from "react";

const Header = () => {
  const [isNavigationVisible, setIsNavigationVisible] = useState(false);

  const handleClick = () => {
    setIsNavigationVisible((prevState) => !prevState);
  };

  return (
    <header className="header">
      <div className="header__container container flex flex--justify-space flex--align-center">
        <a href="/" className="header__heading-link">
          <h1 className="header__heading">library</h1>
        </a>
        {isNavigationVisible && <Backdrop />}
        <button
          className="header__nav-toggle"
          aria-controls="header__nav-list"
          aria-expanded={isNavigationVisible}
          onClick={handleClick}
        >
          <span className="visually-hidden">Menu</span>
        </button>
        <HeaderNav isNavigationVisible={isNavigationVisible} />
      </div>
    </header>
  );
};

export default Header;
