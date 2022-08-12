// Hero.jsx
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
    <main className="hero">
      <h2 className="heading heading--planet-name">
        {props.currentPlanet.name}
      </h2>
      <p>{props.currentPlanet[sections[currentSection]].content}</p>
      <a
        href={props.currentPlanet[sections[currentSection]].source}
        rel="noreferrer"
        target="_blank"
      >
        source : <span className="span-wikipedia">Wikipedia</span>
      </a>
      <PlanetMenu changeSection={changeSection} />
      <PlanetData currentPlanet={props.currentPlanet} />
    </main>
  );
};

export default PlanetDisplay;
