// PlanetDisplay.jsx
import { useState } from "react";

import PlanetMenu from "./PlanetMenu";
import PlanetData from "./PlanetData";
const sections = ["overview", "structure", "geology"];

const PlanetDisplay = (props) => {
  const [currentSection, setCurrentSection] = useState(0);

  const changeSection = (index) => {
    setCurrentSection(index);
  };

  return (
    <main className="planet-display">
      <div className="planet-display__image-div">
        <img
          className={`planet-display__image image-planet ${
            currentSection === 1 ? "hide" : "show"
          }`}
          src={props.currentPlanet.images["planet"]}
          alt={props.currentPlanet.name + " planet"}
        />
        <img
          className={`planet-display__image image-internal ${
            currentSection === 1 ? "show" : "hide"
          }`}
          src={props.currentPlanet.images["internal"]}
          alt={props.currentPlanet.name + " interior"}
        />
        <img
          className={`planet-display__image image-geology ${
            currentSection === 2 ? "show" : "hide"
          }`}
          src={props.currentPlanet.images["geology"]}
          alt={props.currentPlanet.name + " surface geology"}
        />
      </div>
      <h2 className="planet-display__heading heading heading--planet-name">
        {props.currentPlanet.name}
      </h2>
      <p className="planet-display__content">
        {props.currentPlanet[sections[currentSection]].content}
      </p>
      <a
        href={props.currentPlanet[sections[currentSection]].source}
        rel="noreferrer"
        target="_blank"
      >
        source : <span className="span-wikipedia">Wikipedia</span>
      </a>
      <PlanetMenu
        changeSection={changeSection}
        currentSection={currentSection}
      />
      <PlanetData currentPlanet={props.currentPlanet} />
    </main>
  );
};

export default PlanetDisplay;
