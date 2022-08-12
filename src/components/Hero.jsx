// Hero.jsx
import { useState } from "react";

import PlanetMenu from "./PlanetMenu";
import PlanetData from "./PlanetData";
const sections = ["overview", "structure", "geology"];

const Hero = (props) => {
  const [currentSection, setCurrentSection] = useState(0);

  const changeSection = (index) => {
    setCurrentSection(index);
  };

  return (
    <main className="hero">
      <h1>{props.currentPlanet.name}</h1>
      <p>{props.currentPlanet[sections[currentSection]].content}</p>
      <a
        href={props.currentPlanet[sections[currentSection]].source}
        rel="noreferrer"
        target="_blank"
      >
        source
      </a>
      <PlanetMenu changeSection={changeSection} />
      <PlanetData currentPlanet={props.currentPlanet} />
    </main>
  );
};

export default Hero;
