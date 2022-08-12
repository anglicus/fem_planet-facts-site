// Header.jsx

import iconChevron from "../assets/icon-chevron.svg";
import iconHamburger from "../assets/icon-hamburger.svg";

const Header = (props) => {
  const menuItems = props.planets.map((planet, index) => {
    return (
      <button
        className="header__planet-button header__menu-item button button--planet-button"
        aria-label={planet.name}
        key={planet.name}
        onClick={() => props.changePlanet(index)}
      >
        <span
          className={`header__menu-circle color-class-${planet.name}`}
        ></span>
        <span className="header__button-label">{planet.name}</span>
        <img className="header__menu-icon" src={iconChevron} alt="chevron" />
      </button>
    );
  });

  return (
    <header className="header">
      <h1 className="header__heading heading heading--the-planets">
        the planets
      </h1>
      <button
        className="header__menu-button button button--hamburger"
        aria-label="menu"
        onClick={props.toggleMenu}
      >
        <img
          className="header__hamburger-icon"
          src={iconHamburger}
          alt="hamburger icon"
        />
      </button>
      <div className={`header__menu-section ${props.menuOpen ? "open" : ""}`}>
        {menuItems}
      </div>
    </header>
  );
};

export default Header;
