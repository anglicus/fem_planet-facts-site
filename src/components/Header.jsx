// Header.jsx

const Header = (props) => {
  const menuItems = props.planets.map((planet, index) => {
    return (
      <button
        className="header__button button button--planet-menu"
        key={planet.name}
        aria-label={planet.name}
        onClick={() => props.changePlanet(index)}
      >
        {planet.name}
      </button>
    );
  });

  return (
    <header className="header">
      <h1 className="header__heading">the planets</h1>
      <div className="header__menu-links">{menuItems}</div>
    </header>
  );
};

export default Header;
