// Menu.jsx

const PlanetMenu = (props) => {
  return (
    <div className="hero__menu menu">
      <button
        className="menu__button button button--menu"
        onClick={() => props.changeSection(0)}
      >
        <span className="menu__button-number">01</span>overview
      </button>
      <button
        className="menu__button button button--menu"
        onClick={() => props.changeSection(1)}
      >
        <span className="menu__button-number">02</span>internal structure
      </button>
      <button
        className="menu__button button button--menu"
        onClick={() => props.changeSection(2)}
      >
        <span className="menu__button-number">03</span>surface geology
      </button>
    </div>
  );
};

export default PlanetMenu;
