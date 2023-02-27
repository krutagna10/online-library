import "./HeaderNav.css";
import cartIcon from "../../assets/cart-outline.svg";
import personIcon from "../../assets/person-outline.svg";

const HeaderNav = ({ isNavigationVisible }) => {
  return (
    <nav className="header__nav" aria-label="Primary">
      <ul
        id="header__nav-list"
        className="header__nav-list flex flex--gap flex--align-center"
        data-visible={isNavigationVisible}
      >
        <li>
          <a className="header__nav-link header__nav-link--text" href="/">
            Home
          </a>
        </li>
        <li>
          <a className="header__nav-link header__nav-link--text" href="/">
            About
          </a>
        </li>
        <li>
          <a className="header__nav-link header__nav-link--text" href="/">
            Contact
          </a>
        </li>
        <li>
          <a className="header__nav-link header__nav-link--text" href="/">
            Books
          </a>
        </li>
        <li>
          <a className="header__nav-link header__nav-link--icon" href="/">
            <ion-icon src={cartIcon}></ion-icon>
          </a>
        </li>
        <li>
          <a className="header__nav-link header__nav-link--icon" href="/">
            <ion-icon src={personIcon}></ion-icon>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
