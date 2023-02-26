import HeaderNav from "../HeaderNav/HeaderNav";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container container flex flex--justify-space flex--align-center">
        <a href="/" className="header__heading-link">
          <h1 className="header__heading">library</h1>
        </a>
        <HeaderNav />
      </div>
    </header>
  );
};

export default Header;
