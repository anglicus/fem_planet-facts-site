// App.js
import { useState } from "react";

import Planets from "./data/data.json";
import Header from "./components/Header";
import Hero from "./components/Hero";

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
      <Hero currentPlanet={Planets[currentPlanet]} />
    </div>
  );
}

export default App;
