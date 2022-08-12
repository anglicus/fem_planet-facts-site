// Header.jsx

import iconChevron from "../assets/icon-chevron.svg";
import iconHamburger from "../assets/icon-hamburger.svg";

const Header = (props) => {
  const menuItems = props.planets.map((planet, index) => {
    return (
      <div className="header__menu-item" key={planet.name}>
        <span className={`header__menu-circle ${planet.name}`}></span>
        <button
          className="header__planet-button button button--planet-button"
          aria-label={planet.name}
          onClick={() => props.changePlanet(index)}
        >
          {planet.name}
        </button>
        <img className="header__menu-icon" src={iconChevron} alt="chevron" />
      </div>
    );
  });

  return (
    <header className="header">
      <h1 className="header__heading heading heading--the-planets">
        the planets
      </h1>
      <button
        className="header__menu-button button button--hamburger"
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
