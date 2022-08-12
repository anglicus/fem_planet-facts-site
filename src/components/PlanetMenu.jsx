// Menu.jsx

const PlanetMenu = (props) => {
  return (
    <div className="hero__planet-menu planet-menu">
      <button
        className="planet-menu__button button button--section-menu"
        onClick={() => props.changeSection(0)}
      >
        <span className="planet-menu__button-number">01</span>overview
      </button>
      <button
        className="planet-menu__button button button--section-menu"
        onClick={() => props.changeSection(1)}
      >
        <span className="planet-menu__button-number">02</span>internal structure
      </button>
      <button
        className="planet-menu__button button button--section-menu"
        onClick={() => props.changeSection(2)}
      >
        <span className="planet-menu__button-number">03</span>surface geology
      </button>
    </div>
  );
};

export default PlanetMenu;
