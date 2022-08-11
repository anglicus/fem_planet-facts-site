// Header.jsx

const Header = (props) => {
  const menuItems = props.planets.map((planet) => {
    return (
      <li className="header__menu-item" key={planet.name}>
        {planet.name}
      </li>
    );
  });

  return (
    <header className="header">
      <h1 className="header__heading">the planets</h1>
      <ul className="header__menu-list">{menuItems}</ul>
    </header>
  );
};

export default Header;
