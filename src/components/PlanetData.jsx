// PlanetData.jsx

import DataBox from "./DataBox";
const dataLabels = ["rotation", "revolution", "radius", "temperature"];

const PlanetData = (props) => {
  const dataBoxes = dataLabels.map((label) => {
    return (
      <DataBox
        label={label}
        value={props.currentPlanet[label]}
        key={props.currentPlanet.name + label}
      />
    );
  });

  return <div className="hero__planet-data planet-data">{dataBoxes}</div>;
};

export default PlanetData;
