// App.js
import { useState } from "react";

import Planets from "./data/data.json";
import Header from "./components/Header";
import PlanetDisplay from "./components/PlanetDisplay";

import "./css/App.css";

function App() {
  const [currentPlanet, setCurrentPlanet] = useState(2); // start on Earth

  const changePlanet = (index) => {
    if (index !== currentPlanet) {
      setCurrentPlanet(index);
    }
  };

  return (
    <div className="App">
      <Header planets={Planets} changePlanet={changePlanet} />
      <PlanetDisplay currentPlanet={Planets[currentPlanet]} />
    </div>
  );
}

export default App;
