// Menu.jsx

const PlanetMenu = (props) => {
  return (
    <div className="planet-display__planet-menu planet-menu">
      <button
        className={`planet-menu__button button button--section-menu ${
          props.currentSection === 0 ? "selected" : ""
        }`}
        onClick={() => props.changeSection(0)}
      >
        <span className="planet-menu__button-number">01 </span>overview
      </button>
      <button
        className={`planet-menu__button button button--section-menu ${
          props.currentSection === 1 ? "selected" : ""
        }`}
        onClick={() => props.changeSection(1)}
      >
        <span className="planet-menu__button-number">02 </span>
        <span className="planet-menu__extra-text">internal </span>structure
      </button>
      <button
        className={`planet-menu__button button button--section-menu ${
          props.currentSection === 2 ? "selected" : ""
        }`}
        onClick={() => props.changeSection(2)}
      >
        <span className="planet-menu__button-number">03 </span>surface
        <span className="planet-menu__extra-text"> geology</span>
      </button>
    </div>
  );
};

export default PlanetMenu;
