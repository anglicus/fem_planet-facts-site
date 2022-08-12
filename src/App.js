// App.js
import { useState } from "react";

import Planets from "./data/data.json";
import Header from "./components/Header";
import PlanetDisplay from "./components/PlanetDisplay";

import "./css/App.css";

function App() {
  const [currentPlanet, setCurrentPlanet] = useState(2); // start on Earth
  const [menuOpen, setMenuOpen] = useState(false); // hamburger menu on mobile
  const [animate, setAnimate] = useState(false);
  const [previousPlanet, setPreviousPlanet] = useState(0);

  const toggleMenu = () => {
    setMenuOpen(menuOpen ? false : true);
  };

  const changePlanet = (index) => {
    if (index !== currentPlanet && !animate) {
      setPreviousPlanet(currentPlanet);
      setCurrentPlanet(index);
      setAnimate(true);
      setTimeout(() => {
        setAnimate(false);
      }, 2000);
      setMenuOpen(false);
    }
  };

  return (
    <div className="App">
      <Header
        planets={Planets}
        changePlanet={changePlanet}
        toggleMenu={toggleMenu}
        menuOpen={menuOpen}
      />
      <PlanetDisplay
        currentPlanet={Planets[currentPlanet]}
        previousPlanet={Planets[previousPlanet]}
        animate={animate}
      />
    </div>
  );
}

export default App;
