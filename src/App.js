// App.js
import { useState } from "react";

import Planets from "./data/data.json";
import Header from "./components/Header";
import PlanetDisplay from "./components/PlanetDisplay";

import "./css/App.css";

function App() {
  const [currentPlanet, setCurrentPlanet] = useState(2); // start on Earth
  const [menuOpen, setMenuOpen] = useState(false); // hamburger menu on mobile

  const toggleMenu = () => {
    setMenuOpen(menuOpen ? false : true);
  };

  const changePlanet = (index) => {
    setCurrentPlanet(index);
    setMenuOpen(false);
  };

  return (
    <div className="App">
      <Header
        planets={Planets}
        changePlanet={changePlanet}
        toggleMenu={toggleMenu}
        menuOpen={menuOpen}
      />
      <PlanetDisplay currentPlanet={Planets[currentPlanet]} />
    </div>
  );
}

export default App;
