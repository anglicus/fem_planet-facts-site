// PlanetData.jsx

import DataBox from "./DataBox";
const dataInfo = [
  { index: "rotation", label: "rotation time" },
  { index: "revolution", label: "revolution time" },
  { index: "radius", label: "radius" },
  { index: "temperature", label: "average temp." },
];

const PlanetData = (props) => {
  const dataBoxes = dataInfo.map((info) => {
    return (
      <DataBox
        label={info.label}
        value={props.currentPlanet[info.index]}
        key={props.currentPlanet.name + info.index}
        previousPlanetFadeOut={props.previousPlanetFadeOut}
        newPlanetFadeIn={props.newPlanetFadeIn}
      />
    );
  });

  return (
    <div className="planet-display__planet-data planet-data">{dataBoxes}</div>
  );
};

export default PlanetData;
