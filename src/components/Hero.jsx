// Hero.jsx
import DataBox from "./DataBox";
import Menu from "./Menu";

const Hero = (props) => {
  return (
    <main className="hero">
      <Menu />
      <div className="hero__data-div">
        <DataBox />
        <DataBox />
        <DataBox />
      </div>
    </main>
  );
};

export default Hero;
