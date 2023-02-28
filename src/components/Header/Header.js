import HeaderNav from "../HeaderNav/HeaderNav";
import Backdrop from "../UI/Backdrop/Backdrop";
import Container from "../UI/Container/Container";
import "./Header.css";
import { useEffect, useState } from "react";

const Header = () => {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileNavVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);
  }, []);

  const handleClick = () => {
    setIsMobileNavVisible((prevState) => !prevState);
  };

  return (
    <header className="header">
      <Container className="header__container flex flex--justify-space flex--align-center">
        <a href="/" className="header__heading-link">
          <h1 className="header__heading">library</h1>
        </a>
        {isMobileNavVisible && <Backdrop />}
        <button
          className="header__nav-toggle"
          aria-controls="header__nav-list"
          aria-expanded={isMobileNavVisible}
          onClick={handleClick}
        >
          <span className="visually-hidden">Menu</span>
        </button>
        <HeaderNav isMobileNavVisible={isMobileNavVisible} />
      </Container>
    </header>
  );
};

export default Header;
