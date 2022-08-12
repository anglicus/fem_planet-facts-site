// App.js
import { useState } from "react";

import Planets from "./data/data.json";
import Header from "./components/Header";
import PlanetDisplay from "./components/PlanetDisplay";

import "./css/App.css";

function App() {
  const [currentPlanet, setCurrentPlanet] = useState(2); // start on Earth
  const [menuOpen, setMenuOpen] = useState(false); // hamburger menu on mobile
  const [menuFade, setMenuFade] = useState(false); // fading out for hamburger menu
  const [previousPlanetFadeOut, setPreviousPlanetFadeOut] = useState(false); // animate planet going away
  const [newPlanetFadeIn, setNewPlanetFadeIn] = useState(true); // animate planet coming in
  const [previousPlanet, setPreviousPlanet] = useState(0); // only used when changing planets

  const toggleMenu = () => {
    if (menuOpen) {
      setMenuFade(true);
      setTimeout(() => {
        setMenuOpen(false);
        setMenuFade(false);
        document.getElementsByTagName("html")[0].style.overflow = "scroll";
      }, 1000);
    } else {
      setMenuOpen(true);
      document.getElementsByTagName("html")[0].style.overflow = "hidden";
    }
  };

  const changePlanet = (index) => {
    if (index !== currentPlanet && !previousPlanetFadeOut) {
      setPreviousPlanet(currentPlanet);
      setCurrentPlanet(index);
      setPreviousPlanetFadeOut(true);
      setNewPlanetFadeIn(false);
      setTimeout(() => {
        setPreviousPlanetFadeOut(false);
        setNewPlanetFadeIn(true);
        setTimeout(() => {
          setNewPlanetFadeIn(false);
        }, 1300);
      }, 1500);
      setMenuOpen(false);
      // if someone rotates their phone with the mobile menu open it will disappear
      // but toggleMenu will not trigger, leaving the scroll locked...
      // this line ensures that if they change planets it will unlock again
      document.getElementsByTagName("html")[0].style.overflow = "scroll";
    }
  };

  return (
    <div className="App">
      <Header
        planets={Planets}
        changePlanet={changePlanet}
        toggleMenu={toggleMenu}
        menuOpen={menuOpen}
        menuFade={menuFade}
      />
      <PlanetDisplay
        currentPlanet={Planets[currentPlanet]}
        previousPlanet={Planets[previousPlanet]}
        previousPlanetFadeOut={previousPlanetFadeOut}
        newPlanetFadeIn={newPlanetFadeIn}
      />
    </div>
  );
}

export default App;
